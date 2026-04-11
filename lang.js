/* ============================================================
   Bhavishya Dekho — lang.js
   Language System: Auto-detect + Manual Switch
   Supported: Hindi (hi), English (en), Other (auto)
   ============================================================ */

// ── TRANSLATIONS ─────────────────────────────────────────────
var BD_LANG = {

  hi: {
    // Currency
    currency: '₹',
    currencyCode: 'INR',

    // Nav / Menu
    nav_home: 'होम',
    nav_daily: 'दैनिक राशिफल',
    nav_monthly: 'मासिक राशिफल',
    nav_yearly: 'वार्षिक राशिफल',
    nav_matching: 'कुंडली मिलान',
    nav_gemstones: 'रत्न सुझाव',
    nav_remedies: 'उपाय',
    nav_history: 'मेरी रिपोर्ट्स (हिस्ट्री)',
    nav_premium: 'Premium Plan',
    nav_about: 'हमारे बारे में',
    nav_contact: 'संपर्क करें',
    nav_privacy: 'गोपनीयता नीति',
    nav_terms: 'नियम और शर्तें',
    nav_disclaimer: 'Disclaimer',
    nav_backup: 'History Backup',

    // Splash
    splash_msg1: '🔮 भविष्य जानने की तैयारी हो रही है...',
    splash_msg2: '⭐ ग्रहों की स्थिति जांची जा रही है...',
    splash_msg3: '✨ कुंडली तैयार हो रही है...',

    // Hero
    hero_title: 'अपना भविष्य जानें',
    hero_subtitle: 'वैदिक ज्योतिष से सटीक भविष्यफल',
    hero_btn: '🔮 मुफ्त भविष्यफल देखें',

    // Kundli
    basic_kundli_title: 'विस्तृत कुंडली',
    basic_kundli_btn: 'में रिपोर्ट खरीदें',
    premium_kundli_title: 'प्रीमियम कुंडली',
    premium_kundli_btn: 'में प्रीमियम रिपोर्ट खरीदें',

    // Premium packages
    pkg_monthly: '/माह',
    pkg_6month: '/6 माह',
    pkg_yearly: '/साल',

    // Payment
    pay_title: '💳 भुगतान करें',
    pay_btn: '🔐 सुरक्षित भुगतान करें',
    pay_methods: 'सभी payment methods accept होते हैं',

    // Rashi price hint
    rashi_hint: 'में सटीक राशि जानें',
    rashi_hint_prefix: 'सिर्फ ',

    // Upsell
    upsell_basic: 'विस्तृत कुंडली',
    upsell_premium: 'प्रीमियम कुंडली',

    // Language selector label
    lang_label: 'भाषा',
  },

  en: {
    // Currency — set by admin (USD for US users)
    currency: '$',
    currencyCode: 'USD',

    // Nav / Menu
    nav_home: 'Home',
    nav_daily: 'Daily Horoscope',
    nav_monthly: 'Monthly Horoscope',
    nav_yearly: 'Yearly Horoscope',
    nav_matching: 'Kundli Matching',
    nav_gemstones: 'Gemstone Guide',
    nav_remedies: 'Remedies',
    nav_history: 'My Reports (History)',
    nav_premium: 'Premium Plan',
    nav_about: 'About Us',
    nav_contact: 'Contact Us',
    nav_privacy: 'Privacy Policy',
    nav_terms: 'Terms & Conditions',
    nav_disclaimer: 'Disclaimer',
    nav_backup: 'History Backup',

    // Splash
    splash_msg1: '🔮 Preparing your cosmic reading...',
    splash_msg2: '⭐ Analyzing planetary positions...',
    splash_msg3: '✨ Your horoscope is being prepared...',

    // Hero
    hero_title: 'Know Your Future',
    hero_subtitle: 'Accurate predictions through Vedic Astrology',
    hero_btn: '🔮 Get Free Prediction',

    // Kundli
    basic_kundli_title: 'Detailed Kundli',
    basic_kundli_btn: 'Buy Report',
    premium_kundli_title: 'Premium Kundli',
    premium_kundli_btn: 'Buy Premium Report',

    // Premium packages
    pkg_monthly: '/month',
    pkg_6month: '/6 months',
    pkg_yearly: '/year',

    // Payment
    pay_title: '💳 Make Payment',
    pay_btn: '🔐 Secure Payment',
    pay_methods: 'All payment methods accepted',

    // Rashi price hint
    rashi_hint: 'for accurate zodiac detection',
    rashi_hint_prefix: 'Just ',

    // Upsell
    upsell_basic: 'Detailed Kundli',
    upsell_premium: 'Premium Kundli',

    // Language selector label
    lang_label: 'Language',
  }
};

// ── ADMIN SETTINGS (Firebase se override hoga) ───────────────
var BD_CURRENCY_SETTINGS = {
  usdRate: 0.012,     // 1 INR = 0.012 USD (approx)
  usdBasic: 0.25,     // $0.25 for basic kundli (admin set karega)
  usdPremium: 0.60,   // $0.60 for premium kundli
  usdRashi: 0.07,     // $0.07 for rashi
  usdMonthly: 1.20,   // $1.20/month
  usdSixMonth: 6.00,  // $6.00/6months
  usdYearly: 12.00,   // $12.00/year
};

// ── CURRENT LANGUAGE STATE ───────────────────────────────────
var _currentLang = 'hi';
var _currentCurrency = '₹';
var _isUSUser = false;

// ── DETECT USER LOCATION ─────────────────────────────────────
async function detectUserLocation() {
  try {
    var savedLang = localStorage.getItem('bd_lang');
    if (savedLang && ['hi','en'].includes(savedLang)) {
      _currentLang = savedLang;
      _isUSUser = (savedLang === 'en');
      return;
    }

    // IP se country detect karo
    var res = await fetch('https://ipapi.co/json/');
    var data = await res.json();
    var country = data.country_code || 'IN';

    // US, UK, CA, AU, NZ → English + USD
    var englishCountries = ['US','GB','CA','AU','NZ','IE','SG','ZA'];
    if (englishCountries.includes(country)) {
      _currentLang = 'en';
      _isUSUser = (country === 'US');
    } else {
      _currentLang = 'hi';
      _isUSUser = false;
    }
  } catch(e) {
    _currentLang = 'hi'; // fallback Hindi
  }
}

// ── APPLY LANGUAGE TO PAGE ───────────────────────────────────
function applyLanguage(lang) {
  if (!BD_LANG[lang]) lang = 'hi';
  _currentLang = lang;
  localStorage.setItem('bd_lang', lang);

  var t = BD_LANG[lang];
  var isEn = (lang === 'en');

  // ── 1. Nav items ──
  var navMap = {
    'nav-home': t.nav_home,
    'nav-daily': t.nav_daily,
    'nav-monthly': t.nav_monthly,
    'nav-yearly': t.nav_yearly,
    'nav-matching': t.nav_matching,
    'nav-gemstones': t.nav_gemstones,
    'nav-remedies': t.nav_remedies,
    'nav-history': t.nav_history,
    'nav-about': t.nav_about,
    'nav-contact': t.nav_contact,
    'nav-privacy': t.nav_privacy,
    'nav-terms': t.nav_terms,
    'nav-disclaimer': t.nav_disclaimer,
    'nav-backup': t.nav_backup,
  };
  Object.entries(navMap).forEach(function(entry) {
    var el = document.getElementById(entry[0]);
    if (el) el.textContent = entry[1];
  });

  // ── 2. Splash messages ──
  window._splashMsgs = [t.splash_msg1, t.splash_msg2, t.splash_msg3];

  // ── 3. Hero text ──
  var heroTitle = document.getElementById('hero-title');
  var heroSubtitle = document.getElementById('hero-subtitle');
  var heroBtn = document.getElementById('hero-btn');
  if (heroTitle) heroTitle.textContent = t.hero_title;
  if (heroSubtitle) heroSubtitle.textContent = t.hero_subtitle;
  if (heroBtn) heroBtn.textContent = t.hero_btn;

  // ── 4. Payment title ──
  var payTitle = document.querySelector('.payment-title');
  if (payTitle) payTitle.textContent = t.pay_title;
  var payBtn = document.getElementById('pay-secure-btn');
  if (payBtn) payBtn.textContent = t.pay_btn;
  var payMethods = document.getElementById('pay-methods-text');
  if (payMethods) payMethods.textContent = t.pay_methods;

  // ── 5. Currency + Prices ──
  applyPricingWithLanguage(lang);

  // ── 6. Upsell buttons ──
  document.querySelectorAll('.upsell-btn').forEach(function(el) {
    var onclick = el.getAttribute('onclick') || '';
    if (onclick.includes('showKundliSection') && !onclick.includes('Premium')) {
      var p = window._adminPricing;
      var price = isEn ? formatCurrencyEn(BD_CURRENCY_SETTINGS.usdBasic) : (t.currency + (p ? p.basic : 19));
      el.textContent = '📜 ' + price + ' ' + t.upsell_basic;
    }
    if (onclick.includes('showPremiumKundliSection')) {
      var p2 = window._adminPricing;
      var price2 = isEn ? formatCurrencyEn(BD_CURRENCY_SETTINGS.usdPremium) : (t.currency + (p2 ? p2.premium : 49));
      el.textContent = '👑 ' + price2 + ' ' + t.upsell_premium;
    }
  });

  // ── 7. Language selector active state ──
  document.querySelectorAll('.bd-lang-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // ── 8. html lang attribute ──
  document.documentElement.lang = lang;

  console.log('✅ Language applied:', lang);
}

// ── FORMAT CURRENCY ──────────────────────────────────────────
function formatCurrencyEn(amount) {
  return '$' + amount.toFixed(2);
}

function getPriceDisplay(inrPrice, usdPrice) {
  if (_currentLang === 'en') {
    return formatCurrencyEn(usdPrice);
  }
  return '₹' + inrPrice;
}

// ── APPLY PRICING WITH LANGUAGE ──────────────────────────────
function applyPricingWithLanguage(lang) {
  var p = window._adminPricing || { basic:19, premium:49, rashi:5, monthly:99, sixMonth:499, yearly:999 };
  var s = BD_CURRENCY_SETTINGS;
  var isEn = (lang === 'en');
  var t = BD_LANG[lang] || BD_LANG['hi'];

  var basicDisplay   = isEn ? formatCurrencyEn(s.usdBasic)    : '₹' + p.basic;
  var premDisplay    = isEn ? formatCurrencyEn(s.usdPremium)   : '₹' + p.premium;
  var rashiDisplay   = isEn ? formatCurrencyEn(s.usdRashi)     : '₹' + p.rashi;
  var monthlyDisplay = isEn ? formatCurrencyEn(s.usdMonthly)   : '₹' + p.monthly;
  var sixMoDisplay   = isEn ? formatCurrencyEn(s.usdSixMonth)  : '₹' + p.sixMonth;
  var yearlyDisplay  = isEn ? formatCurrencyEn(s.usdYearly)    : '₹' + p.yearly;

  // Basic kundli
  var setTxt = function(id, txt) { var el = document.getElementById(id); if(el) el.textContent = txt; };
  setTxt('basicKundliPrice', basicDisplay);
  setTxt('basicKundliBadge', basicDisplay);
  setTxt('basicKundliBtnText', basicDisplay + ' ' + t.basic_kundli_btn);

  // Button onclick update
  var basicAmt = isEn ? s.usdBasic : p.basic;
  var basicBtn = document.getElementById('basicKundliBtn');
  if (basicBtn) basicBtn.setAttribute('onclick', "processKundliPayment(" + basicAmt + ", 'basic')");

  // Premium kundli
  setTxt('premiumKundliPrice', premDisplay);
  setTxt('premiumKundliBadge', premDisplay);
  setTxt('premiumKundliBtnText', premDisplay + ' ' + t.premium_kundli_btn);

  var premAmt = isEn ? s.usdPremium : p.premium;
  var premBtn = document.getElementById('premiumKundliBtn');
  if (premBtn) premBtn.setAttribute('onclick', "processKundliPayment(" + premAmt + ", 'premium')");

  // Premium packages
  document.querySelectorAll('.premium-card').forEach(function(card) {
    var onclick = card.getAttribute('onclick') || '';
    var priceEl = card.querySelector('.premium-price');
    if (onclick.includes("'monthly'")) {
      if (priceEl) priceEl.innerHTML = monthlyDisplay + '<small>' + t.pkg_monthly + '</small>';
      var mAmt = isEn ? s.usdMonthly : p.monthly;
      card.setAttribute('onclick', "showPremiumPayment(" + mAmt + ", 'monthly')");
    } else if (onclick.includes("'6months'")) {
      if (priceEl) priceEl.innerHTML = sixMoDisplay + '<small>' + t.pkg_6month + '</small>';
      var sAmt = isEn ? s.usdSixMonth : p.sixMonth;
      card.setAttribute('onclick', "showPremiumPayment(" + sAmt + ", '6months')");
    } else if (onclick.includes("'yearly'")) {
      if (priceEl) priceEl.innerHTML = yearlyDisplay + '<small>' + t.pkg_yearly + '</small>';
      var yAmt = isEn ? s.usdYearly : p.yearly;
      card.setAttribute('onclick', "showPremiumPayment(" + yAmt + ", 'yearly')");
    }
  });

  // Comparison prices
  document.querySelectorAll('.comparison-price').forEach(function(el) {
    var txt = el.textContent;
    if (txt.includes('19') || txt.includes('0.25')) el.textContent = basicDisplay;
    if (txt.includes('49') || txt.includes('0.60')) el.textContent = premDisplay;
  });

  // Rashi price hints
  document.querySelectorAll('#loveRashiBuyMsg, #horoRashiBuyMsg, #rashiBuyHint').forEach(function(container) {
    var badge = container.querySelector('span[style*="border-radius:20px"]');
    var text  = container.querySelector('div[style*="ffd700"]');
    if (badge) badge.textContent = rashiDisplay;
    if (text && text.textContent.includes('राशि') || text && text.textContent.includes('zodiac')) {
      text.textContent = t.rashi_hint_prefix + rashiDisplay + ' ' + t.rashi_hint;
    }
  });

  // Payment modal amount
  window._currentCurrencySymbol = isEn ? '$' : '₹';
  window._currentLangCode = lang;
}

// ── LOAD USD PRICES FROM FIREBASE ADMIN ──────────────────────
async function loadUsdPricesFromAdmin() {
  try {
    if (typeof database === 'undefined') return;
    var snap = await database.ref('settings/usdPricing').once('value');
    var data = snap.val();
    if (data) {
      BD_CURRENCY_SETTINGS.usdBasic    = data.basic    || BD_CURRENCY_SETTINGS.usdBasic;
      BD_CURRENCY_SETTINGS.usdPremium  = data.premium  || BD_CURRENCY_SETTINGS.usdPremium;
      BD_CURRENCY_SETTINGS.usdRashi    = data.rashi    || BD_CURRENCY_SETTINGS.usdRashi;
      BD_CURRENCY_SETTINGS.usdMonthly  = data.monthly  || BD_CURRENCY_SETTINGS.usdMonthly;
      BD_CURRENCY_SETTINGS.usdSixMonth = data.sixMonth || BD_CURRENCY_SETTINGS.usdSixMonth;
      BD_CURRENCY_SETTINGS.usdYearly   = data.yearly   || BD_CURRENCY_SETTINGS.usdYearly;
      console.log('✅ USD prices loaded from admin:', data);
    }
  } catch(e) {}
}

// ── LANGUAGE SWITCHER UI ─────────────────────────────────────
function createLanguageSwitcher() {
  var switcher = document.createElement('div');
  switcher.id = 'bd-lang-switcher';
  switcher.style.cssText = [
    'position:fixed',
    'bottom:80px',
    'right:16px',
    'z-index:9999',
    'display:flex',
    'flex-direction:column',
    'gap:6px',
    'align-items:flex-end',
  ].join(';');

  switcher.innerHTML = [
    '<div style="display:flex;gap:6px;align-items:center;background:rgba(7,8,15,0.92);',
    'border:1px solid rgba(255,215,0,0.4);border-radius:25px;padding:5px 10px 5px 8px;',
    'box-shadow:0 4px 20px rgba(0,0,0,0.5);backdrop-filter:blur(10px);">',

    '<span style="font-size:0.7rem;color:rgba(255,215,0,0.7);margin-right:2px;">🌐</span>',

    '<button class="bd-lang-btn" data-lang="hi" onclick="applyLanguage(\'hi\')" ',
    'style="background:transparent;border:none;cursor:pointer;',
    'font-size:0.78rem;font-weight:600;padding:4px 10px;border-radius:20px;',
    'color:#aaa;transition:all 0.2s;" ',
    'onmouseover="this.style.color=\'#ffd700\'" onmouseout="this.style.color=this.classList.contains(\'active\')?\'#07080f\':\'#aaa\'">',
    'हिं</button>',

    '<button class="bd-lang-btn" data-lang="en" onclick="applyLanguage(\'en\')" ',
    'style="background:transparent;border:none;cursor:pointer;',
    'font-size:0.78rem;font-weight:600;padding:4px 10px;border-radius:20px;',
    'color:#aaa;transition:all 0.2s;" ',
    'onmouseover="this.style.color=\'#ffd700\'" onmouseout="this.style.color=this.classList.contains(\'active\')?\'#07080f\':\'#aaa\'">',
    'EN</button>',

    '</div>',
  ].join('');

  document.body.appendChild(switcher);

  // Active state style
  var styleEl = document.createElement('style');
  styleEl.textContent = [
    '.bd-lang-btn.active {',
    '  background: linear-gradient(135deg, #ffd700, #ffaa00) !important;',
    '  color: #07080f !important;',
    '  border-radius: 20px;',
    '}',
  ].join('');
  document.head.appendChild(styleEl);

  // Set initial active
  document.querySelectorAll('.bd-lang-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.lang === _currentLang);
  });
}

// ── INIT LANGUAGE SYSTEM ─────────────────────────────────────
async function initLanguageSystem() {
  await detectUserLocation();
  await loadUsdPricesFromAdmin();
  applyLanguage(_currentLang);
  createLanguageSwitcher();
  console.log('✅ Language system initialized:', _currentLang);
}

// Auto-init when DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguageSystem);
} else {
  initLanguageSystem();
}
