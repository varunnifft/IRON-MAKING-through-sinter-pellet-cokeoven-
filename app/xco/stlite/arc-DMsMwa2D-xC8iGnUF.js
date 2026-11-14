import { V as e, X as t, ay as n, bI as r, bK as i, bO as a, bZ as o, ba as s, bc as c, bk as l, d as u, e as d, o as f, r as p } from "./mermaid.core-iLj2gv8s-DM09IeU-.js";
//#region ../react/build/arc-DMsMwa2D.js
function m(e) {
	return e.innerRadius;
}
function h(e) {
	return e.outerRadius;
}
function g(e) {
	return e.startAngle;
}
function _(e) {
	return e.endAngle;
}
function v(e) {
	return e && e.padAngle;
}
function y(e, t, n, r, i, a, o, s) {
	var c = n - e, l = r - t, u = o - i, d = s - a, f = d * c - u * l;
	if (!(f * f < 1e-12)) return f = (u * (t - a) - d * (e - i)) / f, [e + f * c, t + f * l];
}
function b(e, t, n, r, a, o, c) {
	var l = e - n, u = t - r, d = (c ? o : -o) / i(l * l + u * u), f = d * u, p = -d * l, m = e + f, h = t + p, g = n + f, _ = r + p, v = (m + g) / 2, y = (h + _) / 2, b = g - m, x = _ - h, S = b * b + x * x, C = a - o, w = m * _ - g * h, T = (x < 0 ? -1 : 1) * i(s(0, C * C * S - w * w)), E = (w * x - b * T) / S, D = (-w * b - x * T) / S, O = (w * x + b * T) / S, k = (-w * b + x * T) / S, A = E - v, j = D - y, M = O - v, N = k - y;
	return A * A + j * j > M * M + N * N && (E = O, D = k), {
		cx: E,
		cy: D,
		x01: -f,
		y01: -p,
		x11: E * (a / C - 1),
		y11: D * (a / C - 1)
	};
}
function x() {
	var s = m, x = h, S = e(0), C = null, w = g, T = _, E = v, D = null, O = o(k);
	function k() {
		var e, o, m = +s.apply(this, arguments), h = +x.apply(this, arguments), g = w.apply(this, arguments) - n, _ = T.apply(this, arguments) - n, v = u(_ - g), k = _ > g;
		if (D ||= e = O(), h < m && (o = h, h = m, m = o), !(h > 1e-12)) D.moveTo(0, 0);
		else if (v > a - 1e-12) D.moveTo(h * t(g), h * r(g)), D.arc(0, 0, h, g, _, !k), m > 1e-12 && (D.moveTo(m * t(_), m * r(_)), D.arc(0, 0, m, _, g, k));
		else {
			var A = g, j = _, M = g, N = _, P = v, F = v, I = E.apply(this, arguments) / 2, L = I > 1e-12 && (C ? +C.apply(this, arguments) : i(m * m + h * h)), R = c(u(h - m) / 2, +S.apply(this, arguments)), z = R, B = R, V, H;
			if (L > 1e-12) {
				var U = f(L / m * r(I)), W = f(L / h * r(I));
				(P -= U * 2) > 1e-12 ? (U *= k ? 1 : -1, M += U, N -= U) : (P = 0, M = N = (g + _) / 2), (F -= W * 2) > 1e-12 ? (W *= k ? 1 : -1, A += W, j -= W) : (F = 0, A = j = (g + _) / 2);
			}
			var G = h * t(A), K = h * r(A), q = m * t(N), J = m * r(N);
			if (R > 1e-12) {
				var Y = h * t(j), X = h * r(j), Z = m * t(M), Q = m * r(M), $;
				if (v < l) {
					if ($ = y(G, K, Z, Q, Y, X, q, J)) {
						var ee = G - $[0], te = K - $[1], ne = Y - $[0], re = X - $[1], ie = 1 / r(d((ee * ne + te * re) / (i(ee * ee + te * te) * i(ne * ne + re * re))) / 2), ae = i($[0] * $[0] + $[1] * $[1]);
						z = c(R, (m - ae) / (ie - 1)), B = c(R, (h - ae) / (ie + 1));
					} else z = B = 0;
				}
			}
			F > 1e-12 ? B > 1e-12 ? (V = b(Z, Q, G, K, h, B, k), H = b(Y, X, q, J, h, B, k), D.moveTo(V.cx + V.x01, V.cy + V.y01), B < R ? D.arc(V.cx, V.cy, B, p(V.y01, V.x01), p(H.y01, H.x01), !k) : (D.arc(V.cx, V.cy, B, p(V.y01, V.x01), p(V.y11, V.x11), !k), D.arc(0, 0, h, p(V.cy + V.y11, V.cx + V.x11), p(H.cy + H.y11, H.cx + H.x11), !k), D.arc(H.cx, H.cy, B, p(H.y11, H.x11), p(H.y01, H.x01), !k))) : (D.moveTo(G, K), D.arc(0, 0, h, A, j, !k)) : D.moveTo(G, K), !(m > 1e-12) || !(P > 1e-12) ? D.lineTo(q, J) : z > 1e-12 ? (V = b(q, J, Y, X, m, -z, k), H = b(G, K, Z, Q, m, -z, k), D.lineTo(V.cx + V.x01, V.cy + V.y01), z < R ? D.arc(V.cx, V.cy, z, p(V.y01, V.x01), p(H.y01, H.x01), !k) : (D.arc(V.cx, V.cy, z, p(V.y01, V.x01), p(V.y11, V.x11), !k), D.arc(0, 0, m, p(V.cy + V.y11, V.cx + V.x11), p(H.cy + H.y11, H.cx + H.x11), k), D.arc(H.cx, H.cy, z, p(H.y11, H.x11), p(H.y01, H.x01), !k))) : D.arc(0, 0, m, N, M, k);
		}
		if (D.closePath(), e) return D = null, e + "" || null;
	}
	return k.centroid = function() {
		var e = (+s.apply(this, arguments) + +x.apply(this, arguments)) / 2, n = (+w.apply(this, arguments) + +T.apply(this, arguments)) / 2 - l / 2;
		return [t(n) * e, r(n) * e];
	}, k.innerRadius = function(t) {
		return arguments.length ? (s = typeof t == "function" ? t : e(+t), k) : s;
	}, k.outerRadius = function(t) {
		return arguments.length ? (x = typeof t == "function" ? t : e(+t), k) : x;
	}, k.cornerRadius = function(t) {
		return arguments.length ? (S = typeof t == "function" ? t : e(+t), k) : S;
	}, k.padRadius = function(t) {
		return arguments.length ? (C = t == null ? null : typeof t == "function" ? t : e(+t), k) : C;
	}, k.startAngle = function(t) {
		return arguments.length ? (w = typeof t == "function" ? t : e(+t), k) : w;
	}, k.endAngle = function(t) {
		return arguments.length ? (T = typeof t == "function" ? t : e(+t), k) : T;
	}, k.padAngle = function(t) {
		return arguments.length ? (E = typeof t == "function" ? t : e(+t), k) : E;
	}, k.context = function(e) {
		return arguments.length ? (D = e ?? null, k) : D;
	}, k;
}
//#endregion
export { x as t };

//# sourceMappingURL=arc-DMsMwa2D-xC8iGnUF.js.map