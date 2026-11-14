import { M as e, Nt as t, i as n } from "./index-B1FrxEMd-BsPMjC5n.js";
//#region ../react/build/useField-BVpgvwQT.js
function r(r) {
	let { description: i, errorMessage: a, isInvalid: o, validationState: s } = r, { labelProps: c, fieldProps: l } = n(r), u = e([
		!!i,
		!!a,
		o,
		s
	]), d = e([
		!!i,
		!!a,
		o,
		s
	]);
	return l = t(l, { "aria-describedby": [
		u,
		d,
		r["aria-describedby"]
	].filter(Boolean).join(" ") || void 0 }), {
		labelProps: c,
		fieldProps: l,
		descriptionProps: { id: u },
		errorMessageProps: { id: d }
	};
}
//#endregion
export { r as t };

//# sourceMappingURL=useField-BVpgvwQT-C8iZdscS.js.map