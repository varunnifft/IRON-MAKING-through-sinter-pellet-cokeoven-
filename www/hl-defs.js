/* Hearth liquid prediction inputs (cells of the Inputs sheet of BF_Hearth_Liquid_Module_1.xlsx). Shared with Know your inputs. */
(function (root) {
  root.HL_DEFS = [
    { k: 'name', c: 'C7', s: 'A. Furnace geometry', l: 'Furnace name', u: '', ref: 'BF-1', text: true, opt: true },
    { k: 'D_hearth', c: 'C8', s: 'A. Furnace geometry', l: 'Hearth inner diameter (current working)', u: 'm', ref: 11, ty: '8 – 15', w: 'Furnace drawing; wear-adjusted diameter if a survey is available', share: 'Inputs!B32' },
    { k: 'H_sump', c: 'C9', s: 'A. Furnace geometry', l: 'Sump depth: taphole centre to hearth bottom', u: 'm', ref: 2, ty: '1.5 – 3.0', w: 'Drawing (taphole elevation – bottom elevation)', share: 'Estimator!C78' },
    { k: 'H_tt', c: 'C10', s: 'A. Furnace geometry', l: 'Height: taphole centre to tuyere centre', u: 'm', ref: 3.6, ty: '3 – 5', w: 'Furnace drawing', share: 'Inputs!B35' },
    { k: 'N_TH', c: 'C11', s: 'A. Furnace geometry', l: 'Number of tapholes installed', u: 'No.', ref: 2, ty: '1 / 2 / 3 / 4', w: 'Furnace design', int: true, share: 'nTap' },
    { k: 'N_THs', c: 'C12', s: 'A. Furnace geometry', l: 'Tapholes in service (in rotation)', u: 'No.', ref: 2, ty: '≤ installed', w: 'Cast-house practice (exclude taphole under repair)', int: true },
    { k: 'D_bit', c: 'C13', s: 'A. Furnace geometry', l: 'Taphole drill-bit diameter', u: 'mm', ref: 55, ty: '40 – 70', w: 'Drill machine / cast-house record', share: 'Inputs!B69', sx: 1000 },
    { k: 'eps', c: 'C16', s: 'B. Hearth / deadman', l: 'Deadman coke bed porosity (liquid voidage)', u: 'fraction', ref: 0.35, ty: '0.30 – 0.40', w: 'Default 0.35; tune during calibration', opt: true, share: 'Estimator!C25' },
    { k: 'P_day', c: 'C19', s: 'C. Production and liquids', l: 'Hot metal production rate', u: 'tHM/day', ref: 4500, ty: '', w: 'Daily production report', share: 'Inputs!B4' },
    { k: 'SlagRate', c: 'C20', s: 'C. Production and liquids', l: 'Slag rate', u: 'kg/tHM', ref: 300, ty: '250 – 350', w: 'Burden balance / daily slag report', share: 'Inputs!B13' },
    { k: 'rho_HM', c: 'C21', s: 'C. Production and liquids', l: 'Hot metal density', u: 'kg/m³', ref: 6900, ty: '6,800 – 7,000', w: 'Default is adequate', opt: true, share: 'Estimator!C66' },
    { k: 'rho_SL', c: 'C22', s: 'C. Production and liquids', l: 'Slag density', u: 'kg/m³', ref: 2600, ty: '2,500 – 2,800', w: 'Default is adequate', opt: true, share: 'Estimator!C65' },
    { k: 'P_blast', c: 'C25', s: 'D. Pressure', l: 'Hot blast pressure (average)', u: 'bar g', ref: 3.2, ty: '2.0 – 4.5', w: 'Control room (DCS) trend', share: 'Inputs!B22', sx: 0.980665 },
    { k: 'Gap', c: 'C28', s: 'E. Tapping practice', l: 'Gap between taps (all tapholes closed)', u: 'min', ref: 10, ty: '1 TH: 30 | 2 TH: 0–15 | 4 TH: 0', w: 'Minutes from one tap closing to the next opening' },
    { k: 'MaxDur', c: 'C29', s: 'E. Tapping practice', l: 'Maximum tap duration (planned close)', u: 'min', ref: 150, ty: '90 – 180', w: 'Cast-house practice / torpedo capacity' },
    { k: 'DoubleTap', c: 'C30', s: 'E. Tapping practice', l: 'Double tapping allowed (2 tapholes open together)', u: '', ref: 'No', list: ['No', 'Yes'], opt: true, w: 'Yes only for 3–4 taphole furnaces with overlap tapping' },
    { k: 'DT_trig', c: 'C31', s: 'E. Tapping practice', l: 'Open 2nd taphole if level ≥', u: '% of taphole→tuyere', ref: 0.55, ty: '50 – 60 %', pct: true, opt: true, w: 'Used only when double tapping = Yes' },
    { k: 'Force_trig', c: 'C32', s: 'E. Tapping practice', l: 'Force next tap open (ignore gap) if level ≥', u: '% of taphole→tuyere', ref: 0.65, ty: '60 – 70 %', pct: true, opt: true, w: 'Plant safety rule' },
    { k: 'EndObs', c: 'C35', s: 'F. Cast end and alarm limits', l: 'How does a typical cast end?', u: '', ref: 'Normal', list: ['Clean blow', 'Normal', 'Slaggy blow'], w: 'What the cast-house crew sees in the last minutes of most casts' },
    { k: 'Opt_clean', c: 'C37', s: 'F. Cast end and alarm limits', l: 'Slag layer left — Clean blow', u: 'm', ref: 0.2, ty: '0.15 – 0.25', opt: true, w: 'Stream thins, strong gas blow, very little slag; next cast slag comes late' },
    { k: 'Opt_normal', c: 'C38', s: 'F. Cast end and alarm limits', l: 'Slag layer left — Normal', u: 'm', ref: 0.3, ty: '0.25 – 0.35', opt: true, w: 'Slag runs steadily at the end, then the taphole blows' },
    { k: 'Opt_slaggy', c: 'C39', s: 'F. Cast end and alarm limits', l: 'Slag layer left — Slaggy blow', u: 'm', ref: 0.45, ty: '0.40 – 0.55', opt: true, w: 'Blows while slag still runs heavily; cold hearth, viscous slag or weak taphole' },
    { k: 'Warn', c: 'C40', s: 'F. Cast end and alarm limits', l: 'Warning level', u: '% of taphole→tuyere', ref: 0.5, pct: true, opt: true, w: 'Plant rule' },
    { k: 'Crit', c: 'C41', s: 'F. Cast end and alarm limits', l: 'Critical level', u: '% of taphole→tuyere', ref: 0.75, pct: true, opt: true, w: 'Plant rule' },
    { k: 'dt', c: 'C44', s: 'G. Simulation', l: 'Simulation time step', u: 'min', ref: 1, list: [1, 2, 5], opt: true, w: '48 h horizon = 2,880 steps' }
  ];
})(typeof window !== 'undefined' ? window : globalThis);
