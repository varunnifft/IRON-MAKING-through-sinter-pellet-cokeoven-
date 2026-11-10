# Replace the icon of a Windows PE (.exe) in place: rewrite RT_ICON blobs inside their existing slots.
import struct, sys, io
from PIL import Image
def rd(fmt, b, o): return struct.unpack_from(fmt, b, o)
def parse(b):
    pe = rd('<I', b, 0x3c)[0]; nsec = rd('<H', b, pe + 6)[0]; optsz = rd('<H', b, pe + 20)[0]; opt = pe + 24
    magic = rd('<H', b, opt)[0]; ddir = opt + (112 if magic == 0x20b else 96)
    rva_rsrc, sz = rd('<II', b, ddir + 8 * 2)
    secs = []; so = opt + optsz
    for i in range(nsec):
        name, vs, va, rs, rp = rd('<8sIIII', b, so + 40 * i); secs.append((va, vs, rp, rs))
    def off(rva):
        for va, vs, rp, rs in secs:
            if va <= rva < va + max(vs, rs): return rp + rva - va
        raise ValueError(rva)
    base = off(rva_rsrc)
    def dirents(o):
        nn, ni = rd('<HH', b, o + 12); out = []
        for i in range(nn + ni):
            nid, d = rd('<II', b, o + 16 + 8 * i); out.append((nid, d))
        return out
    res = {}
    for tid, td in dirents(base):
        if not td & 0x80000000: continue
        for nid, nd in dirents(base + (td & 0x7fffffff)):
            for lid, ld in dirents(base + (nd & 0x7fffffff)):
                if ld & 0x80000000: continue
                e = base + ld; drva, dsz = rd('<II', b, e)
                res.setdefault(tid, []).append({'id': nid, 'lang': lid, 'entry': e, 'off': off(drva), 'size': dsz})
    return res
def png_bytes(im, sz, maxlen):
    im2 = im.resize((sz, sz), Image.LANCZOS)
    for colors in (None, 256, 128, 64, 32):
        x = im2 if colors is None else im2.quantize(colors=colors, method=Image.FASTOCTREE, dither=Image.NONE).convert('RGBA') if False else (im2 if colors is None else im2.convert('RGBA').quantize(colors))
        bio = io.BytesIO(); x.save(bio, 'PNG', optimize=True); d = bio.getvalue()
        if len(d) <= maxlen: return d
    return None
def bmp_bytes(im, sz, maxlen):
    im2 = im.resize((sz, sz), Image.LANCZOS).convert('RGBA')
    px = im2.tobytes('raw', 'BGRA'); rows = [px[y * sz * 4:(y + 1) * sz * 4] for y in range(sz)][::-1]
    androw = ((sz + 31) // 32) * 4
    hdr = struct.pack('<IiiHHIIiiII', 40, sz, sz * 2, 1, 32, 0, sz * sz * 4 + androw * sz, 0, 0, 0, 0)
    d = hdr + b''.join(rows) + b'\0' * (androw * sz)
    return d if len(d) <= maxlen else None
def main(exe, png):
    b = bytearray(open(exe, 'rb').read()); res = parse(b); src = Image.open(png).convert('RGBA')
    icons = {r['id']: r for r in res.get(3, [])}
    for g in res.get(14, []):
        go = g['off']; _, _, cnt = rd('<HHH', b, go); done = 0
        for i in range(cnt):
            eo = go + 6 + 14 * i; w, h, cc, rz, pl, bc, bytes_, iid = rd('<BBBBHHIH', b, eo)
            sz = w or 256; r = icons.get(iid)
            if not r: continue
            old = bytes(b[r['off']:r['off'] + r['size']]); ispng = old[:8] == b'\x89PNG\r\n\x1a\n'
            d = (png_bytes(src, sz, r['size']) if (ispng or sz >= 64) else None) or bmp_bytes(src, sz, r['size']) or png_bytes(src, sz, r['size'])
            if d is None: print('skip', sz, r['size']); continue
            b[r['off']:r['off'] + len(d)] = d; b[r['off'] + len(d):r['off'] + r['size']] = b'\0' * (r['size'] - len(d))
            struct.pack_into('<I', b, r['entry'] + 4, len(d)); struct.pack_into('<I', b, eo + 8, len(d))
            struct.pack_into('<H', b, eo + 6, 32); struct.pack_into('<B', b, eo + 2, 0); done += 1
            print('icon', sz, 'png' if d[:4] == b'\x89PNG' else 'bmp', len(d), '/', r['size'])
    open(exe, 'wb').write(b)
if __name__ == '__main__': main(sys.argv[1], sys.argv[2])
