import { Cr as e } from "./index-B1FrxEMd-BsPMjC5n.js";
//#region ../react/build/createDownloadLinkElement-DiNIFj9z.js
var t = ({ enforceDownloadInNewTab: t, url: n, filename: r }) => {
	let i = document.createElement("a");
	i.setAttribute("href", n), t ? i.setAttribute("target", "_blank") : i.setAttribute("target", "_self");
	let a = e.DOWNLOAD_ASSETS_BASE_URL;
	return (!a || !n.startsWith(a) || window.navigator.userAgent.includes("Firefox")) && i.setAttribute("download", r), i;
};
//#endregion
export { t };

//# sourceMappingURL=createDownloadLinkElement-DiNIFj9z-DoAwXp-8.js.map