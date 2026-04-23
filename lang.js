/* ═══════════════════════════════════════════════════
   BHAVISHYA DEKHO — Language System
   File: language.js
   Hindi (hi) and English (en) translations
   Auto-detect by IP + Manual switch dropdown
════════════════════════════════════════════════════ */

(function() {
'use strict';

// ── TRANSLATIONS ──────────────────────────────────────
var T = {
  hi: {
    currency:'₹', currencyCode:'INR',
    splash1:'🔮 भविष्य जानने की तैयारी हो रही है...',
    splash2:'⭐ ग्रहों की स्थिति जांची जा रही है...',
    splash3:'✨ कुंडली तैयार हो रही है...',
    splash_subtitle:'वैदिक ज्योतिष का सटीक संगम',
    hero_tagline:'✨ ग्रह · नक्षत्र · कुंडली · भविष्यफल ✨',
    hero_btn:'मेरा भविष्य देखें (मुफ्त)',
    loading_text:'🔮 Bhavishya Dekho — भविष्य बन रहा है...',
    loading_subtext:'ग्रहों की स्थिति का विश्लेषण हो रहा है',
    pay_title:'💳 भुगतान करें',
    pay_btn:'🔐 सुरक्षित भुगतान करें',
    pay_methods:'सभी payment methods accept होते हैं',
    pay_secure_short:'100% Secure Payment — भुगतान होते ही सेवा तुरंत मिलेगी!',
    pay_processing:'भुगतान प्रक्रिया जारी...',
    pay_once:'✦ सभी payments एक बार के होते हैं',
    pay_norefund:'✦ Report generate होने के बाद refund नहीं होगा',
    nav_home:'होम', nav_daily:'दैनिक राशिफल', nav_monthly:'मासिक राशिफल',
    nav_yearly:'वार्षिक राशिफल', nav_matching:'कुंडली मिलान',
    nav_gemstones:'रत्न सुझाव', nav_remedies:'उपाय',
    nav_history:'मेरी रिपोर्ट्स (हिस्ट्री)', nav_premium:'Premium Plan',
    nav_about:'हमारे बारे में', nav_contact:'संपर्क करें',
    nav_privacy:'गोपनीयता नीति', nav_terms:'नियम और शर्तें',
    nav_disclaimer:'Disclaimer', nav_backup:'History Backup',
    fc_love_title:'लव कैलकुलेटर', fc_love_desc:'प्यार का प्रतिशत जानें', fc_love_price:'मुफ्त',
    fc_horo_title:'दैनिक राशिफल', fc_horo_desc:'आज का भविष्यफल', fc_horo_price:'मुफ्त',
    fc_basic_title:'विस्तृत कुंडली', fc_basic_desc:'जीवन विश्लेषण',
    fc_prem_title:'प्रीमियम कुंडली', fc_prem_desc:'संपूर्ण जीवन दर्शन',
    prem_benefits_title:'आपके Premium लाभ',
    prem_member_text:'आप प्रीमियम सदस्य हैं',
    disclaimer_text:'⚠️ यह भविष्यफल वैदिक ज्योतिष पर आधारित है। महत्वपूर्ण निर्णयों के लिए विशेषज्ञ से परामर्श लें।',
    form_name_ph:'अपना नाम लिखें', form_place_ph:'जन्म स्थान दर्ज करें',
    form_love_ph:'आपका नाम', form_partner_ph:'साथी का नाम',
    form_horo_ph:'अपना नाम लिखें',
    gender_male:'पुरुष', gender_female:'महिला', gender_other:'अन्य',
    rashi_ph:'-- अपनी राशि चुनें --',
    kundli_basic_buy:'में रिपोर्ट खरीदें',
    kundli_prem_buy:'में प्रीमियम रिपोर्ट खरीदें',
    upsell_basic:'विस्तृत कुंडली', upsell_prem:'प्रीमियम कुंडली',
    pkg_monthly:'/माह', pkg_6month:'/6 माह', pkg_yearly:'/साल',
    rashi_pkg_prefix:'सिर्फ ', rashi_pkg_hint:'में सटीक राशि जानें',
    compare_basic:'विस्तृत कुंडली', compare_prem:'प्रीमियम कुंडली',
    rashi_aries:'मेष', rashi_taurus:'वृष', rashi_gemini:'मिथुन',
    rashi_cancer:'कर्क', rashi_leo:'सिंह', rashi_virgo:'कन्या',
    rashi_libra:'तुला', rashi_scorpio:'वृश्चिक', rashi_sagittarius:'धनु',
    rashi_capricorn:'मकर', rashi_aquarius:'कुंभ', rashi_pisces:'मीन',
    form_info:'अपनी जानकारी दर्ज करें (मुफ्त भविष्य)',
    lang_label:'भाषा',
  },
  en: {
    currency:'$', currencyCode:'USD',
    splash1:'🔮 Preparing to reveal your future...',
    splash2:'⭐ Analyzing planetary positions...',
    splash3:'✨ Generating your Kundli...',
    splash_subtitle:'The Perfect Blend of Vedic Astrology',
    hero_tagline:'✨ Planets · Nakshatras · Kundli · Predictions ✨',
    hero_btn:'See My Future (Free)',
    loading_text:'🔮 Bhavishya Dekho — Crafting your destiny...',
    loading_subtext:'Analyzing planetary positions',
    pay_title:'💳 Make Payment',
    pay_btn:'🔐 Pay Securely',
    pay_methods:'All payment methods accepted',
    pay_secure_short:'100% Secure Payment — Get instant access after payment!',
    pay_processing:'Processing payment...',
    pay_once:'✦ All payments are one-time only',
    pay_norefund:'✦ No refund after report is generated',
    nav_home:'Home', nav_daily:'Daily Horoscope', nav_monthly:'Monthly Horoscope',
    nav_yearly:'Yearly Horoscope', nav_matching:'Kundli Matching',
    nav_gemstones:'Gemstones', nav_remedies:'Remedies',
    nav_history:'My Reports (History)', nav_premium:'Premium Plan',
    nav_about:'About Us', nav_contact:'Contact Us',
    nav_privacy:'Privacy Policy', nav_terms:'Terms & Conditions',
    nav_disclaimer:'Disclaimer', nav_backup:'History Backup',
    fc_love_title:'Love Calculator', fc_love_desc:'Find your love percentage', fc_love_price:'Free',
    fc_horo_title:'Daily Horoscope', fc_horo_desc:'Today\'s prediction', fc_horo_price:'Free',
    fc_basic_title:'Detailed Kundli', fc_basic_desc:'Life Analysis',
    fc_prem_title:'Premium Kundli', fc_prem_desc:'Complete Life Reading',
    prem_benefits_title:'Your Premium Benefits',
    prem_member_text:'You are a Premium Member',
    disclaimer_text:'⚠️ This prediction is based on Vedic Astrology. Please consult an expert for important decisions.',
    form_name_ph:'Enter your name', form_place_ph:'Enter birth place',
    form_love_ph:'Your Name', form_partner_ph:'Partner\'s Name',
    form_horo_ph:'Enter your name',
    gender_male:'Male', gender_female:'Female', gender_other:'Other',
    rashi_ph:'-- Select your zodiac --',
    kundli_basic_buy:'Buy Report for',
    kundli_prem_buy:'Buy Premium Report for',
    upsell_basic:'Detailed Kundli', upsell_prem:'Premium Kundli',
    pkg_monthly:'/Month', pkg_6month:'/6 Months', pkg_yearly:'/Year',
    rashi_pkg_prefix:'Only ', rashi_pkg_hint:'to know exact zodiac',
    compare_basic:'Detailed Kundli', compare_prem:'Premium Kundli',
    rashi_aries:'Aries', rashi_taurus:'Taurus', rashi_gemini:'Gemini',
    rashi_cancer:'Cancer', rashi_leo:'Leo', rashi_virgo:'Virgo',
    rashi_libra:'Libra', rashi_scorpio:'Scorpio', rashi_sagittarius:'Sagittarius',
    rashi_capricorn:'Capricorn', rashi_aquarius:'Aquarius', rashi_pisces:'Pisces',
    form_info:'Enter Your Information (Free Prediction)',
    lang_label:'Language',
  }
};

// ── USD PRICES (admin se override hoga) ───────────────
var USD = { basic:0.25, premium:0.60, rashi:0.07, monthly:1.20, sixMonth:6.00, yearly:12.00 };
window.BD_CURRENCY_SETTINGS = USD;

var _lang = 'hi';
var _isEn = false;
window._currentLangCode = 'hi';

// ── DETECT LOCATION ───────────────────────────────────
function detectLang(callback) {
  var saved = localStorage.getItem('bd_lang');
  if (saved && T[saved]) { _lang = saved; _isEn = (saved==='en'); window._currentLangCode=_lang; callback(); return; }
  fetch('https://ipapi.co/json/')
    .then(function(r){ return r.json(); })
    .then(function(d){
      var eng = ['US','GB','CA','AU','NZ','IE','SG','ZA'];
      if (eng.indexOf(d.country_code) > -1) { _lang='en'; _isEn=true; }
      else { _lang='hi'; _isEn=false; }
      window._currentLangCode = _lang;
      callback();
    })
    .catch(function(){ _lang='hi'; _isEn=false; window._currentLangCode='hi'; callback(); });
}

// ── LOAD USD FROM FIREBASE ─────────────────────────────
function loadUSD() {
  try {
    if (typeof database === 'undefined') return;
    database.ref('settings/usdPricing').once('value').then(function(snap){
      var d = snap.val();
      if (d) {
        USD.basic    = d.basic    || USD.basic;
        USD.premium  = d.premium  || USD.premium;
        USD.rashi    = d.rashi    || USD.rashi;
        USD.monthly  = d.monthly  || USD.monthly;
        USD.sixMonth = d.sixMonth || USD.sixMonth;
        USD.yearly   = d.yearly   || USD.yearly;
        window.BD_CURRENCY_SETTINGS = USD;
        applyPricing(); // re-apply with correct USD prices
      }
    });
  } catch(e){}
}

// ── PRICE DISPLAY ─────────────────────────────────────
function pr(type) {
  var p = window._adminPricing || {basic:19,premium:49,rashi:5,monthly:99,sixMonth:499,yearly:999};
  if (_isEn) {
    var m = {basic:USD.basic,premium:USD.premium,rashi:USD.rashi,monthly:USD.monthly,sixMonth:USD.sixMonth,yearly:USD.yearly};
    return '$'+(m[type]||0).toFixed(2);
  }
  var n = {basic:p.basic,premium:p.premium,rashi:p.rashi,monthly:p.monthly,sixMonth:p.sixMonth,yearly:p.yearly};
  return '₹'+(n[type]||0);
}

// ── SET TEXT HELPER ───────────────────────────────────
function s(id, txt) { var e=document.getElementById(id); if(e&&txt) e.textContent=txt; }
function sp(id, txt) { var e=document.getElementById(id); if(e&&txt) e.placeholder=txt; }

// ── APPLY LANGUAGE ────────────────────────────────────
function applyLang(lang) {
  if (!T[lang]) lang='hi';
  _lang=lang; _isEn=(lang==='en');
  window._currentLangCode=lang;
  window._isEn = _isEn;
  localStorage.setItem('bd_lang', lang);
  document.documentElement.lang=lang;
  var tl=T[lang];
  
  // Sync dropdown
  var dd=document.getElementById('langSelectDropdown');
  if(dd) dd.value=lang;

  // Splash
  s('splashMsg', tl.splash1);
  s('splash-subtitle', tl.splash_subtitle);
  s('splash-tagline', tl.hero_tagline);
  window._splashMsgs=[tl.splash1,tl.splash2,tl.splash3];

  // Loading
  s('loading-text', tl.loading_text);
  s('loading-subtext', tl.loading_subtext);

  // Payment
  s('pay-title-text', tl.pay_title);
  s('pay-btn-text', tl.pay_btn);
  s('pay-methods-text', tl.pay_methods);
  s('pay-secure-text', tl.pay_secure_short);
  s('pay-processing-text', tl.pay_processing);

  // Hero button
  s('hero-btn', tl.hero_btn);
  s('main-predict-btn', tl.hero_btn);

  // Nav
  var navKeys=['home','daily','monthly','yearly','matching','gemstones','remedies','history','premium','about','contact','privacy','terms','disclaimer','backup'];
  navKeys.forEach(function(k){ s('nav-'+k, tl['nav_'+k]); });

  // Feature cards
  s('fc-love-title', tl.fc_love_title); s('fc-love-desc', tl.fc_love_desc); s('fc-love-price', tl.fc_love_price);
  s('fc-horo-title', tl.fc_horo_title); s('fc-horo-desc', tl.fc_horo_desc); s('fc-horo-price', tl.fc_horo_price);
  s('fc-basic-title', tl.fc_basic_title); s('fc-basic-desc', tl.fc_basic_desc);
  s('fc-prem-title', tl.fc_prem_title); s('fc-prem-desc', tl.fc_prem_desc);

  // Premium texts
  s('prem-benefits-title', tl.prem_benefits_title);
  s('prem-member-text', tl.prem_member_text);
  s('disclaimer-text', tl.disclaimer_text);

  // Placeholders
  ['name','kundliName','premiumKundliName'].forEach(function(id){ sp(id, tl.form_name_ph); });
  ['birthPlace','kundliPlace','premiumKundliPlace'].forEach(function(id){ sp(id, tl.form_place_ph); });
  sp('loveYourName', tl.form_love_ph);
  sp('lovePartnerName', tl.form_partner_ph);
  sp('horoscopeName', tl.form_horo_ph);

  // Gender options
  ['gender','kundliGender','premiumKundliGender'].forEach(function(selId){
    var sel=document.getElementById(selId); if(!sel) return;
    sel.querySelectorAll('option').forEach(function(o){
      if(o.value==='male') o.textContent=tl.gender_male;
      else if(o.value==='female') o.textContent=tl.gender_female;
      else if(o.value==='other'||o.value==='') o.textContent=tl.gender_other;
    });
  });

  // Zodiac options in all selects
  var rashiMap={aries:tl.rashi_aries,taurus:tl.rashi_taurus,gemini:tl.rashi_gemini,
    cancer:tl.rashi_cancer,leo:tl.rashi_leo,virgo:tl.rashi_virgo,libra:tl.rashi_libra,
    scorpio:tl.rashi_scorpio,sagittarius:tl.rashi_sagittarius,capricorn:tl.rashi_capricorn,
    aquarius:tl.rashi_aquarius,pisces:tl.rashi_pisces};
  document.querySelectorAll('select option').forEach(function(o){
    var v=(o.value||'').toLowerCase();
    if(rashiMap[v]) o.textContent=rashiMap[v];
  });

  // Apply pricing
  applyPricing();

  // Switcher active state
  document.querySelectorAll('.bd-lang-btn').forEach(function(b){
    var active=b.dataset.lang===lang;
    b.style.background=active?'linear-gradient(135deg,#ffd700,#ffaa00)':'transparent';
    b.style.color=active?'#07080f':'#aaa';
    b.style.borderRadius='20px';
  });

  console.log('✅ Language applied:', lang);
}

// ── APPLY PRICING ─────────────────────────────────────
function applyPricing() {
  var tl=T[_lang]||T.hi;
  var p=window._adminPricing||{basic:19,premium:49,rashi:5,monthly:99,sixMonth:499,yearly:999};
  var basicAmt=_isEn?USD.basic:p.basic;
  var premAmt=_isEn?USD.premium:p.premium;
  var rashiAmt=_isEn?USD.rashi:p.rashi;
  var mAmt=_isEn?USD.monthly:p.monthly;
  var sAmt=_isEn?USD.sixMonth:p.sixMonth;
  var yAmt=_isEn?USD.yearly:p.yearly;

  // Price displays
  s('basicKundliPrice', pr('basic'));
  s('basicKundliBadge', pr('basic'));
  s('premiumKundliPrice', pr('premium'));
  s('premiumKundliBadge', pr('premium'));
  s('basicKundliBtnText', pr('basic')+' '+tl.kundli_basic_buy);
  s('premiumKundliBtnText', pr('premium')+' '+tl.kundli_prem_buy);

  // Button onclicks
  var bb=document.getElementById('basicKundliBtn');
  if(bb) bb.setAttribute('onclick',"processKundliPayment("+basicAmt+",'basic')");
  var pb=document.getElementById('premiumKundliBtn');
  if(pb) pb.setAttribute('onclick',"processKundliPayment("+premAmt+",'premium')");

  // Premium cards
  document.querySelectorAll('.premium-card').forEach(function(card){
    var oc=card.getAttribute('onclick')||'';
    var pe=card.querySelector('.premium-price');
    if(oc.indexOf("'monthly'")>-1){
      if(pe) pe.innerHTML=pr('monthly')+'<small>'+tl.pkg_monthly+'</small>';
      card.setAttribute('onclick',"showPremiumPayment("+mAmt+",'monthly')");
    } else if(oc.indexOf("'6months'")>-1){
      if(pe) pe.innerHTML=pr('sixMonth')+'<small>'+tl.pkg_6month+'</small>';
      card.setAttribute('onclick',"showPremiumPayment("+sAmt+",'6months')");
    } else if(oc.indexOf("'yearly'")>-1){
      if(pe) pe.innerHTML=pr('yearly')+'<small>'+tl.pkg_yearly+'</small>';
      card.setAttribute('onclick',"showPremiumPayment("+yAmt+",'yearly')");
    }
  });

  // Upsell buttons
  document.querySelectorAll('.upsell-btn').forEach(function(el){
    var oc=el.getAttribute('onclick')||'';
    if(oc.indexOf('showKundliSection')>-1&&oc.indexOf('Premium')===-1)
      el.textContent='📜 '+pr('basic')+' '+tl.upsell_basic;
    if(oc.indexOf('showPremiumKundliSection')>-1)
      el.textContent='👑 '+pr('premium')+' '+tl.upsell_prem;
  });

  // Comparison prices
  document.querySelectorAll('.comparison-price').forEach(function(el){
    var txt=el.textContent;
    if(txt.match(/19|0\.25/)) el.textContent=pr('basic');
    if(txt.match(/49|0\.60/)) el.textContent=pr('premium');
  });

  // h4 comparison headings
  document.querySelectorAll('h4').forEach(function(el){
    var txt=el.textContent.trim();
    if(txt.indexOf('विस्तृत')>-1||txt.indexOf('Detailed')>-1)
      el.textContent=tl.compare_basic+' ('+pr('basic')+')';
    if(txt.indexOf('प्रीमियम')>-1&&txt.indexOf('कुंडली')>-1||txt.indexOf('Premium Kundli')>-1)
      el.textContent=tl.compare_prem+' ('+pr('premium')+')';
  });

  // Rashi hints
  document.querySelectorAll('#loveRashiBuyMsg,#horoRashiBuyMsg,#rashiBuyHint').forEach(function(c){
    var badge=c.querySelector('span[style*="border-radius:20px"]');
    var txt=c.querySelector('div[style*="ffd700"]');
    if(badge) badge.textContent=pr('rashi');
    if(txt) txt.textContent=tl.rashi_pkg_prefix+pr('rashi')+' '+tl.rashi_pkg_hint;
  });
}

// ── LANGUAGE SWITCHER ─────────────────────────────────
function createSwitcher() {
  // Dropdown is now in the header — no floating button needed
}

// ── GLOBAL FUNCTION ───────────────────────────────────
window.bdSetLang = function(lang) {
  applyLang(lang);
  // Also update script.js _isEn variable
  window._isEn = (lang==='en');
};
window.applyLanguage = window.bdSetLang;
window.applyPricingWithLang = applyPricing;
window._isEn = false;

// ── INIT ──────────────────────────────────────────────
function init() {
  createSwitcher();
  detectLang(function(){
    window._isEn = _isEn;
    applyLang(_lang);
    loadUSD();
  });
}

// Wait for DOM + Firebase to be ready
if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded', function(){
    setTimeout(init, 500); // Firebase init ke baad
  });
} else {
  setTimeout(init, 500);
}

})();