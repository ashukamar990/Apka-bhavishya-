/* ============================================================
   Bhavishya Dekho — lang_complete.js
   Complete Language System — EVERY text translates
   ============================================================ */

'use strict';

// ════════════════════════════════════════════════════════════
// COMPLETE TRANSLATION DICTIONARY
// ════════════════════════════════════════════════════════════
var T = {
  hi: {
    /* ── Currency ── */
    currency: '₹', currencyCode: 'INR',

    /* ── Splash ── */
    splash1: '🔮 भविष्य जानने की तैयारी हो रही है...',
    splash2: '⭐ ग्रहों की स्थिति जांची जा रही है...',
    splash3: '✨ कुंडली तैयार हो रही है...',

    /* ── Nav ── */
    nav_home: 'होम', nav_daily: 'दैनिक राशिफल', nav_monthly: 'मासिक राशिफल',
    nav_yearly: 'वार्षिक राशिफल', nav_matching: 'कुंडली मिलान',
    nav_gemstones: 'रत्न सुझाव', nav_remedies: 'उपाय',
    nav_history: 'मेरी रिपोर्ट्स (हिस्ट्री)', nav_premium: 'Premium Plan',
    nav_about: 'हमारे बारे में', nav_contact: 'संपर्क करें',
    nav_privacy: 'गोपनीयता नीति', nav_terms: 'नियम और शर्तें',
    nav_disclaimer: 'Disclaimer', nav_backup: 'History Backup',

    /* ── Hero ── */
    hero_title: 'अपना भविष्य जानें',
    hero_subtitle: 'वैदिक ज्योतिष से सटीक भविष्यफल',
    hero_btn: '🔮 मुफ्त भविष्यफल देखें',
    hero_tagline: '✨ ग्रह · नक्षत्र · कुंडली · भविष्यफल ✨',

    /* ── Form ── */
    form_name: 'नाम',
    form_name_ph: 'अपना नाम लिखें',
    form_dob: 'जन्म तिथि',
    form_time: 'जन्म समय',
    form_place: 'जन्म स्थान',
    form_place_ph: 'जन्म स्थान दर्ज करें',
    form_gender: 'लिंग',
    form_gender_m: 'पुरुष',
    form_gender_f: 'महिला',
    form_gender_o: 'अन्य',
    form_rashi: 'राशि',
    form_rashi_ph: '-- अपनी राशि चुनें --',
    form_nakshatra: 'नक्षत्र',
    form_submit: '🔮 मेरा भविष्य देखें (मुफ्त)',
    form_required: 'नाम दर्ज करना आवश्यक है',
    form_wait: 'कृपया प्रतीक्षा करें',
    form_loading: 'आपका भविष्य तैयार हो रहा है 🌟',
    form_info: 'अपनी जानकारी दर्ज करें (मुफ्त भविष्य)',

    /* ── Results ── */
    result_title: 'आपका भविष्यफल',
    result_share: '📲 इस रिपोर्ट को शेयर करें',
    result_share2: '📲 Share करें — 1 और मुफ्त पाएं',
    result_main: '🔮 मुख्य भविष्यवाणी',
    result_detail: '【 विस्तृत भविष्यफल 】',
    result_info: '【 व्यक्तिगत जानकारी 】',
    result_free: 'मुफ्त भविष्य',

    /* ── Kundli ── */
    kundli_basic_title: 'विस्तृत कुंडली',
    kundli_basic_desc: '✨ इस रिपोर्ट में क्या मिलेगा?',
    kundli_basic_buy: 'में रिपोर्ट खरीदें',
    kundli_premium_title: 'प्रीमियम कुंडली',
    kundli_premium_buy: 'में प्रीमियम रिपोर्ट खरीदें',
    kundli_basic_label: 'विस्तृत',
    kundli_premium_label: 'प्रीमियम',
    kundli_more: '👑 और विस्तृत जानकारी?',
    kundli_history_empty: 'कोई रिपोर्ट नहीं देखी गई',
    kundli_no_history: 'अभी तक कोई भविष्यफल नहीं देखा। पहले भविष्य देखें!',
    kundli_clear: '🗑️ पूरी History साफ़ करें',
    kundli_remove: '✕ एक भविष्यफल हटाएं (History से चुनें)',
    kundli_report: '🔮 कुंडली रिपोर्ट',
    kundli_free_report: '📜 विस्तृत कुंडली रिपोर्ट',
    kundli_premium_report: '👑 प्रीमियम कुंडली रिपोर्ट',

    /* ── Rashifal ── */
    rashi_daily: '☀️ दैनिक राशिफल',
    rashi_monthly: '📆 मासिक राशिफल',
    rashi_yearly: '📅 वार्षिक राशिफल',
    rashi_select: 'राशि चुनें',
    rashi_today: 'आज का राशिफल',
    rashi_thismonth: 'इस महीने',
    rashi_thisyear: 'इस साल',

    /* ── Rashis ── */
    rashi_aries: 'मेष', rashi_taurus: 'वृष', rashi_gemini: 'मिथुन',
    rashi_cancer: 'कर्क', rashi_leo: 'सिंह', rashi_virgo: 'कन्या',
    rashi_libra: 'तुला', rashi_scorpio: 'वृश्चिक', rashi_sagittarius: 'धनु',
    rashi_capricorn: 'मकर', rashi_aquarius: 'कुंभ', rashi_pisces: 'मीन',

    /* ── Love Calculator ── */
    love_title: '❤️ लव कैलकुलेटर',
    love_your_name: 'आपका नाम',
    love_partner_name: 'साथी का नाम',
    love_your_ph: 'आपका नाम',
    love_partner_ph: 'साथी का नाम',
    love_btn: '❤️ प्यार का प्रतिशत जानें',
    love_result: 'प्रेम अनुकूलता',

    /* ── Horoscope ── */
    horo_title: 'राशिफल देखें',
    horo_select: 'अपनी राशि चुनें',

    /* ── Rashi Package ── */
    rashi_pkg_hint: 'में सटीक राशि जानें',
    rashi_pkg_prefix: 'सिर्फ ',
    rashi_pkg_name: 'राशि पैकेज',
    rashi_pkg_validity: '24 घंटे के लिए सक्रिय',
    rashi_auto: 'Auto Detect — राशि रिपोर्ट में दिखेगी',
    rashi_detect_ok: '✅ राशि auto-detect होगी',

    /* ── Premium ── */
    premium_title: '👑 Premium Plan',
    premium_subtitle: 'प्रीमियम सदस्यता के लाभ',
    premium_all: 'सभी प्रीमियम सुविधाएं',
    premium_member: 'आप प्रीमियम सदस्य हैं',
    premium_benefits: 'प्रीमियम में मिलेंगे ये अतिरिक्त लाभ',
    premium_adfree: 'प्रीमियम में बनें एड-फ्री',
    premium_unlimited: 'बिना किसी रुकावट के सेवाएं',
    premium_daily: '👑 Premium लें — रोज़ 10+ भविष्यफल',
    premium_renew: 'सभी प्रीमियम प्लान में ऑटो-नवीनीकरण की सुविधा',

    /* ── Premium Packages ── */
    pkg_monthly: '/माह', pkg_6month: '/6 माह', pkg_yearly: '/साल',
    pkg_monthly_label: 'मासिक', pkg_6month_label: '6 माह', pkg_yearly_label: 'वार्षिक',

    /* ── Payment ── */
    pay_title: '💳 भुगतान करें',
    pay_btn: '🔐 सुरक्षित भुगतान करें',
    pay_methods: 'सभी payment methods accept होते हैं',
    pay_success: '✅ भुगतान सफल!',
    pay_failed: '❌ भुगतान असफल',
    pay_cancelled: 'भुगतान प्रक्रिया रद्द हुई',
    pay_processing: 'भुगतान प्रक्रिया जारी...',
    pay_secure: '100% Secure Payment — भुगतान होते ही सेवा तुरंत मिलेगी!',
    pay_once: '✦ सभी payments एक बार के होते हैं',
    pay_norefund: '✦ Report generate होने के बाद refund नहीं होगा',

    /* ── Upsell ── */
    upsell_basic: 'विस्तृत कुंडली',
    upsell_premium: 'प्रीमियम कुंडली',
    upsell_basic_btn: '📜 विस्तृत कुंडली',
    upsell_premium_btn: '👑 प्रीमियम कुंडली',

    /* ── Comparison ── */
    compare_basic_title: 'विस्तृत कुंडली',
    compare_premium_title: 'प्रीमियम कुंडली',
    compare_includes: 'सब कुछ +',

    /* ── Gemstones ── */
    gem_title: '💎 रत्न सुझाव',
    gem_subtitle: 'व्यक्तिगत रत्न सिफारिशें',
    gem_wear_day: 'धारण दिन',
    gem_for_rashi: 'ग्रहों के लिए रत्न और धारण विधि',

    /* ── Remedies ── */
    remedy_title: '🕉️ ग्रह उपाय',
    remedy_subtitle: 'दोष निवारण के लिए सरल उपाय',

    /* ── About/Contact/Pages ── */
    about_title: 'हमारे बारे में',
    contact_title: 'संपर्क करें',
    privacy_title: 'गोपनीयता नीति',
    terms_title: 'नियम और शर्तें',
    disclaimer_title: 'Disclaimer',

    /* ── Disclaimer text ── */
    disclaimer_text: '⚠️ यह भविष्यफल वैदिक ज्योतिष पर आधारित है। महत्वपूर्ण निर्णयों के लिए विशेषज्ञ से परामर्श लें।',
    disclaimer_long: 'यह website केवल मनोरंजन और सामान्य मार्गदर्शन के उद्देश्य से बनाई गई है।',

    /* ── General ── */
    share: '📲 शेयर करें',
    share_friends: '📲 दोस्तों के साथ शेयर करें',
    free: 'मुफ्त',
    loading: 'लोड हो रहा है...',
    close: 'बंद करें',
    save: 'सेव करें',
    cancel: 'रद्द करें',
    ok: 'ठीक है',
    back: 'वापस',
    next: 'आगे',
    see_more: 'और देखें',
    history: 'हिस्ट्री',
    bookmark: '📲 Website को Bookmark करें और हर रोज़ अपना भविष्य देखें!',
    support: '🙏 कृपया हमें सपोर्ट करें',
    limit_reset: 'रात 12 बजे आपको 2 नए मुफ्त भविष्यफल मिलेंगे!',

    /* ── Panchang ── */
    panch_day: 'वार', panch_date: 'तिथि', panch_month: 'महीना',
    panch_time: 'समय', panch_age: 'आयु',

    /* ── Kundli matching ── */
    match_bride: '👰 वधू', match_groom: '🤵 वर',
    match_btn: '💕 मिलान करें',
    match_excellent: '🌟 उत्कृष्ट मिलान!',
    match_good: '✅ अच्छा मिलान।',
    match_caution: '⚠️ सावधानी आवश्यक।',

    /* ── Limit messages ── */
    limit_title: 'आज के {feat} समाप्त!',
    limit_used: 'आपने आज के {max} में से {used} बार उपयोग किया',
    limit_watch_ad: 'Ad देखकर +1 मुफ्त पाएं',
    limit_share_get: 'Share करके +1 पाएं',

    /* ── Language selector ── */
    lang_label: 'भाषा',
  },

  en: {
    /* ── Currency ── */
    currency: '$', currencyCode: 'USD',

    /* ── Splash ── */
    splash1: '🔮 Preparing your cosmic reading...',
    splash2: '⭐ Analyzing planetary positions...',
    splash3: '✨ Your horoscope is being prepared...',

    /* ── Nav ── */
    nav_home: 'Home', nav_daily: 'Daily Horoscope', nav_monthly: 'Monthly Horoscope',
    nav_yearly: 'Yearly Horoscope', nav_matching: 'Kundli Matching',
    nav_gemstones: 'Gemstone Guide', nav_remedies: 'Remedies',
    nav_history: 'My Reports (History)', nav_premium: 'Premium Plan',
    nav_about: 'About Us', nav_contact: 'Contact Us',
    nav_privacy: 'Privacy Policy', nav_terms: 'Terms & Conditions',
    nav_disclaimer: 'Disclaimer', nav_backup: 'History Backup',

    /* ── Hero ── */
    hero_title: 'Know Your Future',
    hero_subtitle: 'Accurate predictions through Vedic Astrology',
    hero_btn: '🔮 Get Free Prediction',
    hero_tagline: '✨ Planets · Stars · Kundli · Horoscope ✨',

    /* ── Form ── */
    form_name: 'Name',
    form_name_ph: 'Enter your name',
    form_dob: 'Date of Birth',
    form_time: 'Birth Time',
    form_place: 'Birth Place',
    form_place_ph: 'Enter birth place',
    form_gender: 'Gender',
    form_gender_m: 'Male',
    form_gender_f: 'Female',
    form_gender_o: 'Other',
    form_rashi: 'Zodiac Sign',
    form_rashi_ph: '-- Select your zodiac --',
    form_nakshatra: 'Nakshatra',
    form_submit: '🔮 See My Future (Free)',
    form_required: 'Name is required',
    form_wait: 'Please wait...',
    form_loading: 'Your future is being prepared 🌟',
    form_info: 'Enter your details (free prediction)',

    /* ── Results ── */
    result_title: 'Your Horoscope',
    result_share: '📲 Share This Report',
    result_share2: '📲 Share — Get 1 More Free',
    result_main: '🔮 Main Prediction',
    result_detail: '【 Detailed Horoscope 】',
    result_info: '【 Personal Information 】',
    result_free: 'Free Prediction',

    /* ── Kundli ── */
    kundli_basic_title: 'Detailed Kundli',
    kundli_basic_desc: '✨ What\'s in this report?',
    kundli_basic_buy: 'Buy Report',
    kundli_premium_title: 'Premium Kundli',
    kundli_premium_buy: 'Buy Premium Report',
    kundli_basic_label: 'Detailed',
    kundli_premium_label: 'Premium',
    kundli_more: '👑 Want more details?',
    kundli_history_empty: 'No reports viewed yet',
    kundli_no_history: 'No predictions yet. See your future first!',
    kundli_clear: '🗑️ Clear All History',
    kundli_remove: '✕ Remove a prediction (choose from history)',
    kundli_report: '🔮 Kundli Report',
    kundli_free_report: '📜 Detailed Kundli Report',
    kundli_premium_report: '👑 Premium Kundli Report',

    /* ── Rashifal ── */
    rashi_daily: '☀️ Daily Horoscope',
    rashi_monthly: '📆 Monthly Horoscope',
    rashi_yearly: '📅 Yearly Horoscope',
    rashi_select: 'Select zodiac',
    rashi_today: 'Today\'s Horoscope',
    rashi_thismonth: 'This Month',
    rashi_thisyear: 'This Year',

    /* ── Rashis ── */
    rashi_aries: 'Aries', rashi_taurus: 'Taurus', rashi_gemini: 'Gemini',
    rashi_cancer: 'Cancer', rashi_leo: 'Leo', rashi_virgo: 'Virgo',
    rashi_libra: 'Libra', rashi_scorpio: 'Scorpio', rashi_sagittarius: 'Sagittarius',
    rashi_capricorn: 'Capricorn', rashi_aquarius: 'Aquarius', rashi_pisces: 'Pisces',

    /* ── Love Calculator ── */
    love_title: '❤️ Love Calculator',
    love_your_name: 'Your Name',
    love_partner_name: 'Partner\'s Name',
    love_your_ph: 'Your name',
    love_partner_ph: 'Partner\'s name',
    love_btn: '❤️ Calculate Love %',
    love_result: 'Love Compatibility',

    /* ── Horoscope ── */
    horo_title: 'View Horoscope',
    horo_select: 'Select your zodiac sign',

    /* ── Rashi Package ── */
    rashi_pkg_hint: 'for accurate zodiac detection',
    rashi_pkg_prefix: 'Just ',
    rashi_pkg_name: 'Zodiac Package',
    rashi_pkg_validity: 'Active for 24 hours',
    rashi_auto: 'Auto Detect — zodiac shown in report',
    rashi_detect_ok: '✅ Zodiac will be auto-detected',

    /* ── Premium ── */
    premium_title: '👑 Premium Plan',
    premium_subtitle: 'Premium membership benefits',
    premium_all: 'All premium features',
    premium_member: 'You are a Premium Member',
    premium_benefits: 'Additional benefits in Premium',
    premium_adfree: 'Go Ad-Free with Premium',
    premium_unlimited: 'Uninterrupted services',
    premium_daily: '👑 Get Premium — 10+ daily predictions',
    premium_renew: 'All premium plans include auto-renewal',

    /* ── Premium Packages ── */
    pkg_monthly: '/month', pkg_6month: '/6 months', pkg_yearly: '/year',
    pkg_monthly_label: 'Monthly', pkg_6month_label: '6 Months', pkg_yearly_label: 'Yearly',

    /* ── Payment ── */
    pay_title: '💳 Make Payment',
    pay_btn: '🔐 Secure Payment',
    pay_methods: 'All payment methods accepted',
    pay_success: '✅ Payment Successful!',
    pay_failed: '❌ Payment Failed',
    pay_cancelled: 'Payment cancelled',
    pay_processing: 'Processing payment...',
    pay_secure: '100% Secure Payment — Service activated instantly!',
    pay_once: '✦ All payments are one-time',
    pay_norefund: '✦ No refund after report is generated',

    /* ── Upsell ── */
    upsell_basic: 'Detailed Kundli',
    upsell_premium: 'Premium Kundli',
    upsell_basic_btn: '📜 Detailed Kundli',
    upsell_premium_btn: '👑 Premium Kundli',

    /* ── Comparison ── */
    compare_basic_title: 'Detailed Kundli',
    compare_premium_title: 'Premium Kundli',
    compare_includes: 'everything +',

    /* ── Gemstones ── */
    gem_title: '💎 Gemstone Guide',
    gem_subtitle: 'Personalized gemstone recommendations',
    gem_wear_day: 'Wear Day',
    gem_for_rashi: 'Gemstones for planetary alignment',

    /* ── Remedies ── */
    remedy_title: '🕉️ Planetary Remedies',
    remedy_subtitle: 'Simple remedies for doshas',

    /* ── About/Contact/Pages ── */
    about_title: 'About Us',
    contact_title: 'Contact Us',
    privacy_title: 'Privacy Policy',
    terms_title: 'Terms & Conditions',
    disclaimer_title: 'Disclaimer',

    /* ── Disclaimer text ── */
    disclaimer_text: '⚠️ This prediction is based on Vedic astrology. Consult an expert for important decisions.',
    disclaimer_long: 'This website is for entertainment and general guidance purposes only.',

    /* ── General ── */
    share: '📲 Share',
    share_friends: '📲 Share with friends',
    free: 'Free',
    loading: 'Loading...',
    close: 'Close',
    save: 'Save',
    cancel: 'Cancel',
    ok: 'OK',
    back: 'Back',
    next: 'Next',
    see_more: 'See More',
    history: 'History',
    bookmark: '📲 Bookmark this website and check your future every day!',
    support: '🙏 Please support us',
    limit_reset: 'You will get 2 new free predictions at midnight!',

    /* ── Panchang ── */
    panch_day: 'Day', panch_date: 'Date', panch_month: 'Month',
    panch_time: 'Time', panch_age: 'Age',

    /* ── Kundli matching ── */
    match_bride: '👰 Bride', match_groom: '🤵 Groom',
    match_btn: '💕 Match Now',
    match_excellent: '🌟 Excellent Match!',
    match_good: '✅ Good Match.',
    match_caution: '⚠️ Caution advised.',

    /* ── Limit messages ── */
    limit_title: 'Today\'s {feat} limit reached!',
    limit_used: 'You used {used} out of {max} today',
    limit_watch_ad: 'Watch an ad for +1 free',
    limit_share_get: 'Share to get +1 free',

    /* ── Language selector ── */
    lang_label: 'Language',
  }
};

// ════════════════════════════════════════════════════════════
// CURRENCY SETTINGS (admin se override hoga)
// ════════════════════════════════════════════════════════════
var BD_CURRENCY_SETTINGS = {
  usdBasic: 0.25, usdPremium: 0.60, usdRashi: 0.07,
  usdMonthly: 1.20, usdSixMonth: 6.00, usdYearly: 12.00,
};

var _lang = 'hi';
var _isEn = false;

// ════════════════════════════════════════════════════════════
// DETECT LOCATION
// ════════════════════════════════════════════════════════════
async function detectUserLocation() {
  try {
    var saved = localStorage.getItem('bd_lang');
    if (saved && T[saved]) { _lang = saved; _isEn = (saved === 'en'); return; }
    var res = await fetch('https://ipapi.co/json/');
    var d = await res.json();
    var eng = ['US','GB','CA','AU','NZ','IE','SG','ZA'];
    if (eng.includes(d.country_code)) { _lang = 'en'; _isEn = true; }
    else { _lang = 'hi'; _isEn = false; }
  } catch(e) { _lang = 'hi'; _isEn = false; }
}

// ════════════════════════════════════════════════════════════
// GET TRANSLATION
// ════════════════════════════════════════════════════════════
function t(key) {
  return (T[_lang] && T[_lang][key]) || (T['hi'] && T['hi'][key]) || key;
}

// ════════════════════════════════════════════════════════════
// APPLY LANGUAGE — data-i18n elements + dynamic content
// ════════════════════════════════════════════════════════════
function applyLanguage(lang) {
  if (!T[lang]) lang = 'hi';
  _lang = lang;
  _isEn = (lang === 'en');
  localStorage.setItem('bd_lang', lang);
  document.documentElement.lang = lang;

  var tl = T[lang];

  // ── 1. All data-i18n elements ──
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    var val = tl[key] || T['hi'][key] || '';
    if (val) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = val;
      else el.textContent = val;
    }
  });

  // ── 2. data-i18n-html (innerHTML) ──
  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-html');
    var val = tl[key] || T['hi'][key] || '';
    if (val) el.innerHTML = val;
  });

  // ── 3. data-i18n-placeholder ──
  document.querySelectorAll('[data-i18n-ph]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-ph');
    var val = tl[key] || T['hi'][key] || '';
    if (val) el.placeholder = val;
  });

  // ── 4. Nav items ──
  var navIds = {
    'nav-home': tl.nav_home, 'nav-daily': tl.nav_daily,
    'nav-monthly': tl.nav_monthly, 'nav-yearly': tl.nav_yearly,
    'nav-matching': tl.nav_matching, 'nav-gemstones': tl.nav_gemstones,
    'nav-remedies': tl.nav_remedies, 'nav-history': tl.nav_history,
    'nav-premium': tl.nav_premium, 'nav-about': tl.nav_about,
    'nav-contact': tl.nav_contact, 'nav-privacy': tl.nav_privacy,
    'nav-terms': tl.nav_terms, 'nav-disclaimer': tl.nav_disclaimer,
    'nav-backup': tl.nav_backup,
  };
  Object.keys(navIds).forEach(function(id) {
    var el = document.getElementById(id);
    if (el && navIds[id]) el.textContent = navIds[id];
  });

  // ── 5. Splash messages ──
  window._splashMsgs = [tl.splash1, tl.splash2, tl.splash3];
  var splashEl = document.getElementById('splashMsg');
  if (splashEl) splashEl.textContent = tl.splash1;

  // ── 6. Payment modal ──
  var payTitle = document.getElementById('pay-title-text');
  if (payTitle) payTitle.textContent = tl.pay_title;
  var payBtn = document.querySelector('.payment-content button[onclick="startPayment()"] span, .payment-content button[onclick="startPayment()"]');
  if (payBtn) payBtn.textContent = tl.pay_btn;
  var payMethodsTxt = document.querySelectorAll('.payment-content p');
  payMethodsTxt.forEach(function(p) {
    if (p.textContent.includes('accept') || p.textContent.includes('payment methods')) {
      p.textContent = tl.pay_methods;
    }
  });

  // ── 7. Hero section ──
  var heroTitle = document.getElementById('hero-title');
  var heroSubtitle = document.getElementById('hero-subtitle');
  var heroBtn = document.getElementById('hero-btn');
  var heroTagline = document.getElementById('hero-tagline');
  if (heroTitle) heroTitle.textContent = tl.hero_title;
  if (heroSubtitle) heroSubtitle.textContent = tl.hero_subtitle;
  if (heroBtn) heroBtn.textContent = tl.hero_btn;
  if (heroTagline) heroTagline.textContent = tl.hero_tagline;

  // ── 8. Form labels and placeholders ──
  var formMaps = {
    'label-name': tl.form_name, 'label-dob': tl.form_dob,
    'label-time': tl.form_time, 'label-place': tl.form_place,
    'label-gender': tl.form_gender, 'label-rashi': tl.form_rashi,
    'label-nakshatra': tl.form_nakshatra,
  };
  Object.keys(formMaps).forEach(function(id) {
    var el = document.getElementById(id);
    if (el && formMaps[id]) el.textContent = formMaps[id];
  });

  // Placeholders
  var phMap = {
    'name': tl.form_name_ph, 'birthPlace': tl.form_place_ph,
    'kundliName': tl.form_name_ph, 'kundliPlace': tl.form_place_ph,
    'premiumKundliName': tl.form_name_ph, 'premiumKundliPlace': tl.form_place_ph,
    'loveYourName': tl.love_your_ph, 'lovePartnerName': tl.love_partner_ph,
    'horoscopeName': tl.form_name_ph,
  };
  Object.keys(phMap).forEach(function(id) {
    var el = document.getElementById(id);
    if (el && phMap[id]) el.placeholder = phMap[id];
  });

  // Gender options
  var genderSels = ['gender', 'kundliGender', 'premiumKundliGender'];
  genderSels.forEach(function(selId) {
    var sel = document.getElementById(selId);
    if (!sel) return;
    var opts = sel.querySelectorAll('option');
    opts.forEach(function(opt) {
      if (opt.value === 'male') opt.textContent = tl.form_gender_m;
      else if (opt.value === 'female') opt.textContent = tl.form_gender_f;
      else if (opt.value === 'other') opt.textContent = tl.form_gender_o;
    });
  });

  // Zodiac dropdown options
  var rashiMap = {
    'aries': tl.rashi_aries, 'taurus': tl.rashi_taurus, 'gemini': tl.rashi_gemini,
    'cancer': tl.rashi_cancer, 'leo': tl.rashi_leo, 'virgo': tl.rashi_virgo,
    'libra': tl.rashi_libra, 'scorpio': tl.rashi_scorpio, 'sagittarius': tl.rashi_sagittarius,
    'capricorn': tl.rashi_capricorn, 'aquarius': tl.rashi_aquarius, 'pisces': tl.rashi_pisces,
  };
  document.querySelectorAll('select option').forEach(function(opt) {
    var v = opt.value ? opt.value.toLowerCase() : '';
    if (rashiMap[v]) opt.textContent = rashiMap[v];
  });

  // Submit buttons
  var submitBtn = document.querySelector('button[onclick*="predict"], button[onclick*="submitForm"], .predict-btn-top');
  if (submitBtn && !submitBtn.id) submitBtn.textContent = tl.form_submit;
  var submitBtnId = document.getElementById('main-predict-btn');
  if (submitBtnId) submitBtnId.textContent = tl.form_submit;

  // ── 9. Kundli section ──
  var kundliBasicTitle = document.querySelector('#kundliSection .feature-title, #basicKundliSection h2');
  var kundliPremTitle = document.querySelector('#premiumKundliSection .feature-title, #premiumKundliSection h2');

  // Basic/Premium kundli what's included
  document.querySelectorAll('h3').forEach(function(h) {
    var txt = h.textContent.trim();
    if (txt === '✨ इस रिपोर्ट में क्या मिलेगा?' || txt === '✨ What\'s in this report?') {
      h.textContent = tl.kundli_basic_desc;
    }
    if (txt === '👑 और विस्तृत जानकारी?' || txt === '👑 Want more details?') {
      h.textContent = tl.kundli_more;
    }
    if (txt === 'कोई रिपोर्ट नहीं' || txt === 'No reports viewed yet') {
      h.textContent = tl.kundli_history_empty;
    }
  });

  // ── 10. Rashi pkg hints ──
  document.querySelectorAll('#loveRashiBuyMsg, #horoRashiBuyMsg, #rashiBuyHint').forEach(function(container) {
    var badge = container.querySelector('span[style*="border-radius:20px"]');
    var text  = container.querySelector('div[style*="ffd700"]');
    if (badge) badge.textContent = getPriceDisplay('rashi');
    if (text) text.textContent = tl.rashi_pkg_prefix + getPriceDisplay('rashi') + ' ' + tl.rashi_pkg_hint;
  });

  // ── 11. Premium section texts ──
  document.querySelectorAll('p, div').forEach(function(el) {
    var txt = el.textContent.trim();
    if (!el.children.length) { // only leaf nodes
      if (txt === 'सभी प्रीमियम प्लान में ऑटो-नवीनीकरण की सुविधा' || txt === 'All premium plans include auto-renewal') {
        el.textContent = tl.premium_renew;
      }
      if (txt === '100% Secure Payment — भुगतान होते ही सेवा तुरंत मिलेगी!' || txt === '100% Secure Payment — Service activated instantly!') {
        el.textContent = tl.pay_secure;
      }
      if (txt === '✦ सभी payments एक बार के होते हैं' || txt === '✦ All payments are one-time') {
        el.textContent = tl.pay_once;
      }
      if (txt === '✦ Report generate होने के बाद refund नहीं होगा' || txt === '✦ No refund after report is generated') {
        el.textContent = tl.pay_norefund;
      }
    }
  });

  // ── 12. Love calculator ──
  var loveTitle = document.querySelector('.love-calculator-section h2, #loveSection h2');
  if (loveTitle) loveTitle.textContent = tl.love_title;
  var loveBtn = document.querySelector('.love-calculator-section .predict-btn, #loveSection .predict-btn');
  if (loveBtn) loveBtn.textContent = tl.love_btn;

  // ── 13. Horoscope section ──
  var horoTitle = document.querySelector('.horoscope-section h2, #horoscopeSection h2');
  if (horoTitle) horoTitle.textContent = tl.horo_title;

  // ── 14. Upsell buttons ──
  document.querySelectorAll('.upsell-btn').forEach(function(el) {
    var oc = el.getAttribute('onclick') || '';
    if (oc.includes('showKundliSection') && !oc.includes('Premium')) {
      el.textContent = '📜 ' + getPriceDisplay('basic') + ' ' + tl.upsell_basic;
    }
    if (oc.includes('showPremiumKundliSection')) {
      el.textContent = '👑 ' + getPriceDisplay('premium') + ' ' + tl.upsell_premium;
    }
  });

  // ── 15. Comparison ──
  document.querySelectorAll('h4').forEach(function(el) {
    var txt = el.textContent.trim();
    if (txt.includes('विस्तृत कुंडली') || txt.includes('Detailed Kundli')) {
      el.textContent = tl.compare_basic_title + ' (' + getPriceDisplay('basic') + ')';
    }
    if (txt.includes('प्रीमियम कुंडली') || txt.includes('Premium Kundli')) {
      el.textContent = tl.compare_premium_title + ' (' + getPriceDisplay('premium') + ')';
    }
  });

  // ── 16. Gemstones page ──
  var gemTitle = document.querySelector('#page-gemstones h2, #gemstonesSection h2');
  if (gemTitle) gemTitle.textContent = tl.gem_title;

  // ── 17. Disclaimer ──
  document.querySelectorAll('.disclaimer, [class*="disclaimer"]').forEach(function(el) {
    if (el.textContent.includes('ज्योतिष') || el.textContent.includes('astrology')) {
      el.textContent = tl.disclaimer_text;
    }
  });

  // ── 18. Apply pricing ──
  applyPricingWithLang();

  // ── 19. Language switcher active ──
  document.querySelectorAll('.bd-lang-btn').forEach(function(btn) {
    var isActive = btn.dataset.lang === lang;
    btn.style.background = isActive ? 'linear-gradient(135deg,#ffd700,#ffaa00)' : 'transparent';
    btn.style.color = isActive ? '#07080f' : '#aaa';
  });

  console.log('✅ Full language applied:', lang);
}

// ════════════════════════════════════════════════════════════
// PRICE DISPLAY
// ════════════════════════════════════════════════════════════
function getPriceDisplay(type) {
  var p = window._adminPricing || { basic:19, premium:49, rashi:5, monthly:99, sixMonth:499, yearly:999 };
  var s = BD_CURRENCY_SETTINGS;
  if (_isEn) {
    var map = { basic: s.usdBasic, premium: s.usdPremium, rashi: s.usdRashi,
                monthly: s.usdMonthly, sixMonth: s.usdSixMonth, yearly: s.usdYearly };
    return '$' + (map[type] || 0).toFixed(2);
  }
  var inrMap = { basic: p.basic, premium: p.premium, rashi: p.rashi,
                 monthly: p.monthly, sixMonth: p.sixMonth, yearly: p.yearly };
  return '₹' + (inrMap[type] || 0);
}

// ════════════════════════════════════════════════════════════
// APPLY PRICING WITH LANGUAGE
// ════════════════════════════════════════════════════════════
function applyPricingWithLang() {
  var tl = T[_lang] || T['hi'];
  var setTxt = function(id, txt) { var el = document.getElementById(id); if(el) el.textContent = txt; };

  setTxt('basicKundliPrice',   getPriceDisplay('basic'));
  setTxt('basicKundliBadge',   getPriceDisplay('basic'));
  setTxt('basicKundliBtnText', getPriceDisplay('basic') + ' ' + tl.kundli_basic_buy);
  setTxt('premiumKundliPrice',  getPriceDisplay('premium'));
  setTxt('premiumKundliBadge',  getPriceDisplay('premium'));
  setTxt('premiumKundliBtnText', getPriceDisplay('premium') + ' ' + tl.kundli_premium_buy);

  // Button onclick amounts
  var basicAmt = _isEn ? BD_CURRENCY_SETTINGS.usdBasic : (window._adminPricing ? window._adminPricing.basic : 19);
  var premAmt  = _isEn ? BD_CURRENCY_SETTINGS.usdPremium : (window._adminPricing ? window._adminPricing.premium : 49);
  var basicBtn = document.getElementById('basicKundliBtn');
  if (basicBtn) basicBtn.setAttribute('onclick', "processKundliPayment(" + basicAmt + ", 'basic')");
  var premBtn = document.getElementById('premiumKundliBtn');
  if (premBtn) premBtn.setAttribute('onclick', "processKundliPayment(" + premAmt + ", 'premium')");

  // Premium cards
  document.querySelectorAll('.premium-card').forEach(function(card) {
    var oc = card.getAttribute('onclick') || '';
    var priceEl = card.querySelector('.premium-price');
    if (oc.includes("'monthly'")) {
      if (priceEl) priceEl.innerHTML = getPriceDisplay('monthly') + '<small>' + tl.pkg_monthly + '</small>';
      var mAmt = _isEn ? BD_CURRENCY_SETTINGS.usdMonthly : (window._adminPricing ? window._adminPricing.monthly : 99);
      card.setAttribute('onclick', "showPremiumPayment(" + mAmt + ", 'monthly')");
    } else if (oc.includes("'6months'")) {
      if (priceEl) priceEl.innerHTML = getPriceDisplay('sixMonth') + '<small>' + tl.pkg_6month + '</small>';
      var sAmt = _isEn ? BD_CURRENCY_SETTINGS.usdSixMonth : (window._adminPricing ? window._adminPricing.sixMonth : 499);
      card.setAttribute('onclick', "showPremiumPayment(" + sAmt + ", '6months')");
    } else if (oc.includes("'yearly'")) {
      if (priceEl) priceEl.innerHTML = getPriceDisplay('yearly') + '<small>' + tl.pkg_yearly + '</small>';
      var yAmt = _isEn ? BD_CURRENCY_SETTINGS.usdYearly : (window._adminPricing ? window._adminPricing.yearly : 999);
      card.setAttribute('onclick', "showPremiumPayment(" + yAmt + ", 'yearly')");
    }
  });

  // Comparison prices
  document.querySelectorAll('.comparison-price').forEach(function(el) {
    var txt = el.textContent;
    if (txt.match(/₹19|\$0\.25|19/)) el.textContent = getPriceDisplay('basic');
    if (txt.match(/₹49|\$0\.60|49/)) el.textContent = getPriceDisplay('premium');
  });

  // Rashi hints
  var tl2 = T[_lang] || T['hi'];
  document.querySelectorAll('#loveRashiBuyMsg, #horoRashiBuyMsg, #rashiBuyHint').forEach(function(c) {
    var badge = c.querySelector('span[style*="border-radius:20px"]');
    var text  = c.querySelector('div[style*="ffd700"]');
    if (badge) badge.textContent = getPriceDisplay('rashi');
    if (text) text.textContent = tl2.rashi_pkg_prefix + getPriceDisplay('rashi') + ' ' + tl2.rashi_pkg_hint;
  });
}

// ════════════════════════════════════════════════════════════
// LOAD USD PRICES FROM FIREBASE
// ════════════════════════════════════════════════════════════
async function loadUsdPricesFromAdmin() {
  try {
    if (typeof database === 'undefined') return;
    var snap = await database.ref('settings/usdPricing').once('value');
    var d = snap.val();
    if (d) {
      BD_CURRENCY_SETTINGS.usdBasic    = d.basic    || BD_CURRENCY_SETTINGS.usdBasic;
      BD_CURRENCY_SETTINGS.usdPremium  = d.premium  || BD_CURRENCY_SETTINGS.usdPremium;
      BD_CURRENCY_SETTINGS.usdRashi    = d.rashi    || BD_CURRENCY_SETTINGS.usdRashi;
      BD_CURRENCY_SETTINGS.usdMonthly  = d.monthly  || BD_CURRENCY_SETTINGS.usdMonthly;
      BD_CURRENCY_SETTINGS.usdSixMonth = d.sixMonth || BD_CURRENCY_SETTINGS.usdSixMonth;
      BD_CURRENCY_SETTINGS.usdYearly   = d.yearly   || BD_CURRENCY_SETTINGS.usdYearly;
    }
  } catch(e) {}
}

// ════════════════════════════════════════════════════════════
// LANGUAGE SWITCHER UI
// ════════════════════════════════════════════════════════════
function createLanguageSwitcher() {
  var old = document.getElementById('bd-lang-switcher');
  if (old) old.remove();

  var sw = document.createElement('div');
  sw.id = 'bd-lang-switcher';
  sw.style.cssText = 'position:fixed;bottom:80px;right:16px;z-index:9999;';
  sw.innerHTML =
    '<div style="display:flex;gap:4px;align-items:center;background:rgba(7,8,15,0.93);' +
    'border:1px solid rgba(255,215,0,0.4);border-radius:25px;padding:5px 10px 5px 8px;' +
    'box-shadow:0 4px 20px rgba(0,0,0,0.5);">' +
    '<span style="font-size:0.75rem;color:rgba(255,215,0,0.7);margin-right:2px;">🌐</span>' +
    '<button class="bd-lang-btn" data-lang="hi" onclick="applyLanguage(\'hi\')" ' +
    'style="background:transparent;border:none;cursor:pointer;font-size:0.78rem;' +
    'font-weight:600;padding:4px 10px;border-radius:20px;color:#aaa;transition:all 0.2s;">हिं</button>' +
    '<button class="bd-lang-btn" data-lang="en" onclick="applyLanguage(\'en\')" ' +
    'style="background:transparent;border:none;cursor:pointer;font-size:0.78rem;' +
    'font-weight:600;padding:4px 10px;border-radius:20px;color:#aaa;transition:all 0.2s;">EN</button>' +
    '</div>';

  document.body.appendChild(sw);
}

// ════════════════════════════════════════════════════════════
// INIT
// ════════════════════════════════════════════════════════════
window.applyLanguage = applyLanguage;
window.getPriceDisplay = getPriceDisplay;
window.BD_CURRENCY_SETTINGS = BD_CURRENCY_SETTINGS;
window.t = t;

async function initLanguageSystem() {
  await detectUserLocation();
  await loadUsdPricesFromAdmin();
  // DOM ready hone ke baad apply karo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      createLanguageSwitcher();
      applyLanguage(_lang);
    });
  } else {
    createLanguageSwitcher();
    applyLanguage(_lang);
  }
  console.log('✅ Language system ready:', _lang);
}

initLanguageSystem();
