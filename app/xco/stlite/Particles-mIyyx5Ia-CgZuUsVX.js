import { Di as e, ds as t, fr as n, ir as r, ms as i, us as a, za as o } from "./index-B1FrxEMd-BsPMjC5n.js";
import { t as s } from "./range-CdxqIeI4-DXvN35R3.js";
//#region ../react/build/Particles-mIyyx5Ia.js
var c = /* @__PURE__ */ i(t(), 1), l = /* @__PURE__ */ i(a(), 1), u = ({ children: e }) => {
	let t = (0, c.useContext)(n)?.();
	return t ? (0, l.createPortal)(e, t) : e;
}, d = /* @__PURE__ */ e("div", { target: "ecnfqzf0" })({
	name: "my9yfq",
	styles: "@media print{display:none;}"
}), f = (0, c.memo)(({ className: e, scriptRunId: t, numParticles: n, numParticleTypes: i, ParticleComponent: a }) => {
	let { resourceCrossOriginMode: l } = (0, c.useContext)(r), u = (0, c.useMemo)(() => s(n).map(() => Math.floor(Math.random() * i)), [n, i]);
	return /* @__PURE__ */ o.jsx(d, {
		className: e,
		"data-testid": e,
		children: u.map((e, n) => /* @__PURE__ */ o.jsx(a, {
			particleType: e,
			resourceCrossOriginMode: l
		}, t + n))
	});
});
//#endregion
export { f as n, u as t };

//# sourceMappingURL=Particles-mIyyx5Ia-CgZuUsVX.js.map