//#region ../react/build/downloadDataUrl-DWF0xXIp.js
function e(e, t) {
	let n = /* @__PURE__ */ new Date(), r = (e) => String(e).padStart(2, "0"), i = `${n.getFullYear()}-${r(n.getMonth() + 1)}-${r(n.getDate())}T${r(n.getHours())}-${r(n.getMinutes())}`, a = document.createElement("a");
	a.href = e, a.download = `${i}_chart.${t}`, a.style.display = "none", document.body.appendChild(a), a.click(), document.body.removeChild(a);
}
//#endregion
export { e as t };

//# sourceMappingURL=downloadDataUrl-DWF0xXIp-B1lPap8q.js.map