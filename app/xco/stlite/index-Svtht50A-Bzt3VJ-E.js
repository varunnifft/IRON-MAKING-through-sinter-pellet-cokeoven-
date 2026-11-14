import { A as e, C as t, a as n, b as r, c as i, d as a, e as o, f as s, g as c, h as l, i as u, j as d, k as f, r as p } from "./DeckGlJsonChart-CLVJlwKN-BHRITpMo.js";
import { t as m } from "./expression-BRUWrVmQ-CS4wmc7i.js";
//#region ../react/build/index-Svtht50A.js
var h = "fn arithmetic_add(x: {TYPE}, y: {TYPE}) -> {TYPE} {\n  return x + y;\n}\n\nfn arithmetic_subtract(x: {TYPE}, y: {TYPE}) -> {TYPE} {\n  return x - y;\n}\n\nfn arithmetic_multiply(x: {TYPE}, y: {TYPE}) -> {TYPE} {\n  return x * y;\n}\n\nfn arithmetic_divide(x: {TYPE}, y: {TYPE}) -> {TYPE} {\n  return x / y;\n}\n\nfn arithmetic_tan(x: f32) -> f32 {\n  return tan_fp32(x);\n}\n", g = ({ inputs: t, output: n, target: r }) => {
	let o = n.type, c = a(o), l = d(o), u = t.namedInputs;
	return p({
		module: {
			name: "arithmetic",
			source: h,
			dependencies: [i]
		},
		inputs: u,
		output: n,
		operationType: o,
		outputBuffer: r,
		expression: (n) => m(t.expression, {
			operations: e,
			inputs: u,
			laneIndex: n,
			formatInput: (e) => `${e}[${n}]`,
			formatOutOfBoundsInput: (e) => u[e].size === 1 ? `${e}[0]` : l,
			formatLiteral: (e) => {
				let t = Array.isArray(e) ? e[n] ?? 0 : e;
				return `${c}(${s(o, t)})`;
			},
			formatCall: (e, t) => `${e}(${t.join(", ")})`
		})
	}), { success: !0 };
}, _ = "fn row_dot(x: array<{TYPE}, {X_LEN}>, y: array<{TYPE}, {Y_LEN}>) -> array<f32, 1> {\n  var sum = 0.0;\n  for (var i = 0u; i < {X_LEN}u; i = i + 1u) {\n    sum += f32(x[i]) * f32(y[i]);\n  }\n  return array<f32, 1>(sum);\n}\n", v = ({ inputs: e, output: t, target: n }) => (p({
	module: {
		name: "row_dot",
		source: _
	},
	inputs: e,
	output: t,
	operationType: "float32",
	outputBuffer: n
}), { success: !0 }), y = "fn equalAll(x: array<{TYPE}, {X_LEN}>, y: array<{TYPE}, {Y_LEN}>) -> array<u32, 1> {\n  var allEqual = 1u;\n  for (var i = 0u; i < {X_LEN}u; i = i + 1u) {\n    if (x[i] != y[i]) {\n      allEqual = 0u;\n      break;\n    }\n  }\n  return array<u32, 1>(allEqual);\n}\n", b = ({ inputs: e, output: t, target: n }) => (p({
	module: {
		name: "equalAll",
		source: y
	},
	inputs: e,
	output: t,
	operationType: e.x.type,
	outputBuffer: n
}), { success: !0 }), x = 64;
function S(e, t, n) {
	return `@group(0) @binding(${n}) var<storage, read> ${e}: array<${a(t.type)}>;`;
}
function C(e, t, n, r = e) {
	let i = a(n);
	if (t.isConstant) {
		let e = t.value;
		if (!e) throw Error(`Constant input ${t} is missing CPU values`);
		return `fn read_${r}(_sourceIndex: u32) -> array<${i}, ${t.size}> {
  return array<${i}, ${t.size}>(${Array.from({ length: t.size }, (t, n) => c(i, e[n] ?? 0)).join(", ")});
}`;
	}
	let o = t.stride / t.ValueType.BYTES_PER_ELEMENT, s = t.offset / t.ValueType.BYTES_PER_ELEMENT, l = a(t.type) === i ? "" : `${i}`;
	return `fn read_${r}(sourceIndex: u32) -> array<${i}, ${t.size}> {
  var value: array<${i}, ${t.size}>;
  let rowOffset = ${s}u + sourceIndex * ${o}u;
${Array.from({ length: t.size }, (t, n) => l ? `  value[${n}] = ${l}(${e}[rowOffset + ${n}u]);` : `  value[${n}] = ${e}[rowOffset + ${n}u];`).join("\n")}
  return value;
}`;
}
function w(e, t) {
	return C("sourceValues", e, t, "source_values");
}
function T(e, t) {
	return `@group(0) @binding(${t}) var<storage, read_write> result: array<${a(e.type)}>;`;
}
function E(e) {
	let t = e.stride / e.ValueType.BYTES_PER_ELEMENT, n = e.offset / e.ValueType.BYTES_PER_ELEMENT;
	return `fn write_result(rowIndex: u32, value: array<${a(e.type)}, ${e.size}>) {
  let rowOffset = ${n}u + rowIndex * ${t}u;
${Array.from({ length: e.size }, (e, t) => `  result[rowOffset + ${t}u] = value[${t}];`).join("\n")}
}`;
}
function D(e, t) {
	let n = d(e);
	return `fn zero_result() -> array<${a(e)}, ${t}> {
  var result: array<${a(e)}, ${t}>;
${Array.from({ length: t }, (e, t) => `  result[${t}] = ${n};`).join("\n")}
  return result;
}`;
}
var O = ({ inputs: e, output: t, target: i }) => {
	let { sourceValues: a } = e;
	if (a.length === 0) {
		let e = new t.ValueType(t.length * t.size);
		return i.write(e), {
			success: !0,
			value: e
		};
	}
	if (a.isConstant) {
		let e = a.value;
		if (!e) throw Error(`Constant input ${a} is missing CPU values`);
		let n = new t.ValueType(t.length * t.size);
		for (let r = 0; r < t.length; r++) {
			let t = e[r];
			n[r * 2] = t, n[r * 2 + 1] = t;
		}
		return i.write(n), {
			success: !0,
			value: n
		};
	}
	let o = [], s = a, c = "raw", l = a.length;
	try {
		for (;;) {
			let e = Math.ceil(l / x), a = t.length * e, u = e === 1 ? i : r.createOrReuse(i.device, a * t.stride);
			if (e > 1 && o.push(u), k({
				input: s,
				inputMode: c,
				inputGroupCount: l,
				channelCount: t.length,
				outputType: t.type,
				outputBuffer: u,
				outputLength: a,
				outputStride: t.stride,
				outputOffset: t.offset
			}), e === 1) break;
			s = new n({
				buffer: u,
				type: t.type,
				size: 2,
				length: a
			}), c = "partial", l = e;
		}
		return { success: !0 };
	} finally {
		for (let e of o) r.recycle(e);
	}
};
function k({ input: e, inputMode: r, inputGroupCount: i, channelCount: s, outputType: c, outputBuffer: l, outputLength: d, outputStride: f, outputOffset: p }) {
	let m = a(c), h = o(d, l.device.limits.maxComputeWorkgroupsPerDimension), g = new n({
		buffer: l,
		type: c,
		size: 2,
		length: d,
		stride: f,
		offset: p
	}), _ = `
${e.isConstant ? "" : S("sourceValues", e, 0)}
${w(e, c)}
${T(g, +!e.isConstant)}
${E(g)}
${A(r, c, s, i)}

var<workgroup> sharedMin: array<${m}, ${x}>;
var<workgroup> sharedMax: array<${m}, ${x}>;

@compute @workgroup_size(${x}) fn main(
  @builtin(workgroup_id) workgroupId: vec3<u32>,
  @builtin(local_invocation_id) localId: vec3<u32>
) {
  let outputRowIndex = ${u(h)};
  if (outputRowIndex >= ${d}u) {
    return;
  }

  let channelIndex = outputRowIndex % ${s}u;
  let outputGroupIndex = outputRowIndex / ${s}u;
  let inputGroupIndex = outputGroupIndex * ${x}u + localId.x;

  let result = extent_pass(channelIndex, inputGroupIndex);
  sharedMin[localId.x] = result[0];
  sharedMax[localId.x] = result[1];
  workgroupBarrier();

  var stride = ${Math.floor(x / 2)}u;
  loop {
    if (stride == 0u) {
      break;
    }
    if (localId.x < stride) {
      let compareIndex = localId.x + stride;
      if (sharedMin[compareIndex] < sharedMin[localId.x]) {
        sharedMin[localId.x] = sharedMin[compareIndex];
      }
      if (sharedMax[compareIndex] > sharedMax[localId.x]) {
        sharedMax[localId.x] = sharedMax[compareIndex];
      }
    }
    workgroupBarrier();
    stride = stride / 2u;
  }

  if (localId.x == 0u) {
    write_result(outputRowIndex, array<${m}, 2>(sharedMin[0], sharedMax[0]));
  }
}
`, v = new t(l.device, {
		source: _,
		shaderLayout: { bindings: [...e.isConstant ? [] : [{
			name: "sourceValues",
			type: "storage",
			group: 0,
			location: 0
		}], {
			name: "result",
			type: "storage",
			group: 0,
			location: +!e.isConstant
		}] }
	}), y = { result: l };
	e.isConstant || (y.sourceValues = e.buffer), v.setBindings(y);
	let b = l.device.beginComputePass({});
	v.dispatch(b, h.x, h.y, h.z), b.end(), l.device.submit(), v.destroy();
}
function A(e, t, n, r) {
	let i = a(t), [o, s] = j(t);
	return e === "raw" ? `fn extent_pass(channelIndex: u32, inputGroupIndex: u32) -> array<${i}, 2> {
  var result: array<${i}, 2>;
  result[0] = ${o};
  result[1] = ${s};

  if (inputGroupIndex < ${r}u) {
    let value = read_source_values(inputGroupIndex);
    result[0] = value[channelIndex];
    result[1] = value[channelIndex];
  }

  return result;
}` : `fn extent_pass(channelIndex: u32, inputGroupIndex: u32) -> array<${i}, 2> {
  var result: array<${i}, 2>;
  result[0] = ${o};
  result[1] = ${s};

  if (inputGroupIndex < ${r}u) {
    let rowIndex = inputGroupIndex * ${n}u + channelIndex;
    let value = read_source_values(rowIndex);
    result[0] = value[0];
    result[1] = value[1];
  }

  return result;
}`;
}
function j(e) {
	switch (e) {
		case "uint32": return ["0xffffffffu", "0u"];
		case "sint32": return ["2147483647", "-2147483648"];
		case "float32": return ["3.402823e38", "-3.402823e38"];
		default: throw Error(`Unsupported WebGPU extent type for ${e}`);
	}
}
function M() {
	let e = new Uint16Array([255]);
	return new Uint8Array(e.buffer)[0] > 0;
}
var N = `const LE: bool = ${M() ? "true" : "false"};
const F32_NAN: u32 = 0xffffffffu;
const F32_INF: u32 = 0x7f800000u;

fn roundShiftRight(value: u32, shift: i32) -> u32 {
  if (shift <= 0) {
    return value << u32(-shift);
  }

  if (shift >= 32) {
    if (shift == 32 && value > 0x80000000u) {
      return 1u;
    }
    return 0u;
  }

  let shiftU32 = u32(shift);
  let truncated = value >> shiftU32;
  let halfShift = 1u << u32(shift - 1);
  let remainder = value & ((1u << shiftU32) - 1u);
  if (remainder > halfShift || (remainder == halfShift && (truncated & 1u) == 1u)) {
    return truncated + 1u;
  }
  return truncated;
}

fn makeFloatImmediate(sign: u32, exponent: i32, mantissa: u32) -> u32 {
  return (sign << 31u) | (u32(exponent + 127) << 23u) | (mantissa & 0x7fffffu);
}

fn makeFloat(sign: u32, exponent: i32, significand: u32) -> u32 {
  if (significand == 0u) {
    return sign << 31u;
  }

  let leadingZeros = i32(countLeadingZeros(significand));
  var normalizedExponent = exponent + 31 - leadingZeros;

  if (normalizedExponent > 127) {
    return (sign << 31u) | F32_INF;
  }

  var mantissa: u32;
  if (normalizedExponent >= -126) {
    mantissa = roundShiftRight(significand, 8 - leadingZeros);
    if (mantissa >= 0x1000000u) {
      mantissa = mantissa >> 1u;
      normalizedExponent += 1;
      if (normalizedExponent > 127) {
        return (sign << 31u) | F32_INF;
      }
    }
    return makeFloatImmediate(sign, normalizedExponent, mantissa);
  }

  let subnormalShift = -149 - exponent;
  mantissa = roundShiftRight(significand, subnormalShift);
  if (mantissa >= 0x800000u) {
    return (sign << 31u) | (1u << 23u);
  }
  return (sign << 31u) | mantissa;
}

fn parseAsDouble(words: vec2<u32>) -> vec2<u32> {
  var d = words;
  if (LE) {
    d = d.yx;
  }

  let sign = (d.x >> 31u) & 1u;
  let exponentBits = (d.x >> 20u) & 0x7ffu;
  let exponent = i32(exponentBits) - 1023;
  let fractionHigh = d.x & 0xfffffu;
  let fractionLow = d.y;

  if (exponentBits == 0x7ffu) {
    if (fractionHigh == 0u && fractionLow == 0u) {
      return vec2<u32>((sign << 31u) | F32_INF, F32_NAN);
    }
    return vec2<u32>(F32_NAN);
  }

  if (exponentBits == 0u) {
    return vec2<u32>(sign << 31u);
  }

  if (exponent > 127) {
    return vec2<u32>((sign << 31u) | F32_INF, ((1u - sign) << 31u) | F32_INF);
  }

  let highSignificand = 0x800000u | (fractionHigh << 3u) | (fractionLow >> 29u);
  let lowSignificand = fractionLow & 0x1fffffffu;

  if (exponent < -126) {
    let highPart = makeFloat(sign, exponent - 23, highSignificand);
    let lowPart = makeFloat(sign, exponent - 52, lowSignificand);
    return vec2<u32>(highPart, lowPart);
  }

  let roundUp = lowSignificand > 0x10000000u ||
    (lowSignificand == 0x10000000u && (highSignificand & 1u) == 1u);

  var roundedSignificand = highSignificand + select(0u, 1u, roundUp);
  var highExponent = exponent;
  if (roundedSignificand == 0x1000000u) {
    roundedSignificand = 0x800000u;
    highExponent += 1;
  }

  if (highExponent > 127) {
    return vec2<u32>((sign << 31u) | F32_INF, ((1u - sign) << 31u) | F32_INF);
  }

  let highPart = makeFloatImmediate(sign, highExponent, roundedSignificand);

  var remainder = i32(lowSignificand);
  var lowSign = sign;
  if (roundUp) {
    remainder -= 0x20000000;
  }
  if (remainder < 0) {
    lowSign = 1u - sign;
    remainder = -remainder;
  }

  let lowPart = makeFloat(lowSign, exponent - 52, u32(remainder));
  return vec2<u32>(highPart, lowPart);
}

fn fround(x: array<u32, {X_LEN}>) -> array<f32, {RESULT_LEN}> {
  var result: array<f32, {RESULT_LEN}>;
  let n = {X_LEN}u / 2u;
  for (var i = 0u; i < n; i = i + 1u) {
    let parts = parseAsDouble(vec2<u32>(x[i * 2u], x[i * 2u + 1u]));
    result[i] = bitcast<f32>(parts.x);
    result[i + n] = bitcast<f32>(parts.y);
  }
  return result;
}
`, P = ({ inputs: e, output: t, target: n }) => (p({
	module: {
		name: "fround",
		source: N
	},
	inputs: e,
	output: t,
	operationType: "uint32",
	outputBuffer: n
}), { success: !0 }), F = async ({ inputs: e, output: n, target: r }) => {
	let { ids: i, sourceValues: s } = e, c = a(i.type), u = [];
	i.isConstant || u.push({
		name: "ids",
		input: i,
		index: u.length
	}), s.isConstant || u.push({
		name: "sourceValues",
		input: s,
		index: u.length
	});
	let d = o(Math.ceil(n.length / x), r.device.limits.maxComputeWorkgroupsPerDimension), f = `
${u.map(({ name: e, input: t, index: n }) => S(e, t, n)).join("\n")}
${I(i, c)}
${w(s, n.type)}
${T(n, u.length)}
${E(n)}
${D(n.type, n.size)}
${L(i.type, n.type, n.size, s.length)}

@compute @workgroup_size(${x}) fn main(
  @builtin(workgroup_id) workgroupId: vec3<u32>,
  @builtin(local_invocation_id) localId: vec3<u32>
) {
  let rowIndex = ${l(d, x)};
  if (rowIndex >= ${n.length}u) {
    return;
  }

  let idsValue = read_ids(rowIndex);
  let result = gather(idsValue);
  write_result(rowIndex, result);
}
`, p = new t(r.device, {
		source: f,
		shaderLayout: { bindings: [...u.map(({ name: e, index: t }) => ({
			name: e,
			type: "storage",
			group: 0,
			location: t
		})), {
			name: "result",
			type: "storage",
			group: 0,
			location: u.length
		}] }
	}), m = {};
	i.isConstant || (m.ids = i.buffer), s.isConstant || (m.sourceValues = s.buffer), m.result = r, p.setBindings(m);
	let h = r.device.beginComputePass({});
	return p.dispatch(h, d.x, d.y, d.z), h.end(), r.device.submit(), p.destroy(), { success: !0 };
};
function I(e, t) {
	if (e.isConstant) {
		let n = e.value;
		if (!n) throw Error(`Constant input ${e} is missing CPU values`);
		return `fn read_ids(_rowIndex: u32) -> ${t} {
  return ${c(t, n[0] ?? 0)};
}`;
	}
	let n = e.stride / e.ValueType.BYTES_PER_ELEMENT;
	return `fn read_ids(rowIndex: u32) -> ${t} {
  let rowOffset = ${e.offset / e.ValueType.BYTES_PER_ELEMENT}u + rowIndex * ${n}u;
  return ids[rowOffset];
}`;
}
function L(e, t, n, r) {
	let i = a(e);
	return `fn gather(idsValue: ${i}) -> array<${a(t)}, ${n}> {
  let sourceIndex = ${i === "u32" ? "i32(idsValue)" : i === "i32" ? "idsValue" : "i32(idsValue)"};
  if (sourceIndex < 0 || sourceIndex >= ${r}) {
    return zero_result();
  }
  return read_source_values(u32(sourceIndex));
}`;
}
var R = async ({ inputs: e, output: n, target: r }) => {
	let { segments: i } = e, a = i.isConstant ? [] : [{
		name: "segments",
		input: i,
		index: 0
	}], s = o(Math.ceil(n.length / x), r.device.limits.maxComputeWorkgroupsPerDimension), c = `
${a.map(({ name: e, input: t, index: n }) => S(e, t, n)).join("\n")}
${C("segments", i, "uint32")}
${T(n, a.length)}
${E(n)}
${z(i.length)}

@compute @workgroup_size(${x}) fn main(
  @builtin(workgroup_id) workgroupId: vec3<u32>,
  @builtin(local_invocation_id) localId: vec3<u32>
) {
  let rowIndex = ${l(s, x)};
  if (rowIndex >= ${n.length}u) {
    return;
  }

  let result = segmented_map(rowIndex);
  write_result(rowIndex, result);
}
`, u = new t(r.device, {
		source: c,
		shaderLayout: { bindings: [...a.map(({ name: e, index: t }) => ({
			name: e,
			type: "storage",
			group: 0,
			location: t
		})), {
			name: "result",
			type: "storage",
			group: 0,
			location: a.length
		}] }
	}), d = Object.fromEntries(a.map(({ name: e, input: t }) => [e, t.buffer]));
	d.result = r, u.setBindings(d);
	let f = r.device.beginComputePass({});
	return u.dispatch(f, s.x, s.y, s.z), f.end(), r.device.submit(), u.destroy(), { success: !0 };
};
function z(e) {
	return `fn segmented_map(vertexIndex: u32) -> array<u32, 2> {
  var low = 0i;
  var high = ${e}i;
  while (low < high) {
    let mid = low + (high - low) / 2i;
    let midStart = read_segments(u32(mid))[0];
    if (midStart <= vertexIndex) {
      low = mid + 1i;
    } else {
      high = mid;
    }
  }

  let segmentIndex = u32(max(low - 1i, 0i));
  let segmentStart = read_segments(segmentIndex)[0];
  return array<u32, 2>(segmentIndex, vertexIndex - segmentStart);
}`;
}
var B = "fn row_length(x: array<{TYPE}, {X_LEN}>) -> array<f32, 1> {\n  var sum = 0.0;\n  for (var i = 0u; i < {X_LEN}u; i = i + 1u) {\n    sum += f32(x[i]) * f32(x[i]);\n  }\n  return array<f32, 1>(sqrt(sum));\n}\n", V = ({ inputs: e, output: t, target: n }) => (p({
	module: {
		name: "row_length",
		source: B
	},
	inputs: e,
	output: t,
	operationType: "float32",
	outputBuffer: n
}), { success: !0 }), H = async ({ inputs: e, output: t, target: n }) => {
	let r = d(t.type);
	return p({
		module: {
			name: "select",
			source: "// inline expression select\n"
		},
		inputs: e,
		output: t,
		operationType: t.type,
		outputBuffer: n,
		expression: (t) => {
			let n = U("condition", e.condition, t, r), i = U("whenTrue", e.whenTrue, t, r);
			return `select(${U("whenFalse", e.whenFalse, t, r)}, ${i}, ${n} != ${r})`;
		}
	}), { success: !0 };
};
function U(e, t, n, r) {
	return n < t.size ? `${e}[${n}]` : t.size === 1 ? `${e}[0]` : r;
}
var W = 64, G = ({ inputs: e, output: n, target: r }) => {
	let i = o(Math.ceil(n.length / W), r.device.limits.maxComputeWorkgroupsPerDimension), a = `@group(0) @binding(0) var<storage, read_write> result: array<i32>;

@compute @workgroup_size(${W}) fn main(
  @builtin(workgroup_id) workgroupId: vec3<u32>,
  @builtin(local_invocation_id) localId: vec3<u32>
) {
  let rowIndex = ${l(i, W)};
  if (rowIndex >= ${n.length}u) {
    return;
  }

  let rowOffset = ${n.offset / n.ValueType.BYTES_PER_ELEMENT}u + rowIndex * ${n.stride / n.ValueType.BYTES_PER_ELEMENT}u;
  result[rowOffset] = ${e.start} + i32(rowIndex) * ${e.step};
}
`, s = new t(r.device, {
		source: a,
		shaderLayout: { bindings: [{
			name: "result",
			type: "storage",
			group: 0,
			location: 0
		}] }
	});
	s.setBindings({ result: r });
	let c = r.device.beginComputePass({});
	return s.dispatch(c, i.x, i.y, i.z), c.end(), r.device.submit(), s.destroy(), { success: !0 };
}, K = ({ inputs: e, output: t, target: n }) => {
	let { columns: r } = e;
	return p({
		module: {
			name: "swizzle",
			source: "// swizzle expression handled inline"
		},
		expression: (e) => `x[${r[e]}]`,
		inputs: { x: e.x },
		output: t,
		outputBuffer: n
	}), { success: !0 };
};
//#endregion
export { g as arithmetic, v as dot, b as equalAll, O as extent, P as fround, F as gather, f as interleave, V as length, R as segmentedMap, H as select, G as sequence, K as swizzle };

//# sourceMappingURL=index-Svtht50A-Bzt3VJ-E.js.map