import { A as e, B as t, G as n, M as r, T as i, a, b as o, c as s } from "./DeckGlJsonChart-CLVJlwKN-BHRITpMo.js";
import { t as c } from "./expression-BRUWrVmQ-CS4wmc7i.js";
//#region ../react/build/index-BvrEbuEi.js
function l(e, t, n = !1) {
	if (n) return t === 1 ? "float" : `vec${t}`;
	switch (e) {
		case "uint8":
		case "uint16":
		case "uint32": return t === 1 ? "uint" : `uvec${t}`;
		case "sint8":
		case "sint16":
		case "sint32": return t === 1 ? "int" : `ivec${t}`;
		default: return t === 1 ? "float" : `vec${t}`;
	}
}
function u(e, t, n = !1) {
	let r;
	if (n) switch (e) {
		case "uint8":
			r = "unorm8";
			break;
		case "sint8":
			r = "snorm8";
			break;
		case "uint16":
			r = "unorm16";
			break;
		case "sint16":
			r = "snorm16";
			break;
		case "float32":
			r = "float32";
			break;
		default: throw Error(`Unsupported normalized vertex format for ${e}`);
	}
	else r = e;
	return t === 1 ? r : t === 3 && !r.startsWith("float32") && !r.endsWith("32") ? `${r}x3-webgl` : `${r}x${t}`;
}
function d(e) {
	switch (e[0]) {
		case "u": return "0u";
		case "s": return "0";
		default: return "0.";
	}
}
function f(e, t) {
	switch (e) {
		case "uint8":
		case "uint16":
		case "uint32": return `${Math.trunc(t)}u`;
		case "sint8":
		case "sint16":
		case "sint32": return `${Math.trunc(t)}`;
		default: return Number.isInteger(t) ? `${t}.0` : `${t}`;
	}
}
function p(e) {
	switch (e) {
		case "uint8": return "r8uint";
		case "sint8": return "r8sint";
		case "uint16": return "r16uint";
		case "sint16": return "r16sint";
		case "uint32": return "r32uint";
		case "sint32": return "r32sint";
		case "float32": return "r32float";
		default: throw Error(`Unsupported WebGL gather texture format for ${e}`);
	}
}
function m(e) {
	switch (e) {
		case "uint32": return "usampler2D";
		case "sint32": return "isampler2D";
		case "float32": return "sampler2D";
		default: throw Error(`Unsupported WebGL gather sampler type for ${e}`);
	}
}
var h = "GPGPU Operation Counts", g = "Transform Runs", _ = new n();
function v({ module: e, elementWise: n = !1, expression: r, inputs: i, output: s, operationType: c = s.type, outputBuffer: u }) {
	let f = u.device, p = S("result", s.type, s.size, s.normalized), m = [e, p], v = [], C = {}, w = l(s.type, 1, s.normalized), T = l(c, 1, s.normalized), E = "", D = null, O = {
		TYPE: T,
		RESULT_LEN: s.size.toString()
	}, k = y(i);
	for (let [e, t] of k) m.push(b(e, t.type, t.size, t.normalized, c)), v.push(x(e, t)), t instanceof a ? C[e] = t.buffer : (D ||= o.createOrReuse(f, u.byteLength), C[e] = D), E += `TYPE ${e}[${t.size}]; get_${e}(${e});
`, O[`${e.toUpperCase()}_LEN`] = t.size.toString();
	let A = "";
	if (r) for (let e = 0; e < s.size; e++) A += `result[${e}]=${r(e)};
`;
	else if (n) for (let t = 0; t < s.size; t++) {
		let n = d(T), r = k.map(([e, r]) => t < r.size ? `${e}[${t}]` : n);
		A += `result[${t}]=${e.name}(${r.join(", ")});
`;
	}
	else A = `${e.name}(${k.map(([e]) => e).join(", ")}, result);`;
	let j = `#version 300 es

void main() {
${E}
${w} result[${s.size}];
${A}
set_result(result);
}
  `, M = new t(f, {
		vs: j,
		shaderAssembler: _,
		defines: O,
		modules: m,
		bufferLayout: v,
		vertexCount: 1,
		instanceCount: s.length,
		attributes: C,
		feedbackBufferMode: "interleaved",
		outputs: p.varyings
	});
	f.statsManager.getStats(h).get(g).incrementCount(), M.run({
		inputBuffers: C,
		outputBuffers: { [p.varyings[0]]: s.offset === 0 ? u : {
			buffer: u,
			byteOffset: s.offset,
			byteLength: s.byteLength
		} }
	}), D && o.recycle(D);
}
function y(e) {
	return Array.isArray(e) ? e.map((e, t) => [`x${t}`, e]) : Object.entries(e);
}
function b(e, t, n, r = !1, i = t) {
	let a = "", o = "";
	for (let s = 0; s < n; s += 4) {
		let c = Math.min(n - s, 4), u = l(t, c, r);
		a += `in ${u} a${e}_${s};
`;
		for (let n = 0; n < c; n++) {
			let a = `a${e}_${s}`;
			c > 1 && (a = `${a}[${n}]`), (r || t !== i) && (a = `TYPE(${a})`), o += `v[${s + n}]=${a};
`;
		}
	}
	return {
		name: e,
		vs: `
${a}
void get_${e}(out TYPE v[${n}]) {
  ${o}
}
`
	};
}
function x(e, t) {
	let n = {
		name: e,
		stepMode: t.isConstant ? "vertex" : "instance",
		byteStride: t.stride,
		attributes: []
	};
	for (let r = 0; r < t.size; r += 4) {
		let i = Math.min(t.size - r, 4);
		n.attributes.push({
			attribute: `a${e}_${r}`,
			format: u(t.type, i, t.normalized),
			byteOffset: t.offset + t.ValueType.BYTES_PER_ELEMENT * r
		});
	}
	return n;
}
function S(e, t, n, r = !1) {
	let i = [], a = l(t, 1, r), o = "", s = "";
	for (let a = 0; a < n; a += 4) {
		let c = Math.min(n - a, 4), u = l(t, c, r);
		i.push(`${e}_${a}`), o += `flat out ${u} ${e}_${a};
`;
		let d = Array.from({ length: c }, (e, t) => a + t);
		s += `${e}_${a} = ${u}(${d.map((e) => `v[${e}]`).join(",")});
`;
	}
	return {
		name: e,
		varyings: i,
		vs: `
${o}
void set_${e}(in ${a} v[${n}]) {
  ${s}
}
`
	};
}
var C = "TYPE arithmetic_add(TYPE x, TYPE y) {\n  return x + y;\n}\n\nTYPE arithmetic_subtract(TYPE x, TYPE y) {\n  return x - y;\n}\n\nTYPE arithmetic_multiply(TYPE x, TYPE y) {\n  return x * y;\n}\n\nTYPE arithmetic_divide(TYPE x, TYPE y) {\n  return x / y;\n}\n\nfloat arithmetic_tan(float x) {\n  return tan_fp32(x);\n}\n", w = ({ inputs: t, output: n, target: r }) => {
	let i = n.type, a = l(i, 1, n.normalized), o = d(a), u = t.namedInputs;
	return v({
		module: {
			name: "arithmetic",
			dependencies: [s],
			vs: C
		},
		inputs: u,
		output: n,
		operationType: i,
		outputBuffer: r,
		expression: (n) => c(t.expression, {
			operations: e,
			inputs: u,
			laneIndex: n,
			formatInput: (e) => `${e}[${n}]`,
			formatOutOfBoundsInput: (e) => u[e].size === 1 ? `${e}[0]` : o,
			formatLiteral: (e) => {
				let t = Array.isArray(e) ? e[n] ?? 0 : e;
				return `${a}(${f(i, t)})`;
			},
			formatCall: (e, t) => `${e}(${t.join(", ")})`
		})
	}), { success: !0 };
}, T = "GPGPU Operation Counts", E = "Transform Runs", D = ({ inputs: e, output: t, target: n }) => {
	let { sourceValues: s } = e, c = n.device;
	if (s.length === 0) {
		let e = new t.ValueType(t.length * t.size);
		return n.write(e), {
			success: !0,
			value: e
		};
	}
	if (s.isConstant) {
		let e = s.value, r = new t.ValueType(t.length * t.size);
		for (let n = 0; n < t.length; n++) {
			let t = e[n];
			r[n * 2] = t, r[n * 2 + 1] = t;
		}
		return n.write(r), {
			success: !0,
			value: r
		};
	}
	let l = c.createTexture({
		width: 1,
		height: t.length,
		format: "rg32float",
		usage: i.RENDER | i.COPY_SRC | i.COPY_DST
	}), u = c.createFramebuffer({ colorAttachments: [l] }), d = new r(c, {
		vs: "#version 300 es\n\nflat out float extent_value;\n\nvoid main() {\n  float sourceValues[SOURCE_VALUES_LEN];\n  get_sourceValues(sourceValues);\n  extent_value = sourceValues[gl_VertexID];\n\n  float y = (float(gl_VertexID) + 0.5) / float(CHANNEL_COUNT) * 2.0 - 1.0;\n  gl_Position = vec4(0.0, y, 0.0, 1.0);\n  gl_PointSize = 1.0;\n}\n  ",
		fs: "#version 300 es\n\nprecision highp float;\n\nflat in float extent_value;\nout vec2 fragColor;\n\nvoid main() {\n  fragColor = vec2(-extent_value, extent_value);\n}\n  ",
		topology: "point-list",
		parameters: {
			depthCompare: "always",
			blend: !0,
			blendColorSrcFactor: "one",
			blendColorDstFactor: "one",
			blendColorOperation: "max",
			blendAlphaSrcFactor: "one",
			blendAlphaDstFactor: "one",
			blendAlphaOperation: "max"
		},
		modules: [b("sourceValues", s.type, s.size, s.normalized)],
		defines: {
			TYPE: "float",
			SOURCE_VALUES_LEN: s.size.toString(),
			CHANNEL_COUNT: t.length.toString()
		},
		attributes: { sourceValues: s.buffer },
		bufferLayout: [x("sourceValues", s)],
		instanceCount: s.length,
		vertexCount: t.length,
		disableWarnings: !0
	}), f = o.createOrReuse(c, t.byteLength);
	try {
		let e = c.beginRenderPass({
			framebuffer: u,
			parameters: { viewport: [
				0,
				0,
				1,
				t.length
			] },
			clearColor: [
				-O,
				-O,
				0,
				0
			],
			clearDepth: !1,
			clearStencil: !1
		});
		c.statsManager.getStats(T).get(E).incrementCount(), d.draw(e), e.end();
		let r = c.createCommandEncoder();
		return r.copyTextureToBuffer({
			sourceTexture: l,
			width: 1,
			height: t.length,
			destinationBuffer: f,
			byteOffset: 0,
			bytesPerRow: 8
		}), c.submit(r.finish()), w({
			device: c,
			inputs: {
				expression: {
					kind: "call",
					op: "multiply",
					args: [{
						kind: "input",
						name: "x"
					}, {
						kind: "literal",
						value: [-1, 1]
					}]
				},
				namedInputs: { x: new a({
					buffer: f,
					size: 2,
					type: "float32",
					length: t.length
				}) }
			},
			output: t,
			target: n
		});
	} finally {
		d.destroy(), o.recycle(f), u.destroy(), l.destroy();
	}
}, O = 3e38, k = ({ inputs: e, output: t, target: n }) => {
	let r = e.map((e, t) => [`x${t}`, e]);
	A(n.device.limits.maxVertexAttributes, r), j(n.device.limits.maxInterStageShaderVariables, t);
	let i = r.map(([e, t]) => `in TYPE ${e}[${t.size}]`).join(", "), a = 0;
	return v({
		module: {
			name: "interleave",
			vs: `void interleave(${i}, out TYPE result[RESULT_LEN]) {
${r.map(([e, t]) => {
				let n = Array.from({ length: t.size }, (t, n) => `  result[${a + n}] = ${e}[${n}];`).join("\n");
				return a += t.size, n;
			}).join("\n")}
}
`
		},
		inputs: e,
		output: t,
		outputBuffer: n
	}), { success: !0 };
};
function A(e, t) {
	let n = t.reduce((e, [, t]) => e + Math.ceil(t.size / 4), 0);
	if (n > e) throw Error(`interleave() requires ${n} vertex attributes, exceeding device limit ${e}`);
}
function j(e, t) {
	if (t.size > e) throw Error(`interleave() output size ${t.size} exceeds device inter-stage component limit ${e}`);
}
function M() {
	let e = new Uint16Array([255]);
	return new Uint8Array(e.buffer)[0] > 0;
}
var N = `#define LE ${+!!M()}
const uint F32_NAN = 0xffffffffu;
const uint F32_INF = 0x7f800000u;

// Find first set bit using binary search
// https://en.wikipedia.org/wiki/Find_first_set#CLZ
int countLeadingZeros(uint a) {
  if (a == 0u) return 32;
  int n = 0;
  if ((a & 0xffff0000u) == 0u) { n += 16; a = a << 16; }
  if ((a & 0xff000000u) == 0u) { n += 8;  a = a << 8;  }
  if ((a & 0xf0000000u) == 0u) { n += 4;  a = a << 4;  }
  if ((a & 0xc0000000u) == 0u) { n += 2;  a = a << 2;  }
  if ((a & 0x80000000u) == 0u) return n + 1;
  return n;
}

uint roundShiftRight(uint value, int shift) {
  if (shift <= 0) {
    return value << (-shift);
  }

  if (shift >= 32) {
    if (shift == 32 && value > 0x80000000u) {
      return 1u;
    }
    return 0u;
  }

  uint truncated = value >> shift;
  uint halfShift = 1u << (shift - 1);
  uint remainder = value & ((1u << shift) - 1u);
  if (remainder > halfShift || (remainder == halfShift && (truncated & 1u) == 1u)) {
    return truncated + 1u;
  }
  return truncated;
}

uint makeFloat_(uint sign, int exponent, uint mantissa) {
  return (sign << 31) | (uint(exponent + 127) << 23) | (mantissa & 0x7fffffu);
}

/**
 * Assemble a float32 in bit representation according to IEEE 754
 * https://en.wikipedia.org/wiki/Single-precision_floating-point_format
 */
uint makeFloat(uint sign, int exponent, uint significand) {
  if (significand == 0u) {
    return sign << 31;
  }

  // Remove any extra leading zeros for better precision
  int lead_zeros = countLeadingZeros(significand);
  // Significand is encoded as 1.fraction
  int normalizedExponent = exponent + 31 - lead_zeros;

  if (normalizedExponent > 127) {
    return (sign << 31) | F32_INF;
  }

  uint mantissa;
  if (normalizedExponent >= -126) {
    mantissa = roundShiftRight(significand, 8 - lead_zeros);
    if (mantissa >= 0x1000000u) {
      mantissa >>= 1;
      normalizedExponent++;
      if (normalizedExponent > 127) {
        return (sign << 31) | F32_INF;
      }
    }
    return makeFloat_(sign, normalizedExponent, mantissa);
  }

  int subnormalShift = -149 - exponent;
  mantissa = roundShiftRight(significand, subnormalShift);
  if (mantissa >= 0x800000u) {
    return (sign << 31) | (1u << 23);
  }
  return (sign << 31) | mantissa;
}

/**
 * Parse 8-byte memory as a float64 number according to IEEE 754
 * https://en.wikipedia.org/wiki/Double-precision_floating-point_format
 * Returns 8-byte memory as 2 float32 numbers, consisting of
 * high part: fround(d)
 * low part: d - fround(d)
 */
uvec2 parseAsDouble(uvec2 d) {
  #if LE
  d = d.yx; // to big endian
  #endif

  uint sign = (d[0] >> 31) & 1u; // first bit
  uint exponentBits = (d[0] >> 20) & 0x7ffu;
  int exponent = int(exponentBits) - 1023; // next 11 bits
  uint fractionHigh = d[0] & 0xfffffu;
  uint fractionLow = d[1];

  if (exponentBits == 0x7ffu) {
    if (fractionHigh == 0u && fractionLow == 0u) {
      return uvec2((sign << 31) | F32_INF, F32_NAN);
    }
    return uvec2(F32_NAN);
  }
  
  if (exponentBits == 0u) {
    // All float64 subnormals are too small to survive a float32 split.
    return uvec2(sign << 31);
  }

  if (exponent > 127) {
    return uvec2((sign << 31) | F32_INF, ((1u - sign) << 31) | F32_INF);
  }

  uint hi_part;
  uint low_part;

  // float64 significand has 52 bits
  // float32 significand has 23 bits
  // The significand of the high part is the significand of the double, trimmed
  uint f_hi = 0x800000u | (fractionHigh << 3) | (fractionLow >> 29);
  uint f_low = fractionLow & 0x1fffffffu;

  if (exponent < -126) {
    // For tiny normals, the top 24 significand bits still contribute to the float32
    // high part, but they land in the float32 subnormal range.
    hi_part = makeFloat(sign, exponent - 23, f_hi);

    // The residual keeps the remaining 29 significand bits at the original double scale.
    low_part = makeFloat(sign, exponent - 52, f_low);
    return uvec2(hi_part, low_part);
  }

  bool roundUp = f_low > 0x10000000u || (f_low == 0x10000000u && (f_hi & 1u) == 1u);

  uint f_rounded = f_hi + (roundUp ? 1u : 0u);
  int exponent_hi = exponent;
  if (f_rounded == 0x1000000u) {
    f_rounded = 0x800000u;
    exponent_hi++;
  }

  if (exponent_hi > 127) {
    // Overflows float32 limit
    hi_part = (sign << 31) | F32_INF;
    low_part = ((1u - sign) << 31) | F32_INF;
    return uvec2(hi_part, low_part);
  }
  
  hi_part = makeFloat_(sign, exponent_hi, f_rounded);

  int remainder = int(f_low);
  uint sign_low = sign;
  if (roundUp) {
    remainder -= 0x20000000;
  }
  if (remainder < 0) {
    sign_low = 1u - sign;
    remainder = -remainder;
  }
  low_part = makeFloat(sign_low, exponent - 52, uint(remainder));

  return uvec2(hi_part, low_part);
}

void fround(in uint x[X_LEN], out float result[X_LEN]) {
  int n = X_LEN / 2;
  for (int i = 0; i < n; i++) {
    uvec2 f = parseAsDouble(uvec2(x[i * 2], x[i * 2 + 1]));
    result[i] = uintBitsToFloat(f.x);
    result[i + n] = uintBitsToFloat(f.y);
  }
}
`, P = ({ inputs: e, output: t, target: n }) => (v({
	module: {
		name: "fround",
		vs: N
	},
	inputs: e,
	output: t,
	operationType: "uint32",
	outputBuffer: n
}), { success: !0 });
function F(e, t, n) {
	let r = m(n), i = l(t, 1), a = Array.from({ length: e.size }, (e, t) => `  v[${t}] = ${i}(texelFetch(source_values_texture, ivec2(${t}, rowIndex), 0).r);`).join("\n");
	return {
		name: "source_values_texture",
		vs: `
uniform highp ${r} source_values_texture;
void read_source_values(int rowIndex, out TYPE v[${e.size}]) {
${a}
}
`
	};
}
function I(e, t, n) {
	let r = n.createTexture({
		width: Math.max(e.size, 1),
		height: e.length,
		format: p(t),
		usage: i.SAMPLE | i.COPY_DST
	});
	if (e.length === 0) return r;
	let a = n.createCommandEncoder();
	return a.copyBufferToTexture({
		sourceBuffer: e.buffer,
		destinationTexture: r,
		byteOffset: e.offset,
		bytesPerRow: e.stride,
		rowsPerImage: e.length,
		size: [
			e.size,
			e.length,
			1
		]
	}), n.submit(a.finish()), r;
}
var L = async ({ inputs: e, output: n, target: r }) => {
	let { ids: i, sourceValues: a } = e, o = r.device, s = S("result", n.type, n.size), c = l(i.type, 1), u = l(n.type, 1), d = n.type, f = I(a, d, o), p = `#version 300 es

void main() {
  INDEX_TYPE ids[1];
  get_ids(ids);
  TYPE result[${n.size}];
  gather(ids, result);
  set_result(result);
}
  `, m = new t(o, {
		vs: p,
		defines: {
			INDEX_TYPE: c,
			TYPE: u,
			RESULT_LEN: n.size.toString(),
			SOURCE_VALUES_ROWS: a.length.toString()
		},
		modules: [
			R(i, c),
			F(a, n.type, d),
			B(n.type),
			s
		],
		bindings: { source_values_texture: f },
		bufferLayout: [z(i)],
		vertexCount: 1,
		instanceCount: n.length,
		feedbackBufferMode: "interleaved",
		outputs: s.varyings
	});
	try {
		return m.run({
			inputBuffers: { ids: i.buffer },
			outputBuffers: { [s.varyings[0]]: r }
		}), { success: !0 };
	} finally {
		m.destroy(), f.destroy();
	}
};
function R(e, t) {
	let n = l(e.type, 1), r = "aids_0";
	return e.type !== V(t) && (r = `${t}(${r})`), {
		name: "ids",
		vs: `
in ${n} aids_0;
void get_ids(out INDEX_TYPE v[1]) {
  v[0] = ${r};
}
`
	};
}
function z(e) {
	return {
		name: "ids",
		stepMode: e.isConstant ? "vertex" : "instance",
		byteStride: e.stride,
		attributes: [{
			attribute: "aids_0",
			format: u(e.type, 1, e.normalized),
			byteOffset: e.offset
		}]
	};
}
function B(e) {
	return {
		name: "gather",
		vs: `
void zero_result(out TYPE result[RESULT_LEN]) {
  for (int i = 0; i < RESULT_LEN; i++) {
    result[i] = ${d(e)};
  }
}

void gather(in INDEX_TYPE ids[1], out TYPE result[RESULT_LEN]) {
  int sourceIndex = int(ids[0]);
  if (sourceIndex < 0 || sourceIndex >= SOURCE_VALUES_ROWS) {
    zero_result(result);
    return;
  }
  read_source_values(sourceIndex, result);
}
`
	};
}
function V(e) {
	switch (e) {
		case "uint": return "uint32";
		case "int": return "sint32";
		default: return "float32";
	}
}
var H = "void row_dot(in TYPE x[X_LEN], in TYPE y[Y_LEN], out float result[1]) {\n  float sum = 0.0;\n  for (int i = 0; i < X_LEN; i++) {\n    sum += float(x[i]) * float(y[i]);\n  }\n  result[0] = sum;\n}\n", U = ({ inputs: e, output: t, target: n }) => (v({
	module: {
		name: "row_dot",
		vs: H
	},
	inputs: e,
	output: t,
	operationType: "float32",
	outputBuffer: n
}), { success: !0 }), W = "void equalAll(in TYPE x[X_LEN], in TYPE y[Y_LEN], out uint result[1]) {\n  uint allEqual = uint(1);\n  for (int i = 0; i < X_LEN; i++) {\n    if (x[i] != y[i]) {\n      allEqual = uint(0);\n      break;\n    }\n  }\n  result[0] = allEqual;\n}\n", G = ({ inputs: e, output: t, target: n }) => (v({
	module: {
		name: "equalAll",
		vs: W
	},
	inputs: e,
	output: t,
	operationType: t.type === "uint32" ? e.x.type : t.type,
	outputBuffer: n
}), { success: !0 }), K = "void row_length(in TYPE x[X_LEN], out float result[1]) {\n  float sum = 0.0;\n  for (int i = 0; i < X_LEN; i++) {\n    sum += float(x[i]) * float(x[i]);\n  }\n  result[0] = sqrt(sum);\n}\n", q = ({ inputs: e, output: t, target: n }) => (v({
	module: {
		name: "row_length",
		vs: K
	},
	inputs: e,
	output: t,
	operationType: "float32",
	outputBuffer: n
}), { success: !0 }), J = async ({ inputs: e, output: n, target: r }) => {
	let { segments: i } = e, a = r.device, o = S("result", n.type, n.size), s = i.type, c = I(i, s, a), l = new t(a, {
		vs: "#version 300 es\n\nvoid main() {\n  TYPE result[RESULT_LEN];\n  segmentedMap(result);\n  set_result(result);\n}\n",
		defines: {
			TYPE: "uint",
			RESULT_LEN: n.size.toString(),
			SEGMENTS_LENGTH: i.length.toString()
		},
		modules: [
			F(i, n.type, s),
			Y(),
			o
		],
		bindings: { source_values_texture: c },
		vertexCount: 1,
		instanceCount: n.length,
		feedbackBufferMode: "interleaved",
		outputs: o.varyings
	});
	try {
		return l.run({ outputBuffers: { [o.varyings[0]]: r } }), { success: !0 };
	} finally {
		l.destroy(), c.destroy();
	}
};
function Y() {
	return {
		name: "segmentedMap",
		vs: "\nuint read_segment_start(int segmentIndex) {\n  TYPE value[1];\n  read_source_values(segmentIndex, value);\n  return uint(value[0]);\n}\n\nvoid segmentedMap(out TYPE result[RESULT_LEN]) {\n  uint vertexIndex = uint(gl_InstanceID);\n  int low = 0;\n  int high = SEGMENTS_LENGTH;\n\n  while (low < high) {\n    int mid = low + (high - low) / 2;\n    uint midStart = read_segment_start(mid);\n    if (midStart <= vertexIndex) {\n      low = mid + 1;\n    } else {\n      high = mid;\n    }\n  }\n\n  uint segmentIndex = uint(max(low - 1, 0));\n  uint segmentStart = read_segment_start(int(segmentIndex));\n  result[0] = segmentIndex;\n  result[1] = vertexIndex - segmentStart;\n}\n"
	};
}
var X = async ({ inputs: e, output: t, target: n }) => {
	let r = d(l(t.type, 1, t.normalized));
	return v({
		module: {
			name: "select",
			vs: ""
		},
		inputs: e,
		output: t,
		operationType: t.type,
		outputBuffer: n,
		expression: (t) => {
			let n = Z("condition", e.condition, t, r), i = Z("whenTrue", e.whenTrue, t, r), a = Z("whenFalse", e.whenFalse, t, r);
			return `(${n} != ${r} ? ${i} : ${a})`;
		}
	}), { success: !0 };
};
function Z(e, t, n, r) {
	return n < t.size ? `${e}[${n}]` : t.size === 1 ? `${e}[0]` : r;
}
var Q = ({ inputs: e, output: n, target: r }) => {
	let i = S("result", n.type, n.size), a = new t(r.device, {
		vs: "#version 300 es\n\nvoid main() {\n  int result[1];\n  result[0] = START + gl_InstanceID * STEP;\n  set_result(result);\n}\n",
		defines: {
			START: e.start.toString(),
			STEP: e.step.toString()
		},
		modules: [i],
		vertexCount: 1,
		instanceCount: n.length,
		feedbackBufferMode: "interleaved",
		outputs: i.varyings
	});
	try {
		return a.run({ outputBuffers: { [i.varyings[0]]: r } }), { success: !0 };
	} finally {
		a.destroy();
	}
}, $ = ({ inputs: e, output: t, target: n }) => {
	let { columns: r } = e;
	return v({
		module: {
			name: "swizzle",
			vs: "// swizzle expression handled inline"
		},
		expression: (e) => `x[${r[e]}]`,
		inputs: { x: e.x },
		output: t,
		outputBuffer: n
	}), { success: !0 };
};
//#endregion
export { w as arithmetic, U as dot, G as equalAll, D as extent, P as fround, L as gather, k as interleave, q as length, J as segmentedMap, X as select, Q as sequence, $ as swizzle };

//# sourceMappingURL=index-BvrEbuEi-DAgo_A85.js.map