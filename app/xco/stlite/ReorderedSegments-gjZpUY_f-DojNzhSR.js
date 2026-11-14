import { $i as e, A as t, Bn as n, D as r, Di as i, Dt as a, Kt as o, L as s, M as c, Ma as l, N as u, Nt as d, P as f, Qt as p, St as m, U as h, Ui as g, Ut as _, Wo as v, Xo as y, Xr as b, Y as x, Zn as S, _t as C, a as w, an as T, cn as E, ct as D, ds as ee, ea as O, en as te, er as k, f as A, g as ne, gt as j, ht as M, it as re, j as ie, k as ae, ln as oe, lt as N, m as se, ms as ce, mt as le, nn as ue, nt as de, o as fe, on as pe, ot as P, p as me, rn as he, rt as F, s as ge, sa as _e, st as ve, ta as ye, tn as be, tt as xe, ut as Se, wt as Ce, z as we, za as I, zo as Te } from "./index-B1FrxEMd-BsPMjC5n.js";
import { a as Ee, i as De, n as Oe, r as ke } from "./useFormValidation-Cnit8K9v-CsmEyeH7.js";
import { t as Ae } from "./useFormReset-BZ7HXuA_-BoM-dbzr.js";
import { i as je } from "./Input-B1waFcLc-Ckq09rqm.js";
import { t as Me } from "./useField-BVpgvwQT-C8iZdscS.js";
import { t as Ne } from "./useCollator-DP4BnoIq-QM8AOSx3.js";
import { A as L, C as Pe, D as Fe, E as Ie, M as Le, N as R, O as Re, S as ze, T as z, c as B, d as Be, f as Ve, h as V, i as He, j as Ue, k as We, l as Ge, m as Ke, n as qe, o as Je, p as H, r as Ye, s as U, u as Xe, v as Ze, w as Qe, x as $e, y as W } from "./DateField-BaLw2J5b-CSjqjxpp.js";
import { n as et } from "./useLoadMoreSentinel-7ezKn0I6-CVdwtTzs.js";
import { a as tt, c as nt, n as rt, o as it, r as at, s as ot, t as st, u as ct } from "./useMenuTrigger-BjNvpiW8-jg9Gu40v.js";
//#region ../react/build/ReorderedSegments-gjZpUY_f.js
var G = /* @__PURE__ */ ce(ee(), 1), lt = {};
lt = {
	dateRange: (e) => `${e.startDate} إلى ${e.endDate}`,
	dateSelected: (e) => `${e.date} المحدد`,
	finishRangeSelectionPrompt: "انقر لإنهاء عملية تحديد نطاق التاريخ",
	maximumDate: "آخر تاريخ متاح",
	minimumDate: "أول تاريخ متاح",
	next: "التالي",
	previous: "السابق",
	selectedDateDescription: (e) => `تاريخ محدد: ${e.date}`,
	selectedRangeDescription: (e) => `المدى الزمني المحدد: ${e.dateRange}`,
	startRangeSelectionPrompt: "انقر لبدء عملية تحديد نطاق التاريخ",
	todayDate: (e) => `اليوم، ${e.date}`,
	todayDateSelected: (e) => `اليوم، ${e.date} محدد`
};
var ut = {};
ut = {
	dateRange: (e) => `${e.startDate} до ${e.endDate}`,
	dateSelected: (e) => `Избрано е ${e.date}`,
	finishRangeSelectionPrompt: "Натиснете, за да довършите избора на времеви интервал",
	maximumDate: "Последна налична дата",
	minimumDate: "Първа налична дата",
	next: "Напред",
	previous: "Назад",
	selectedDateDescription: (e) => `Избрана дата: ${e.date}`,
	selectedRangeDescription: (e) => `Избран диапазон: ${e.dateRange}`,
	startRangeSelectionPrompt: "Натиснете, за да пристъпите към избора на времеви интервал",
	todayDate: (e) => `Днес, ${e.date}`,
	todayDateSelected: (e) => `Днес, ${e.date} са избрани`
};
var dt = {};
dt = {
	dateRange: (e) => `${e.startDate} až ${e.endDate}`,
	dateSelected: (e) => `Vybráno ${e.date}`,
	finishRangeSelectionPrompt: "Kliknutím dokončíte výběr rozsahu dat",
	maximumDate: "Poslední dostupné datum",
	minimumDate: "První dostupné datum",
	next: "Další",
	previous: "Předchozí",
	selectedDateDescription: (e) => `Vybrané datum: ${e.date}`,
	selectedRangeDescription: (e) => `Vybrané období: ${e.dateRange}`,
	startRangeSelectionPrompt: "Kliknutím zahájíte výběr rozsahu dat",
	todayDate: (e) => `Dnes, ${e.date}`,
	todayDateSelected: (e) => `Dnes, vybráno ${e.date}`
};
var ft = {};
ft = {
	dateRange: (e) => `${e.startDate} til ${e.endDate}`,
	dateSelected: (e) => `${e.date} valgt`,
	finishRangeSelectionPrompt: "Klik for at fuldføre valg af datoområde",
	maximumDate: "Sidste ledige dato",
	minimumDate: "Første ledige dato",
	next: "Næste",
	previous: "Forrige",
	selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
	selectedRangeDescription: (e) => `Valgt interval: ${e.dateRange}`,
	startRangeSelectionPrompt: "Klik for at starte valg af datoområde",
	todayDate: (e) => `I dag, ${e.date}`,
	todayDateSelected: (e) => `I dag, ${e.date} valgt`
};
var pt = {};
pt = {
	dateRange: (e) => `${e.startDate} bis ${e.endDate}`,
	dateSelected: (e) => `${e.date} ausgewählt`,
	finishRangeSelectionPrompt: "Klicken, um die Auswahl des Datumsbereichs zu beenden",
	maximumDate: "Letztes verfügbares Datum",
	minimumDate: "Erstes verfügbares Datum",
	next: "Weiter",
	previous: "Zurück",
	selectedDateDescription: (e) => `Ausgewähltes Datum: ${e.date}`,
	selectedRangeDescription: (e) => `Ausgewählter Bereich: ${e.dateRange}`,
	startRangeSelectionPrompt: "Klicken, um die Auswahl des Datumsbereichs zu beginnen",
	todayDate: (e) => `Heute, ${e.date}`,
	todayDateSelected: (e) => `Heute, ${e.date} ausgewählt`
};
var mt = {};
mt = {
	dateRange: (e) => `${e.startDate} έως ${e.endDate}`,
	dateSelected: (e) => `Επιλέχθηκε ${e.date}`,
	finishRangeSelectionPrompt: "Κάντε κλικ για να ολοκληρώσετε την επιλογή εύρους ημερομηνιών",
	maximumDate: "Τελευταία διαθέσιμη ημερομηνία",
	minimumDate: "Πρώτη διαθέσιμη ημερομηνία",
	next: "Επόμενο",
	previous: "Προηγούμενο",
	selectedDateDescription: (e) => `Επιλεγμένη ημερομηνία: ${e.date}`,
	selectedRangeDescription: (e) => `Επιλεγμένο εύρος: ${e.dateRange}`,
	startRangeSelectionPrompt: "Κάντε κλικ για να ξεκινήσετε την επιλογή εύρους ημερομηνιών",
	todayDate: (e) => `Σήμερα, ${e.date}`,
	todayDateSelected: (e) => `Σήμερα, επιλέχτηκε ${e.date}`
};
var ht = {};
ht = {
	previous: "Previous",
	next: "Next",
	selectedDateDescription: (e) => `Selected Date: ${e.date}`,
	selectedRangeDescription: (e) => `Selected Range: ${e.dateRange}`,
	todayDate: (e) => `Today, ${e.date}`,
	todayDateSelected: (e) => `Today, ${e.date} selected`,
	dateSelected: (e) => `${e.date} selected`,
	startRangeSelectionPrompt: "Click to start selecting date range",
	finishRangeSelectionPrompt: "Click to finish selecting date range",
	minimumDate: "First available date",
	maximumDate: "Last available date",
	dateRange: (e) => `${e.startDate} to ${e.endDate}`
};
var gt = {};
gt = {
	dateRange: (e) => `${e.startDate} a ${e.endDate}`,
	dateSelected: (e) => `${e.date} seleccionado`,
	finishRangeSelectionPrompt: "Haga clic para terminar de seleccionar rango de fechas",
	maximumDate: "Última fecha disponible",
	minimumDate: "Primera fecha disponible",
	next: "Siguiente",
	previous: "Anterior",
	selectedDateDescription: (e) => `Fecha seleccionada: ${e.date}`,
	selectedRangeDescription: (e) => `Intervalo seleccionado: ${e.dateRange}`,
	startRangeSelectionPrompt: "Haga clic para comenzar a seleccionar un rango de fechas",
	todayDate: (e) => `Hoy, ${e.date}`,
	todayDateSelected: (e) => `Hoy, ${e.date} seleccionado`
};
var _t = {};
_t = {
	dateRange: (e) => `${e.startDate} kuni ${e.endDate}`,
	dateSelected: (e) => `${e.date} valitud`,
	finishRangeSelectionPrompt: "Klõpsake kuupäevavahemiku valimise lõpetamiseks",
	maximumDate: "Viimane saadaolev kuupäev",
	minimumDate: "Esimene saadaolev kuupäev",
	next: "Järgmine",
	previous: "Eelmine",
	selectedDateDescription: (e) => `Valitud kuupäev: ${e.date}`,
	selectedRangeDescription: (e) => `Valitud vahemik: ${e.dateRange}`,
	startRangeSelectionPrompt: "Klõpsake kuupäevavahemiku valimiseks",
	todayDate: (e) => `Täna, ${e.date}`,
	todayDateSelected: (e) => `Täna, ${e.date} valitud`
};
var vt = {};
vt = {
	dateRange: (e) => `${e.startDate} – ${e.endDate}`,
	dateSelected: (e) => `${e.date} valittu`,
	finishRangeSelectionPrompt: "Lopeta päivämääräalueen valinta napsauttamalla tätä.",
	maximumDate: "Viimeinen varattavissa oleva päivämäärä",
	minimumDate: "Ensimmäinen varattavissa oleva päivämäärä",
	next: "Seuraava",
	previous: "Edellinen",
	selectedDateDescription: (e) => `Valittu päivämäärä: ${e.date}`,
	selectedRangeDescription: (e) => `Valittu aikaväli: ${e.dateRange}`,
	startRangeSelectionPrompt: "Aloita päivämääräalueen valinta napsauttamalla tätä.",
	todayDate: (e) => `Tänään, ${e.date}`,
	todayDateSelected: (e) => `Tänään, ${e.date} valittu`
};
var yt = {};
yt = {
	dateRange: (e) => `${e.startDate} à ${e.endDate}`,
	dateSelected: (e) => `${e.date} sélectionné`,
	finishRangeSelectionPrompt: "Cliquer pour finir de sélectionner la plage de dates",
	maximumDate: "Dernière date disponible",
	minimumDate: "Première date disponible",
	next: "Suivant",
	previous: "Précédent",
	selectedDateDescription: (e) => `Date sélectionnée : ${e.date}`,
	selectedRangeDescription: (e) => `Plage sélectionnée : ${e.dateRange}`,
	startRangeSelectionPrompt: "Cliquer pour commencer à sélectionner la plage de dates",
	todayDate: (e) => `Aujourd'hui, ${e.date}`,
	todayDateSelected: (e) => `Aujourd’hui, ${e.date} sélectionné`
};
var bt = {};
bt = {
	dateRange: (e) => `${e.startDate} עד ${e.endDate}`,
	dateSelected: (e) => `${e.date} נבחר`,
	finishRangeSelectionPrompt: "חץ כדי לסיים את בחירת טווח התאריכים",
	maximumDate: "תאריך פנוי אחרון",
	minimumDate: "תאריך פנוי ראשון",
	next: "הבא",
	previous: "הקודם",
	selectedDateDescription: (e) => `תאריך נבחר: ${e.date}`,
	selectedRangeDescription: (e) => `טווח נבחר: ${e.dateRange}`,
	startRangeSelectionPrompt: "לחץ כדי להתחיל בבחירת טווח התאריכים",
	todayDate: (e) => `היום, ${e.date}`,
	todayDateSelected: (e) => `היום, ${e.date} נבחר`
};
var xt = {};
xt = {
	dateRange: (e) => `${e.startDate} do ${e.endDate}`,
	dateSelected: (e) => `${e.date} odabran`,
	finishRangeSelectionPrompt: "Kliknite da dovršite raspon odabranih datuma",
	maximumDate: "Posljednji raspoloživi datum",
	minimumDate: "Prvi raspoloživi datum",
	next: "Sljedeći",
	previous: "Prethodni",
	selectedDateDescription: (e) => `Odabrani datum: ${e.date}`,
	selectedRangeDescription: (e) => `Odabrani raspon: ${e.dateRange}`,
	startRangeSelectionPrompt: "Kliknite da započnete raspon odabranih datuma",
	todayDate: (e) => `Danas, ${e.date}`,
	todayDateSelected: (e) => `Danas, odabran ${e.date}`
};
var St = {};
St = {
	dateRange: (e) => `${e.startDate}–${e.endDate}`,
	dateSelected: (e) => `${e.date} kiválasztva`,
	finishRangeSelectionPrompt: "Kattintson a dátumtartomány kijelölésének befejezéséhez",
	maximumDate: "Utolsó elérhető dátum",
	minimumDate: "Az első elérhető dátum",
	next: "Következő",
	previous: "Előző",
	selectedDateDescription: (e) => `Kijelölt dátum: ${e.date}`,
	selectedRangeDescription: (e) => `Kijelölt tartomány: ${e.dateRange}`,
	startRangeSelectionPrompt: "Kattintson a dátumtartomány kijelölésének indításához",
	todayDate: (e) => `Ma, ${e.date}`,
	todayDateSelected: (e) => `Ma, ${e.date} kijelölve`
};
var Ct = {};
Ct = {
	dateRange: (e) => `Da ${e.startDate} a ${e.endDate}`,
	dateSelected: (e) => `${e.date} selezionata`,
	finishRangeSelectionPrompt: "Fai clic per completare la selezione dell’intervallo di date",
	maximumDate: "Ultima data disponibile",
	minimumDate: "Prima data disponibile",
	next: "Successivo",
	previous: "Precedente",
	selectedDateDescription: (e) => `Data selezionata: ${e.date}`,
	selectedRangeDescription: (e) => `Intervallo selezionato: ${e.dateRange}`,
	startRangeSelectionPrompt: "Fai clic per selezionare l’intervallo di date",
	todayDate: (e) => `Oggi, ${e.date}`,
	todayDateSelected: (e) => `Oggi, ${e.date} selezionata`
};
var wt = {};
wt = {
	dateRange: (e) => `${e.startDate} から ${e.endDate}`,
	dateSelected: (e) => `${e.date} を選択`,
	finishRangeSelectionPrompt: "クリックして日付範囲の選択を終了",
	maximumDate: "最終利用可能日",
	minimumDate: "最初の利用可能日",
	next: "次へ",
	previous: "前へ",
	selectedDateDescription: (e) => `選択した日付 : ${e.date}`,
	selectedRangeDescription: (e) => `選択範囲 : ${e.dateRange}`,
	startRangeSelectionPrompt: "クリックして日付範囲の選択を開始",
	todayDate: (e) => `本日、${e.date}`,
	todayDateSelected: (e) => `本日、${e.date} を選択`
};
var Tt = {};
Tt = {
	dateRange: (e) => `${e.startDate} ~ ${e.endDate}`,
	dateSelected: (e) => `${e.date} 선택됨`,
	finishRangeSelectionPrompt: "날짜 범위 선택을 완료하려면 클릭하십시오.",
	maximumDate: "마지막으로 사용 가능한 일자",
	minimumDate: "처음으로 사용 가능한 일자",
	next: "다음",
	previous: "이전",
	selectedDateDescription: (e) => `선택 일자: ${e.date}`,
	selectedRangeDescription: (e) => `선택 범위: ${e.dateRange}`,
	startRangeSelectionPrompt: "날짜 범위 선택을 시작하려면 클릭하십시오.",
	todayDate: (e) => `오늘, ${e.date}`,
	todayDateSelected: (e) => `오늘, ${e.date} 선택됨`
};
var Et = {};
Et = {
	dateRange: (e) => `Nuo ${e.startDate} iki ${e.endDate}`,
	dateSelected: (e) => `Pasirinkta ${e.date}`,
	finishRangeSelectionPrompt: "Spustelėkite, kad baigtumėte pasirinkti datų intervalą",
	maximumDate: "Paskutinė galima data",
	minimumDate: "Pirmoji galima data",
	next: "Paskesnis",
	previous: "Ankstesnis",
	selectedDateDescription: (e) => `Pasirinkta data: ${e.date}`,
	selectedRangeDescription: (e) => `Pasirinktas intervalas: ${e.dateRange}`,
	startRangeSelectionPrompt: "Spustelėkite, kad pradėtumėte pasirinkti datų intervalą",
	todayDate: (e) => `Šiandien, ${e.date}`,
	todayDateSelected: (e) => `Šiandien, pasirinkta ${e.date}`
};
var Dt = {};
Dt = {
	dateRange: (e) => `No ${e.startDate} līdz ${e.endDate}`,
	dateSelected: (e) => `Atlasīts: ${e.date}`,
	finishRangeSelectionPrompt: "Noklikšķiniet, lai pabeigtu datumu diapazona atlasi",
	maximumDate: "Pēdējais pieejamais datums",
	minimumDate: "Pirmais pieejamais datums",
	next: "Tālāk",
	previous: "Atpakaļ",
	selectedDateDescription: (e) => `Atlasītais datums: ${e.date}`,
	selectedRangeDescription: (e) => `Atlasītais diapazons: ${e.dateRange}`,
	startRangeSelectionPrompt: "Noklikšķiniet, lai sāktu datumu diapazona atlasi",
	todayDate: (e) => `Šodien, ${e.date}`,
	todayDateSelected: (e) => `Atlasīta šodiena, ${e.date}`
};
var Ot = {};
Ot = {
	dateRange: (e) => `${e.startDate} til ${e.endDate}`,
	dateSelected: (e) => `${e.date} valgt`,
	finishRangeSelectionPrompt: "Klikk for å fullføre valg av datoområde",
	maximumDate: "Siste tilgjengelige dato",
	minimumDate: "Første tilgjengelige dato",
	next: "Neste",
	previous: "Forrige",
	selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
	selectedRangeDescription: (e) => `Valgt område: ${e.dateRange}`,
	startRangeSelectionPrompt: "Klikk for å starte valg av datoområde",
	todayDate: (e) => `I dag, ${e.date}`,
	todayDateSelected: (e) => `I dag, ${e.date} valgt`
};
var kt = {};
kt = {
	dateRange: (e) => `${e.startDate} tot ${e.endDate}`,
	dateSelected: (e) => `${e.date} geselecteerd`,
	finishRangeSelectionPrompt: "Klik om de selectie van het datumbereik te voltooien",
	maximumDate: "Laatste beschikbare datum",
	minimumDate: "Eerste beschikbare datum",
	next: "Volgende",
	previous: "Vorige",
	selectedDateDescription: (e) => `Geselecteerde datum: ${e.date}`,
	selectedRangeDescription: (e) => `Geselecteerd bereik: ${e.dateRange}`,
	startRangeSelectionPrompt: "Klik om het datumbereik te selecteren",
	todayDate: (e) => `Vandaag, ${e.date}`,
	todayDateSelected: (e) => `Vandaag, ${e.date} geselecteerd`
};
var At = {};
At = {
	dateRange: (e) => `${e.startDate} do ${e.endDate}`,
	dateSelected: (e) => `Wybrano ${e.date}`,
	finishRangeSelectionPrompt: "Kliknij, aby zakończyć wybór zakresu dat",
	maximumDate: "Ostatnia dostępna data",
	minimumDate: "Pierwsza dostępna data",
	next: "Dalej",
	previous: "Wstecz",
	selectedDateDescription: (e) => `Wybrana data: ${e.date}`,
	selectedRangeDescription: (e) => `Wybrany zakres: ${e.dateRange}`,
	startRangeSelectionPrompt: "Kliknij, aby rozpocząć wybór zakresu dat",
	todayDate: (e) => `Dzisiaj, ${e.date}`,
	todayDateSelected: (e) => `Dzisiaj wybrano ${e.date}`
};
var jt = {};
jt = {
	dateRange: (e) => `${e.startDate} a ${e.endDate}`,
	dateSelected: (e) => `${e.date} selecionado`,
	finishRangeSelectionPrompt: "Clique para concluir a seleção do intervalo de datas",
	maximumDate: "Última data disponível",
	minimumDate: "Primeira data disponível",
	next: "Próximo",
	previous: "Anterior",
	selectedDateDescription: (e) => `Data selecionada: ${e.date}`,
	selectedRangeDescription: (e) => `Intervalo selecionado: ${e.dateRange}`,
	startRangeSelectionPrompt: "Clique para iniciar a seleção do intervalo de datas",
	todayDate: (e) => `Hoje, ${e.date}`,
	todayDateSelected: (e) => `Hoje, ${e.date} selecionado`
};
var Mt = {};
Mt = {
	dateRange: (e) => `${e.startDate} a ${e.endDate}`,
	dateSelected: (e) => `${e.date} selecionado`,
	finishRangeSelectionPrompt: "Clique para terminar de selecionar o intervalo de datas",
	maximumDate: "Última data disponível",
	minimumDate: "Primeira data disponível",
	next: "Próximo",
	previous: "Anterior",
	selectedDateDescription: (e) => `Data selecionada: ${e.date}`,
	selectedRangeDescription: (e) => `Intervalo selecionado: ${e.dateRange}`,
	startRangeSelectionPrompt: "Clique para começar a selecionar o intervalo de datas",
	todayDate: (e) => `Hoje, ${e.date}`,
	todayDateSelected: (e) => `Hoje, ${e.date} selecionado`
};
var Nt = {};
Nt = {
	dateRange: (e) => `De la ${e.startDate} până la ${e.endDate}`,
	dateSelected: (e) => `${e.date} selectată`,
	finishRangeSelectionPrompt: "Apăsaţi pentru a finaliza selecţia razei pentru dată",
	maximumDate: "Ultima dată disponibilă",
	minimumDate: "Prima dată disponibilă",
	next: "Următorul",
	previous: "Înainte",
	selectedDateDescription: (e) => `Dată selectată: ${e.date}`,
	selectedRangeDescription: (e) => `Interval selectat: ${e.dateRange}`,
	startRangeSelectionPrompt: "Apăsaţi pentru a începe selecţia razei pentru dată",
	todayDate: (e) => `Astăzi, ${e.date}`,
	todayDateSelected: (e) => `Azi, ${e.date} selectată`
};
var Pt = {};
Pt = {
	dateRange: (e) => `С ${e.startDate} по ${e.endDate}`,
	dateSelected: (e) => `Выбрано ${e.date}`,
	finishRangeSelectionPrompt: "Щелкните, чтобы завершить выбор диапазона дат",
	maximumDate: "Последняя доступная дата",
	minimumDate: "Первая доступная дата",
	next: "Далее",
	previous: "Назад",
	selectedDateDescription: (e) => `Выбранная дата: ${e.date}`,
	selectedRangeDescription: (e) => `Выбранный диапазон: ${e.dateRange}`,
	startRangeSelectionPrompt: "Щелкните, чтобы начать выбор диапазона дат",
	todayDate: (e) => `Сегодня, ${e.date}`,
	todayDateSelected: (e) => `Сегодня, выбрано ${e.date}`
};
var Ft = {};
Ft = {
	dateRange: (e) => `Od ${e.startDate} do ${e.endDate}`,
	dateSelected: (e) => `Vybratý dátum ${e.date}`,
	finishRangeSelectionPrompt: "Kliknutím dokončíte výber rozsahu dátumov",
	maximumDate: "Posledný dostupný dátum",
	minimumDate: "Prvý dostupný dátum",
	next: "Nasledujúce",
	previous: "Predchádzajúce",
	selectedDateDescription: (e) => `Vybratý dátum: ${e.date}`,
	selectedRangeDescription: (e) => `Vybratý rozsah: ${e.dateRange}`,
	startRangeSelectionPrompt: "Kliknutím spustíte výber rozsahu dátumov",
	todayDate: (e) => `Dnes ${e.date}`,
	todayDateSelected: (e) => `Vybratý dnešný dátum ${e.date}`
};
var It = {};
It = {
	dateRange: (e) => `${e.startDate} do ${e.endDate}`,
	dateSelected: (e) => `${e.date} izbrano`,
	finishRangeSelectionPrompt: "Kliknite za dokončanje izbire datumskega obsega",
	maximumDate: "Zadnji razpoložljivi datum",
	minimumDate: "Prvi razpoložljivi datum",
	next: "Naprej",
	previous: "Nazaj",
	selectedDateDescription: (e) => `Izbrani datum: ${e.date}`,
	selectedRangeDescription: (e) => `Izbrano območje: ${e.dateRange}`,
	startRangeSelectionPrompt: "Kliknite za začetek izbire datumskega obsega",
	todayDate: (e) => `Danes, ${e.date}`,
	todayDateSelected: (e) => `Danes, ${e.date} izbrano`
};
var Lt = {};
Lt = {
	dateRange: (e) => `${e.startDate} do ${e.endDate}`,
	dateSelected: (e) => `${e.date} izabran`,
	finishRangeSelectionPrompt: "Kliknite da dovršite opseg izabranih datuma",
	maximumDate: "Zadnji raspoloživi datum",
	minimumDate: "Prvi raspoloživi datum",
	next: "Sledeći",
	previous: "Prethodni",
	selectedDateDescription: (e) => `Izabrani datum: ${e.date}`,
	selectedRangeDescription: (e) => `Izabrani period: ${e.dateRange}`,
	startRangeSelectionPrompt: "Kliknite da započnete opseg izabranih datuma",
	todayDate: (e) => `Danas, ${e.date}`,
	todayDateSelected: (e) => `Danas, izabran ${e.date}`
};
var Rt = {};
Rt = {
	dateRange: (e) => `${e.startDate} till ${e.endDate}`,
	dateSelected: (e) => `${e.date} har valts`,
	finishRangeSelectionPrompt: "Klicka för att avsluta val av datumintervall",
	maximumDate: "Sista tillgängliga datum",
	minimumDate: "Första tillgängliga datum",
	next: "Nästa",
	previous: "Föregående",
	selectedDateDescription: (e) => `Valt datum: ${e.date}`,
	selectedRangeDescription: (e) => `Valt intervall: ${e.dateRange}`,
	startRangeSelectionPrompt: "Klicka för att välja datumintervall",
	todayDate: (e) => `Idag, ${e.date}`,
	todayDateSelected: (e) => `Idag, ${e.date} har valts`
};
var zt = {};
zt = {
	dateRange: (e) => `${e.startDate} - ${e.endDate}`,
	dateSelected: (e) => `${e.date} seçildi`,
	finishRangeSelectionPrompt: "Tarih aralığı seçimini tamamlamak için tıklayın",
	maximumDate: "Son müsait tarih",
	minimumDate: "İlk müsait tarih",
	next: "Sonraki",
	previous: "Önceki",
	selectedDateDescription: (e) => `Seçilen Tarih: ${e.date}`,
	selectedRangeDescription: (e) => `Seçilen Aralık: ${e.dateRange}`,
	startRangeSelectionPrompt: "Tarih aralığı seçimini başlatmak için tıklayın",
	todayDate: (e) => `Bugün, ${e.date}`,
	todayDateSelected: (e) => `Bugün, ${e.date} seçildi`
};
var Bt = {};
Bt = {
	dateRange: (e) => `${e.startDate} — ${e.endDate}`,
	dateSelected: (e) => `Вибрано ${e.date}`,
	finishRangeSelectionPrompt: "Натисніть, щоб завершити вибір діапазону дат",
	maximumDate: "Остання доступна дата",
	minimumDate: "Перша доступна дата",
	next: "Наступний",
	previous: "Попередній",
	selectedDateDescription: (e) => `Вибрана дата: ${e.date}`,
	selectedRangeDescription: (e) => `Вибраний діапазон: ${e.dateRange}`,
	startRangeSelectionPrompt: "Натисніть, щоб почати вибір діапазону дат",
	todayDate: (e) => `Сьогодні, ${e.date}`,
	todayDateSelected: (e) => `Сьогодні, вибрано ${e.date}`
};
var Vt = {};
Vt = {
	dateRange: (e) => `${e.startDate} 至 ${e.endDate}`,
	dateSelected: (e) => `已选择 ${e.date}`,
	finishRangeSelectionPrompt: "单击以完成选择日期范围",
	maximumDate: "最后一个可用日期",
	minimumDate: "第一个可用日期",
	next: "下一页",
	previous: "上一页",
	selectedDateDescription: (e) => `选定的日期：${e.date}`,
	selectedRangeDescription: (e) => `选定的范围：${e.dateRange}`,
	startRangeSelectionPrompt: "单击以开始选择日期范围",
	todayDate: (e) => `今天，即 ${e.date}`,
	todayDateSelected: (e) => `已选择今天，即 ${e.date}`
};
var Ht = {};
Ht = {
	dateRange: (e) => `${e.startDate} 至 ${e.endDate}`,
	dateSelected: (e) => `已選取 ${e.date}`,
	finishRangeSelectionPrompt: "按一下以完成選取日期範圍",
	maximumDate: "最後一個可用日期",
	minimumDate: "第一個可用日期",
	next: "下一頁",
	previous: "上一頁",
	selectedDateDescription: (e) => `選定的日期：${e.date}`,
	selectedRangeDescription: (e) => `選定的範圍：${e.dateRange}`,
	startRangeSelectionPrompt: "按一下以開始選取日期範圍",
	todayDate: (e) => `今天，${e.date}`,
	todayDateSelected: (e) => `已選取今天，${e.date}`
};
var K = {};
K = {
	"ar-AE": lt,
	"bg-BG": ut,
	"cs-CZ": dt,
	"da-DK": ft,
	"de-DE": pt,
	"el-GR": mt,
	"en-US": ht,
	"es-ES": gt,
	"et-EE": _t,
	"fi-FI": vt,
	"fr-FR": yt,
	"he-IL": bt,
	"hr-HR": xt,
	"hu-HU": St,
	"it-IT": Ct,
	"ja-JP": wt,
	"ko-KR": Tt,
	"lt-LT": Et,
	"lv-LV": Dt,
	"nb-NO": Ot,
	"nl-NL": kt,
	"pl-PL": At,
	"pt-BR": jt,
	"pt-PT": Mt,
	"ro-RO": Nt,
	"ru-RU": Pt,
	"sk-SK": Ft,
	"sl-SI": It,
	"sr-SP": Lt,
	"sv-SE": Rt,
	"tr-TR": zt,
	"uk-UA": Bt,
	"zh-CN": Vt,
	"zh-TW": Ht
};
function Ut(e) {
	return e && e.__esModule ? e.default : e;
}
var Wt = /* @__PURE__ */ new WeakMap();
function q(e) {
	return e?.calendar.identifier === "gregory" && e.era === "BC" ? "short" : void 0;
}
function Gt(e) {
	let t = _(Ut(K), "@react-aria/calendar"), n, i;
	"highlightedRange" in e ? {start: n, end: i} = e.highlightedRange || {} : (n = Array.isArray(e.value) ? e.value[0] : e.value ?? void 0, i = Array.isArray(e.value) ? e.value.at(-1) : e.value ?? void 0);
	let a = V({
		weekday: "long",
		month: "long",
		year: "numeric",
		day: "numeric",
		era: q(n) || q(i),
		timeZone: e.timeZone
	}), { locale: o } = r(), s = (0, G.useMemo)(() => new Intl.ListFormat(o), [o]), c = "anchorDate" in e ? e.anchorDate : null;
	return (0, G.useMemo)(() => {
		if (!c && n && i) {
			if (H(n, i)) {
				let r = a.format(n.toDate(e.timeZone));
				return t.format("selectedDateDescription", { date: r });
			}
			if ("highlightedRange" in e) {
				let r = qt(a, t, n, i, e.timeZone);
				return t.format("selectedRangeDescription", { dateRange: r });
			}
			if (Array.isArray(e.value)) {
				let n = e.value.map((t) => a.format(t.toDate(e.timeZone))), r = s.format(n);
				return t.format("selectedDateDescription", { date: r });
			}
		}
		return "";
	}, [
		n,
		i,
		c,
		e,
		t,
		a,
		s
	]);
}
function Kt(e, t, n, r) {
	let i = _(Ut(K), "@react-aria/calendar"), a = q(e) || q(t), o = V({
		month: "long",
		year: "numeric",
		era: a,
		calendar: e.calendar.identifier,
		timeZone: n
	}), s = V({
		month: "long",
		year: "numeric",
		day: "numeric",
		era: a,
		calendar: e.calendar.identifier,
		timeZone: n
	});
	return (0, G.useMemo)(() => {
		if (H(e, R(e))) {
			let a = e, s = t;
			if (e.calendar.getFormattableMonth && (a = e.calendar.getFormattableMonth(e)), t.calendar.getFormattableMonth && (s = t.calendar.getFormattableMonth(t)), H(t, L(e))) return o.format(a.toDate(n));
			if (H(t, L(t))) return r ? qt(o, i, a, s, n) : o.formatRange(a.toDate(n), s.toDate(n));
		}
		return r ? qt(s, i, e, t, n) : s.formatRange(e.toDate(n), t.toDate(n));
	}, [
		e,
		t,
		o,
		s,
		i,
		n,
		r
	]);
}
function qt(e, t, n, r, i) {
	let a = e.formatRangeToParts(n.toDate(i), r.toDate(i)), o = -1;
	for (let e = 0; e < a.length; e++) {
		let t = a[e];
		if (t.source === "shared" && t.type === "literal") o = e;
		else if (t.source === "endRange") break;
	}
	let s = "", c = "";
	for (let e = 0; e < a.length; e++) e < o ? s += a[e].value : e > o && (c += a[e].value);
	return t.format("dateRange", {
		startDate: s,
		endDate: c
	});
}
function Jt(e) {
	return e && e.__esModule ? e.default : e;
}
function Yt(e, t) {
	let n = _(Jt(K), "@react-aria/calendar"), r = M(e), i = Kt(t.visibleRange.start, t.visibleRange.end, t.timeZone, !1), a = Kt(t.visibleRange.start, t.visibleRange.end, t.timeZone, !0);
	nt(() => {
		t.isFocused || m(a);
	}, [a]);
	let o = Gt(t);
	nt(() => {
		o && m(o, "polite", 4e3);
	}, [o]);
	let s = c([
		!!e.errorMessage,
		e.isInvalid,
		e.validationState
	]);
	Wt.set(t, {
		ariaLabel: e["aria-label"],
		ariaLabelledBy: e["aria-labelledby"],
		errorMessageId: s,
		selectedDateDescription: o
	});
	let [l, u] = (0, G.useState)(!1), f = e.isDisabled || t.isNextVisibleRangeInvalid();
	f && l && (u(!1), t.setFocused(!0));
	let [p, h] = (0, G.useState)(!1), g = e.isDisabled || t.isPreviousVisibleRangeInvalid();
	g && p && (h(!1), t.setFocused(!0));
	let v = te({
		id: e.id,
		"aria-label": [e["aria-label"], a].filter(Boolean).join(", "),
		"aria-labelledby": e["aria-labelledby"]
	});
	return {
		calendarProps: d(r, v, {
			role: "application",
			"aria-details": e["aria-details"] || void 0,
			"aria-describedby": e["aria-describedby"] || void 0
		}),
		nextButtonProps: {
			onPress: () => t.focusNextPage(),
			"aria-label": n.format("next"),
			isDisabled: f,
			onFocusChange: u
		},
		prevButtonProps: {
			onPress: () => t.focusPreviousPage(),
			"aria-label": n.format("previous"),
			isDisabled: g,
			onFocusChange: h
		},
		errorMessageProps: { id: s },
		title: i
	};
}
function Xt(e, t) {
	return Yt(e, t);
}
function Zt(e, t) {
	let { startDate: n = t.visibleRange.start, endDate: i = t.visibleRange.end, firstDayOfWeek: a } = e, { direction: o } = r(), { keyboardProps: s } = le({ shortcuts: {
		End: () => {
			t.focusSectionEnd();
		},
		Home: () => {
			t.focusSectionStart();
		},
		Escape: () => ("setAnchorDate" in t && t.setAnchorDate(null), !1)
	} }), { keyboardProps: c } = le({
		shortcuts: {
			Enter: () => {
				t.selectFocusedDate();
			},
			" ": () => {
				t.selectFocusedDate();
			},
			PageUp: () => {
				t.focusPreviousSection();
			},
			"Shift+PageUp": () => {
				t.focusPreviousSection(!0);
			},
			PageDown: () => {
				t.focusNextSection();
			},
			"Shift+PageDown": () => {
				t.focusNextSection(!0);
			},
			ArrowLeft: () => {
				o === "rtl" ? t.focusNextDay() : t.focusPreviousDay();
			},
			ArrowUp: () => {
				t.focusPreviousRow();
			},
			ArrowRight: () => {
				o === "rtl" ? t.focusPreviousDay() : t.focusNextDay();
			},
			ArrowDown: () => {
				t.focusNextRow();
			}
		},
		allowRepeats: !0
	}), l = Kt(n, i, t.timeZone, !0), { ariaLabel: u, ariaLabelledBy: f } = Wt.get(t), p = te({
		"aria-label": [u, l].filter(Boolean).join(", "),
		"aria-labelledby": f
	}), m = V({
		weekday: e.weekdayStyle || "narrow",
		timeZone: t.timeZone
	}), { locale: h } = r(), g = (0, G.useMemo)(() => {
		let e = t.visibleDuration.days && t.visibleDuration.days < 7, r = e ? n : Je(W(t.timeZone), h, a), i = e ? t.visibleDuration.days : 7;
		return [...Array(i).keys()].map((e) => {
			let n = r.add({ days: e }).toDate(t.timeZone);
			return m.format(n);
		});
	}, [
		h,
		t.timeZone,
		m,
		a,
		n,
		t.visibleDuration.days
	]), _ = t.getWeeksInMonth(n);
	return {
		gridProps: d(p, {
			role: "grid",
			"aria-readonly": t.isReadOnly || void 0,
			"aria-disabled": t.isDisabled || void 0,
			"aria-multiselectable": "highlightedRange" in t || t.selectionMode === "multiple" || void 0,
			onFocus: () => t.setFocused(!0),
			onBlur: () => t.setFocused(!1)
		}, s, c),
		headerProps: { "aria-hidden": !0 },
		weekDays: g,
		weeksInMonth: _
	};
}
function Qt(e) {
	return e && e.__esModule ? e.default : e;
}
function $t(e, t, n) {
	let { date: r, isDisabled: i } = e, { errorMessageId: a, selectedDateDescription: s } = Wt.get(t), c = _(Qt(K), "@react-aria/calendar"), l = V({
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric",
		era: q(r),
		timeZone: t.timeZone
	}), u = t.isCellFocused(r) && !e.isOutsideMonth;
	i = i || t.isCellDisabled(r) || !!e.isOutsideMonth;
	let f = t.isCellUnavailable(r), p = !i && !f, m = t.isSelected(r) && p, g = !1;
	t.isValueInvalid && ("highlightedRange" in t ? g = !t.anchorDate && t.highlightedRange != null && r.compare(t.highlightedRange.start) >= 0 && r.compare(t.highlightedRange.end) <= 0 : Array.isArray(t.value) ? g = t.value.some((e) => H(e, r)) : t.value && (g = H(t.value, r))), g && !i && (m = !0), r = Ge(r, Le);
	let v = (0, G.useMemo)(() => r.toDate(t.timeZone), [r, t.timeZone]), y = ze(r, t.timeZone), b = (0, G.useMemo)(() => {
		let e = "";
		return "highlightedRange" in t && t.value && !t.anchorDate && (H(r, t.value.start) || H(r, t.value.end)) && (e = s + ", "), e += l.format(v), y ? e = c.format(m ? "todayDateSelected" : "todayDate", { date: e }) : m && (e = c.format("dateSelected", { date: e })), t.minValue && H(r, t.minValue) ? e += ", " + c.format("minimumDate") : t.maxValue && H(r, t.maxValue) && (e += ", " + c.format("maximumDate")), e;
	}, [
		l,
		v,
		c,
		m,
		y,
		r,
		t,
		s
	]), x = "";
	"anchorDate" in t && u && !t.isReadOnly && p && (x = t.anchorDate ? c.format("finishRangeSelectionPrompt") : c.format("startRangeSelectionPrompt"));
	let S = fe(x), C = (0, G.useRef)(!1), w = (0, G.useRef)(!1), T = (0, G.useRef)(void 0), { pressProps: E, isPressed: D } = o({
		shouldCancelOnPointerExit: "anchorDate" in t && !!t.anchorDate,
		preventFocusOnPress: !0,
		isDisabled: !p || t.isReadOnly,
		onPressStart(e) {
			if (t.isReadOnly) {
				t.setFocusedDate(r), t.setFocused(!0);
				return;
			}
			if ("highlightedRange" in t && !t.anchorDate && (e.pointerType === "mouse" || e.pointerType === "touch")) {
				if (t.highlightedRange && !g) {
					if (H(r, t.highlightedRange.start)) {
						t.setAnchorDate(t.highlightedRange.end), t.setFocusedDate(r), t.setFocused(!0), t.setDragging(!0), w.current = !0;
						return;
					}
					if (H(r, t.highlightedRange.end)) {
						t.setAnchorDate(t.highlightedRange.start), t.setFocusedDate(r), t.setFocused(!0), t.setDragging(!0), w.current = !0;
						return;
					}
				}
				let n = () => {
					t.setDragging(!0), T.current = void 0, t.selectDate(r), t.setFocusedDate(r), t.setFocused(!0), C.current = !0;
				};
				e.pointerType === "touch" ? T.current = setTimeout(n, 200) : n();
			}
		},
		onPressEnd() {
			w.current = !1, C.current = !1, clearTimeout(T.current), T.current = void 0;
		},
		onPress() {
			!("anchorDate" in t) && !t.isReadOnly && (t.selectDate(r), t.setFocusedDate(r), t.setFocused(!0));
		},
		onPressUp(e) {
			t.isReadOnly || ("anchorDate" in t && T.current && (t.selectDate(r), t.setFocusedDate(r), t.setFocused(!0)), "anchorDate" in t && (w.current ? t.setAnchorDate(r) : t.anchorDate && !C.current ? (t.selectDate(r), t.setFocusedDate(r), t.setFocused(!0)) : e.pointerType === "keyboard" && !t.anchorDate ? (t.selectDate(r), t.focusNearestAvailableDate(r)) : e.pointerType === "virtual" && (t.selectDate(r), t.setFocusedDate(r), t.setFocused(!0))));
		}
	}), ee;
	i || (ee = H(r, t.focusedDate) ? 0 : -1), (0, G.useEffect)(() => {
		u && n.current && (ge(n.current), j() !== "pointer" && se() === n.current && h(n.current, { containingElement: ie(n.current) }));
	}, [u, n]);
	let O = V({
		day: "numeric",
		timeZone: t.timeZone,
		calendar: r.calendar.identifier
	}), te = (0, G.useMemo)(() => O.formatToParts(v).find((e) => e.type === "day").value, [O, v]);
	return {
		cellProps: {
			role: "gridcell",
			"aria-disabled": !p || void 0,
			"aria-selected": m || void 0,
			"aria-invalid": g || void 0
		},
		buttonProps: d(E, {
			onFocus() {
				i || (t.setFocusedDate(r), t.setFocused(!0));
			},
			tabIndex: ee,
			role: "button",
			"aria-disabled": !p || void 0,
			"aria-label": b,
			"aria-invalid": g || void 0,
			"aria-describedby": [g ? a : void 0, S["aria-describedby"]].filter(Boolean).join(" ") || void 0,
			onPointerEnter(e) {
				"highlightDate" in t && (e.pointerType !== "touch" || t.isDragging) && p && t.highlightDate(r);
			},
			onPointerDown(e) {
				let t = ne(e);
				t instanceof HTMLElement && "releasePointerCapture" in t && ("hasPointerCapture" in t ? t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId) : t.releasePointerCapture(e.pointerId));
			},
			onContextMenu(e) {
				e.preventDefault();
			}
		}),
		isPressed: D,
		isFocused: u,
		isSelected: m,
		isDisabled: i,
		isUnavailable: f,
		isOutsideVisibleRange: r.compare(t.visibleRange.start) < 0 || r.compare(t.visibleRange.end) > 0,
		isInvalid: g,
		formattedDate: te
	};
}
function en(e, t) {
	let n = V({
		month: e.format || "short",
		calendar: t.focusedDate.calendar.identifier,
		timeZone: t.timeZone
	}), i = [], a = t.focusedDate.calendar.getMonthsInYear(t.focusedDate);
	for (let e = 1; e <= a; e++) {
		let r = t.focusedDate.set({ month: e }), a = r.calendar.getFormattableMonth ? r.calendar.getFormattableMonth(r) : r;
		i.push({
			id: e,
			date: r,
			formatted: n.format(a.toDate(t.timeZone))
		});
	}
	let { locale: o } = r();
	return {
		"aria-label": (0, G.useMemo)(() => new Intl.DisplayNames(o, { type: "dateTimeField" }).of("month"), [o]),
		value: t.focusedDate.month,
		onChange: (e) => {
			e != null && t.setFocusedDate(i[Number(e) - 1].date);
		},
		items: i
	};
}
function tn(e, t) {
	let n = V({
		year: e.format?.year || "numeric",
		era: e.format?.era || (t.focusedDate.calendar.identifier === "gregory" && t.focusedDate.era === "BC" ? "short" : void 0),
		calendar: t.focusedDate.calendar.identifier,
		timeZone: t.timeZone
	}), i = e.visibleYears || 20, a = t.focusedDate.subtract({ years: Math.floor(i / 2) }), o = t.focusedDate.add({ years: Math.ceil(i / 2) - 1 });
	t.maxValue && o.compare(t.maxValue) > 0 && (o = z(t.maxValue), a = o.subtract({ years: i - 1 })), t.minValue && a.compare(t.minValue) < 0 && (a = z(t.minValue), o = a.add({ years: i - 1 }), t.maxValue && o.compare(t.maxValue) > 0 && (o = z(t.maxValue)));
	let s = [], c = a, l = 0;
	for (; c.compare(o) <= 0;) Re(c, t.focusedDate) && (l = s.length), s.push({
		id: s.length,
		date: c,
		formatted: n.format(c.toDate(t.timeZone))
	}), c = c.add({ years: 1 });
	let { locale: u } = r();
	return {
		"aria-label": (0, G.useMemo)(() => new Intl.DisplayNames(u, { type: "dateTimeField" }).of("year"), [u]),
		value: l,
		onChange: (e) => {
			e != null && t.setFocusedDate(s[e].date);
		},
		items: s
	};
}
function nn(e, t, n) {
	let { commitBehavior: r = "select", ...i } = e, a = Yt(i, t), o = (0, G.useRef)(!1), s = (0, G.useRef)(typeof window < "u" ? window : null);
	x(s, "pointerdown", (e) => {
		o.current = e.width === 0 && e.height === 0;
	});
	let c = {
		clear: () => t.clearSelection(),
		reset: () => t.setAnchorDate(null),
		select: () => t.commitSelection()
	};
	return x(s, "pointerup", (e) => {
		if (o.current) {
			o.current = !1;
			return;
		}
		if (t.setDragging(!1), !t.anchorDate) return;
		let i = ne(e);
		n.current && me(n.current) && (!A(n.current, i) || !i.closest("button, [role=\"button\"]")) && c[r]();
	}), a.calendarProps.onBlur = (e) => {
		n.current && (!e.relatedTarget || !A(n.current, e.relatedTarget)) && t.anchorDate && c[r]();
	}, x(n, "touchmove", (e) => {
		t.isDragging && e.preventDefault();
	}, {
		passive: !1,
		capture: !0
	}), a;
}
function J(e, t, n) {
	return t != null && e.compare(t) < 0 || n != null && e.compare(n) > 0;
}
function rn(e, t, n, r, i) {
	let a = {};
	for (let e in t) a[e] = Math.floor(t[e] / 2), a[e] > 0 && t[e] % 2 == 0 && a[e]--;
	return X(e, Y(e, t, n).subtract(a), t, n, r, i);
}
function Y(e, t, n, r, i) {
	let a = e;
	return t.years ? a = We(e) : t.months ? a = R(e) : (t.weeks || t.days && t.days > 7) && (a = Je(e, n)), X(e, a, t, n, r, i);
}
function an(e, t, n, r, i) {
	let a = { ...t };
	return a.days ? a.days-- : a.weeks ? a.weeks-- : a.months ? a.months-- : a.years && a.years--, X(e, Y(e, t, n).subtract(a), t, n, r, i);
}
function X(e, t, n, r, i, a) {
	if (i && e.compare(i) >= 0) {
		let e = Ue(t, Y(z(i), n, r));
		e && (t = e);
	}
	if (a && e.compare(a) <= 0) {
		let e = qe(t, an(z(a), n, r));
		e && (t = e);
	}
	return t;
}
function Z(e, t, n) {
	if (t) {
		let n = Ue(e, z(t));
		n && (e = n);
	}
	if (n) {
		let t = qe(e, z(n));
		t && (e = t);
	}
	return e;
}
function on(e, t, n) {
	if (!n) return e;
	for (; e.compare(t) >= 0 && n(e);) e = e.subtract({ days: 1 });
	return e.compare(t) >= 0 ? e : null;
}
function sn(e, t) {
	return e === t || e.days === t.days && e.weeks === t.weeks && e.months === t.months && e.years === t.years;
}
function cn(e) {
	let t = (0, G.useMemo)(() => new Fe(e.locale), [e.locale]), n = (0, G.useMemo)(() => t.resolvedOptions(), [t]), { locale: r, createCalendar: i, visibleDuration: a = { months: 1 }, minValue: o, maxValue: s, selectionAlignment: c, isDateUnavailable: l, pageBehavior: u = "visible", selectionMode: d = "single", firstDayOfWeek: p, weeksInMonth: m } = e, h = (0, G.useMemo)(() => i(n.calendar), [i, n.calendar]), [g, _] = f(e.value, e.defaultValue ?? null, e.onChange), v = (0, G.useMemo)(() => Array.isArray(g) ? g.map((e) => U(z(e), h)) : g ? U(z(g), h) : null, [g, h]), y = (0, G.useMemo)(() => {
		let e = Array.isArray(g) ? g[0] : g;
		return e && "timeZone" in e ? e.timeZone : n.timeZone;
	}, [g, n.timeZone]), b = (0, G.useMemo)(() => e.focusedValue ? Z(U(z(e.focusedValue), h), o, s) : void 0, [
		e.focusedValue,
		h,
		o,
		s
	]), x = (0, G.useMemo)(() => e.defaultFocusedValue ? Z(U(z(e.defaultFocusedValue), h), o, s) : Z(v ? Array.isArray(v) ? v[0] : v : U(W(y), h), o, s), [
		e.defaultFocusedValue,
		v,
		y,
		h,
		o,
		s
	]), [S, C] = f(b, x, e.onFocusChange), w = () => {
		switch (c) {
			case "start": return Y(S, a, r, o, s);
			case "end": return an(S, a, r, o, s);
			default: return rn(S, a, r, o, s);
		}
	}, [T, E] = (0, G.useState)(w), [D, ee] = (0, G.useState)(e.autoFocus || !1), [O, te] = (0, G.useState)(a);
	sn(a, O) || (te(a), E(w()));
	let k = (0, G.useMemo)(() => {
		let e = { ...a };
		return e.days ? e.days-- : e.days = -1, T.add(e);
	}, [T, a]), [A, ne] = (0, G.useState)(h);
	if (!Be(h, A)) {
		let e = U(S, h);
		E(rn(e, a, r, o, s)), C(e), ne(h);
	}
	J(S, o, s) ? C(Z(S, o, s)) : S.compare(T) < 0 ? E(an(S, a, r, o, s)) : S.compare(k) > 0 && E(Y(S, a, r, o, s));
	function j(e) {
		e = Z(e, o, s), C(e);
	}
	function M(e) {
		let t = Z(e, o, s), n = on(t, o ?? qe(t, T), l);
		if (!n) return null;
		let r = Array.isArray(g) ? g[0] : g, i = U(n, r?.calendar || new Ke());
		return r && "hour" in r ? r.set(i) : i;
	}
	function re(t) {
		if (!e.isDisabled && !e.isReadOnly) {
			if (t === null) {
				_(d === "multiple" ? [] : null);
				return;
			}
			if (Array.isArray(t)) _(t.map(M).filter(Boolean));
			else {
				let e = M(t);
				e && _(e);
			}
		}
	}
	let ie = (0, G.useMemo)(() => v ? Array.isArray(v) ? v.some((e) => l?.(e) || J(e, o, s)) : l?.(v) || J(v, o, s) : !1, [
		v,
		l,
		o,
		s
	]), ae = e.isInvalid || e.validationState === "invalid" || ie, oe = ae ? "invalid" : null, N = (0, G.useMemo)(() => u === "visible" ? a : ln(a), [u, a]);
	return {
		isDisabled: e.isDisabled ?? !1,
		isReadOnly: e.isReadOnly ?? !1,
		value: v,
		setValue: re,
		selectionMode: d,
		visibleDuration: a,
		visibleRange: {
			start: T,
			end: k
		},
		minValue: o,
		maxValue: s,
		focusedDate: S,
		timeZone: y,
		validationState: oe,
		isValueInvalid: ae,
		setFocusedDate(e) {
			j(e);
		},
		focusNextDay() {
			j(S.add({ days: 1 }));
		},
		focusPreviousDay() {
			j(S.subtract({ days: 1 }));
		},
		focusNextRow() {
			a.days ? this.focusNextPage() : (a.weeks || a.months || a.years) && j(S.add({ weeks: 1 }));
		},
		focusPreviousRow() {
			a.days ? this.focusPreviousPage() : (a.weeks || a.months || a.years) && j(S.subtract({ weeks: 1 }));
		},
		focusNextPage() {
			let e = T.add(N);
			C(Z(S.add(N), o, s)), E(Y(X(S, e, N, r, o, s), N, r));
		},
		focusPreviousPage() {
			let e = T.subtract(N);
			C(Z(S.subtract(N), o, s)), E(Y(X(S, e, N, r, o, s), N, r));
		},
		focusSectionStart() {
			a.days ? j(T) : a.weeks ? j(Je(S, r)) : (a.months || a.years) && j(R(S));
		},
		focusSectionEnd() {
			a.days ? j(k) : a.weeks ? j(Ye(S, r)) : (a.months || a.years) && j(L(S));
		},
		focusNextSection(e) {
			if (!e && !a.days) {
				j(S.add(ln(a)));
				return;
			}
			a.days ? this.focusNextPage() : a.weeks ? j(S.add({ months: 1 })) : (a.months || a.years) && j(S.add({ years: 1 }));
		},
		focusPreviousSection(e) {
			if (!e && !a.days) {
				j(S.subtract(ln(a)));
				return;
			}
			a.days ? this.focusPreviousPage() : a.weeks ? j(S.subtract({ months: 1 })) : (a.months || a.years) && j(S.subtract({ years: 1 }));
		},
		selectFocusedDate() {
			l && l(S) || this.selectDate(S);
		},
		selectDate(t) {
			if (!(e.isDisabled || e.isReadOnly)) {
				if (d === "multiple" && t != null) {
					let e = M(t);
					if (!e) return;
					let n = [];
					Array.isArray(g) ? n = g : g != null && (n = [g]);
					let r = n.findIndex((t) => H(t, e)), i = r >= 0 ? n.slice(0, r).concat(n.slice(r + 1)) : [...n, e];
					_(i);
				} else re(t);
			}
		},
		isFocused: D,
		setFocused: ee,
		isInvalid(e) {
			return J(e, o, s);
		},
		isSelected(e) {
			return !v || this.isCellDisabled(e) || this.isCellUnavailable(e) ? !1 : Array.isArray(v) ? v.some((t) => H(t, e)) : H(e, v);
		},
		isCellFocused(e) {
			return D && S && H(e, S);
		},
		isCellDisabled(t) {
			return e.isDisabled || t.compare(T) < 0 || t.compare(k) > 0 || this.isInvalid(t);
		},
		isCellUnavailable(t) {
			return e.isDateUnavailable ? e.isDateUnavailable(t) : !1;
		},
		isPreviousVisibleRangeInvalid() {
			let e = T.subtract({ days: 1 });
			return H(e, T) || this.isInvalid(e);
		},
		isNextVisibleRangeInvalid() {
			let e = k.add({ days: 1 });
			return H(e, k) || this.isInvalid(e);
		},
		getDatesInWeek(e, t = T) {
			let n = t.add({ weeks: e }), i = [], o = a.days && a.days < 7 ? a.days : 7;
			if (o === 7) {
				n = Je(n, r, p);
				let e = Ie(n, r, p);
				for (let t = 0; t < e; t++) i.push(null);
			}
			for (; i.length < o;) {
				i.push(n);
				let e = n.add({ days: 1 });
				if (H(n, e)) break;
				n = e;
			}
			for (; i.length < o;) i.push(null);
			return i;
		},
		getWeeksInMonth(e = T) {
			let t = m || He(e, r, p);
			return (a.weeks || a.days) && (t = a.weeks ?? 0, a.days && (t += Math.ceil(a.days / 7))), t;
		}
	};
}
function ln(e) {
	let t = { ...e };
	for (let n in e) t[n] = 1;
	return t;
}
function un(e) {
	let { value: t, defaultValue: n, onChange: r, createCalendar: i, locale: a, visibleDuration: o = { months: 1 }, minValue: s, maxValue: c, ...l } = e, [u, d] = f(t, n || null, r), [p, m] = (0, G.useState)(null), h = "center";
	if (u && u.start && u.end) {
		let e = rn(z(u.start), o, a, s, c).add(o).subtract({ days: 1 });
		u.end.compare(e) > 0 && (h = "start");
	}
	let g = (0, G.useMemo)(() => {
		let t = e.isDateUnavailable;
		if (t) return (e) => t(e, p);
	}, [e.isDateUnavailable, p]), _ = (0, G.useCallback)((t) => t && g && !e.allowsNonContiguousRanges ? {
		start: pn(t, g, o, -1),
		end: pn(t, g, o, 1)
	} : null, [
		g,
		o,
		e.allowsNonContiguousRanges
	]), v = (0, G.useMemo)(() => _(p), [_, p]), y = (0, G.useMemo)(() => Ue(s, v?.start), [s, v]), b = (0, G.useMemo)(() => qe(c, v?.end), [c, v]), x = cn({
		...l,
		value: u && u.start,
		createCalendar: i,
		locale: a,
		visibleDuration: o,
		minValue: y,
		maxValue: b,
		selectionAlignment: e.selectionAlignment || h,
		isDateUnavailable: g
	}), S = p ? dn(p, x.focusedDate) : u && dn(u.start, u.end), C = (t) => {
		if (e.isReadOnly) return;
		let n = on(Z(t, y, b), x.visibleRange.start, g);
		if (n) {
			if (!p) m(n);
			else {
				let e = dn(p, n);
				e && d({
					start: fn(e.start, u?.start),
					end: fn(e.end, u?.end)
				}), m(null);
			}
		}
	}, [w, T] = (0, G.useState)(!1), E = (0, G.useMemo)(() => !u || p ? !1 : g && (g(u.start) || g(u.end)) ? !0 : J(u.start, s, c) || J(u.end, s, c), [
		g,
		u,
		p,
		s,
		c
	]), D = e.isInvalid || e.validationState === "invalid" || E;
	return {
		...x,
		value: u,
		setValue: d,
		anchorDate: p,
		setAnchorDate: m,
		highlightedRange: S,
		validationState: D ? "invalid" : null,
		isValueInvalid: D,
		selectFocusedDate() {
			x.isCellUnavailable(x.focusedDate) || C(x.focusedDate);
		},
		commitSelection() {
			C(x.focusedDate);
		},
		selectDate: C,
		highlightDate(e) {
			p && x.setFocusedDate(e);
		},
		isSelected(e) {
			return !!(S && e.compare(S.start) >= 0 && e.compare(S.end) <= 0 && !x.isCellDisabled(e) && !x.isCellUnavailable(e));
		},
		isInvalid(e) {
			return x.isInvalid(e) || J(e, v?.start, v?.end);
		},
		isDragging: w,
		setDragging: T,
		clearSelection() {
			m(null), d(null);
		},
		focusNearestAvailableDate(e) {
			let t = _(e), n = (e) => this.isInvalid(e) || J(e, t?.start, t?.end), r = e.add({ days: 1 });
			n(r) && (r = e.subtract({ days: 1 })), n(r) || (this.setFocusedDate(r), this.setFocused(!0));
		}
	};
}
function dn(e, t) {
	return !e || !t ? null : (t.compare(e) < 0 && ([e, t] = [t, e]), {
		start: z(e),
		end: z(t)
	});
}
function fn(e, t) {
	return e = U(e, t?.calendar || new Ke()), t && "hour" in t ? t.set(e) : e;
}
function pn(e, t, n, r) {
	let i = e.add({ days: r }), a = e.subtract(n), o = e.add(n);
	for (; (r < 0 ? i.compare(a) >= 0 : i.compare(o) <= 0) && !t(i);) i = i.add({ days: r });
	if (t(i)) return i.add({ days: -r });
}
var mn = /* @__PURE__ */ (0, G.createContext)(null), hn = /* @__PURE__ */ (0, G.createContext)(null), Q = /* @__PURE__ */ (0, G.createContext)(null), $ = /* @__PURE__ */ (0, G.createContext)(null), gn = /* @__PURE__ */ (0, G.forwardRef)(function(e, n) {
	[e, n] = de(e, n, mn);
	let { locale: i } = r(), a = cn({
		...e,
		locale: i,
		createCalendar: e.createCalendar || Qe
	}), { calendarProps: o, prevButtonProps: s, nextButtonProps: c, errorMessageProps: l, title: u } = Xt(e, a), f = F({
		...e,
		values: {
			state: a,
			isDisabled: e.isDisabled || !1,
			isInvalid: a.isValueInvalid
		},
		defaultClassName: "react-aria-Calendar"
	}), p = M(e, { global: !0 });
	return /* @__PURE__ */ G.createElement(P.div, {
		...d(p, f, o),
		ref: n,
		slot: e.slot || void 0,
		"data-disabled": e.isDisabled || void 0,
		"data-invalid": a.isValueInvalid || void 0
	}, /* @__PURE__ */ G.createElement(xe, { values: [
		[N, { slots: {
			previous: s,
			next: c
		} }],
		[t, {
			"aria-hidden": !0,
			level: 2,
			children: u
		}],
		[Q, a],
		[mn, e],
		[T, { slots: { errorMessage: l } }]
	] }, /* @__PURE__ */ G.createElement(ue, null, /* @__PURE__ */ G.createElement("h2", null, o["aria-label"])), f.children, /* @__PURE__ */ G.createElement(ue, null, /* @__PURE__ */ G.createElement("button", {
		"aria-label": c["aria-label"],
		disabled: c.isDisabled,
		onClick: () => a.focusNextPage(),
		tabIndex: -1
	}))));
}), _n = /* @__PURE__ */ (0, G.forwardRef)(function(e, n) {
	[e, n] = de(e, n, hn);
	let { locale: i } = r(), a = un({
		...e,
		locale: i,
		createCalendar: e.createCalendar || Qe
	}), { calendarProps: o, prevButtonProps: s, nextButtonProps: c, errorMessageProps: l, title: u } = nn(e, a, n), f = F({
		...e,
		values: {
			state: a,
			isDisabled: e.isDisabled || !1,
			isInvalid: a.isValueInvalid
		},
		defaultClassName: "react-aria-RangeCalendar"
	}), p = M(e, { global: !0 });
	return /* @__PURE__ */ G.createElement(P.div, {
		...d(f, p, o),
		ref: n,
		slot: e.slot || void 0,
		"data-disabled": e.isDisabled || void 0,
		"data-invalid": a.isValueInvalid || void 0
	}, /* @__PURE__ */ G.createElement(xe, { values: [
		[N, { slots: {
			previous: s,
			next: c
		} }],
		[t, {
			"aria-hidden": !0,
			level: 2,
			children: u
		}],
		[$, a],
		[hn, e],
		[T, { slots: { errorMessage: l } }]
	] }, /* @__PURE__ */ G.createElement(ue, null, /* @__PURE__ */ G.createElement("h2", null, o["aria-label"])), f.children, /* @__PURE__ */ G.createElement(ue, null, /* @__PURE__ */ G.createElement("button", {
		"aria-label": c["aria-label"],
		disabled: c.isDisabled,
		onClick: () => a.focusNextPage(),
		tabIndex: -1
	}))));
}), vn = /* @__PURE__ */ (0, G.createContext)(null), yn = /* @__PURE__ */ (0, G.forwardRef)(function(e, t) {
	let n = (0, G.useContext)(Q), r = (0, G.useContext)($), i = D(mn), a = D(hn), o = n ?? r, s = o.visibleRange.start;
	e.offset && (s = s.add(e.offset));
	let c = i?.firstDayOfWeek ?? a?.firstDayOfWeek, { gridProps: l, headerProps: u, weekDays: f, weeksInMonth: p } = Zt({
		startDate: s,
		endDate: L(s),
		weekdayStyle: e.weekdayStyle,
		firstDayOfWeek: c
	}, o), m = M(e, { global: !0 });
	return /* @__PURE__ */ G.createElement(vn.Provider, { value: {
		headerProps: u,
		weekDays: f,
		startDate: s,
		weeksInMonth: p
	} }, /* @__PURE__ */ G.createElement(P.table, {
		render: e.render,
		...d(m, l),
		ref: t,
		style: e.style,
		cellPadding: 0,
		className: e.className ?? "react-aria-CalendarGrid"
	}, typeof e.children == "function" ? /* @__PURE__ */ G.createElement(G.Fragment, null, /* @__PURE__ */ G.createElement(xn, null, (e) => /* @__PURE__ */ G.createElement(Cn, null, e)), /* @__PURE__ */ G.createElement(Tn, null, e.children)) : e.children));
});
function bn(e, t) {
	let { children: n, style: r, className: i } = e, { headerProps: a, weekDays: o } = (0, G.useContext)(vn), s = M(e, { global: !0 });
	return /* @__PURE__ */ G.createElement(P.thead, {
		render: e.render,
		...d(s, a),
		ref: t,
		style: r,
		className: i ?? "react-aria-CalendarGridHeader"
	}, /* @__PURE__ */ G.createElement("tr", null, o.map((e, t) => /* @__PURE__ */ G.cloneElement(n(e), { key: t }))));
}
var xn = /* @__PURE__ */ (0, G.forwardRef)(bn);
function Sn(e, t) {
	let { children: n, style: r, className: i } = e, a = M(e, { global: !0 });
	return /* @__PURE__ */ G.createElement(P.th, {
		render: e.render,
		...a,
		ref: t,
		style: r,
		className: i || "react-aria-CalendarHeaderCell"
	}, n);
}
var Cn = /* @__PURE__ */ (0, G.forwardRef)(Sn);
function wn(e, t) {
	let { children: n, style: r, className: i } = e, a = (0, G.useContext)(Q), o = (0, G.useContext)($), s = a ?? o, { startDate: c, weeksInMonth: l } = (0, G.useContext)(vn), u = M(e, { global: !0 });
	return /* @__PURE__ */ G.createElement(P.tbody, {
		render: e.render,
		...u,
		ref: t,
		style: r,
		className: i ?? "react-aria-CalendarGridBody"
	}, [...Array(l).keys()].map((e) => /* @__PURE__ */ G.createElement("tr", { key: e }, s.getDatesInWeek(e, c).map((e, t) => e ? /* @__PURE__ */ G.cloneElement(n(e), { key: t }) : /* @__PURE__ */ G.createElement("td", { key: t })))));
}
var Tn = /* @__PURE__ */ (0, G.forwardRef)(wn), En = /* @__PURE__ */ (0, G.forwardRef)(function({ date: e, ...t }, n) {
	let r = (0, G.useContext)(Q), i = (0, G.useContext)($), a = r ?? i, { startDate: o } = (0, G.useContext)(vn) ?? { startDate: a.visibleRange.start }, s = a.visibleDuration.days || a.visibleDuration.weeks ? !1 : !$e(o, e), c = ze(e, a.timeZone), l = (0, G.useRef)(null), { cellProps: u, buttonProps: f, ...p } = $t({
		date: e,
		isOutsideMonth: s
	}, a, l), { hoverProps: m, isHovered: h } = be({
		...t,
		isDisabled: p.isDisabled || p.isUnavailable
	}), { focusProps: g, isFocusVisible: _ } = w();
	_ &&= p.isFocused;
	let v = !1, y = !1;
	"highlightedRange" in a && a.highlightedRange && (v = H(e, a.highlightedRange.start), y = H(e, a.highlightedRange.end));
	let b = F({
		...t,
		defaultChildren: p.formattedDate,
		defaultClassName: "react-aria-CalendarCell",
		values: {
			date: e,
			isHovered: h,
			isOutsideMonth: s,
			isFocusVisible: _,
			isSelectionStart: v,
			isSelectionEnd: y,
			isToday: c,
			...p
		}
	}), x = {
		"data-focused": p.isFocused || void 0,
		"data-hovered": h || void 0,
		"data-pressed": p.isPressed || void 0,
		"data-unavailable": p.isUnavailable || void 0,
		"data-disabled": p.isDisabled || void 0,
		"data-focus-visible": _ || void 0,
		"data-outside-visible-range": p.isOutsideVisibleRange || void 0,
		"data-outside-month": s || void 0,
		"data-selected": p.isSelected || void 0,
		"data-selection-start": v || void 0,
		"data-selection-end": y || void 0,
		"data-invalid": p.isInvalid || void 0,
		"data-today": c || void 0
	}, S = M(t, { global: !0 });
	return /* @__PURE__ */ G.createElement("td", {
		...u,
		ref: n
	}, /* @__PURE__ */ G.createElement(P.div, {
		...d(S, f, g, m, x, b),
		ref: l
	}));
});
function Dn(e) {
	let t = G.useContext(Q), n = G.useContext($), r = tn(e, t || n);
	return e.children(r);
}
function On(e) {
	let t = G.useContext(Q), n = G.useContext($), r = en(e, t || n);
	return e.children(r);
}
var kn = /* @__PURE__ */ new WeakMap();
function An(e, t, n) {
	let { keyboardDelegate: r, isDisabled: i, isRequired: a, name: o, form: s, validationBehavior: c = "aria" } = e, l = Ne({
		usage: "search",
		sensitivity: "base"
	}), f = (0, G.useMemo)(() => r || new et(t.collection, t.disabledKeys, n, l), [
		r,
		t.collection,
		t.disabledKeys,
		l,
		n
	]), { menuTriggerProps: p, menuProps: m } = rt({
		isDisabled: i,
		type: "listbox"
	}, t, n), { keyboardProps: h } = le({
		shortcuts: {
			ArrowLeft: () => {
				if (t.selectionManager.selectionMode === "multiple") return !1;
				let e = t.selectedKey == null ? f.getFirstKey?.() : f.getKeyAbove?.(t.selectedKey);
				e != null && t.setSelectedKey(e);
			},
			ArrowRight: () => {
				if (t.selectionManager.selectionMode === "multiple") return !1;
				let e = t.selectedKey == null ? f.getFirstKey?.() : f.getKeyBelow?.(t.selectedKey);
				e != null && t.setSelectedKey(e);
			}
		},
		allowRepeats: !0,
		onKeyDown: e.onKeyDown,
		onKeyUp: e.onKeyUp
	}), { typeSelectProps: g } = oe({
		keyboardDelegate: f,
		selectionManager: t.selectionManager,
		onTypeSelect(e) {
			t.setSelectedKey(e);
		}
	}), { isInvalid: _, validationErrors: v, validationDetails: y } = t.displayValidation, { labelProps: b, fieldProps: x, descriptionProps: S, errorMessageProps: w } = Me({
		...e,
		labelElementType: "span",
		isInvalid: _,
		errorMessage: e.errorMessage || v
	});
	t.selectionManager.selectionMode === "multiple" && (g = {});
	let T = M(e, { labelable: !0 }), E = d(g, p, x), D = u();
	return kn.set(t, {
		isDisabled: i,
		isRequired: a,
		name: o,
		form: s,
		validationBehavior: c
	}), {
		labelProps: {
			...b,
			onClick: () => {
				e.isDisabled || (n.current?.focus(), C("keyboard"));
			}
		},
		triggerProps: d(T, {
			...E,
			isDisabled: i,
			onKeyDown: Ce(E.onKeyDown, h.onKeyDown),
			onKeyUp: h.onKeyUp,
			"aria-labelledby": [
				D,
				E["aria-labelledby"],
				E["aria-label"] && !E["aria-labelledby"] ? E.id : null
			].filter(Boolean).join(" "),
			onFocus(n) {
				t.isFocused || (e.onFocus && e.onFocus(n), e.onFocusChange && e.onFocusChange(!0), t.setFocused(!0));
			},
			onBlur(n) {
				t.isOpen || (e.onBlur && e.onBlur(n), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1));
			}
		}),
		valueProps: { id: D },
		menuProps: {
			...m,
			onAction: void 0,
			autoFocus: t.focusStrategy || !0,
			shouldSelectOnPressUp: !0,
			shouldFocusOnHover: !0,
			disallowEmptySelection: !0,
			linkBehavior: "selection",
			onBlur: (n) => {
				A(n.currentTarget, n.relatedTarget) || (e.onBlur && e.onBlur(n), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1));
			},
			"aria-labelledby": [x["aria-labelledby"], E["aria-label"] && !x["aria-labelledby"] ? E.id : null].filter(Boolean).join(" ")
		},
		descriptionProps: S,
		errorMessageProps: w,
		isInvalid: _,
		validationErrors: v,
		validationDetails: y,
		hiddenSelectProps: {
			isDisabled: i,
			name: o,
			label: e.label,
			state: t,
			triggerRef: n,
			form: s
		}
	};
}
function jn(e, t, n) {
	let r = kn.get(t) || {}, { autoComplete: i, name: a = r.name, form: o = r.form, isDisabled: s = r.isDisabled } = e, { validationBehavior: c, isRequired: l } = r, { visuallyHiddenProps: u } = he({ style: {
		position: "fixed",
		top: 0,
		left: 0
	} });
	Ae(e.selectRef, t.defaultValue, t.setValue), De({
		validationBehavior: c,
		focus: () => n.current?.focus()
	}, t, e.selectRef);
	let d = t.setValue, f = (0, G.useCallback)((e) => {
		let t = ne(e);
		t.multiple ? d(Array.from(t.selectedOptions, (e) => e.value)) : d(e.currentTarget.value);
	}, [d]);
	return {
		containerProps: {
			...u,
			"aria-hidden": !0,
			"data-react-aria-prevent-focus": !0,
			"data-a11y-ignore": "aria-hidden-focus"
		},
		inputProps: { style: { display: "none" } },
		selectProps: {
			tabIndex: -1,
			autoComplete: i,
			disabled: s,
			multiple: t.selectionManager.selectionMode === "multiple",
			required: c === "native" && l,
			name: a,
			form: o,
			value: t.value ?? "",
			onChange: f,
			onInput: f
		}
	};
}
function Mn(e) {
	let { state: t, triggerRef: n, label: r, name: i, form: a, isDisabled: o } = e, s = (0, G.useRef)(null), c = (0, G.useRef)(null), { containerProps: l, selectProps: u } = jn({
		...e,
		selectRef: t.collection.size <= 300 ? s : c
	}, t, n), d = Array.isArray(t.value) ? t.value : [t.value];
	if (t.collection.size <= 300) return /* @__PURE__ */ G.createElement("div", {
		...l,
		"data-testid": "hidden-select-container"
	}, /* @__PURE__ */ G.createElement("label", null, r, /* @__PURE__ */ G.createElement("select", {
		...u,
		ref: s
	}, /* @__PURE__ */ G.createElement("option", {
		value: "",
		label: "\xA0"
	}, "\xA0"), [...t.collection.getKeys()].map((e) => {
		let n = t.collection.getItem(e);
		if (n && n.type === "item") return /* @__PURE__ */ G.createElement("option", {
			key: n.key,
			value: n.key
		}, n.textValue);
	}), t.collection.size === 0 && i && d.map((e, t) => /* @__PURE__ */ G.createElement("option", {
		key: t,
		value: e ?? ""
	})))));
	if (i) {
		let { validationBehavior: e } = kn.get(t) || {};
		d.length === 0 && (d = [null]);
		let n = d.map((t, n) => {
			let r = {
				type: "hidden",
				autoComplete: u.autoComplete,
				name: i,
				form: a,
				disabled: o,
				value: t ?? ""
			};
			return e === "native" ? /* @__PURE__ */ G.createElement("input", {
				key: n,
				...r,
				ref: n === 0 ? c : null,
				style: { display: "none" },
				type: "text",
				required: n === 0 && u.required,
				onChange: () => {}
			}) : /* @__PURE__ */ G.createElement("input", {
				key: n,
				...r,
				ref: n === 0 ? c : null
			});
		});
		return /* @__PURE__ */ G.createElement(G.Fragment, null, n);
	}
	return null;
}
function Nn(e) {
	let { selectionMode: t = "single", shouldCloseOnSelect: n = t === "single" } = e, r = pe(e), [i, o] = (0, G.useState)(null), s = (0, G.useMemo)(() => e.defaultValue === void 0 ? t === "single" ? e.defaultSelectedKey ?? null : [] : e.defaultValue, [
		e.defaultValue,
		e.defaultSelectedKey,
		t
	]), c = (0, G.useMemo)(() => e.value === void 0 ? t === "single" ? e.selectedKey : void 0 : e.value, [
		e.value,
		e.selectedKey,
		t
	]), [l, u] = f(c, s, e.onChange), d = t === "single" && Array.isArray(l) ? l[0] : l, p = (n) => {
		if (t === "single") {
			let t = Array.isArray(n) ? n[0] ?? null : n;
			u(t), t !== d && e.onSelectionChange?.(t);
		} else {
			let e = [];
			Array.isArray(n) ? e = n : n != null && (e = [n]), u(e);
		}
	}, m = a({
		...e,
		selectionMode: t,
		disallowEmptySelection: t === "single",
		allowDuplicateSelectionEvents: !0,
		selectedKeys: (0, G.useMemo)(() => Pn(d), [d]),
		onSelectionChange: (e) => {
			if (e !== "all") {
				if (t === "single") {
					let t = e.values().next().value ?? null;
					p(t);
				} else p([...e]);
				n && r.close(), _.commitValidation();
			}
		}
	}), h = m.selectionManager.firstSelectedKey, g = (0, G.useMemo)(() => [...m.selectionManager.selectedKeys].map((e) => m.collection.getItem(e)).filter((e) => e != null), [m.selectionManager.selectedKeys, m.collection]), _ = ke({
		...e,
		value: Array.isArray(d) && d.length === 0 ? null : d
	}), [v, y] = (0, G.useState)(!1), [b] = (0, G.useState)(d);
	return {
		..._,
		...m,
		...r,
		value: d,
		defaultValue: s ?? b,
		setValue: p,
		selectedKey: h,
		setSelectedKey: p,
		selectedItem: g[0] ?? null,
		selectedItems: g,
		defaultSelectedKey: e.defaultSelectedKey ?? (e.selectionMode === "single" ? b : null),
		focusStrategy: i,
		open(t = null) {
			(m.collection.size !== 0 || e.allowsEmptyCollection) && (o(t), r.open());
		},
		toggle(t = null) {
			(m.collection.size !== 0 || e.allowsEmptyCollection) && (o(t), r.toggle());
		},
		isFocused: v,
		setFocused: y
	};
}
function Pn(e) {
	if (e !== void 0) return e === null ? [] : Array.isArray(e) ? e : [e];
}
var Fn = /* @__PURE__ */ (0, G.createContext)(null), In = /* @__PURE__ */ (0, G.createContext)(null), Ln = /* @__PURE__ */ p(function(e, t) {
	[e, t] = de(e, t, Fn);
	let { children: n, isDisabled: r = !1, isInvalid: i = !1, isRequired: a = !1 } = e, o = (0, G.useMemo)(() => typeof n == "function" ? n({
		isOpen: !1,
		isDisabled: r,
		isInvalid: i,
		isRequired: a,
		isFocused: !1,
		isFocusVisible: !1,
		defaultChildren: null
	}) : n, [
		n,
		r,
		i,
		a
	]);
	return /* @__PURE__ */ G.createElement(s, { content: o }, (n) => /* @__PURE__ */ G.createElement(zn, {
		props: e,
		collection: n,
		selectRef: t
	}));
}), Rn = [
	we,
	N,
	T
];
function zn({ props: e, selectRef: t, collection: n }) {
	let { validationBehavior: r } = D(Ee) || {}, i = e.validationBehavior ?? r ?? "native", a = Nn({
		...e,
		collection: n,
		children: void 0,
		validationBehavior: i
	}), { isFocusVisible: o, focusProps: s } = w({ within: !0 }), c = (0, G.useRef)(null), [l, u] = re(!e["aria-label"] && !e["aria-labelledby"]), { labelProps: f, triggerProps: p, valueProps: m, menuProps: h, descriptionProps: g, errorMessageProps: _, hiddenSelectProps: v, ...y } = An({
		...ve(e),
		label: u,
		validationBehavior: i
	}, a, c), b = (0, G.useMemo)(() => ({
		isOpen: a.isOpen,
		isFocused: a.isFocused,
		isFocusVisible: o,
		isDisabled: e.isDisabled || !1,
		isInvalid: y.isInvalid || !1,
		isRequired: e.isRequired || !1
	}), [
		a.isOpen,
		a.isFocused,
		o,
		e.isDisabled,
		y.isInvalid,
		e.isRequired
	]), x = F({
		...e,
		values: b,
		defaultClassName: "react-aria-Select"
	}), S = M(e, { global: !0 });
	delete S.id;
	let C = (0, G.useRef)(null);
	return /* @__PURE__ */ G.createElement(xe, { values: [
		[Fn, e],
		[In, a],
		[Bn, m],
		[we, {
			...f,
			ref: l,
			elementType: "span"
		}],
		[N, {
			...p,
			ref: c,
			isPressed: a.isOpen,
			autoFocus: e.autoFocus
		}],
		[E, a],
		[ot, {
			trigger: "Select",
			triggerRef: c,
			scrollRef: C,
			placement: "bottom start",
			"aria-labelledby": h["aria-labelledby"],
			clearContexts: Rn
		}],
		[tt, {
			...h,
			ref: C
		}],
		[it, a],
		[T, { slots: {
			description: g,
			errorMessage: _
		} }],
		[Oe, y]
	] }, /* @__PURE__ */ G.createElement(P.div, {
		...d(S, x, s),
		ref: t,
		slot: e.slot || void 0,
		"data-focused": a.isFocused || void 0,
		"data-focus-visible": o || void 0,
		"data-open": a.isOpen || void 0,
		"data-disabled": e.isDisabled || void 0,
		"data-invalid": y.isInvalid || void 0,
		"data-required": e.isRequired || void 0
	}, x.children, /* @__PURE__ */ G.createElement(Mn, {
		...v,
		autoComplete: e.autoComplete
	})));
}
var Bn = /* @__PURE__ */ (0, G.createContext)(null), Vn = /* @__PURE__ */ G.forwardRef(function(e, t) {
	return /* @__PURE__ */ G.createElement(n, b({
		iconAttrs: {
			fill: "currentColor",
			xmlns: "http://www.w3.org/2000/svg"
		},
		iconVerticalAlign: "middle",
		iconViewBox: "0 0 24 24"
	}, e, { ref: t }), /* @__PURE__ */ G.createElement("path", {
		fill: "none",
		d: "M0 0h24v24H0V0z"
	}), /* @__PURE__ */ G.createElement("path", { d: "M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.996.996 0 00-1.41 0l-6.59 6.59a.996.996 0 000 1.41l6.59 6.59a.996.996 0 101.41-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z" }));
});
Vn.displayName = "ArrowBack";
var Hn = /* @__PURE__ */ G.forwardRef(function(e, t) {
	return /* @__PURE__ */ G.createElement(n, b({
		iconAttrs: {
			fill: "currentColor",
			xmlns: "http://www.w3.org/2000/svg"
		},
		iconVerticalAlign: "middle",
		iconViewBox: "0 0 24 24"
	}, e, { ref: t }), /* @__PURE__ */ G.createElement("path", {
		fill: "none",
		d: "M0 0h24v24H0V0z"
	}), /* @__PURE__ */ G.createElement("path", { d: "M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 000-1.41l-6.58-6.6a.996.996 0 10-1.41 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z" }));
});
Hn.displayName = "ArrowForward";
var Un = "[data-type]:not([data-type=\"literal\"])", Wn = {
	Y: "year",
	M: "month",
	D: "day"
};
function Gn(e) {
	let t = e.match(/[/.-]/), n = t ? t[0] : "/";
	return {
		order: e.split(n).map((e) => e[0].toUpperCase()),
		separator: n
	};
}
function Kn(e) {
	return {
		type: "literal",
		text: e,
		isPlaceholder: !1,
		placeholder: "",
		isEditable: !1
	};
}
function qn(e, t) {
	let { order: n, separator: r } = Gn(t), i = {};
	for (let t of e) (t.type === "year" || t.type === "month" || t.type === "day") && (i[t.type] = t);
	let a = [];
	return n.forEach((e, t) => {
		let o = i[Wn[e]];
		o && a.push(o), t < n.length - 1 && a.push(Kn(r));
	}), a;
}
function Jn(e) {
	if (!e) return null;
	try {
		return Pe(e);
	} catch {
		return null;
	}
}
function Yn(e) {
	return e.toString();
}
function Xn(e, t) {
	return e === t ? !0 : !e || !t ? !1 : e.compare(t) === 0;
}
function Zn(e) {
	return Jn(e.min) ?? W(B());
}
function Qn(e) {
	return e.max ? Jn(e.max) ?? void 0 : void 0;
}
function $n(e, t, n) {
	let r = e.compare(t) < 0 ? t : e;
	return n && r.compare(n) > 0 && (r = n), r;
}
function er(e, t) {
	return $n(W(B()), e, t);
}
function tr(e, t, n) {
	return (e[0] ? Jn(e[0]) : null) || er(t, n);
}
function nr(e) {
	return e.compare(W(B()).subtract({ years: 2 })) < 0;
}
function rr() {
	let e = W(B());
	return [
		{
			id: "pastWeek",
			label: "Past Week",
			start: e.subtract({ weeks: 1 })
		},
		{
			id: "pastMonth",
			label: "Past Month",
			start: e.subtract({ months: 1 })
		},
		{
			id: "pastThreeMonths",
			label: "Past 3 Months",
			start: e.subtract({ months: 3 })
		},
		{
			id: "pastSixMonths",
			label: "Past 6 Months",
			start: e.subtract({ months: 6 })
		},
		{
			id: "pastYear",
			label: "Past Year",
			start: e.subtract({ years: 1 })
		},
		{
			id: "pastTwoYears",
			label: "Past 2 Years",
			start: e.subtract({ years: 2 })
		}
	].map(({ id: t, label: n, start: r }) => ({
		id: t,
		label: n,
		start: r,
		end: e
	}));
}
function ir(e, t, n) {
	return e ? n && e.compare(n) > 0 ? "afterMax" : e.compare(t) < 0 ? "beforeMin" : null : null;
}
function ar(e, t) {
	return String(Math.abs(e)).padStart(t, "0");
}
function or(e, t) {
	let { order: n, separator: r } = Gn(t);
	return n.map((t) => t === "Y" ? ar(e.year, 4) : ar(t === "M" ? e.month : e.day, 2)).join(r);
}
function sr(e, t, n, r) {
	return e ? e === "afterMax" ? `**Error**: Date set outside allowed range. Please select a date on or before ${r}.` : t || !r ? `**Error**: Date set outside allowed range. Please select a date on or after ${n}.` : `**Error**: Date set outside allowed range. Please select a date between ${n} and ${r}.` : null;
}
function cr(e, t) {
	let { order: n, separator: r } = Gn(t), i = r.replaceAll(/[.*+?^${}()|[\]\\]/g, "\\$&"), a = RegExp(`^(\\d{1,4})${i}(\\d{1,4})${i}(\\d{1,4})$`).exec(e.trim());
	if (!a) return null;
	let o = {};
	n.forEach((e, t) => {
		o[e] = Number(a[t + 1]);
	});
	let { Y: s, M: c, D: l } = o;
	if (s === void 0 || c === void 0 || l === void 0 || c < 1 || c > 12 || l < 1 || l > 31) return null;
	try {
		let e = new Xe(s, c, l);
		return e.day === l ? e : null;
	} catch {
		return null;
	}
}
var lr = /\s*[\u2013\u2014]\s*|\s+-\s+|\s+to\s+/i;
function ur(e, t) {
	let n = e.trim().split(lr);
	if (n.length !== 2) return null;
	let r = cr(n[0].trim(), t), i = cr(n[1].trim(), t);
	return !r || !i ? null : {
		start: r,
		end: i
	};
}
function dr(e, t, n = {}) {
	let r = e.trim();
	if (n.allowRangePaste) {
		let e = ur(r, t);
		if (e) return {
			kind: "range",
			...e
		};
	}
	let i = cr(r, t);
	if (i) return {
		kind: "date",
		date: i
	};
	let a = pr(r, n.segmentType ?? null);
	return a ? {
		kind: "partial",
		...a
	} : null;
}
function fr(e, t) {
	let n = e.set({ [t.segmentType]: t.value });
	return n[t.segmentType] === t.value ? n : null;
}
function pr(e, t) {
	return t !== "year" && t !== "month" && t !== "day" || !/^\d{1,4}$/.exec(e.trim()) ? null : {
		segmentType: t,
		value: Number(e.trim())
	};
}
function mr(e, t) {
	return e === "month" ? t >= 1 && t <= 12 : e === "day" ? t >= 1 && t <= 31 : t >= 1;
}
var hr = () => {};
function gr(e) {
	return e.length === 2 && e[0] > e[1] ? [e[1], e[0]] : e;
}
function _r(e) {
	try {
		return new Intl.Locale(e).toString();
	} catch {
		return "en-US";
	}
}
var vr = /* @__PURE__ */ i("div", { target: "ej6zilz29" })({
	name: "1d3w5wq",
	styles: "width:100%"
}), yr = /* @__PURE__ */ i("div", {
	shouldForwardProp: (e) => !e.startsWith("$"),
	target: "ej6zilz28"
})(({ theme: e, $isRange: t }) => ({
	flex: t ? "0 0 auto" : "1 0 auto",
	minWidth: 0,
	...t && {
		"&:first-of-type": { paddingLeft: `calc(${e.spacing.sm} + ${e.sizes.tagMarginInsideBorder})` },
		"&[data-range-field='end']": { paddingRight: `calc(${e.spacing.sm} + ${e.sizes.tagMarginInsideBorder})` }
	}
}), ""), br = /* @__PURE__ */ i("div", { target: "ej6zilz27" })(({ theme: e }) => ({
	display: "flex",
	alignItems: "center",
	width: "100%",
	height: e.sizes.minElementHeight,
	borderRadius: e.radii.default,
	borderWidth: e.sizes.borderWidth,
	borderStyle: "solid",
	borderColor: g(e.colors, !1),
	backgroundColor: e.colors.secondaryBg,
	overflow: "hidden",
	cursor: "text",
	fontSize: e.fontSizes.sm,
	lineHeight: e.lineHeights.inputWidget,
	"&:focus-within": {
		borderColor: g(e.colors, !0),
		outline: "none"
	},
	"&[data-has-error]": {
		borderColor: e.colors.redTextColor,
		backgroundColor: e.colors.redBackgroundColor,
		color: e.colors.redTextColor
	},
	"&[data-disabled]": {
		color: e.colors.fadedText40,
		cursor: "not-allowed"
	}
}), ""), xr = /* @__PURE__ */ i("div", { target: "ej6zilz26" })({
	name: "tlib0m",
	styles: "display:flex;align-items:center;flex:1;min-width:0;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scrollbar-width:none;&::-webkit-scrollbar{display:none;}"
}), Sr = /* @__PURE__ */ i(je, {
	shouldForwardProp: (e) => !e.startsWith("$"),
	target: "ej6zilz25"
})(({ theme: e, $isRange: t }) => ({
	display: "flex",
	alignItems: "center",
	flex: "1 0 auto",
	minWidth: 0,
	paddingTop: e.spacing.sm,
	paddingBottom: e.spacing.sm,
	paddingLeft: t ? e.spacing.none : `calc(${e.spacing.sm} + ${e.sizes.tagMarginInsideBorder})`,
	paddingRight: t ? e.spacing.none : `calc(${e.spacing.sm} + ${e.sizes.tagMarginInsideBorder})`,
	outline: "none"
}), ""), Cr = /* @__PURE__ */ i(Ve, { target: "ej6zilz24" })(({ theme: t }) => {
	let n = e(t.colors.primary) > .5;
	return {
		paddingLeft: t.spacing.threeXS,
		paddingRight: t.spacing.threeXS,
		borderRadius: t.radii.sm,
		color: t.colors.bodyText,
		caretColor: "transparent",
		outline: "none",
		fontWeight: t.fontWeights.normal,
		whiteSpace: "pre",
		"&[data-type=literal]": {
			color: t.colors.fadedText60,
			padding: 0
		},
		"&[data-placeholder]": { color: t.colors.fadedText60 },
		"&[data-focused]": {
			backgroundColor: t.colors.primary,
			color: n ? t.colors.black : t.colors.white
		},
		"&[data-disabled]": { color: "inherit" },
		"[data-has-error] &:not([data-focused])": { color: "inherit" }
	};
}, ""), wr = /* @__PURE__ */ i("span", { target: "ej6zilz23" })(({ theme: e }) => ({
	color: e.colors.fadedText60,
	paddingLeft: e.spacing.twoXS,
	paddingRight: e.spacing.twoXS,
	flexShrink: 0,
	userSelect: "none"
}), ""), Tr = /* @__PURE__ */ i("div", { target: "ej6zilz22" })(({ theme: e }) => ({
	display: "flex",
	alignItems: "center",
	color: e.colors.redTextColor,
	paddingLeft: e.spacing.twoXS,
	paddingRight: `calc(${e.spacing.sm} + ${e.sizes.tagMarginInsideBorder})`,
	flexShrink: 0
}), ""), Er = /* @__PURE__ */ i("div", { target: "ej6zilz21" })({
	name: "za0kxg",
	styles: "display:flex;align-items:center;flex-shrink:0"
}), Dr = /* @__PURE__ */ i("button", { target: "ej6zilz20" })(({ theme: e }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	background: "none",
	border: "none",
	cursor: "pointer",
	padding: `0 ${e.spacing.twoXS}`,
	marginRight: e.spacing.sm,
	color: e.colors.grayTextColor,
	flexShrink: 0,
	"&:hover": { color: e.colors.bodyText },
	"&:focus-visible": {
		outline: `${e.sizes.borderWidth} solid ${e.colors.primary}`,
		borderRadius: e.radii.sm
	}
}), ""), Or = {
	position: "absolute",
	width: "1px",
	height: "1px",
	padding: 0,
	margin: "-1px",
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	border: 0
}, kr = /* @__PURE__ */ i("span", { target: "ej6zilz19" })(Or, ""), Ar = /* @__PURE__ */ i("div", { target: "ej6zilz18" })(({ theme: e }) => {
	let t = e.inSidebar ? e.colors.secondaryBg : e.colors.bgColor;
	return {
		...ye(e),
		backgroundColor: t,
		zIndex: O(e),
		padding: `${e.spacing.sm} ${e.spacing.md}`,
		..._e(e) && { borderWidth: e.spacing.none }
	};
}, ""), jr = /* @__PURE__ */ i(gn, { target: "ej6zilz17" })(({ theme: e }) => ({
	fontSize: e.fontSizes.sm,
	minWidth: e.sizes.dateInputMinWidth
}), ""), Mr = /* @__PURE__ */ i(_n, { target: "ej6zilz16" })(({ theme: e }) => ({
	fontSize: e.fontSizes.sm,
	minWidth: e.sizes.dateInputMinWidth
}), ""), Nr = /* @__PURE__ */ i("header", { target: "ej6zilz15" })(({ theme: e }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	gap: e.spacing.sm
}), ""), Pr = /* @__PURE__ */ i("div", { target: "ej6zilz14" })(({ theme: e }) => ({
	display: "flex",
	alignItems: "center",
	gap: e.spacing.threeXS
}), ""), Fr = /* @__PURE__ */ i(Se, { target: "ej6zilz13" })(({ theme: e }) => ({
	appearance: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: e.sizes.smallElementHeight,
	height: e.sizes.smallElementHeight,
	flexShrink: 0,
	border: "none",
	borderRadius: e.radii.default,
	backgroundColor: "transparent",
	color: e.colors.bodyText,
	cursor: "pointer",
	outline: "none",
	"&[data-hovered]": { backgroundColor: e.colors.darkenedBgMix15 },
	"&[data-pressed]": { backgroundColor: e.colors.darkenedBgMix25 },
	"&[data-focus-visible], &:focus-visible": {
		outline: `${e.sizes.borderWidth} solid ${e.colors.primary}`,
		outlineOffset: e.spacing.threeXS
	},
	"&[data-disabled]": {
		color: e.colors.fadedText40,
		cursor: "not-allowed",
		backgroundColor: "transparent"
	}
}), ""), Ir = /* @__PURE__ */ i(Ln, { target: "ej6zilz12" })({
	name: "gbmjyl",
	styles: "position:relative;display:inline-flex;min-width:0"
}), Lr = /* @__PURE__ */ i("div", { target: "ej6zilz11" })(({ theme: e }) => ({
	position: "relative",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	paddingTop: e.spacing.twoXS,
	marginTop: e.spacing.sm,
	borderTop: `${e.sizes.borderWidth} solid ${e.colors.borderColor}`
}), ""), Rr = /* @__PURE__ */ i("div", { target: "ej6zilz10" })(({ theme: e }) => ({
	fontSize: e.fontSizes.sm,
	color: e.colors.bodyText
}), ""), zr = /* @__PURE__ */ i(Se, {
	shouldForwardProp: (e) => !e.startsWith("$"),
	target: "ej6zilz9"
})(({ theme: e, $isPlaceholder: t }) => ({
	appearance: "none",
	display: "flex",
	alignItems: "center",
	gap: e.spacing.threeXS,
	border: "none",
	borderRadius: e.radii.sm,
	backgroundColor: "transparent",
	color: t ? e.colors.fadedText60 : e.colors.bodyText,
	fontSize: e.fontSizes.sm,
	fontWeight: e.fontWeights.normal,
	cursor: "pointer",
	outline: "none",
	padding: `${e.spacing.twoXS} ${e.spacing.twoXS}`,
	"&[data-hovered]": { backgroundColor: e.colors.darkenedBgMix15 },
	"&[data-pressed]": { backgroundColor: e.colors.darkenedBgMix25 },
	"&[data-focus-visible], &:focus-visible": { boxShadow: `inset 0 0 0 ${e.sizes.borderWidth} ${e.colors.primary}` }
}), ""), Br = /* @__PURE__ */ i(st, { target: "ej6zilz8" })(({ theme: e }) => ({
	...ye(e),
	backgroundColor: e.inSidebar ? e.colors.secondaryBg : e.colors.bgColor,
	zIndex: O(e)
}), ""), Vr = /* @__PURE__ */ i(ct, { target: "ej6zilz7" })(({ theme: e }) => ({
	outline: "none",
	maxHeight: `min(${e.sizes.maxDropdownHeight}, 70vh)`,
	overflowY: "auto",
	overflowX: "hidden",
	padding: e.spacing.threeXS,
	listStyle: "none",
	margin: e.spacing.none
}), ""), Hr = /* @__PURE__ */ i(at, { target: "ej6zilz6" })(({ theme: e }) => ({
	display: "flex",
	alignItems: "center",
	borderRadius: e.radii.sm,
	padding: `${e.spacing.twoXS} ${e.spacing.sm}`,
	cursor: "pointer",
	fontSize: e.fontSizes.sm,
	color: e.colors.bodyText,
	outline: "none",
	"&:is([data-hovered],[data-focused]):not([data-disabled])": { backgroundColor: e.colors.darkenedBgMix15 },
	"&[data-selected]:not([data-disabled])": { backgroundColor: e.colors.darkenedBgMix25 },
	"&[data-disabled]": {
		color: e.colors.fadedText40,
		cursor: "not-allowed"
	}
}), ""), Ur = /* @__PURE__ */ i(Se, { target: "ej6zilz5" })(({ theme: e }) => ({
	appearance: "none",
	display: "flex",
	alignItems: "center",
	gap: e.spacing.threeXS,
	border: "none",
	borderRadius: e.radii.sm,
	backgroundColor: "transparent",
	color: e.colors.bodyText,
	fontSize: e.fontSizes.sm,
	fontWeight: e.fontWeights.semiBold,
	cursor: "pointer",
	padding: `${e.spacing.twoXS} ${e.spacing.twoXS}`,
	maxWidth: "100%",
	outline: "none",
	"&[data-hovered]": { backgroundColor: e.colors.darkenedBgMix15 },
	"&[data-pressed]": { backgroundColor: e.colors.darkenedBgMix25 },
	"&[data-focus-visible], &:focus-visible": { boxShadow: `inset 0 0 0 ${e.sizes.borderWidth} ${e.colors.primary}` }
}), ""), Wr = /* @__PURE__ */ i("div", { target: "ej6zilz4" })(({ theme: e }) => ({
	display: "flex",
	color: e.colors.fadedText60
}), ""), Gr = /* @__PURE__ */ i("div", { target: "ej6zilz3" })(Or, ""), Kr = /* @__PURE__ */ i(yn, { target: "ej6zilz2" })(({ theme: e }) => ({
	width: "100%",
	borderCollapse: "collapse",
	fontSize: e.fontSizes.sm
}), ""), qr = /* @__PURE__ */ i(Cn, { target: "ej6zilz1" })(({ theme: e }) => ({
	fontSize: e.fontSizes.sm,
	fontWeight: e.fontWeights.semiBold,
	color: e.colors.bodyText,
	paddingTop: e.spacing.sm,
	paddingBottom: e.spacing.xs
}), ""), Jr = /* @__PURE__ */ i(En, {
	shouldForwardProp: (e) => !e.startsWith("$"),
	target: "ej6zilz0"
})(({ theme: t, $isRangeMode: n }) => {
	let r = e(t.colors.primary) > .5 ? t.colors.black : t.colors.white, i = t.sizes.smallElementHeight, a = t.colors.primary, o = Te(a, .85), s = t.radii.default, c = t.sizes.borderWidth, l = {
		content: "\"\"",
		position: "absolute",
		top: 0,
		bottom: 0,
		left: "50%",
		transform: "translateX(-50%)",
		width: i,
		borderRadius: s,
		boxShadow: `inset 0 0 0 ${c} ${a}`,
		pointerEvents: "none"
	}, u = {
		width: "auto",
		minWidth: i,
		marginLeft: 0,
		marginRight: 0,
		borderRadius: 0,
		backgroundColor: "transparent",
		color: r,
		position: "relative",
		isolation: "isolate",
		"&::after": {
			content: "\"\"",
			position: "absolute",
			top: 0,
			bottom: 0,
			left: "50%",
			transform: "translateX(-50%)",
			width: i,
			borderRadius: s,
			backgroundColor: a,
			zIndex: -1
		}
	};
	return {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		boxSizing: "border-box",
		width: i,
		height: i,
		marginTop: t.spacing.twoXS,
		marginBottom: t.spacing.twoXS,
		marginLeft: "auto",
		marginRight: "auto",
		textAlign: "center",
		cursor: "pointer",
		fontSize: t.fontSizes.sm,
		lineHeight: t.lineHeights.base,
		borderRadius: s,
		outline: "none",
		...n && {
			"&[data-selected]:not([data-selection-start]):not([data-selection-end])": {
				width: "auto",
				minWidth: i,
				marginLeft: 0,
				marginRight: 0,
				borderRadius: 0,
				backgroundColor: o,
				position: "relative",
				"&[data-hovered]::after, &[data-focus-visible]::after": l,
				"&[data-outside-month]": {
					backgroundColor: "transparent",
					color: t.colors.fadedText40
				}
			},
			"&[data-selection-start]:not([data-selection-end])": {
				...u,
				backgroundImage: `linear-gradient(to right, transparent 50%, ${o} 50%)`,
				"&[data-hovered]::after, &[data-focus-visible]::after": {
					outline: `${t.sizes.focusOutlineWidth} solid ${a}`,
					outlineOffset: t.spacing.threeXS
				},
				"&[data-outside-month]": {
					backgroundColor: "transparent",
					backgroundImage: "none",
					color: t.colors.fadedText40,
					"&::after": { display: "none" }
				}
			},
			"&[data-selection-end]:not([data-selection-start])": {
				...u,
				backgroundImage: `linear-gradient(to left, transparent 50%, ${o} 50%)`,
				"&[data-hovered]::after, &[data-focus-visible]::after": {
					outline: `${t.sizes.focusOutlineWidth} solid ${a}`,
					outlineOffset: t.spacing.threeXS
				},
				"&[data-outside-month]": {
					backgroundColor: "transparent",
					backgroundImage: "none",
					color: t.colors.fadedText40,
					"&::after": { display: "none" }
				}
			},
			"&[data-selection-start][data-selection-end]": {
				backgroundColor: a,
				color: r,
				"&[data-focus-visible]": {
					outline: `${t.sizes.focusOutlineWidth} solid ${a}`,
					outlineOffset: t.spacing.threeXS
				}
			},
			"&[data-selected][data-hovered], &[data-selected][data-focus-visible]": {
				boxShadow: "none",
				outline: "none"
			}
		},
		...!n && {
			"&[data-selected]": {
				backgroundColor: a,
				color: r
			},
			"&[data-selected][data-focus-visible]": {
				outline: `${t.sizes.focusOutlineWidth} solid ${a}`,
				outlineOffset: t.spacing.threeXS
			}
		},
		"&[data-hovered]": { boxShadow: `inset 0 0 0 ${c} ${a}` },
		"&[data-focus-visible]": { boxShadow: `inset 0 0 0 ${c} ${a}` },
		"&[data-disabled], &[data-unavailable]": {
			color: t.colors.fadedText40,
			cursor: "not-allowed",
			boxShadow: "none"
		},
		"&[data-outside-month]": { color: t.colors.fadedText40 },
		"&[data-today]:not([data-outside-month])": {
			textDecorationLine: "underline",
			textDecorationColor: a,
			textDecorationThickness: "2px",
			textUnderlineOffset: "3px"
		}
	};
}, ""), Yr = "stDateInputHeaderPickerPopover", Xr = (e) => {
	let t = e;
	return /* @__PURE__ */ I.jsx(Hr, {
		id: t.id,
		isDisabled: t.isDisabled,
		children: t.formatted
	});
};
function Zr({ ariaLabel: e, value: t, onChange: n, items: r }) {
	let i = v(), a = r.find((e) => e.id === t)?.formatted ?? "", [o, s] = (0, G.useState)(!1), c = (0, G.useRef)(null), { setFloatingRef: l, setReferenceRef: u } = y({
		isOpen: o,
		onClose: () => s(!1),
		floatingSetFn: hr
	}), d = (0, G.useCallback)((e) => {
		e.key === "Tab" && (e.preventDefault(), e.stopPropagation(), s(!1), c.current?.focus());
	}, []), f = (0, G.useCallback)((e) => {
		Array.isArray(e) || n(e);
	}, [n]);
	return /* @__PURE__ */ I.jsxs(Ir, {
		"aria-label": e,
		value: t,
		onChange: f,
		isOpen: o,
		onOpenChange: s,
		children: [/* @__PURE__ */ I.jsxs(Ur, {
			ref: (e) => {
				c.current = e, u(e);
			},
			children: [a, /* @__PURE__ */ I.jsx(Wr, { children: /* @__PURE__ */ I.jsx(k, { size: i.iconSizes.base }) })]
		}), /* @__PURE__ */ I.jsx(Br, {
			className: Yr,
			ref: l,
			isNonModal: !0,
			"data-testid": "stDateInputHeaderPickerPopover",
			children: /* @__PURE__ */ I.jsx("div", {
				onKeyDown: d,
				children: /* @__PURE__ */ I.jsx(Vr, {
					items: r,
					children: Xr
				})
			})
		})]
	});
}
var Qr = 20;
function $r(e) {
	let t = V({
		year: "numeric",
		calendar: e?.focusedDate.calendar.identifier,
		timeZone: e?.timeZone
	});
	if (!e) return {
		items: [],
		value: 0
	};
	let { focusedDate: n, timeZone: r } = e, { calendar: i } = n, a = n.year, o = (e, t) => e ? U(z(e), i).year : t, s = Math.floor(Qr / 2), c = o(e.minValue, a - s), l = o(e.maxValue, a + s), u = Math.min(a + Math.ceil(Qr / 2) - 1, l), d = Math.max(u - Qr + 1, c), f = Math.max(Math.min(d + Qr - 1, l), d), p = [];
	for (let e = d; e <= f; e++) p.push({
		id: e,
		formatted: t.format(n.set({ year: e }).toDate(r))
	});
	return {
		items: p,
		value: Math.min(Math.max(a, d), f)
	};
}
function ei(e, t) {
	let n = t.minValue ? z(t.minValue) : null, r = t.maxValue ? z(t.maxValue) : null;
	return e.map(({ id: e, formatted: t, date: i }) => ({
		id: e,
		formatted: t,
		isDisabled: r !== null && R(i).compare(r) > 0 || n !== null && L(i).compare(n) < 0
	}));
}
function ti() {
	let e = (0, G.useContext)(Q), t = (0, G.useContext)($), n = e || t, { items: r, value: i } = $r(n), a = (0, G.useCallback)((e) => {
		l(e) || !n || n.setFocusedDate(n.focusedDate.set({ year: Number(e) }));
	}, [n]);
	return /* @__PURE__ */ I.jsxs(Nr, { children: [
		/* @__PURE__ */ I.jsx(Fr, {
			slot: "previous",
			"aria-label": "Previous month",
			children: /* @__PURE__ */ I.jsx(S, {
				content: Vn,
				size: "base"
			})
		}),
		/* @__PURE__ */ I.jsxs(Pr, { children: [
			/* @__PURE__ */ I.jsx(On, {
				format: "long",
				children: ({ "aria-label": e, value: t, onChange: r, items: i }) => /* @__PURE__ */ I.jsx(Zr, {
					ariaLabel: e,
					value: t,
					onChange: r,
					items: n ? ei(i, n) : i
				})
			}),
			/* @__PURE__ */ I.jsx(Dn, { children: ({ "aria-label": e }) => /* @__PURE__ */ I.jsx(Zr, {
				ariaLabel: e,
				value: i,
				onChange: a,
				items: r
			}) }),
			/* @__PURE__ */ I.jsx(Gr, { children: /* @__PURE__ */ I.jsx(ae, {}) })
		] }),
		/* @__PURE__ */ I.jsx(Fr, {
			slot: "next",
			"aria-label": "Next month",
			children: /* @__PURE__ */ I.jsx(S, {
				content: Hn,
				size: "base"
			})
		})
	] });
}
var ni = /* @__PURE__ */ new Set([
	"year",
	"month",
	"day"
]), ri = /* @__PURE__ */ new Set([
	"hour",
	"minute",
	"second",
	"dayPeriod"
]);
function ii(e, t) {
	let n = qn(e.filter((e) => ni.has(e.type) || e.type === "literal" && e.text !== ", "), t), r = e.filter((e) => ri.has(e.type) || e.type === "literal" && e.text === ":"), i = {
		type: "literal",
		text: ", ",
		isPlaceholder: !1,
		placeholder: "",
		isEditable: !1
	};
	return [
		...n,
		i,
		...r
	];
}
function ai({ format: e, isRange: t, includeTime: n }) {
	let r = (0, G.useContext)(Ze);
	if (!r) return null;
	let i = n ? ii(r.segments, e) : qn(r.segments, e);
	return /* @__PURE__ */ I.jsx(Sr, {
		$isRange: t,
		children: i.map((e, t) => /* @__PURE__ */ I.jsx(Cr, { segment: e }, `${e.type}-${t}`))
	});
}
//#endregion
export { xr as A, Br as B, qr as C, kr as D, Yr as E, Rr as F, or as G, xn as H, Qn as I, Yn as J, zr as K, Un as L, Lr as M, mr as N, yr as O, Tr as P, hr as R, Vr as S, Ar as T, Jn as U, Kr as V, vr as W, Hr as _, ai as a, Xn as b, nr as c, br as d, sr as f, tr as g, gr as h, Wr as i, Er as j, er as k, fr as l, ir as m, _r as n, $ as o, rr as p, Zn as q, ti as r, jr as s, Gn as t, wr as u, Jr as v, Mr as w, Tn as x, dr as y, Dr as z };

//# sourceMappingURL=ReorderedSegments-gjZpUY_f-DojNzhSR.js.map