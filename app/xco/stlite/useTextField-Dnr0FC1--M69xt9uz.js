import { Gt as e, Nt as t, P as n, ds as r, g as i, ht as a, ms as o } from "./index-B1FrxEMd-BsPMjC5n.js";
import { i as s, r as c } from "./useFormValidation-Cnit8K9v-CsmEyeH7.js";
import { t as l } from "./useFormReset-BZ7HXuA_-BoM-dbzr.js";
import { t as u } from "./useField-BVpgvwQT-C8iZdscS.js";
//#region ../react/build/useTextField-Dnr0FC1-.js
var d = /* @__PURE__ */ o(r(), 1);
function f(r, o) {
	let { inputElementType: f = "input", isDisabled: p = !1, isRequired: m = !1, isReadOnly: h = !1, type: g = "text", validationBehavior: _ = "aria" } = r, [v, y] = n(r.value, r.defaultValue || "", r.onChange), { focusableProps: b } = e(r, o), x = c({
		...r,
		value: v
	}), { isInvalid: S, validationErrors: C, validationDetails: w } = x.displayValidation, { labelProps: T, fieldProps: E, descriptionProps: D, errorMessageProps: O } = u({
		...r,
		isInvalid: S,
		errorMessage: r.errorMessage || C
	}), k = a(r, { labelable: !0 }), A = {
		type: g,
		pattern: r.pattern
	}, [j] = (0, d.useState)(v);
	return l(o, r.defaultValue ?? j, y), s(r, x, o), {
		labelProps: T,
		inputProps: t(k, f === "input" ? A : void 0, {
			disabled: p,
			readOnly: h,
			required: m && _ === "native",
			"aria-required": m && _ === "aria" || void 0,
			"aria-invalid": S || void 0,
			"aria-errormessage": r["aria-errormessage"],
			"aria-activedescendant": r["aria-activedescendant"],
			"aria-autocomplete": r["aria-autocomplete"],
			"aria-haspopup": r["aria-haspopup"],
			"aria-controls": r["aria-controls"],
			value: v,
			onChange: (e) => y(i(e).value),
			autoComplete: r.autoComplete,
			autoCapitalize: r.autoCapitalize,
			maxLength: r.maxLength,
			minLength: r.minLength,
			name: r.name,
			form: r.form,
			placeholder: r.placeholder,
			inputMode: r.inputMode,
			autoCorrect: r.autoCorrect,
			spellCheck: r.spellCheck,
			enterKeyHint: r.enterKeyHint,
			onCopy: r.onCopy,
			onCut: r.onCut,
			onPaste: r.onPaste,
			onCompositionEnd: r.onCompositionEnd,
			onCompositionStart: r.onCompositionStart,
			onCompositionUpdate: r.onCompositionUpdate,
			onSelect: r.onSelect,
			onBeforeInput: r.onBeforeInput,
			onInput: r.onInput,
			...b,
			...E
		}),
		descriptionProps: D,
		errorMessageProps: O,
		isInvalid: S,
		validationErrors: C,
		validationDetails: w
	};
}
//#endregion
export { f as t };

//# sourceMappingURL=useTextField-Dnr0FC1--M69xt9uz.js.map