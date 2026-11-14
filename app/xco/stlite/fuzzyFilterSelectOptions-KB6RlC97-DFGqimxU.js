import { D as e, Dt as t, Ea as n, Et as r, Ft as i, J as a, L as o, La as s, Mt as c, N as l, Nt as u, P as d, Qt as f, Rt as p, St as m, To as h, Ut as g, Vt as _, Xt as v, Y as y, Yt as b, _a as x, _t as S, ai as C, an as w, b as T, cn as E, ct as D, ds as O, en as k, f as A, fa as j, fi as M, g as ee, gi as N, h as P, hn as F, ht as te, it as I, li as ne, lt as L, m as re, ms as R, mt as z, nt as B, oi as ie, on as ae, ot as oe, qt as se, ri as V, rt as H, si as U, st as ce, tt as W, un as G, us as K, va as q, w as le, wt as ue, xt as de, y as fe, z as J } from "./index-B1FrxEMd-BsPMjC5n.js";
import { a as pe, n as me, r as he, t as ge } from "./useFormValidation-Cnit8K9v-CsmEyeH7.js";
import { t as _e } from "./useFormReset-BZ7HXuA_-BoM-dbzr.js";
import { r as ve, t as ye } from "./Input-B1waFcLc-Ckq09rqm.js";
import { t as be } from "./useFilter-DrWea0bI-BL4UsXQg.js";
import { n as xe, o as Se } from "./useLoadMoreSentinel-7ezKn0I6-CVdwtTzs.js";
import { t as Ce } from "./Autocomplete-yBl0QZl8-BEE9EvYw.js";
import { a as we, c as Te, i as Ee, l as De, n as Oe, o as ke, s as Ae } from "./useMenuTrigger-BjNvpiW8-jg9Gu40v.js";
import { t as je } from "./useTextField-Dnr0FC1--M69xt9uz.js";
//#region ../react/build/fuzzyFilterSelectOptions-KB6RlC97.js
var Y = /* @__PURE__ */ R(O(), 1), Me = /* @__PURE__ */ R(K(), 1);
function Ne(e, t) {
	var n = -1, r = q(e) ? Array(e.length) : [];
	return C(e, function(e, i, a) {
		r[++n] = t(e, i, a);
	}), r;
}
function Pe(e, t) {
	var n = e.length;
	for (e.sort(t); n--;) e[n] = e[n].value;
	return e;
}
function Fe(e, t) {
	if (e !== t) {
		var n = e !== void 0, r = e === null, i = e === e, a = s(e), o = t !== void 0, c = t === null, l = t === t, u = s(t);
		if (!c && !u && !a && e > t || a && o && l && !c && !u || r && o && l || !n && l || !i) return 1;
		if (!r && !a && !u && e < t || u && n && i && !r && !a || c && n && i || !o && i || !l) return -1;
	}
	return 0;
}
function Ie(e, t, n) {
	for (var r = -1, i = e.criteria, a = t.criteria, o = i.length, s = n.length; ++r < o;) {
		var c = Fe(i[r], a[r]);
		if (c) return r >= s ? c : c * (n[r] == "desc" ? -1 : 1);
	}
	return e.index - t.index;
}
function Le(e, t, n) {
	t = t.length ? V(t, function(e) {
		return x(e) ? function(t) {
			return U(t, e.length === 1 ? e[0] : e);
		} : e;
	}) : [j];
	var r = -1;
	return t = V(t, N(ne)), Pe(Ne(e, function(e, n, i) {
		return {
			criteria: V(t, function(t) {
				return t(e);
			}),
			index: ++r,
			value: e
		};
	}), function(e, t) {
		return Ie(e, t, n);
	});
}
var Re = M(function(e, t) {
	if (e == null) return [];
	var r = t.length;
	return r > 1 && n(e, t[0], t[1]) ? t = [] : r > 2 && n(t[0], t[1], t[2]) && (t = [t[0]]), Le(e, ie(t), []);
}), ze = {};
ze = {
	buttonLabel: "عرض المقترحات",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} خيار`,
		other: () => `${t.number(e.optionCount)} خيارات`
	})} متاحة.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `المجموعة المدخلة ${e.groupTitle}, مع ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} خيار`,
			other: () => `${t.number(e.groupCount)} خيارات`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", محدد",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "مقترحات",
	selectedAnnouncement: (e) => `${e.optionText}، محدد`
};
var Be = {};
Be = {
	buttonLabel: "Покажи предложения",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} опция`,
		other: () => `${t.number(e.optionCount)} опции`
	})} на разположение.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Въведена група ${e.groupTitle}, с ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} опция`,
			other: () => `${t.number(e.groupCount)} опции`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", избрани",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Предложения",
	selectedAnnouncement: (e) => `${e.optionText}, избрани`
};
var Ve = {};
Ve = {
	buttonLabel: "Zobrazit doporučení",
	countAnnouncement: (e, t) => `K dispozici ${t.plural(e.optionCount, {
		one: () => `je ${t.number(e.optionCount)} možnost`,
		other: () => `jsou/je ${t.number(e.optionCount)} možnosti/-í`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Zadaná skupina „${e.groupTitle}“ ${t.plural(e.groupCount, {
			one: () => `s ${t.number(e.groupCount)} možností`,
			other: () => `se ${t.number(e.groupCount)} možnostmi`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: " (vybráno)",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Návrhy",
	selectedAnnouncement: (e) => `${e.optionText}, vybráno`
};
var He = {};
He = {
	buttonLabel: "Vis forslag",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} mulighed tilgængelig`,
		other: () => `${t.number(e.optionCount)} muligheder tilgængelige`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Angivet gruppe ${e.groupTitle}, med ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} mulighed`,
			other: () => `${t.number(e.groupCount)} muligheder`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", valgt",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Forslag",
	selectedAnnouncement: (e) => `${e.optionText}, valgt`
};
var Ue = {};
Ue = {
	buttonLabel: "Empfehlungen anzeigen",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} Option`,
		other: () => `${t.number(e.optionCount)} Optionen`
	})} verfügbar.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Eingetretene Gruppe ${e.groupTitle}, mit ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} Option`,
			other: () => `${t.number(e.groupCount)} Optionen`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", ausgewählt",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Empfehlungen",
	selectedAnnouncement: (e) => `${e.optionText}, ausgewählt`
};
var We = {};
We = {
	buttonLabel: "Προβολή προτάσεων",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} επιλογή`,
		other: () => `${t.number(e.optionCount)} επιλογές `
	})} διαθέσιμες.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Εισαγμένη ομάδα ${e.groupTitle}, με ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} επιλογή`,
			other: () => `${t.number(e.groupCount)} επιλογές`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", επιλεγμένο",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Προτάσεις",
	selectedAnnouncement: (e) => `${e.optionText}, επιλέχθηκε`
};
var Ge = {};
Ge = {
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Entered group ${e.groupTitle}, with ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} option`,
			other: () => `${t.number(e.groupCount)} options`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", selected",
		other: ""
	}, e.isSelected)}`,
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} option`,
		other: () => `${t.number(e.optionCount)} options`
	})} available.`,
	selectedAnnouncement: (e) => `${e.optionText}, selected`,
	buttonLabel: "Show suggestions",
	listboxLabel: "Suggestions"
};
var Ke = {};
Ke = {
	buttonLabel: "Mostrar sugerencias",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} opción`,
		other: () => `${t.number(e.optionCount)} opciones`
	})} disponible(s).`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Se ha unido al grupo ${e.groupTitle}, con ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} opción`,
			other: () => `${t.number(e.groupCount)} opciones`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", seleccionado",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Sugerencias",
	selectedAnnouncement: (e) => `${e.optionText}, seleccionado`
};
var qe = {};
qe = {
	buttonLabel: "Kuva soovitused",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} valik`,
		other: () => `${t.number(e.optionCount)} valikud`
	})} saadaval.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Sisestatud rühm ${e.groupTitle}, valikuga ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} valik`,
			other: () => `${t.number(e.groupCount)} valikud`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", valitud",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Soovitused",
	selectedAnnouncement: (e) => `${e.optionText}, valitud`
};
var Je = {};
Je = {
	buttonLabel: "Näytä ehdotukset",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} vaihtoehto`,
		other: () => `${t.number(e.optionCount)} vaihtoehtoa`
	})} saatavilla.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Siirtyi ryhmään ${e.groupTitle}, jossa ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} vaihtoehto`,
			other: () => `${t.number(e.groupCount)} vaihtoehtoa`
		})}.`,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", valittu",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Ehdotukset",
	selectedAnnouncement: (e) => `${e.optionText}, valittu`
};
var Ye = {};
Ye = {
	buttonLabel: "Afficher les suggestions",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} option`,
		other: () => `${t.number(e.optionCount)} options`
	})} disponible(s).`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Groupe ${e.groupTitle} rejoint, avec ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} option`,
			other: () => `${t.number(e.groupCount)} options`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", sélectionné(s)",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Suggestions",
	selectedAnnouncement: (e) => `${e.optionText}, sélectionné`
};
var Xe = {};
Xe = {
	buttonLabel: "הצג הצעות",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `אפשרות ${t.number(e.optionCount)}`,
		other: () => `${t.number(e.optionCount)} אפשרויות`
	})} במצב זמין.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `נכנס לקבוצה ${e.groupTitle}, עם ${t.plural(e.groupCount, {
			one: () => `אפשרות ${t.number(e.groupCount)}`,
			other: () => `${t.number(e.groupCount)} אפשרויות`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", נבחר",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "הצעות",
	selectedAnnouncement: (e) => `${e.optionText}, נבחר`
};
var Ze = {};
Ze = {
	buttonLabel: "Prikaži prijedloge",
	countAnnouncement: (e, t) => `Dostupno još: ${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} opcija`,
		other: () => `${t.number(e.optionCount)} opcije/a`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Unesena skupina ${e.groupTitle}, s ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} opcijom`,
			other: () => `${t.number(e.groupCount)} opcije/a`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", odabranih",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Prijedlozi",
	selectedAnnouncement: (e) => `${e.optionText}, odabrano`
};
var Qe = {};
Qe = {
	buttonLabel: "Javaslatok megjelenítése",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} lehetőség`,
		other: () => `${t.number(e.optionCount)} lehetőség`
	})} áll rendelkezésre.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Belépett a(z) ${e.groupTitle} csoportba, amely ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} lehetőséget`,
			other: () => `${t.number(e.groupCount)} lehetőséget`
		})} tartalmaz. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", kijelölve",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Javaslatok",
	selectedAnnouncement: (e) => `${e.optionText}, kijelölve`
};
var $e = {};
$e = {
	buttonLabel: "Mostra suggerimenti",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} opzione disponibile`,
		other: () => `${t.number(e.optionCount)} opzioni disponibili`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Ingresso nel gruppo ${e.groupTitle}, con ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} opzione`,
			other: () => `${t.number(e.groupCount)} opzioni`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", selezionato",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Suggerimenti",
	selectedAnnouncement: (e) => `${e.optionText}, selezionato`
};
var et = {};
et = {
	buttonLabel: "候補を表示",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} 個のオプション`,
		other: () => `${t.number(e.optionCount)} 個のオプション`
	})}を利用できます。`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `入力されたグループ ${e.groupTitle}、${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} 個のオプション`,
			other: () => `${t.number(e.groupCount)} 個のオプション`
		})}を含む。`,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: "、選択済み",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "候補",
	selectedAnnouncement: (e) => `${e.optionText}、選択済み`
};
var tt = {};
tt = {
	buttonLabel: "제안 사항 표시",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)}개 옵션`,
		other: () => `${t.number(e.optionCount)}개 옵션`
	})}을 사용할 수 있습니다.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `입력한 그룹 ${e.groupTitle}, ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)}개 옵션`,
			other: () => `${t.number(e.groupCount)}개 옵션`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", 선택됨",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "제안",
	selectedAnnouncement: (e) => `${e.optionText}, 선택됨`
};
var nt = {};
nt = {
	buttonLabel: "Rodyti pasiūlymus",
	countAnnouncement: (e, t) => `Yra ${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} parinktis`,
		other: () => `${t.number(e.optionCount)} parinktys (-ių)`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Įvesta grupė ${e.groupTitle}, su ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} parinktimi`,
			other: () => `${t.number(e.groupCount)} parinktimis (-ių)`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", pasirinkta",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Pasiūlymai",
	selectedAnnouncement: (e) => `${e.optionText}, pasirinkta`
};
var rt = {};
rt = {
	buttonLabel: "Rādīt ieteikumus",
	countAnnouncement: (e, t) => `Pieejamo opciju skaits: ${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} opcija`,
		other: () => `${t.number(e.optionCount)} opcijas`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Ievadīta grupa ${e.groupTitle}, ar ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} opciju`,
			other: () => `${t.number(e.groupCount)} opcijām`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", atlasīta",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Ieteikumi",
	selectedAnnouncement: (e) => `${e.optionText}, atlasīta`
};
var it = {};
it = {
	buttonLabel: "Vis forslag",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} alternativ`,
		other: () => `${t.number(e.optionCount)} alternativer`
	})} finnes.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Angitt gruppe ${e.groupTitle}, med ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} alternativ`,
			other: () => `${t.number(e.groupCount)} alternativer`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", valgt",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Forslag",
	selectedAnnouncement: (e) => `${e.optionText}, valgt`
};
var at = {};
at = {
	buttonLabel: "Suggesties weergeven",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} optie`,
		other: () => `${t.number(e.optionCount)} opties`
	})} beschikbaar.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Groep ${e.groupTitle} ingevoerd met ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} optie`,
			other: () => `${t.number(e.groupCount)} opties`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", geselecteerd",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Suggesties",
	selectedAnnouncement: (e) => `${e.optionText}, geselecteerd`
};
var ot = {};
ot = {
	buttonLabel: "Wyświetlaj sugestie",
	countAnnouncement: (e, t) => `dostępna/dostępne(-nych) ${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} opcja`,
		other: () => `${t.number(e.optionCount)} opcje(-i)`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Dołączono do grupy ${e.groupTitle}, z ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} opcją`,
			other: () => `${t.number(e.groupCount)} opcjami`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", wybrano",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Sugestie",
	selectedAnnouncement: (e) => `${e.optionText}, wybrano`
};
var st = {};
st = {
	buttonLabel: "Mostrar sugestões",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} opção`,
		other: () => `${t.number(e.optionCount)} opções`
	})} disponível.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Grupo inserido ${e.groupTitle}, com ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} opção`,
			other: () => `${t.number(e.groupCount)} opções`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", selecionado",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Sugestões",
	selectedAnnouncement: (e) => `${e.optionText}, selecionado`
};
var ct = {};
ct = {
	buttonLabel: "Apresentar sugestões",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} opção`,
		other: () => `${t.number(e.optionCount)} opções`
	})} disponível.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Grupo introduzido ${e.groupTitle}, com ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} opção`,
			other: () => `${t.number(e.groupCount)} opções`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", selecionado",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Sugestões",
	selectedAnnouncement: (e) => `${e.optionText}, selecionado`
};
var lt = {};
lt = {
	buttonLabel: "Afișare sugestii",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} opțiune`,
		other: () => `${t.number(e.optionCount)} opțiuni`
	})} disponibile.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Grup ${e.groupTitle} introdus, cu ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} opțiune`,
			other: () => `${t.number(e.groupCount)} opțiuni`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", selectat",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Sugestii",
	selectedAnnouncement: (e) => `${e.optionText}, selectat`
};
var ut = {};
ut = {
	buttonLabel: "Показать предложения",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} параметр`,
		other: () => `${t.number(e.optionCount)} параметров`
	})} доступно.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Введенная группа ${e.groupTitle}, с ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} параметром`,
			other: () => `${t.number(e.groupCount)} параметрами`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", выбранными",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Предложения",
	selectedAnnouncement: (e) => `${e.optionText}, выбрано`
};
var dt = {};
dt = {
	buttonLabel: "Zobraziť návrhy",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} možnosť`,
		other: () => `${t.number(e.optionCount)} možnosti/-í`
	})} k dispozícii.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Zadaná skupina ${e.groupTitle}, s ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} možnosťou`,
			other: () => `${t.number(e.groupCount)} možnosťami`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", vybraté",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Návrhy",
	selectedAnnouncement: (e) => `${e.optionText}, vybraté`
};
var ft = {};
ft = {
	buttonLabel: "Prikaži predloge",
	countAnnouncement: (e, t) => `Na voljo je ${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} opcija`,
		other: () => `${t.number(e.optionCount)} opcije`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Vnesena skupina ${e.groupTitle}, z ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} opcija`,
			other: () => `${t.number(e.groupCount)} opcije`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", izbrano",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Predlogi",
	selectedAnnouncement: (e) => `${e.optionText}, izbrano`
};
var pt = {};
pt = {
	buttonLabel: "Prikaži predloge",
	countAnnouncement: (e, t) => `Dostupno još: ${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} opcija`,
		other: () => `${t.number(e.optionCount)} opcije/a`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Unesena grupa ${e.groupTitle}, s ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} opcijom`,
			other: () => `${t.number(e.groupCount)} optione/a`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", izabranih",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Predlozi",
	selectedAnnouncement: (e) => `${e.optionText}, izabrano`
};
var mt = {};
mt = {
	buttonLabel: "Visa förslag",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} alternativ`,
		other: () => `${t.number(e.optionCount)} alternativ`
	})} tillgängliga.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Ingick i gruppen ${e.groupTitle} med ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} alternativ`,
			other: () => `${t.number(e.groupCount)} alternativ`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", valda",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Förslag",
	selectedAnnouncement: (e) => `${e.optionText}, valda`
};
var ht = {};
ht = {
	buttonLabel: "Önerileri göster",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} seçenek`,
		other: () => `${t.number(e.optionCount)} seçenekler`
	})} kullanılabilir.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Girilen grup ${e.groupTitle}, ile ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} seçenek`,
			other: () => `${t.number(e.groupCount)} seçenekler`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", seçildi",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Öneriler",
	selectedAnnouncement: (e) => `${e.optionText}, seçildi`
};
var gt = {};
gt = {
	buttonLabel: "Показати пропозиції",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} параметр`,
		other: () => `${t.number(e.optionCount)} параметри(-ів)`
	})} доступно.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Введена група ${e.groupTitle}, з ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} параметр`,
			other: () => `${t.number(e.groupCount)} параметри(-ів)`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", вибрано",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Пропозиції",
	selectedAnnouncement: (e) => `${e.optionText}, вибрано`
};
var _t = {};
_t = {
	buttonLabel: "显示建议",
	countAnnouncement: (e, t) => `有 ${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} 个选项`,
		other: () => `${t.number(e.optionCount)} 个选项`
	})}可用。`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `进入了 ${e.groupTitle} 组，其中有 ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} 个选项`,
			other: () => `${t.number(e.groupCount)} 个选项`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", 已选择",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "建议",
	selectedAnnouncement: (e) => `${e.optionText}, 已选择`
};
var vt = {};
vt = {
	buttonLabel: "顯示建議",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} 選項`,
		other: () => `${t.number(e.optionCount)} 選項`
	})} 可用。`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `輸入的群組 ${e.groupTitle}, 有 ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} 選項`,
			other: () => `${t.number(e.groupCount)} 選項`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", 已選取",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "建議",
	selectedAnnouncement: (e) => `${e.optionText}, 已選取`
};
var yt = {};
yt = {
	"ar-AE": ze,
	"bg-BG": Be,
	"cs-CZ": Ve,
	"da-DK": He,
	"de-DE": Ue,
	"el-GR": We,
	"en-US": Ge,
	"es-ES": Ke,
	"et-EE": qe,
	"fi-FI": Je,
	"fr-FR": Ye,
	"he-IL": Xe,
	"hr-HR": Ze,
	"hu-HU": Qe,
	"it-IT": $e,
	"ja-JP": et,
	"ko-KR": tt,
	"lt-LT": nt,
	"lv-LV": rt,
	"nb-NO": it,
	"nl-NL": at,
	"pl-PL": ot,
	"pt-BR": st,
	"pt-PT": ct,
	"ro-RO": lt,
	"ru-RU": ut,
	"sk-SK": dt,
	"sl-SI": ft,
	"sr-SP": pt,
	"sv-SE": mt,
	"tr-TR": ht,
	"uk-UA": gt,
	"zh-CN": _t,
	"zh-TW": vt
};
function bt(e) {
	return e && e.__esModule ? e.default : e;
}
function xt(e, t) {
	let { buttonRef: n, popoverRef: r, inputRef: i, listBoxRef: o, keyboardDelegate: s, layoutDelegate: l, shouldFocusWrap: d, isReadOnly: f, isDisabled: h } = e, b = (0, Y.useRef)(null);
	n ??= b;
	let x = g(bt(yt), "@react-aria/combobox"), { menuTriggerProps: C, menuProps: w } = Oe({
		type: "listbox",
		isDisabled: h || f
	}, t, n);
	Ee.set(t, { id: w.id });
	let { collection: T } = t, { disabledKeys: E } = t.selectionManager, D = (0, Y.useMemo)(() => s || new xe({
		collection: T,
		disabledKeys: E,
		ref: o,
		layoutDelegate: l
	}), [
		s,
		l,
		T,
		E,
		o
	]), { collectionProps: O } = v({
		selectionManager: t.selectionManager,
		keyboardDelegate: D,
		disallowTypeAhead: !0,
		disallowEmptySelection: !0,
		shouldFocusWrap: d,
		ref: i,
		isVirtualized: !0
	}), j = p(), { keyboardProps: M } = z({ shortcuts: {
		Enter: (e) => {
			let n = t.isOpen;
			if (t.isOpen && o.current && t.selectionManager.focusedKey != null) {
				let r = t.collection.getItem(t.selectionManager.focusedKey);
				if (r?.props.href) {
					let i = o.current.querySelector(`[data-key="${CSS.escape(t.selectionManager.focusedKey.toString())}"]`);
					return i instanceof HTMLAnchorElement && j.open(i, e, r.props.href, r.props.routerOptions), t.close(), { shouldPreventDefault: n };
				}
				if (r?.props.onAction) return r.props.onAction(), t.close(), { shouldPreventDefault: n };
			}
			return t.commit(), { shouldPreventDefault: n };
		},
		Tab: () => {
			if (t.isOpen && o.current && t.selectionManager.focusedKey != null) {
				let e = t.collection.getItem(t.selectionManager.focusedKey);
				if (e?.props.href) return t.close(), { shouldPreventDefault: !1 };
				if (e?.props.onAction) return e.props.onAction(), t.close(), {
					shouldPreventDefault: !1,
					shouldContinuePropagation: !0
				};
			}
			return t.isOpen && t.commit(), {
				shouldPreventDefault: !1,
				shouldContinuePropagation: !0
			};
		},
		Escape: () => {
			let n = !1;
			return (!t.selectionManager.isEmpty || t.inputValue === "" || e.allowsCustomValue) && (n = !0), t.revert(), { shouldContinuePropagation: n };
		}
	} }), { keyboardProps: N } = z({
		shortcuts: {
			ArrowDown: () => (t.open("first", "manual"), { shouldPreventDefault: !1 }),
			ArrowUp: () => (t.open("last", "manual"), { shouldPreventDefault: !1 }),
			ArrowLeft: () => (t.selectionManager.setFocusedKey(null), { shouldPreventDefault: !1 }),
			ArrowRight: () => (t.selectionManager.setFocusedKey(null), { shouldPreventDefault: !1 })
		},
		allowRepeats: !0
	}), P = (i) => {
		let a = A(n.current, i.relatedTarget), o = A(r.current, i.relatedTarget);
		a || o || (e.onBlur && e.onBlur(i), t.setFocused(!1));
	}, F = (n) => {
		t.isFocused || (e.onFocus && e.onFocus(n), t.setFocused(!0));
	}, te = St([t.selectionManager.selectedKeys, t.selectionManager.selectionMode]), { isInvalid: I, validationErrors: ne, validationDetails: L } = t.displayValidation, { labelProps: R, inputProps: B, descriptionProps: ie, errorMessageProps: ae } = je({
		...e,
		isRequired: e.selectionMode === "multiple" ? e.isRequired && t.selectionManager.isEmpty : e.isRequired,
		onChange: t.setInputValue,
		onKeyDown: f ? e.onKeyDown : ue(t.isOpen && O.onKeyDown, M.onKeyDown, N.onKeyDown, e.onKeyDown),
		onBlur: P,
		value: t.inputValue,
		defaultValue: t.defaultInputValue,
		onFocus: F,
		autoComplete: "off",
		validate: void 0,
		[ge]: t,
		"aria-describedby": [te, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
	}, i);
	_e(i, t.defaultValue, t.setValue);
	let oe = (e) => {
		e.pointerType === "touch" && (i.current?.focus(), t.toggle(null, "manual"));
	}, V = (e) => {
		e.pointerType !== "touch" && (i.current?.focus(), t.toggle(e.pointerType === "keyboard" || e.pointerType === "virtual" ? "first" : null, "manual"));
	}, H = k({
		id: C.id,
		"aria-label": x.format("buttonLabel"),
		"aria-labelledby": e["aria-labelledby"] || R.id
	}), U = k({
		id: w.id,
		"aria-label": x.format("listboxLabel"),
		"aria-labelledby": e["aria-labelledby"] || R.id
	}), ce = (0, Y.useRef)(0), W = (e) => {
		if (h || f) return;
		if (e.timeStamp - ce.current < 500) {
			e.preventDefault(), i.current?.focus();
			return;
		}
		let n = ee(e).getBoundingClientRect(), r = e.changedTouches[0], a = Math.ceil(n.left + .5 * n.width), o = Math.ceil(n.top + .5 * n.height);
		r.clientX === a && r.clientY === o && (e.preventDefault(), i.current?.focus(), t.toggle(null, "manual"), ce.current = e.timeStamp);
	}, G = t.selectionManager.focusedKey != null && t.isOpen ? t.collection.getItem(t.selectionManager.focusedKey) : void 0, K = G?.parentKey ?? null, q = t.selectionManager.focusedKey ?? null, de = (0, Y.useRef)(K), fe = (0, Y.useRef)(q);
	(0, Y.useEffect)(() => {
		if (le() && G != null && q != null && q !== fe.current) {
			let e = t.selectionManager.isSelected(q), n = K == null ? null : t.collection.getItem(K), r = n?.["aria-label"] || (typeof n?.rendered == "string" ? n.rendered : "") || "", i = x.format("focusAnnouncement", {
				isGroupChange: (n && K !== de.current) ?? !1,
				groupTitle: r,
				groupCount: n ? [..._(n, t.collection)].length : 0,
				optionText: G["aria-label"] || G.textValue || "",
				isSelected: e
			});
			m(i);
		}
		de.current = K, fe.current = q;
	});
	let J = Se(t.collection), pe = (0, Y.useRef)(J), me = (0, Y.useRef)(t.isOpen);
	(0, Y.useEffect)(() => {
		let e = t.isOpen !== me.current && (t.selectionManager.focusedKey == null || le());
		if (t.isOpen && (e || J !== pe.current)) {
			let e = x.format("countAnnouncement", { optionCount: J });
			m(e);
		}
		pe.current = J, me.current = t.isOpen;
	});
	let he = (0, Y.useRef)(t.selectedKey);
	return (0, Y.useEffect)(() => {
		if (le() && t.isFocused && t.selectedItem && t.selectedKey !== he.current) {
			let e = t.selectedItem["aria-label"] || t.selectedItem.textValue || "", n = x.format("selectedAnnouncement", { optionText: e });
			m(n);
		}
		he.current = t.selectedKey;
	}), (0, Y.useEffect)(() => {
		if (t.isOpen) return a([i.current, r.current].filter((e) => e != null));
	}, [
		t.isOpen,
		i,
		r
	]), Te(() => {
		!G && i.current && re(se(i.current)) === i.current && c(i.current, null);
	}, [G]), y(o, "react-aria-item-action", t.isOpen ? () => {
		t.close();
	} : void 0), {
		labelProps: {
			...R,
			onClick: "htmlFor" in R && R.htmlFor || e.isDisabled ? void 0 : () => {
				i.current?.focus(), S("keyboard");
			}
		},
		buttonProps: {
			...C,
			...H,
			excludeFromTabOrder: !0,
			preventFocusOnPress: !0,
			onPress: oe,
			onPressStart: V,
			isDisabled: h || f
		},
		inputProps: u(B, {
			role: "combobox",
			"aria-expanded": C["aria-expanded"],
			"aria-controls": t.isOpen ? w.id : void 0,
			"aria-autocomplete": "list",
			"aria-activedescendant": G ? De(t, G.key) : void 0,
			onTouchEnd: W,
			autoCorrect: "off",
			spellCheck: "false"
		}),
		listBoxProps: u(w, U, {
			onAction: void 0,
			autoFocus: t.focusStrategy || !0,
			shouldUseVirtualFocus: !0,
			shouldSelectOnPressUp: !0,
			shouldFocusOnHover: !0,
			linkBehavior: "selection",
			UNSTABLE_itemBehavior: "action"
		}),
		valueProps: { id: te },
		descriptionProps: ie,
		errorMessageProps: ae,
		isInvalid: I,
		validationErrors: ne,
		validationDetails: L
	};
}
function St(e = []) {
	let t = l(), [n, r] = (0, Y.useState)(!0), [i, a] = (0, Y.useState)(e);
	return i.some((t, n) => !Object.is(t, e[n])) && (r(!0), a(e)), (0, Y.useEffect)(() => {
		n && !document.getElementById(t) && r(!1);
	}, [
		t,
		n,
		i
	]), n ? t : void 0;
}
function Ct(e) {
	let { defaultFilter: n, menuTrigger: r = "input", allowsEmptyCollection: i = !1, allowsCustomValue: a, shouldCloseOnBlur: o = !0, selectionMode: s = "single" } = e, [c, l] = (0, Y.useState)(!1), [u, f] = (0, Y.useState)(!1), [p, m] = (0, Y.useState)(null), h = (0, Y.useMemo)(() => e.defaultValue === void 0 ? s === "single" ? e.defaultSelectedKey ?? null : [] : e.defaultValue, [
		e.defaultValue,
		e.defaultSelectedKey,
		s
	]), g = (0, Y.useMemo)(() => e.value === void 0 ? s === "single" ? e.selectedKey : void 0 : e.value, [
		e.value,
		e.selectedKey,
		s
	]), [_, v] = d(g, h, e.onChange), y = s === "single" && Array.isArray(_) ? _[0] : _, b = (t) => {
		if (s === "single") {
			let n = Array.isArray(t) ? t[0] ?? null : t;
			v(n), n !== y && e.onSelectionChange?.(n);
		} else {
			let e = [];
			Array.isArray(t) ? e = t : t != null && (e = [t]), v(e);
		}
	}, { collection: x, selectionManager: S, disabledKeys: C } = t({
		...e,
		items: e.items ?? e.defaultItems,
		selectionMode: s,
		disallowEmptySelection: s === "single",
		allowDuplicateSelectionEvents: !0,
		selectedKeys: (0, Y.useMemo)(() => Dt(y), [y]),
		onSelectionChange: (t) => {
			if (t !== "all") {
				if (s === "single") {
					let n = t.values().next().value ?? null;
					n === y ? (e.onSelectionChange?.(n), z(), L()) : b(n);
				} else b([...t]);
			}
		}
	}), w = s === "single" ? S.firstSelectedKey : null, T = (0, Y.useMemo)(() => [...S.selectedKeys].map((e) => x.getItem(e)).filter((e) => e != null), [S.selectedKeys, x]), [E, D] = d(e.inputValue, Et(e.defaultInputValue, w, x) || "", e.onInputChange), [O] = (0, Y.useState)(y), [k] = (0, Y.useState)(E), A = x, j = (0, Y.useMemo)(() => e.items != null || !n ? x : wt(x, E, n), [
		x,
		E,
		n,
		e.items
	]), [M, ee] = (0, Y.useState)(j), N = (0, Y.useRef)("focus"), P = ae({
		...e,
		onOpenChange: (t) => {
			e.onOpenChange && e.onOpenChange(t, t ? N.current : void 0), S.setFocused(t), t || S.setFocusedKey(null);
		},
		isOpen: void 0,
		defaultOpen: void 0
	}), F = (t = null, n) => {
		let a = n === "manual" || n === "focus" && r === "focus";
		(i || j.size > 0 || a && A.size > 0 || e.items) && (a && !P.isOpen && e.items === void 0 && l(!0), N.current = n, m(t), P.open());
	}, te = (t = null, n) => {
		let a = n === "manual" || n === "focus" && r === "focus";
		!(i || j.size > 0 || a && A.size > 0 || e.items) && !P.isOpen || (a && !P.isOpen && e.items === void 0 && l(!0), P.isOpen || (N.current = n), ne(t));
	}, I = (0, Y.useCallback)(() => {
		ee(c ? A : j);
	}, [
		c,
		A,
		j
	]), ne = (0, Y.useCallback)((e = null) => {
		P.isOpen && I(), m(e), P.toggle();
	}, [P, I]), L = (0, Y.useCallback)(() => {
		P.isOpen && (I(), P.close());
	}, [P, I]), [re, R] = (0, Y.useState)(E), z = () => {
		let e = w == null ? "" : x.getItem(w)?.textValue ?? "";
		R(e), D(e);
	}, B = (0, Y.useRef)(y), ie = (0, Y.useRef)(w == null ? "" : x.getItem(w)?.textValue ?? "");
	(0, Y.useEffect)(() => {
		u && (j.size > 0 || i) && !P.isOpen && E !== re && r !== "manual" && F(null, "input"), !c && !i && P.isOpen && j.size === 0 && L(), y != null && y !== B.current && s === "single" && L(), E !== re && (S.setFocusedKey(null), l(!1), s === "single" && E === "" && (e.inputValue === void 0 || g === void 0) && b(null)), y !== B.current && (e.inputValue === void 0 || g === void 0) ? z() : re !== E && R(E);
		let t = w == null ? "" : x.getItem(w)?.textValue ?? "";
		!u && w != null && e.inputValue === void 0 && w === B.current && ie.current !== t && (R(t), D(t)), B.current = y, ie.current = t;
	});
	let oe = he({
		...e,
		value: (0, Y.useMemo)(() => Array.isArray(y) && y.length === 0 ? null : {
			inputValue: E,
			value: y,
			selectedKey: w
		}, [
			E,
			w,
			y
		])
	}), se = () => {
		a && w == null ? V() : H();
	}, V = () => {
		if (s === "multiple") {
			R(E), L();
			return;
		}
		B.current = null, b(null), L();
	}, H = (t = !1) => {
		if (g !== void 0 && e.inputValue !== void 0) {
			let n = w == null ? "" : x.getItem(w)?.textValue ?? "";
			(t || s === "multiple" || E !== n) && (e.onSelectionChange?.(w), e.onChange?.(y)), R(n), L();
		} else z(), L();
	}, U = () => {
		if (a) {
			let e = w == null ? "" : x.getItem(w)?.textValue ?? "";
			E === e ? H() : V();
		} else H();
	}, ce = () => {
		P.isOpen && S.focusedKey != null ? S.isSelected(S.focusedKey) && s === "single" ? H(!0) : S.select(S.focusedKey) : U();
	}, W = (0, Y.useRef)([E, y]), G = (t) => {
		t ? (W.current = [E, y], r === "focus" && !e.isReadOnly && F(null, "focus")) : (o && U(), (E !== W.current[0] || y !== W.current[1]) && oe.commitValidation()), f(t);
	}, K = (0, Y.useMemo)(() => P.isOpen ? c ? A : j : M, [
		P.isOpen,
		A,
		j,
		c,
		M
	]), q = e.defaultSelectedKey ?? (s === "single" ? O : null);
	return {
		...oe,
		...P,
		focusStrategy: p,
		toggle: te,
		open: F,
		close: U,
		selectionManager: S,
		value: y,
		defaultValue: h ?? O,
		setValue: b,
		selectedKey: w,
		selectedItems: T,
		defaultSelectedKey: q,
		setSelectedKey: b,
		disabledKeys: C,
		isFocused: u,
		setFocused: G,
		selectedItem: T[0] ?? null,
		collection: K,
		inputValue: E,
		defaultInputValue: Et(e.defaultInputValue, q, x) ?? k,
		setInputValue: D,
		commit: ce,
		revert: se
	};
}
function wt(e, t, n) {
	return new G(Tt(e, e, t, n));
}
function Tt(e, t, n, r) {
	let i = [];
	for (let a of t) if (a.type === "section" && a.hasChildNodes) {
		let t = Tt(e, _(a, e), n, r);
		[...t].some((e) => e.type === "item") && i.push({
			...a,
			childNodes: t
		});
	} else (a.type === "item" && r(a.textValue, n) || a.type !== "item") && i.push({ ...a });
	return i;
}
function Et(e, t, n) {
	return e == null && t != null ? n.getItem(t)?.textValue ?? "" : e;
}
function Dt(e) {
	if (e !== void 0) return e === null ? [] : Array.isArray(e) ? e : [e];
}
var Ot = /* @__PURE__ */ (0, Y.createContext)(null), kt = /* @__PURE__ */ (0, Y.createContext)(null), At = /* @__PURE__ */ f(function(e, t) {
	[e, t] = B(e, t, Ot);
	let { children: n, isDisabled: r = !1, isInvalid: i = !1, isRequired: a = !1, isReadOnly: s = !1 } = e, c = (0, Y.useMemo)(() => /* @__PURE__ */ Y.createElement(we.Provider, { value: { items: e.items ?? e.defaultItems } }, typeof n == "function" ? n({
		isOpen: !1,
		isDisabled: r,
		isInvalid: i,
		isRequired: a,
		defaultChildren: null,
		isReadOnly: s
	}) : n), [
		n,
		r,
		i,
		a,
		s,
		e.items,
		e.defaultItems
	]);
	return /* @__PURE__ */ Y.createElement(o, { content: c }, (n) => /* @__PURE__ */ Y.createElement(Mt, {
		props: e,
		collection: n,
		comboBoxRef: t
	}));
}), jt = [
	J,
	L,
	ve,
	Ce,
	ye,
	w
];
function Mt({ props: e, collection: t, comboBoxRef: n }) {
	let { name: r, formValue: i = "key", allowsCustomValue: a } = e;
	a && (i = "text");
	let { validationBehavior: o } = D(pe) || {}, s = e.validationBehavior ?? o ?? "native", { contains: c } = be({ sensitivity: "base" }), l = Ct({
		...e,
		defaultFilter: e.defaultFilter || c,
		items: e.items,
		children: void 0,
		collection: t,
		validationBehavior: s
	}), u = (0, Y.useRef)(null), d = (0, Y.useRef)(null), f = (0, Y.useRef)(null), p = (0, Y.useRef)(null), m = (0, Y.useRef)(null), [h, g] = I(!e["aria-label"] && !e["aria-labelledby"]), [_, v] = (0, Y.useState)("label"), { buttonProps: y, inputProps: b, listBoxProps: x, labelProps: S, descriptionProps: C, errorMessageProps: T, valueProps: O, ...k } = xt({
		...ce(e),
		label: g,
		inputRef: d,
		buttonRef: u,
		listBoxRef: p,
		popoverRef: m,
		name: i === "text" ? r : void 0,
		validationBehavior: s,
		labelElementType: _
	}, l), [A, j] = (0, Y.useState)(null), M = (0, Y.useCallback)(() => {
		if (d.current && !f.current) {
			let e = u.current?.getBoundingClientRect(), t = d.current.getBoundingClientRect(), n = e ? Math.min(e.left, t.left) : t.left, r = e ? Math.max(e.right, t.right) : t.right;
			j(r - n + "px");
		}
	}, [
		u,
		d,
		j
	]);
	de({
		ref: d,
		onResize: M
	});
	let ee = (0, Y.useMemo)(() => ({ get current() {
		return f.current || d.current;
	} }), [f, d]), N = (0, Y.useMemo)(() => ({
		isOpen: l.isOpen,
		isDisabled: e.isDisabled || !1,
		isInvalid: k.isInvalid || !1,
		isRequired: e.isRequired || !1,
		isReadOnly: e.isReadOnly || !1
	}), [
		l.isOpen,
		e.isDisabled,
		k.isInvalid,
		e.isRequired,
		e.isReadOnly
	]), P = H({
		...e,
		values: N,
		defaultClassName: "react-aria-ComboBox"
	}), F = te(e, { global: !0 });
	delete F.id;
	let ne = [];
	if (r && i === "key") {
		let t = Array.isArray(l.value) ? l.value : [l.value];
		t.length === 0 && (t = [null]), ne = t.map((t, n) => /* @__PURE__ */ Y.createElement("input", {
			key: n,
			type: "hidden",
			name: r,
			form: e.form,
			value: t ?? ""
		}));
	}
	return /* @__PURE__ */ Y.createElement(W, { values: [
		[kt, l],
		[J, {
			...S,
			elementType: _,
			ref: h
		}],
		[L, {
			...y,
			ref: u,
			isPressed: l.isOpen
		}],
		[ve, {
			...b,
			ref: d
		}],
		[Ce, {
			...b,
			ref: (0, Y.useCallback)((e) => {
				d.current = e, e && v(e.tagName.toLowerCase() === "input" ? "label" : "span");
			}, []),
			value: l.inputValue,
			onChange: (e) => l.setInputValue(e)
		}],
		[E, l],
		[Ae, {
			ref: m,
			triggerRef: ee,
			scrollRef: p,
			placement: "bottom start",
			isNonModal: !0,
			trigger: "ComboBox",
			style: { "--trigger-width": A },
			clearContexts: jt
		}],
		[we, {
			...x,
			ref: p
		}],
		[ke, l],
		[w, { slots: {
			description: C,
			errorMessage: T
		} }],
		[ye, {
			ref: f,
			isInvalid: k.isInvalid,
			isDisabled: e.isDisabled || !1
		}],
		[me, k],
		[Nt, O]
	] }, /* @__PURE__ */ Y.createElement(oe.div, {
		...F,
		...P,
		ref: n,
		slot: e.slot || void 0,
		"data-focused": l.isFocused || void 0,
		"data-open": l.isOpen || void 0,
		"data-disabled": e.isDisabled || void 0,
		"data-readonly": e.isReadOnly || void 0,
		"data-invalid": k.isInvalid || void 0,
		"data-required": e.isRequired || void 0
	}, P.children, ne));
}
var Nt = /* @__PURE__ */ (0, Y.createContext)(null), X = class e {
	constructor(e = 0, t = 0) {
		this.x = e, this.y = t;
	}
	copy() {
		return new e(this.x, this.y);
	}
	equals(e) {
		return this.x === e.x && this.y === e.y;
	}
	isOrigin() {
		return this.x === 0 && this.y === 0;
	}
}, Z = class e {
	constructor(e = 0, t = 0, n = 0, r = 0) {
		this.x = e, this.y = t, this.width = n, this.height = r;
	}
	get maxX() {
		return this.x + this.width;
	}
	get maxY() {
		return this.y + this.height;
	}
	get area() {
		return this.width * this.height;
	}
	get topLeft() {
		return new X(this.x, this.y);
	}
	get topRight() {
		return new X(this.maxX, this.y);
	}
	get bottomLeft() {
		return new X(this.x, this.maxY);
	}
	get bottomRight() {
		return new X(this.maxX, this.maxY);
	}
	intersects(e) {
		return this.area > 0 && e.area > 0 && this.x <= e.x + e.width && e.x <= this.x + this.width && this.y <= e.y + e.height && e.y <= this.y + this.height;
	}
	containsRect(e) {
		return this.x <= e.x && this.y <= e.y && this.maxX >= e.maxX && this.maxY >= e.maxY;
	}
	containsPoint(e) {
		return this.x <= e.x && this.y <= e.y && this.maxX >= e.x && this.maxY >= e.y;
	}
	getCornerInRect(e) {
		for (let t of [
			"topLeft",
			"topRight",
			"bottomLeft",
			"bottomRight"
		]) if (e.containsPoint(this[t])) return t;
		return null;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y && e.width === this.width && e.height === this.height;
	}
	pointEquals(e) {
		return this.x === e.x && this.y === e.y;
	}
	sizeEquals(e) {
		return this.width === e.width && this.height === e.height;
	}
	union(t) {
		let n = Math.min(this.x, t.x), r = Math.min(this.y, t.y), i = Math.max(this.maxX, t.maxX) - n, a = Math.max(this.maxY, t.maxY) - r;
		return new e(n, r, i, a);
	}
	intersection(t) {
		if (!this.intersects(t)) return new e(0, 0, 0, 0);
		let n = Math.max(this.x, t.x), r = Math.max(this.y, t.y);
		return new e(n, r, Math.min(this.maxX, t.maxX) - n, Math.min(this.maxY, t.maxY) - r);
	}
	copy() {
		return new e(this.x, this.y, this.width, this.height);
	}
}, Q = class e {
	constructor(e = 0, t = 0) {
		this.width = Math.max(e, 0), this.height = Math.max(t, 0);
	}
	copy() {
		return new e(this.width, this.height);
	}
	equals(e) {
		return this.width === e.width && this.height === e.height;
	}
	get area() {
		return this.width * this.height;
	}
}, Pt = 0, Ft = class {
	constructor(e, t) {
		this.virtualizer = e, this.key = ++Pt, this.viewType = t, this.children = /* @__PURE__ */ new Set(), this.reusableViews = /* @__PURE__ */ new Map(), this.layoutInfo = null, this.content = null, this.rendered = null;
	}
	prepareForReuse() {
		this.content = null, this.rendered = null, this.layoutInfo = null;
	}
	getReusableView(e) {
		let t = this.reusableViews.get(e);
		return t && t.length > 0 ? t.shift() : new Lt(this.virtualizer, this, e);
	}
	reuseChild(e) {
		e.prepareForReuse();
		let t = this.reusableViews.get(e.viewType);
		t || (t = [], this.reusableViews.set(e.viewType, t)), t.push(e);
	}
}, It = class extends Ft {
	constructor(e) {
		super(e, "root");
	}
}, Lt = class extends Ft {
	constructor(e, t, n) {
		super(e, n), this.parent = t;
	}
};
function Rt(e, t) {
	if (e === t) return !0;
	if (e.size !== t.size) return !1;
	for (let n of e) if (!t.has(n)) return !1;
	return !0;
}
var zt = class {
	setVisibleRect(e) {
		let t = performance.now() - this.startTime;
		t < 500 && (e.x !== this.visibleRect.x && t > 0 && (this.velocity.x = (e.x - this.visibleRect.x) / t), e.y !== this.visibleRect.y && t > 0 && (this.velocity.y = (e.y - this.visibleRect.y) / t)), this.startTime = performance.now(), this.visibleRect = e;
	}
	getOverscannedRect() {
		let e = this.visibleRect.copy(), t = this.visibleRect.height / 3;
		e.height += t, this.velocity.y < 0 && (e.y -= t);
		let n = this.visibleRect.width / 3;
		return e.width += n, this.velocity.x < 0 && (e.x -= n), e;
	}
	constructor() {
		this.startTime = 0, this.velocity = new X(0, 0), this.visibleRect = new Z();
	}
}, Bt = 4;
function Vt(e) {
	return e === "x" ? "width" : "height";
}
function Ht(e, t, n, r, i) {
	let a = n(e.key);
	if (!a) return null;
	let o = a.rect[e.corner][t] - r[t] - e.offset;
	if (o === 0) return null;
	let s = r[t] + o, c = Vt(t), l = Math.max(0, i[c] - r[c]), u = Math.max(0, Math.min(l, s));
	return u === r[t] ? null : u;
}
function Ut(e, t, n, r, i = () => !0) {
	let a = Vt(t), o = null;
	for (let [s, c] of r) {
		if (!c || !i(c)) continue;
		let r = c.rect.intersection(n)[a];
		if (c.rect.area > 0 && r >= Bt) {
			let r = c.rect.getCornerInRect(n) ?? "topLeft", i = c.rect[r][t] - n[t];
			(!o || (e === "end" ? i < o.offset : i > o.offset)) && (o = {
				key: s,
				corner: r,
				offset: i
			});
		}
	}
	return o;
}
function Wt(e, t, n, r) {
	if (e === "start") return 0;
	let i = Vt(t);
	return Math.max(0, n[i] - r[i]);
}
function Gt(e, t, n, r, i) {
	if (n === "start") return e[r] <= i;
	let a = Vt(r);
	return t[a] - (e[r] + e[a]) <= i;
}
function Kt(e, t, n, r, i, a, o, s, c, l) {
	let u = (e) => t === "x" ? new Z(e, c.y, c.width, c.height) : new Z(c.x, e, c.width, c.height);
	if (n) {
		let e = Ht(n, t, s, c, l);
		if (e != null) return u(e);
	}
	if (r && !i && (!a || o > 0)) {
		let n = u(Wt(e, t, l, c));
		return n.equals(c) ? null : n;
	}
	return null;
}
var qt = class {
	reset() {
		this.hasSnappedToEdge = !1, this.hadEstimatedVisibleItems = !1, this.wasNearAnchorEdge = !1;
	}
	captureBeforeLayout(e, t, n) {
		return e ? Ut(e.edge, e.axis, n, t, e.isAnchorable) : null;
	}
	resolveAfterLayout(e) {
		let { anchorInfo: t, anchor: n, postLayoutInfos: r, previousVisibleRect: i, previousContentSize: a, contentSize: o, itemSizeChanged: s, isScrolling: c, getLayoutInfo: l } = e;
		if (!t) return null;
		let u = this.hadEstimatedVisibleItems, d = this.wasNearAnchorEdge, f = !1;
		for (let e of r.values()) if (e.estimatedSize) {
			f = !0;
			break;
		}
		if (this.hadEstimatedVisibleItems = f, u || (this.wasNearAnchorEdge = Gt(i, a, t.edge, t.axis, t.threshold)), i.area === 0) return null;
		let p = t.axis === "x" ? "width" : "height", m = o[p] - a[p], h = !this.hasSnappedToEdge;
		if (this.hasSnappedToEdge = !0, !(h || m !== 0 || s)) return null;
		let g = h || u && d || Gt(i, a, t.edge, t.axis, t.threshold);
		u || (this.wasNearAnchorEdge = g);
		let _ = h || u && d ? null : n;
		return Kt(t.edge, t.axis, _, g, c, s, m, l, i, o);
	}
	constructor() {
		this.hasSnappedToEdge = !1, this.hadEstimatedVisibleItems = !1, this.wasNearAnchorEdge = !1;
	}
}, Jt = class {
	constructor(e) {
		this.delegate = e.delegate, this.collection = e.collection, this.layout = e.layout, this.contentSize = new Q(), this.visibleRect = new Z(), this.size = new Q(), this.persistedKeys = /* @__PURE__ */ new Set(), this._visibleViews = /* @__PURE__ */ new Map(), this._renderedContent = /* @__PURE__ */ new WeakMap(), this._rootView = new It(this), this._isScrolling = !1, this._invalidationContext = {}, this._overscanManager = new zt(), this._scrollAnchor = new qt();
	}
	isPersistedKey(e) {
		if (this.persistedKeys.has(e)) return !0;
		for (let t of this.persistedKeys) for (; t != null;) {
			let n = this.layout.getLayoutInfo(t);
			if (!n || n.parentKey == null) break;
			if (t = n.parentKey, t === e) return !0;
		}
		return !1;
	}
	getParentView(e) {
		return e.parentKey == null ? this._rootView : this._visibleViews.get(e.parentKey);
	}
	getReusableView(e) {
		let t = this.getParentView(e).getReusableView(e.type);
		return t.layoutInfo = e, this._renderView(t), t;
	}
	_renderView(e) {
		if (e.layoutInfo) {
			let { type: t, key: n, content: r } = e.layoutInfo;
			e.content = r || this.collection.getItem(n), e.rendered = this._renderContent(t, e.content);
		}
	}
	_renderContent(e, t) {
		let n = t == null ? null : this._renderedContent.get(t);
		if (n != null) return n;
		let r = this.delegate.renderView(e, t);
		return t && this._renderedContent.set(t, r), r;
	}
	keyAtPoint(e) {
		let t = new Z(e.x, e.y, 1, 1), n = t.area === 0 ? [] : this.layout.getVisibleLayoutInfos(t);
		for (let e of n) if (e.rect.intersects(t)) return e.key;
		return null;
	}
	relayout(e = {}) {
		let t = this.layout.UNSTABLE_getScrollAnchorInfo?.(e.layoutOptions) ?? null, n = null;
		if (t) {
			let e = [];
			for (let [t, n] of this._visibleViews) {
				let r = this.layout.getLayoutInfo(t) ?? n.layoutInfo;
				r && e.push([t, r]);
			}
			n = this._scrollAnchor.captureBeforeLayout(t, e, this.visibleRect);
		}
		let r = this.contentSize, i = this.visibleRect;
		this.layout.update(e);
		let a = this.layout.getContentSize();
		this.contentSize = new Q(a.width, a.height);
		let o = this._scrollAnchor.resolveAfterLayout({
			anchorInfo: t,
			anchor: n,
			postLayoutInfos: t ? this.getVisibleLayoutInfos() : /* @__PURE__ */ new Map(),
			previousVisibleRect: i,
			previousContentSize: r,
			contentSize: this.contentSize,
			itemSizeChanged: e.itemSizeChanged ?? !1,
			isScrolling: this._isScrolling,
			getLayoutInfo: (e) => this.layout.getLayoutInfo(e)
		});
		if (o) {
			this.delegate.setVisibleRect(o);
			return;
		}
		let s = this.visibleRect, c = e.contentChanged ? 0 : s.x, l = e.contentChanged ? 0 : s.y;
		if (c = Math.max(0, Math.min(this.contentSize.width - s.width, c)), l = Math.max(0, Math.min(this.contentSize.height - s.height, l)), c !== s.x || l !== s.y) {
			let e = new Z(c, l, s.width, s.height);
			this.delegate.setVisibleRect(e);
		} else this.updateSubviews();
	}
	getVisibleLayoutInfos() {
		let e;
		e = this._overscanManager.getOverscannedRect();
		let t = this.layout.getVisibleLayoutInfos(e), n = /* @__PURE__ */ new Map();
		for (let e of t) n.set(e.key, e);
		return n;
	}
	updateSubviews() {
		let e = this.getVisibleLayoutInfos(), t = /* @__PURE__ */ new Set();
		for (let [n, r] of this._visibleViews) {
			let i = e.get(n);
			(!i || r.parent !== this.getParentView(i)) && (this._visibleViews.delete(n), r.parent.reuseChild(r), t.add(r));
		}
		for (let [n, r] of e) {
			let e = this._visibleViews.get(n);
			if (!e) e = this.getReusableView(r), e.parent.children.add(e), this._visibleViews.set(n, e), t.delete(e);
			else {
				e.layoutInfo = r;
				let t = this.collection.getItem(r.key);
				e.content !== t && (e.content != null && this._renderedContent.delete(e.content), this._renderView(e));
			}
		}
		for (let e of t) e.parent.children.delete(e), e.parent.reusableViews.clear();
		if (!this._isScrolling) for (let t of e.keys()) {
			let e = this._visibleViews.get(t);
			e.parent.children.delete(e), e.parent.children.add(e);
		}
	}
	render(e) {
		let t = this, n = !1, r = !1, i = !1, a = !1, o = !1, s = !1, c = !1, l = !1;
		if (e.collection !== this.collection && (t.collection = e.collection, n = !0), (e.layout !== this.layout || this.layout.virtualizer !== this) && (this.layout && (this.layout.virtualizer = null), e.layout.virtualizer = this, t.layout = e.layout, this._scrollAnchor.reset(), n = !0), e.persistedKeys && !Rt(e.persistedKeys, this.persistedKeys) && (t.persistedKeys = e.persistedKeys, l = !0), !this.visibleRect.equals(e.visibleRect) || !this.size.equals(e.size)) {
			this._overscanManager.setVisibleRect(e.visibleRect);
			let s = new Z(this.visibleRect.x, this.visibleRect.y, this.size.width, this.size.height), c = new Z(e.visibleRect.x, e.visibleRect.y, e.size.width, e.size.height);
			this.layout.shouldInvalidate(c, s) ? (r = !e.visibleRect.pointEquals(this.visibleRect), i = !this.size.equals(e.size), a = this.size.width !== e.size.width, o = this.size.height !== e.size.height, n = !0) : l = !0, t.visibleRect = e.visibleRect, t.size = e.size;
		}
		return e.invalidationContext !== this._invalidationContext && (e.invalidationContext && (i ||= e.invalidationContext.sizeChanged || !1, a ||= e.invalidationContext.widthChanged || !1, o ||= e.invalidationContext.heightChanged || !1, r ||= e.invalidationContext.offsetChanged || !1, s ||= e.invalidationContext.itemSizeChanged || !1, c ||= e.invalidationContext.layoutOptions != null && this._invalidationContext.layoutOptions != null && e.invalidationContext.layoutOptions !== this._invalidationContext.layoutOptions && this.layout.shouldInvalidateLayoutOptions(e.invalidationContext.layoutOptions, this._invalidationContext.layoutOptions), n ||= s || i || r || c), this._invalidationContext = e.invalidationContext), e.isScrolling !== this._isScrolling && (this._isScrolling = e.isScrolling, e.isScrolling || (l = !0)), n ? this.relayout({
			offsetChanged: r,
			sizeChanged: i,
			widthChanged: a,
			heightChanged: o,
			itemSizeChanged: s,
			layoutOptionsChanged: c,
			layoutOptions: this._invalidationContext.layoutOptions
		}) : l && this.updateSubviews(), Array.from(this._rootView.children);
	}
	getVisibleView(e) {
		return this._visibleViews.get(e);
	}
	invalidate(e) {
		this.delegate.invalidate(e);
	}
	updateItemSize(e, t) {
		this.layout.updateItemSize && this.layout.updateItemSize(e, t) && this.invalidate({ itemSizeChanged: !0 });
	}
}, Yt = typeof document < "u" ? Y.useLayoutEffect : () => {};
function Xt(e) {
	let [t, n] = (0, Y.useState)(new Z(0, 0, 0, 0)), [r, i] = (0, Y.useState)(new Q()), [a, o] = (0, Y.useState)(!1), [s, c] = (0, Y.useState)({}), l = (0, Y.useRef)(!1), [u] = (0, Y.useState)(() => new Jt({
		collection: e.collection,
		layout: e.layout,
		delegate: {
			setVisibleRect(e) {
				n(e), l.current = !0;
			},
			renderView: e.renderView,
			invalidate: c
		}
	}));
	Yt(() => {
		l.current && (l.current = !1, e.onVisibleRectChange(t));
	});
	let d = (0, Y.useMemo)(() => e.layoutOptions == null ? s : {
		...s,
		layoutOptions: e.layoutOptions
	}, [s, e.layoutOptions]), f = u.render({
		layout: e.layout,
		collection: e.collection,
		persistedKeys: e.persistedKeys,
		layoutOptions: e.layoutOptions,
		visibleRect: t,
		size: e.allowsWindowScrolling ? r : t,
		invalidationContext: d,
		isScrolling: a
	}), p = u.contentSize, m = (0, Y.useCallback)(() => {
		o(!0);
	}, []), h = (0, Y.useCallback)(() => {
		o(!1);
	}, []);
	return (0, Y.useMemo)(() => ({
		virtualizer: u,
		visibleViews: f,
		setVisibleRect: n,
		size: r,
		setSize: i,
		contentSize: p,
		isScrolling: a,
		startScrolling: m,
		endScrolling: h
	}), [
		u,
		f,
		n,
		r,
		i,
		p,
		a,
		m,
		h
	]);
}
var Zt = class {
	shouldInvalidate(e, t) {
		return e.width !== t.width || e.height !== t.height;
	}
	shouldInvalidateLayoutOptions(e, t) {
		return e !== t;
	}
	update(e) {}
	getItemRect(e) {
		return this.getLayoutInfo(e)?.rect ?? null;
	}
	getVisibleRect() {
		return this.virtualizer.visibleRect;
	}
	constructor() {
		this.virtualizer = null;
	}
}, Qt = class e {
	constructor(e, t, n) {
		this.type = e, this.key = t, this.parentKey = null, this.content = null, this.rect = n, this.estimatedSize = !1, this.isSticky = !1, this.opacity = 1, this.transform = null, this.zIndex = 0, this.allowOverflow = !1;
	}
	copy() {
		let t = new e(this.type, this.key, this.rect.copy());
		return t.estimatedSize = this.estimatedSize, t.opacity = this.opacity, t.transform = this.transform, t.parentKey = this.parentKey, t.content = this.content, t.isSticky = this.isSticky, t.zIndex = this.zIndex, t.allowOverflow = this.allowOverflow, t;
	}
}, $ = 48, $t = class extends Zt {
	constructor(e = {}) {
		super(), this.rowSize = e?.rowSize ?? e?.rowHeight ?? null, this.orientation = e.orientation ?? "vertical", this.estimatedRowSize = e?.estimatedRowSize ?? e?.estimatedRowHeight ?? null, this.headingSize = e?.headingSize ?? e?.headingHeight ?? null, this.estimatedHeadingSize = e?.estimatedHeadingSize ?? e?.estimatedHeadingHeight ?? null, this.loaderSize = e?.loaderSize ?? e?.loaderHeight ?? null, this.dropIndicatorThickness = e.dropIndicatorThickness || 2, this.gap = e.gap || 0, this.padding = e.padding || 0, this.layoutNodes = /* @__PURE__ */ new Map(), this.rootNodes = [], this.lastCollection = null, this.invalidateEverything = !1, this.validRect = new Z(), this.requestedRect = new Z(), this.contentSize = new Q();
	}
	get collection() {
		return this.virtualizer.collection;
	}
	get rowHeight() {
		return this.rowSize;
	}
	get estimatedRowHeight() {
		return this.estimatedRowSize;
	}
	get headingHeight() {
		return this.headingSize;
	}
	get estimatedHeadingHeight() {
		return this.estimatedHeadingSize;
	}
	get loaderHeight() {
		return this.loaderSize;
	}
	getLayoutInfo(e) {
		return this.ensureLayoutInfo(e), this.layoutNodes.get(e)?.layoutInfo || null;
	}
	getVisibleLayoutInfos(e) {
		let t = this.orientation === "horizontal" ? "x" : "y", n = this.orientation === "horizontal" ? "width" : "height";
		if (e[n] > 1) {
			let r = (this.rowSize ?? this.estimatedRowSize ?? $) + this.gap;
			e = e.copy();
			let i = Math.floor(e[t] / r) * r, a = e[n] + e[t] - i;
			e[t] = i, e[n] = Math.ceil(a / r) * r;
		}
		this.layoutIfNeeded(e);
		let r = [], i = (t) => {
			for (let n of t) this.isVisible(n, e) && (r.push(n.layoutInfo), n.children && i(n.children));
		};
		return i(this.rootNodes), r;
	}
	layoutIfNeeded(e) {
		if (this.lastCollection) {
			this.requestedRect.containsRect(e) || (this.requestedRect = this.requestedRect.union(e), this.rootNodes = this.buildCollection());
			for (let e of this.virtualizer.persistedKeys) if (this.ensureLayoutInfo(e)) return;
		}
	}
	ensureLayoutInfo(e) {
		return !this.layoutNodes.has(e) && this.requestedRect.area < this.contentSize.area && this.lastCollection ? (this.requestedRect = new Z(0, 0, 1 / 0, 1 / 0), this.rootNodes = this.buildCollection(), this.requestedRect = new Z(0, 0, this.contentSize.width, this.contentSize.height), !0) : !1;
	}
	isVisible(e, t) {
		return e.layoutInfo.rect.intersects(t) || e.layoutInfo.isSticky || e.layoutInfo.type === "header" || e.layoutInfo.type === "loader" || this.virtualizer.isPersistedKey(e.layoutInfo.key);
	}
	shouldInvalidateEverything(e) {
		let t = e.layoutOptions;
		return e.sizeChanged || this.rowSize !== (t?.rowSize ?? t?.rowHeight ?? this.rowSize) || this.orientation !== (t?.orientation ?? this.orientation) || this.headingSize !== (t?.headingSize ?? t?.headingHeight ?? this.headingSize) || this.loaderSize !== (t?.loaderSize ?? t?.loaderHeight ?? this.loaderSize) || this.gap !== (t?.gap ?? this.gap) || this.padding !== (t?.padding ?? this.padding);
	}
	shouldInvalidateLayoutOptions(e, t) {
		return (e?.rowSize ?? e?.rowHeight) !== (t?.rowSize ?? t?.rowHeight) || e.orientation !== t.orientation || (e?.estimatedRowSize ?? e?.estimatedRowHeight) !== (t?.estimatedRowSize ?? t?.estimatedRowHeight) || (e?.headingSize ?? e?.headingHeight) !== (t?.headingSize ?? t?.headingHeight) || (e?.estimatedHeadingSize ?? e?.estimatedHeadingHeight) !== (t?.estimatedHeadingSize ?? t?.estimatedHeadingHeight) || (e?.loaderSize ?? e?.loaderHeight) !== (t?.loaderSize ?? t?.loaderHeight) || e.dropIndicatorThickness !== t.dropIndicatorThickness || e.gap !== t.gap || e.padding !== t.padding;
	}
	update(e) {
		let t = this.virtualizer.collection;
		this.invalidateEverything = this.shouldInvalidateEverything(e), this.invalidateEverything && (this.requestedRect = this.virtualizer.visibleRect.copy(), this.layoutNodes.clear());
		let n = e.layoutOptions;
		if (this.rowSize = n?.rowSize ?? n?.rowHeight ?? this.rowSize, this.orientation = n?.orientation ?? this.orientation, this.estimatedRowSize = n?.estimatedRowSize ?? n?.estimatedRowHeight ?? this.estimatedRowSize, this.headingSize = n?.headingSize ?? n?.headingHeight ?? this.headingSize, this.estimatedHeadingSize = n?.estimatedHeadingSize ?? n?.estimatedHeadingHeight ?? this.estimatedHeadingSize, this.loaderSize = n?.loaderSize ?? n?.loaderHeight ?? this.loaderSize, this.dropIndicatorThickness = n?.dropIndicatorThickness ?? this.dropIndicatorThickness, this.gap = n?.gap ?? this.gap, this.padding = n?.padding ?? this.padding, this.rootNodes = this.buildCollection(), this.lastCollection && t !== this.lastCollection) for (let e of this.lastCollection.getKeys()) t.getItem(e) || this.layoutNodes.get(e) && this.layoutNodes.delete(e);
		this.lastCollection = t, this.invalidateEverything = !1, this.validRect = this.requestedRect.copy();
	}
	buildCollection(e = this.padding) {
		let t = this.virtualizer.collection, n = this.orientation === "horizontal" ? "x" : "y", r = this.orientation === "horizontal" ? "maxX" : "maxY", i = en(t, (e) => e.type !== "content"), a = i.filter((e) => e.type === "loader"), o = [], s = t?.size === 0;
		s && (e = 0);
		for (let t of i) {
			let s = (this.rowSize ?? this.estimatedRowSize ?? $) + this.gap;
			if (t.type === "item" && e + s < this.requestedRect[n] && !this.isValid(t, e)) {
				e += s;
				continue;
			}
			let c = this.orientation === "horizontal" ? this.buildChild(t, e, this.padding, null) : this.buildChild(t, this.padding, e, null);
			if (e = c.layoutInfo.rect[r] + this.gap, o.push(c), t.type === "loader") {
				let e = a.indexOf(t);
				a.splice(e, 1);
			}
			if ((t.type === "item" || t.type === "loader") && e > this.requestedRect[r]) {
				let n = i.indexOf(t);
				for (let t of a) {
					let a = i.indexOf(t);
					e += (a - n - 1) * s;
					let c = this.orientation === "horizontal" ? this.buildChild(t, e, this.padding, null) : this.buildChild(t, this.padding, e, null);
					o.push(c), e = c.layoutInfo.rect[r], n = a;
				}
				e += (i.length - n - 1) * s;
				break;
			}
		}
		return e = Math.max(e - this.gap, 0), e += s ? 0 : this.padding, this.contentSize = this.orientation === "horizontal" ? new Q(e, this.virtualizer.size.height) : new Q(this.virtualizer.size.width, e), o;
	}
	isValid(e, t) {
		let n = this.layoutNodes.get(e.key), r = this.orientation === "horizontal" ? "x" : "y";
		return !this.invalidateEverything && !!n && n.node === e && t === n.layoutInfo.rect[r] && n.layoutInfo.rect.intersects(this.validRect) && n.validRect.containsRect(n.layoutInfo.rect.intersection(this.requestedRect));
	}
	buildChild(e, t, n, r) {
		if (this.isValid(e, this.orientation === "horizontal" ? t : n)) return this.layoutNodes.get(e.key);
		let i = this.buildNode(e, t, n);
		return i.layoutInfo.parentKey = r ?? null, i.layoutInfo.allowOverflow = !0, this.layoutNodes.set(e.key, i), i;
	}
	buildNode(e, t, n) {
		switch (e.type) {
			case "section": return this.buildSection(e, t, n);
			case "item": return this.buildItem(e, t, n);
			case "header": return this.buildSectionHeader(e, t, n);
			case "loader": return this.buildLoader(e, t, n);
			case "separator": return this.buildItem(e, t, n);
			default: throw Error("Unsupported node type: " + e.type);
		}
	}
	buildLoader(e, t, n) {
		let r = new Z(t, n, this.padding, 0), i = new Qt(e.type, e.key, r);
		return this.orientation === "horizontal" ? (r.height = this.virtualizer.contentSize.height - this.padding - n, r.width = e.props.isLoading ? this.loaderSize ?? this.rowSize ?? this.estimatedRowSize ?? $ : 0) : (r.width = this.virtualizer.contentSize.width - this.padding - t, r.height = e.props.isLoading ? this.loaderSize ?? this.rowSize ?? this.estimatedRowSize ?? $ : 0), {
			layoutInfo: i,
			validRect: r.intersection(this.requestedRect)
		};
	}
	buildSection(e, t, n) {
		let r = this.virtualizer.collection, i = this.virtualizer.size.width - this.padding - t, a = this.virtualizer.size.height - this.padding - n, o = this.orientation === "horizontal" ? new Z(t, n, 0, a) : new Z(t, n, i, 0), s = new Qt(e.type, e.key, o), c = this.orientation === "horizontal" ? t : n, l = this.orientation === "horizontal" ? "x" : "y", u = this.orientation === "horizontal" ? "maxX" : "maxY", d = this.orientation === "horizontal" ? "width" : "height", f = 0, p = [];
		for (let i of _(e, r)) {
			if (i.type === "content") continue;
			let a = (this.rowSize ?? this.estimatedRowSize ?? $) + this.gap;
			if (c + a < this.requestedRect[l] && !this.isValid(e, c)) {
				c += a, f++;
				continue;
			}
			let o = this.orientation === "horizontal" ? this.buildChild(i, c, n, s.key) : this.buildChild(i, t, c, s.key);
			if (c = o.layoutInfo.rect[u] + this.gap, p.push(o), c > this.requestedRect[u]) {
				c += ([..._(e, r)].length - (p.length + f)) * a;
				break;
			}
		}
		return c -= this.gap, o[d] = c - (this.orientation === "horizontal" ? t : n), {
			layoutInfo: s,
			children: p,
			validRect: s.rect.intersection(this.requestedRect),
			node: e
		};
	}
	buildSectionHeader(e, t, n) {
		let r = this.orientation === "horizontal" ? "height" : "width", i = this.orientation === "horizontal" ? "width" : "height", a = this.virtualizer.size[r] - this.padding - (this.orientation === "horizontal" ? n : t), o = this.headingSize, s = !1;
		if (o == null) {
			let t = this.layoutNodes.get(e.key), n = t?.layoutInfo;
			if (n) {
				let c = this.virtualizer.collection.getItem(e.key), l = this.lastCollection ? this.lastCollection.getItem(e.key) : null;
				o = t.layoutInfo.rect[i], s = a !== n.rect[r] || c !== l || n.estimatedSize;
			} else o = e.rendered ? this.estimatedHeadingSize : 0, s = !0;
		}
		o ??= $;
		let c = this.orientation === "horizontal" ? new Z(t, n, o, a - n) : new Z(t, n, a - t, o), l = new Qt("header", e.key, c);
		return l.estimatedSize = s, {
			layoutInfo: l,
			children: [],
			validRect: l.rect.intersection(this.requestedRect),
			node: e
		};
	}
	buildItem(e, t, n) {
		let r = this.orientation === "horizontal" ? "height" : "width", i = this.orientation === "horizontal" ? "width" : "height", a = this.virtualizer.size[r] - this.padding - (this.orientation === "horizontal" ? n : t), o = this.rowSize, s = !1;
		if (o == null) {
			let t = this.layoutNodes.get(e.key);
			t ? (o = t.layoutInfo.rect[i], s = a !== t.layoutInfo.rect[r] || e !== t.node || t.layoutInfo.estimatedSize) : (o = this.estimatedRowSize, s = !0);
		}
		o ??= $;
		let c = this.orientation === "horizontal" ? new Z(t, n, o, a) : new Z(t, n, a, o), l = new Qt(e.type, e.key, c);
		return l.estimatedSize = s, {
			layoutInfo: l,
			children: [],
			validRect: l.rect.intersection(this.requestedRect),
			node: e
		};
	}
	updateItemSize(e, t) {
		let n = this.layoutNodes.get(e);
		if (!n) return !1;
		let r = this.virtualizer.collection, i = n.layoutInfo, a = this.orientation === "horizontal" ? "x" : "y", o = this.orientation === "horizontal" ? "width" : "height";
		if (i.estimatedSize = !1, i.rect[o] !== t[o]) {
			let s = i.copy();
			s.rect[o] = t[o], n.layoutInfo = s, this.validRect[o] = Math.min(this.validRect[o], i.rect[a] - this.validRect[a]), n.node?.type === "item" && (this.requestedRect[o] += s.rect[o] - i.rect[o]), this.updateLayoutNode(e, i, s);
			let c = i.parentKey == null ? null : r.getItem(i.parentKey);
			for (; c;) this.updateLayoutNode(c.key, i, s), c = c.parentKey == null ? null : r.getItem(c.parentKey);
			return !0;
		}
		return !1;
	}
	updateLayoutNode(e, t, n) {
		let r = this.layoutNodes.get(e);
		r && (r.validRect = r.validRect.intersection(this.validRect), r.layoutInfo === t && (r.layoutInfo = n));
	}
	getContentSize() {
		return this.contentSize;
	}
	getDropTargetFromPoint(e, t, n) {
		e += this.virtualizer.visibleRect.x, t += this.virtualizer.visibleRect.y;
		let r = new Z(e, Math.max(0, t - this.gap), 1, Math.max(1, this.gap * 2)), i = this.getVisibleLayoutInfos(r), a = null, o = 1 / 0;
		for (let e of i) {
			if (!e.rect.intersects(r)) continue;
			let n = Math.abs(e.rect.y - t), i = Math.abs(e.rect.maxY - t), s = Math.min(n, i);
			s < o && (o = s, a = e.key);
		}
		if (a == null || this.virtualizer.collection.size === 0) return { type: "root" };
		let s = this.getLayoutInfo(a);
		if (!s) return null;
		let c = s.rect, l = {
			type: "item",
			key: s.key,
			dropPosition: "on"
		};
		return n(l) ? t <= c.y + 10 && n({
			...l,
			dropPosition: "before"
		}) ? l.dropPosition = "before" : t >= c.maxY - 10 && n({
			...l,
			dropPosition: "after"
		}) && (l.dropPosition = "after") : t <= c.y + c.height / 2 && n({
			...l,
			dropPosition: "before"
		}) ? l.dropPosition = "before" : n({
			...l,
			dropPosition: "after"
		}) && (l.dropPosition = "after"), l;
	}
	getDropTargetLayoutInfo(e) {
		let t = this.getLayoutInfo(e.key), n;
		if (e.dropPosition === "before") n = this.orientation === "horizontal" ? new Z(Math.max(0, t.rect.x - this.dropIndicatorThickness / 2), t.rect.y, this.dropIndicatorThickness, t.rect.height) : new Z(t.rect.x, Math.max(0, t.rect.y - this.dropIndicatorThickness / 2), t.rect.width, this.dropIndicatorThickness);
		else if (e.dropPosition === "after") {
			let r = this.collection.getItem(e.key);
			if (r) {
				let n = r.level ?? 0, i = this.collection.getKeyAfter(e.key);
				for (; i != null;) {
					let e = this.collection.getItem(i);
					if (!e || e.level <= n) break;
					t = this.getLayoutInfo(i) || t, i = this.collection.getKeyAfter(i);
				}
			}
			n = this.orientation === "horizontal" ? new Z(t.rect.maxX - this.dropIndicatorThickness / 2, t.rect.y, this.dropIndicatorThickness, t.rect.height) : new Z(t.rect.x, t.rect.maxY - this.dropIndicatorThickness / 2, t.rect.width, this.dropIndicatorThickness);
		} else n = t.rect;
		return new Qt("dropIndicator", e.key + ":" + e.dropPosition, n);
	}
};
function en(e, t) {
	let n = [];
	for (let r of e) t(r) && n.push(r);
	return n;
}
var tn = null;
function nn(e = !1) {
	if (tn === null || e) {
		let e = document.createElement("div"), t = e.style;
		t.width = "50px", t.height = "50px", t.overflow = "scroll", t.direction = "rtl";
		let n = document.createElement("div"), r = n.style;
		return r.width = "100px", r.height = "100px", e.appendChild(n), document.body.appendChild(e), e.scrollLeft > 0 ? tn = "positive-descending" : (e.scrollLeft = 1, tn = e.scrollLeft === 0 ? "negative" : "positive-ascending"), document.body.removeChild(e), tn;
	}
	return tn;
}
function rn(e, t) {
	let { scrollLeft: n } = e;
	if (t === "rtl") {
		let { scrollWidth: t, clientWidth: r } = e;
		switch (nn()) {
			case "negative":
				n = -n;
				break;
			case "positive-descending": n = t - r - n;
		}
	}
	return n;
}
function an(t, n) {
	let { contentSize: r, onVisibleRectChange: a, onSizeChange: o, innerStyle: s, onScrollStart: c, onScrollEnd: l, scrollDirection: u = "both", onScroll: d, allowsWindowScrolling: f, ...p } = t, m = (0, Y.useRef)({
		scrollPosition: new X(),
		size: new Q(),
		viewportOffset: new X(),
		viewportSize: new Q(),
		scrollEndTime: 0,
		scrollTimeout: null,
		isScrolling: !1,
		lastVisibleRect: new Z()
	}).current, { direction: h } = e(), g = (0, Y.useCallback)(() => {
		let e = f ? new Z(m.viewportOffset.x + m.scrollPosition.x, m.viewportOffset.y + m.scrollPosition.y, Math.max(0, Math.min(m.size.width - m.viewportOffset.x, m.viewportSize.width)), Math.max(0, Math.min(m.size.height - m.viewportOffset.y, m.viewportSize.height))) : new Z(m.scrollPosition.x, m.scrollPosition.y, m.size.width, m.size.height);
		(e.area > 0 || m.lastVisibleRect.area > 0) && (a(e), m.lastVisibleRect = e);
	}, [
		m,
		f,
		a
	]), [_, v] = (0, Y.useState)(!1), y = (0, Y.useCallback)((e) => {
		let t = ee(e);
		if (A(t, n.current)) {
			if (d && t === n.current && d(e), t !== n.current) {
				let e = n.current.getBoundingClientRect(), t = e.x < 0 ? -e.x : 0, r = e.y < 0 ? -e.y : 0;
				if (t === m.viewportOffset.x && r === m.viewportOffset.y) return;
				m.viewportOffset = new X(t, r);
			} else {
				let e = t.scrollTop, n = rn(t, h);
				m.scrollPosition = new X(Math.max(0, Math.min(n, r.width - m.size.width)), Math.max(0, Math.min(e, r.height - m.size.height)));
			}
			(0, Me.flushSync)(() => {
				g(), m.isScrolling || (m.isScrolling = !0, v(!0), window.dispatchEvent(new Event("tk.disconnect-observer")), c && c());
				let e = Date.now();
				m.scrollEndTime <= e + 50 && (m.scrollEndTime = e + 300, m.scrollTimeout != null && clearTimeout(m.scrollTimeout), m.scrollTimeout = setTimeout(() => {
					m.isScrolling = !1, v(!1), m.scrollTimeout = null, window.dispatchEvent(new Event("tk.connect-observer")), l && l();
				}, 300));
			});
		}
	}, [
		d,
		n,
		h,
		m,
		r,
		g,
		c,
		l
	]);
	(0, Y.useEffect)(() => b(P(n.current, se(n.current)), "scroll", y, !0), [y, n]), (0, Y.useEffect)(() => () => {
		m.scrollTimeout != null && clearTimeout(m.scrollTimeout), m.isScrolling && window.dispatchEvent(new Event("tk.connect-observer"));
	}, []);
	let x = (0, Y.useRef)(!1), S = (0, Y.useCallback)((e) => {
		let t = n.current;
		if (!t || x.current) return;
		x.current = !0, Object.getOwnPropertyNames(window.HTMLElement.prototype).includes("clientWidth"), Object.getOwnPropertyNames(window.HTMLElement.prototype).includes("clientHeight");
		let r = t.clientWidth, i = t.clientHeight, a = r, s = i, c = window.innerWidth, l = window.innerHeight, u = m.viewportSize.width !== c || m.viewportSize.height !== l;
		u && (m.viewportSize = new Q(c, l)), (m.size.width !== a || m.size.height !== s || u) && (m.size = new Q(a, s), e(() => {
			g(), o?.(m.size);
		}), (r !== t.clientWidth || i !== t.clientHeight) && (m.size = new Q(t.clientWidth, t.clientHeight), e(() => {
			g(), o?.(m.size);
		}))), x.current = !1;
	}, [
		n,
		m,
		g,
		o
	]), C = F(S);
	i(() => {
		m.viewportSize = new Q(window.innerWidth, window.innerHeight);
		let e = () => {
			C(Me.flushSync);
		};
		return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
	}, [m]);
	let w = (0, Y.useRef)(null), [T, E] = (0, Y.useState)({});
	i(() => {
		if (!x.current && (w.current == null || !r.equals(w.current))) {
			if (typeof IS_REACT_ACT_ENVIRONMENT == "boolean" ? IS_REACT_ACT_ENVIRONMENT : typeof jest < "u") {
				E({}), w.current = r;
				return;
			}
			queueMicrotask(() => C(Me.flushSync));
		}
		w.current = r;
	}), i(() => {
		C((e) => e());
	}, [T]);
	let D = (0, Y.useCallback)(() => {
		S(Me.flushSync);
	}, [S]);
	de({
		ref: n,
		box: "border-box",
		onResize: D
	});
	let O = {
		padding: 0,
		...p.style
	};
	return u === "horizontal" ? (O.overflowX = "auto", O.overflowY = "hidden") : u === "vertical" || r.width === m.size.width ? (O.overflowY = "auto", O.overflowX = "hidden") : O.overflow = "auto", s = {
		width: Number.isFinite(r.width) ? r.width : void 0,
		height: Number.isFinite(r.height) ? r.height : void 0,
		pointerEvents: _ ? "none" : "auto",
		position: "relative",
		...s
	}, {
		isScrolling: _,
		scrollViewProps: {
			...p,
			style: O
		},
		contentProps: {
			role: "presentation",
			style: s
		}
	};
}
function on(e) {
	let { layoutInfo: t, virtualizer: n, ref: a, shouldObserveItemSize: o } = e, s = t?.key, c = (0, Y.useCallback)(() => {
		if (s != null && a.current) {
			if (!r(a.current)) return;
			let e = sn(a.current);
			n.updateItemSize(s, e);
		}
	}, [
		n,
		s,
		a
	]), l = F(c);
	return i(() => {
		t?.estimatedSize && l();
	}), (0, Y.useEffect)(() => {
		if (!o) return;
		let e = a.current;
		if (!e || typeof ResizeObserver > "u") return;
		let t = new ResizeObserver((e) => {
			e.length && l();
		});
		for (let n of e.children) t.observe(n);
		return () => {
			t.disconnect();
		};
	}, [
		o,
		a,
		s
	]), { updateSize: c };
}
function sn(e) {
	let t = e.style.height;
	e.style.height = "";
	let n = new Q(e.scrollWidth, e.scrollHeight);
	return e.style.height = t, n;
}
function cn(t) {
	let { style: n, className: r, layoutInfo: i, virtualizer: a, parent: o, children: s, shouldObserveItemSize: c } = t, { direction: l } = e(), u = (0, Y.useRef)(null);
	return on({
		layoutInfo: i,
		virtualizer: a,
		ref: u,
		shouldObserveItemSize: c
	}), /* @__PURE__ */ Y.createElement("div", {
		role: "presentation",
		ref: u,
		className: r,
		style: {
			...un(i, l, o),
			...n
		}
	}, s);
}
var ln = /* @__PURE__ */ new WeakMap();
function un(e, t, n) {
	let r = t === "rtl" ? "right" : "left", i = ln.get(e);
	if (i && i[r] != null) {
		if (!n) return i;
		let t = e.rect.y - n.rect.y, a = e.rect.x - n.rect.x;
		if (i.top === t && i[r] === a) return i;
	}
	let a = {
		top: e.rect.y - (n && !(n.allowOverflow && e.isSticky) ? n.rect.y : 0),
		[r]: e.rect.x - (n && !(n.allowOverflow && e.isSticky) ? n.rect.x : 0),
		width: e.rect.width,
		height: e.rect.height
	};
	Object.entries(a).forEach(([e, t]) => {
		Number.isFinite(t) || (a[e] = void 0);
	});
	let o = {
		position: e.isSticky ? "sticky" : "absolute",
		display: e.isSticky ? "inline-block" : void 0,
		overflow: e.allowOverflow ? "visible" : "hidden",
		opacity: e.opacity,
		zIndex: e.zIndex,
		transform: e.transform ?? void 0,
		contain: "size layout style",
		...a
	};
	return ln.set(e, o), o;
}
var dn = /* @__PURE__ */ (0, Y.createContext)(null), fn = /* @__PURE__ */ (0, Y.createContext)(null);
function pn(e) {
	let { children: t, layout: n, layoutOptions: r, shouldObserveItemSize: i } = e, a = (0, Y.useMemo)(() => typeof n == "function" ? new n() : n, [n]), o = (0, Y.useMemo)(() => ({
		isVirtualized: !0,
		layoutDelegate: a,
		dropTargetDelegate: a.getDropTargetFromPoint ? a : void 0,
		CollectionRoot: mn,
		CollectionBranch: hn
	}), [a]);
	return /* @__PURE__ */ Y.createElement(T.Provider, { value: o }, /* @__PURE__ */ Y.createElement(fn.Provider, { value: {
		layout: a,
		layoutOptions: r,
		shouldObserveItemSize: i
	} }, t));
}
function mn({ collection: e, persistedKeys: t, scrollRef: n, renderDropIndicator: r }) {
	let { layout: i, layoutOptions: a, shouldObserveItemSize: o } = (0, Y.useContext)(fn), s = i.useLayoutOptions?.(), c = Xt({
		allowsWindowScrolling: !0,
		layout: i,
		collection: e,
		renderView: (e, t) => t?.render?.(t),
		onVisibleRectChange(e) {
			let t = n?.current;
			t && (t.scrollLeft = e.x, t.scrollTop = e.y);
		},
		persistedKeys: t,
		layoutOptions: (0, Y.useMemo)(() => a && s ? {
			...a,
			...s
		} : a || s, [a, s])
	}), { contentProps: l } = an({
		onVisibleRectChange: c.setVisibleRect,
		onSizeChange: c.setSize,
		contentSize: c.contentSize,
		onScrollStart: c.startScrolling,
		onScrollEnd: c.endScrolling,
		allowsWindowScrolling: !0
	}, n);
	return /* @__PURE__ */ Y.createElement("div", l, /* @__PURE__ */ Y.createElement(dn.Provider, { value: c }, gn(null, c.visibleViews, r, o)));
}
function hn({ parent: e, renderDropIndicator: t }) {
	let n = (0, Y.useContext)(dn).virtualizer.getVisibleView(e.key), { shouldObserveItemSize: r } = (0, Y.useContext)(fn);
	return gn(n, Array.from(n.children), t, r);
}
function gn(e, t, n, r) {
	return t.map((t) => _n(e, t, n, r));
}
function _n(e, t, n, r) {
	let i = /* @__PURE__ */ Y.createElement(cn, {
		key: t.key,
		layoutInfo: t.layoutInfo,
		virtualizer: t.virtualizer,
		parent: e?.layoutInfo,
		shouldObserveItemSize: r
	}, t.rendered), { collection: a, layout: o } = t.virtualizer, s = t.content;
	return s?.type === "item" && n && o.getDropTargetLayoutInfo && (i = /* @__PURE__ */ Y.createElement(Y.Fragment, { key: t.key }, vn(e, t, {
		type: "item",
		key: t.content.key,
		dropPosition: "before"
	}, n), i, fe(a, s, (r) => vn(e, t, r, n)))), i;
}
function vn(e, t, n, r) {
	let i = r(n);
	if (i) {
		let r = t.virtualizer.layout.getDropTargetLayoutInfo(n);
		i = /* @__PURE__ */ Y.createElement(cn, {
			layoutInfo: r,
			virtualizer: t.virtualizer,
			parent: e?.layoutInfo
		}, i);
	}
	return i;
}
var yn = -1 / 0, bn = 1 / 0, xn = -.005, Sn = -.005, Cn = -.01, wn = 1, Tn = .9, En = .8, Dn = .7, On = .6;
function kn(e) {
	return e.toLowerCase() === e;
}
function An(e) {
	return e.toUpperCase() === e;
}
function jn(e) {
	let t = e.length, n = Array(t), r = "/";
	for (let i = 0; i < t; i++) {
		let t = e[i];
		r === "/" ? n[i] = Tn : r === "-" || r === "_" || r === " " ? n[i] = En : r === "." ? n[i] = On : kn(r) && An(t) ? n[i] = Dn : n[i] = 0, r = t;
	}
	return n;
}
function Mn(e, t, n, r, i = !1) {
	let a = e.length, o = t.length, s = i ? e : e.toLowerCase(), c = i ? t : t.toLowerCase(), l = jn(t);
	for (let e = 0; e < a; e++) {
		n[e] = Array(o), r[e] = Array(o);
		let t = yn, i = e === a - 1 ? Sn : Cn;
		for (let a = 0; a < o; a++) if (s[e] === c[a]) {
			let o = yn;
			e ? a && (o = Math.max(r[e - 1][a - 1] + l[a], n[e - 1][a - 1] + wn)) : o = a * xn + l[a], n[e][a] = o, r[e][a] = t = Math.max(o, t + i);
		} else n[e][a] = yn, r[e][a] = t += i;
	}
}
function Nn(e, t, n = !1) {
	let r = e.length, i = t.length;
	if (!r || !i) return yn;
	if (e === t || !n && i === r) return bn;
	if (i > 1024) return yn;
	let a = Array(r), o = Array(r);
	return Mn(e, t, a, o, n), o[r - 1][i - 1];
}
function Pn(e, t) {
	e = e.toLowerCase(), t = t.toLowerCase();
	let n = e.length;
	for (let r = 0, i = 0; r < n; r += 1) if (i = t.indexOf(e[r], i) + 1, i === 0) return !1;
	return !0;
}
var Fn = (e) => e.toLowerCase();
function In(e) {
	return e ?? h.SelectWidgetFilterMode.FILTER_MODE_FUZZY;
}
function Ln(e, t) {
	return t ? Re(e.filter((e) => Pn(t, e.label)), (e) => -Nn(t, e.label)) : e;
}
function Rn(e, t, n) {
	if (!t || n === h.SelectWidgetFilterMode.FILTER_MODE_NONE) return e;
	if (n === h.SelectWidgetFilterMode.FILTER_MODE_FUZZY) return Ln(e, t);
	let r = Fn(t);
	return n === h.SelectWidgetFilterMode.FILTER_MODE_CONTAINS ? e.filter((e) => Fn(e.label).includes(r)) : n === h.SelectWidgetFilterMode.FILTER_MODE_PREFIX ? e.filter((e) => Fn(e.label).startsWith(r)) : e;
}
//#endregion
export { In as a, Rn as i, kt as n, pn as o, $t as r, At as t };

//# sourceMappingURL=fuzzyFilterSelectOptions-KB6RlC97-DFGqimxU.js.map