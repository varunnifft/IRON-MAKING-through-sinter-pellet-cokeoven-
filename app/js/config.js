/* App configuration. backendUrl = the Web app URL of the Google Apps Script backend (ends in /exec).
   It can also be set inside the app: log in with the admin ID, then Menu > Admin panel. */
window.SP_CONFIG = {
  version: '1.3.1',
  author: 'Niteen Kumar',
  backendUrl: 'https://script.google.com/macros/s/AKfycbzHbObzamJDlrt4_mt_KAdAWmflWGoODc1lDmfmVTyTc4-3e0vm0iBoU76XxZ1y7VEweA/exec',
  // Web app URL of the 'Sinter Predict - Results to Drive' Apps Script (publish results with >= 95 % user inputs). Blank = use backendUrl.
  driveUrl: '',
  publishMinUserPct: 95,
  // true = "Use the app without login" on the login screen (login / register stay optional); false = login required
  allowGuest: true,
  adminEmail: 'varunnifft@gmail.com'
};
