/* ============================================================
   Bhavishya Dekho — lang.js v4.0
   Complete Language System
   - Auto IP detect: India=Hindi, US/UK/CA/AU=English
   - Menu mein 🇮🇳/🇺🇸 button
   - Poori website translate hoti hai (DOM walker)
   - Prices: INR ya USD (admin se set hota hai)
   bhavishyadekho.online
   ============================================================ */
(function(){
'use strict';

/* ── TRANSLATION MAP ─────────────────────────────────── */
var H2E = {
  'वैदिक ज्योतिष का सटीक संगम':'The Science of Vedic Astrology',
  '✨ ग्रह · नक्षत्र · कुंडली · भविष्यफल ✨':'✨ Planets · Stars · Kundli · Horoscope ✨',
  '🔮 भविष्य जानने की तैयारी हो रही है...':'🔮 Preparing your cosmic reading...',
  '⭐ ग्रहों की स्थिति जांची जा रही है...':'⭐ Analyzing planetary positions...',
  '✨ कुंडली तैयार हो रही है...':'✨ Your horoscope is being prepared...',
  '🔮 Bhavishya Dekho — भविष्य बन रहा है...':'🔮 Bhavishya Dekho — Building your future...',
  'ग्रहों की स्थिति का विश्लेषण हो रहा है':'Analyzing your planetary positions...',
  'आपका भविष्य तैयार हो रहा है 🌟':'Your future is being prepared 🌟',
  'परिणाम तैयार हो रहा है...':'Preparing your result...',
  '💳 भुगतान करें':'💳 Make Payment',
  '🔐 सुरक्षित भुगतान करें':'🔐 Secure Payment',
  'सभी payment methods accept होते हैं':'All payment methods accepted',
  '100% Secure Payment — भुगतान होते ही सेवा तुरंत मिलेगी!':'100% Secure Payment — Service activated instantly!',
  'भुगतान प्रक्रिया जारी...':'Processing payment...',
  '✦ सभी payments एक बार के होते हैं':'✦ All payments are one-time',
  '✦ Report generate होने के बाद refund नहीं होगा':'✦ No refund after report is generated',
  '✦ हम किसी भी गलत उपयोग के लिए जिम्मेदार नहीं होंगे':'✦ We are not responsible for any misuse',
  '✦ User को अपनी सही जानकारी भरनी जरूरी है':'✦ User must enter correct information',
  '✦ यह service केवल digital report के रूप में प्रदान की जाती है':'✦ This service is provided as a digital report only',
  'मेरा भविष्य देखें (मुफ्त)':'See My Future (Free)',
  'मेरा भविष्य देखें':'See My Future',
  'मुफ्त भविष्यफल देखें':'Get Free Prediction',
  'अपनी जानकारी दर्ज करें (मुफ्त भविष्य)':'Enter your details (free prediction)',
  'लव कैलकुलेटर':'Love Calculator',
  'प्यार का प्रतिशत जानें':'Calculate love %',
  'दैनिक राशिफल':'Daily Horoscope',
  'आज का भविष्यफल':"Today's horoscope",
  'विस्तृत कुंडली':'Detailed Kundli',
  'जीवन विश्लेषण':'Life Analysis',
  'प्रीमियम कुंडली':'Premium Kundli',
  'संपूर्ण जीवन दर्शन':'Complete Life Reading',
  'मुफ्त':'Free',
  'होम':'Home',
  'मासिक राशिफल':'Monthly Horoscope',
  'वार्षिक राशिफल':'Yearly Horoscope',
  'कुंडली मिलान':'Kundli Matching',
  'रत्न सुझाव':'Gemstone Guide',
  'उपाय':'Remedies',
  'मेरी रिपोर्ट्स (हिस्ट्री)':'My Reports (History)',
  'हमारे बारे में':'About Us',
  'संपर्क करें':'Contact Us',
  'गोपनीयता नीति':'Privacy Policy',
  'नियम और शर्तें':'Terms & Conditions',
  'वैदिक ज्योतिष का सटीक संगम':'The Science of Vedic Astrology',
  'अपना नाम लिखें':'Enter your name',
  'जन्म स्थान दर्ज करें':'Enter birth place',
  'आपका नाम':'Your name',
  'साथी का नाम':"Partner's name",
  'नाम':'Name',
  'नाम *':'Name *',
  'जन्म तिथि':'Date of Birth',
  'जन्म समय':'Birth Time',
  'जन्म स्थान':'Birth Place',
  'लिंग':'Gender',
  'पुरुष':'Male',
  'महिला':'Female',
  'अन्य':'Other',
  'राशि':'Zodiac Sign',
  '-- अपनी राशि चुनें --':'-- Select your zodiac --',
  'नक्षत्र':'Nakshatra',
  'शहर का नाम':'City name',
  'समय':'Time',
  'दिन':'Day',
  'महीना':'Month',
  'आयु':'Age',
  'वार':'Weekday',
  'मेष':'Aries','वृष':'Taurus','मिथुन':'Gemini',
  'कर्क':'Cancer','सिंह':'Leo','कन्या':'Virgo',
  'तुला':'Libra','वृश्चिक':'Scorpio','धनु':'Sagittarius',
  'मकर':'Capricorn','कुंभ':'Aquarius','मीन':'Pisces',
  '📋 मेरी रिपोर्ट्स':'📋 My Reports',
  'वापस':'Back',
  '🗑️ साफ़ करें':'🗑️ Clear',
  'कोई रिपोर्ट नहीं':'No Reports Found',
  'अभी तक कोई भविष्यफल नहीं देखा। पहले भविष्य देखें!':'No predictions yet. See your future first!',
  '🔮 भविष्यफल':'🔮 Prediction',
  '📲 शेयर करें':'📲 Share',
  '📲 Share करें — 1 और मुफ्त पाएं':'📲 Share — Get 1 more free',
  '【 विस्तृत भविष्यफल 】':'【 Detailed Prediction 】',
  '【 व्यक्तिगत जानकारी 】':'【 Personal Information 】',
  '🔮 मुख्य भविष्यवाणी':'🔮 Main Prediction',
  '✨ इस रिपोर्ट में क्या मिलेगा?':"✨ What's included?",
  '👑 और विस्तृत जानकारी?':'👑 Want more details?',
  'में रिपोर्ट खरीदें':'Buy Report',
  'में प्रीमियम रिपोर्ट खरीदें':'Buy Premium Report',
  'आपके Premium लाभ':'Your Premium Benefits',
  'आप प्रीमियम सदस्य हैं':'You are a Premium Member',
  'प्रीमियम में मिलेंगे ये अतिरिक्त लाभ':'Additional Premium Benefits',
  'प्रीमियम में बनें एड-फ्री':'Go Ad-Free with Premium',
  'सभी प्रीमियम प्लान में ऑटो-नवीनीकरण की सुविधा':'All premium plans include auto-renewal',
  '/माह':'/month','/6 माह':'/6 months','/साल':'/year',
  'सबसे लोकप्रिय':'Most Popular',
  'मासिक':'Monthly','वार्षिक':'Yearly',
  '6 माह':'6 Months','12 माह':'12 Months',
  '💕 मिलान करें':'💕 Match Now',
  '👰 वधू':'👰 Bride','🤵 वर':'🤵 Groom',
  '🌟 उत्कृष्ट मिलान!':'🌟 Excellent Match!',
  '✅ अच्छा मिलान।':'✅ Good Match.',
  '⚠️ सावधानी आवश्यक।':'⚠️ Caution Advised.',
  'गुण मिलान':'Guna Milan',
  '💎 रत्न सुझाव':'💎 Gemstone Guide',
  'धारण दिन':'Wear Day',
  'मंगलवार':'Tuesday','शुक्रवार':'Friday','बुधवार':'Wednesday',
  'सोमवार':'Monday','रविवार':'Sunday','गुरुवार':'Thursday','शनिवार':'Saturday',
  '🕉️ ग्रह उपाय':'🕉️ Planetary Remedies',
  'दोष निवारण के लिए सरल उपाय':'Simple remedies for dosha removal',
  '⚠️ यह भविष्यफल वैदिक ज्योतिष पर आधारित है। महत्वपूर्ण निर्णयों के लिए विशेषज्ञ से परामर्श लें।':'⚠️ This prediction is based on Vedic astrology. Consult an expert for important decisions.',
  'कृपया प्रतीक्षा करें':'Please wait...',
  'नाम दर्ज करना आवश्यक है':'Name is required',
  'कृपया सभी जानकारी भरें':'Please fill all information',
  '🗑️ पूरी History साफ़ करें':'🗑️ Clear All History',
  '📲 Website को Bookmark करें और हर रोज़ अपना भविष्य देखें!':'📲 Bookmark this site and check your future daily!',
  'प्रीमियम कुंडली में पाएं और भी विस्तृत जानकारी':'Get even more detail in Premium Kundli',
  '👑 Premium लें — रोज़ 10+ भविष्यफल':'👑 Get Premium — 10+ daily predictions',
  'रोज़ रीसेट':'Daily reset',
  'बचे':'remaining',
  'विस्तृत कुंडली रिपोर्ट':'Detailed Kundli Report',
  'प्रीमियम कुंडली रिपोर्ट':'Premium Kundli Report',
  'एड-फ्री':'Ad-Free',
  'बिना रुकावट':'No interruptions',
  'व्यक्तिगत':'Personal',
  'ग्रह उपाय':'Planetary Remedies',
  'शुभ मुहूर्त':'Auspicious Time',
  'प्राथमिकता':'Priority',
  'तेज सहायता':'Fast Support',
  'मुफ्त कुंडली':'Free Kundli',
  'मुफ्त प्रीमियम':'Free Premium',
  'संपूर्ण जीवन विश्लेषण':'Complete Life Analysis',
  '12 भावों का विस्तृत फल':'Detailed results of all 12 houses',
  '9 ग्रहों की विस्तृत स्थिति और प्रभाव':'Position and effect of 9 planets',
  'ग्रहों के लिए रत्न और धारण विधि':'Gemstones for planets',
  'आपकी सटीक राशि और नक्षत्र की जानकारी':'Your accurate zodiac and nakshatra',
  'प्रेम जीवन और विवाह की संभावनाएं':'Love life and marriage possibilities',
  'नौकरी और व्यवसाय में उन्नति के योग':'Career and business growth prospects',
  'व्यक्तित्व में निखार':'Personality enhancement',
  '5 साल का भविष्य':'5-Year Future',
  'अगले 3–6 महीने':'Next 3-6 Months',
  'जीवन टाइमलाइन':'Life Timeline',
  'ग्रहों की स्थिति':'Planetary Positions',
  '12 भाव फल':'12 House Results',
  'शुभ कारक':'Lucky Factors',
  'विशेष उपाय':'Special Remedies',
  '⏳ आपकी भविष्य की Timeline':'⏳ Your Future Timeline',
  'सिर्फ ₹5 में सटीक राशि जानें':'Know accurate zodiac for just ₹5',
  '⏰ 24 घंटे के लिए सक्रिय':'⏰ Active for 24 hours',
  'नाम से राशि auto-detect • 24 घंटे valid':'Auto-detect zodiac from name • Valid 24 hours',
  '✅ राशि auto-detect होगी':'✅ Zodiac will be auto-detected',
  'Auto Detect — राशि रिपोर्ट में दिखेगी':'Auto Detect — zodiac shown in report',
  '❤️ प्यार का प्रतिशत जानें':'❤️ Calculate Love %',
  '☀️ दैनिक राशिफल':'☀️ Daily Horoscope',
  '📆 मासिक राशिफल':'📆 Monthly Horoscope',
  '📅 वार्षिक राशिफल':'📅 Yearly Horoscope',
  'राशि चुनें':'Select zodiac',
  'अपनी राशि चुनें':'Select your zodiac',
  'कस्टम':'Custom',
  '20 बार':'20 times','30 बार':'30 times','10 बार':'10 times',
  'यह website केवल मनोरंजन और सामान्य मार्गदर्शन के उद्देश्य से बनाई गई है।':'This website is for entertainment and general guidance only.',
  'किसी भी महत्वपूर्ण निर्णय के लिए केवल इस prediction पर निर्भर न रहें।':'Do not rely only on this prediction for important decisions.',
  '🙏 कृपया हमें सपोर्ट करें':'🙏 Please support us',
  '📲 इस रिपोर्ट को शेयर करें':'📲 Share this report',
  /* Comparison section */
  'फ्री भविष्य':'Free Prediction',
  'सामान्य भविष्यवाणी':'General Prediction',
  'करियर, प्रेम, धन फल':'Career, Love, Money',
  'शुभ अंक':'Lucky Numbers',
  'ग्रहों की स्थिति नहीं':'No Planetary Positions',
  'उपाय नहीं':'No Remedies',
  'Planetary Positions नहीं':'No Planetary Positions',
  'Remedies नहीं':'No Remedies',
  'Zodiac Sign और Nakshatra':'Zodiac & Nakshatra',
  'राशि और नक्षत्र':'Zodiac & Nakshatra',
  'उपाय नहीं':'No Remedies',
  'पूरी फ्री +':'All Free +',
  'ग्रहों की विस्तृत स्थिति':'Detailed Planetary Positions',
  '12 भावों का विस्तृत फल':'Detailed 12 House Results',
  'राशि और नक्षत्र':'Zodiac & Nakshatra',
  '₹19 वाली सब कुछ +':'All ₹19 features +',
  'ग्रहों के उपाय':'Planetary Remedies',
  'शुभ समय और मुहूर्त':'Auspicious Time & Muhurta',
  /* h4 titles with price */
  'विस्तृत कुंडली (₹19)':'Detailed Kundli ($0.25)',
  'प्रीमियम कुंडली (₹49)':'Premium Kundli ($0.60)',
  /* Mixed strings */
  /* Form */
  'नाम *':'Name *',
  'नाम:':'Name:',
  'लिंग:':'Gender:',
  'राशि:':'Zodiac:',
  'जन्म तिथि:':'Date of Birth:',
  'जन्म समय:':'Birth Time:',
  'जन्म स्थान:':'Birth Place:',
  /* 12 Bhav */
  '🔱 12 भाव (Houses)':'🔱 12 Houses',
  /* Alert messages */
  'कोई history नहीं है':'No history found',
  'कोई रिपोर्ट नहीं देखी गई':'No reports found',
  'रिपोर्ट नहीं मिली':'Report not found',
  'रिपोर्ट उपलब्ध नहीं':'Report not available',
  'कोई भविष्यफल नहीं मिला। पहले भविष्य देखें।':'No prediction found. Please see your future first.',
  'कोई रिपोर्ट नहीं मिली। पहले कुंडली देखें।':'No report found. Please check kundli first.',
  /* Misc */
  'नहीं मिली':'Not found',
  'उपलब्ध नहीं है।':'Not available.',
  'पूरी फ्री':'All Free',
  'फ्री +':'Free +',

};

/* ── STATE ─────────────────────────────────────────────── */
var _lang='hi', _isEn=false;
window._currentLangCode='hi'; window._isEn=false;

/* ── USD PRICES ─────────────────────────────────────────── */
var USD={basic:0.25,premium:0.60,rashi:0.07,monthly:1.20,sixMonth:6.00,yearly:12.00};
window.BD_CURRENCY_SETTINGS=USD;

/* ── DETECT LOCATION ────────────────────────────────────── */
function detectLang(cb){
  var saved=localStorage.getItem('bd_lang');
  if(saved&&(saved==='hi'||saved==='en')){
    _lang=saved;_isEn=(saved==='en');
    window._currentLangCode=_lang;window._isEn=_isEn;cb();return;
  }
  fetch('https://ipapi.co/json/')
    .then(function(r){return r.json();})
    .then(function(d){
      var eng=['US','GB','CA','AU','NZ','IE','SG','ZA','PH','MY'];
      if(eng.indexOf(d.country_code)>-1){_lang='en';_isEn=true;}
      else{_lang='hi';_isEn=false;}
      window._currentLangCode=_lang;window._isEn=_isEn;cb();
    })
    .catch(function(){_lang='hi';_isEn=false;window._currentLangCode='hi';window._isEn=false;cb();});
}

/* ── TRANSLATE TEXT ─────────────────────────────────────── */
function txText(text,toEn){
  if(!text||!text.trim())return text;
  var r=text;
  var map=H2E;
  if(toEn){
    Object.keys(map).forEach(function(hi){if(r.indexOf(hi)>-1)r=r.split(hi).join(map[hi]);});
  } else {
    Object.keys(map).forEach(function(hi){var en=map[hi];if(r.indexOf(en)>-1)r=r.split(en).join(hi);});
  }
  return r;
}

/* ── WALK DOM TEXT NODES ────────────────────────────────── */
function walkDOM(toEn){
  var skip=['SCRIPT','STYLE','META','LINK','NOSCRIPT','SVG','PATH','CANVAS'];
  var walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{
    acceptNode:function(n){
      var p=n.parentElement;
      if(!p||skip.indexOf(p.tagName)>-1)return NodeFilter.FILTER_REJECT;
      if(!n.nodeValue||!n.nodeValue.trim())return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  var nodes=[];
  var n;
  while((n=walker.nextNode()))nodes.push(n);
  nodes.forEach(function(nd){
    var orig=nd.nodeValue;
    var tr=txText(orig,toEn);
    if(tr!==orig)nd.nodeValue=tr;
  });
  // Placeholders
  document.querySelectorAll('[placeholder]').forEach(function(el){
    var ph=el.getAttribute('placeholder');
    var t=txText(ph,toEn);
    if(t!==ph)el.setAttribute('placeholder',t);
  });
  // Select options
  document.querySelectorAll('option').forEach(function(o){
    var t=txText(o.textContent,toEn);
    if(t!==o.textContent)o.textContent=t;
  });
}

/* ── PRICE DISPLAY ──────────────────────────────────────── */
function pr(type){
  var p=window._adminPricing||{basic:19,premium:49,rashi:5,monthly:99,sixMonth:499,yearly:999};
  if(_isEn){
    var m={basic:USD.basic,premium:USD.premium,rashi:USD.rashi,monthly:USD.monthly,sixMonth:USD.sixMonth,yearly:USD.yearly};
    return '$'+(m[type]||0).toFixed(2);
  }
  var n={basic:p.basic,premium:p.premium,rashi:p.rashi,monthly:p.monthly,sixMonth:p.sixMonth,yearly:p.yearly};
  return '₹'+(n[type]||0);
}

/* ── APPLY PRICING ──────────────────────────────────────── */
function applyPricing(){
  var p=window._adminPricing||{basic:19,premium:49,rashi:5,monthly:99,sixMonth:499,yearly:999};
  function st(id,t){var e=document.getElementById(id);if(e&&t!==undefined)e.textContent=t;}
  var buyTxt=_isEn?'Buy Report':'में रिपोर्ट खरीदें';
  var buyPTxt=_isEn?'Buy Premium Report':'में प्रीमियम रिपोर्ट खरीदें';
  st('basicKundliPrice',pr('basic'));
  st('basicKundliBadge',pr('basic'));
  st('basicKundliBtnText',pr('basic')+' '+buyTxt);
  st('premiumKundliPrice',pr('premium'));
  st('premiumKundliBadge',pr('premium'));
  st('premiumKundliBtnText',pr('premium')+' '+buyPTxt);
  var bA=_isEn?USD.basic:p.basic;
  var pA=_isEn?USD.premium:p.premium;
  var bb=document.getElementById('basicKundliBtn');
  if(bb)bb.setAttribute('onclick',"processKundliPayment("+bA+",'basic')");
  var pb=document.getElementById('premiumKundliBtn');
  if(pb)pb.setAttribute('onclick',"processKundliPayment("+pA+",'premium')");
  var pm=_isEn?'/month':'/माह';
  var ps=_isEn?'/6 months':'/6 माह';
  var py=_isEn?'/year':'/साल';
  document.querySelectorAll('.premium-card').forEach(function(c){
    var oc=c.getAttribute('onclick')||'';
    var pe=c.querySelector('.premium-price');
    if(oc.indexOf("'monthly'")>-1){
      if(pe)pe.innerHTML=pr('monthly')+'<small>'+pm+'</small>';
      c.setAttribute('onclick',"showPremiumPayment("+(_isEn?USD.monthly:p.monthly)+",'monthly')");
    }else if(oc.indexOf("'6months'")>-1){
      if(pe)pe.innerHTML=pr('sixMonth')+'<small>'+ps+'</small>';
      c.setAttribute('onclick',"showPremiumPayment("+(_isEn?USD.sixMonth:p.sixMonth)+",'6months')");
    }else if(oc.indexOf("'yearly'")>-1){
      if(pe)pe.innerHTML=pr('yearly')+'<small>'+py+'</small>';
      c.setAttribute('onclick',"showPremiumPayment("+(_isEn?USD.yearly:p.yearly)+",'yearly')");
    }
  });
  document.querySelectorAll('.upsell-btn').forEach(function(el){
    var oc=el.getAttribute('onclick')||'';
    if(oc.indexOf('showKundliSection')>-1&&oc.indexOf('Premium')===-1)
      el.textContent='📜 '+pr('basic')+(_isEn?' Detailed Kundli':' विस्तृत कुंडली');
    if(oc.indexOf('showPremiumKundliSection')>-1)
      el.textContent='👑 '+pr('premium')+(_isEn?' Premium Kundli':' प्रीमियम कुंडली');
  });
  document.querySelectorAll('.comparison-price').forEach(function(el){
    var t=el.textContent;
    if(t.match(/19|0\.25/))el.textContent=pr('basic');
    if(t.match(/49|0\.60/))el.textContent=pr('premium');
  });
  /* Comparison card h4 titles */
  document.querySelectorAll('.kundli-comparison h4').forEach(function(el){
    var t=el.textContent.trim();
    if(t.indexOf('फ्री भविष्य')>-1||t.indexOf('Free Prediction')>-1)
      el.textContent=_isEn?'Free Prediction':'फ्री भविष्य';
    else if(t.indexOf('विस्तृत')>-1||t.indexOf('Detailed Kundli')>-1)
      el.textContent=_isEn?('Detailed Kundli ('+pr('basic')+')'):'विस्तृत कुंडली ('+pr('basic')+')';
    else if(t.indexOf('प्रीमियम')>-1||t.indexOf('Premium Kundli')>-1)
      el.textContent=_isEn?('Premium Kundli ('+pr('premium')+')'):'प्रीमियम कुंडली ('+pr('premium')+')';
  });

  document.querySelectorAll('#loveRashiBuyMsg,#horoRashiBuyMsg,#rashiBuyHint').forEach(function(c){
    var b=c.querySelector('span[style*="border-radius:20px"]');
    var t=c.querySelector('div[style*="ffd700"]');
    if(b)b.textContent=pr('rashi');
    if(t)t.textContent=_isEn?('Just '+pr('rashi')+' for accurate zodiac detection'):('सिर्फ '+pr('rashi')+' में सटीक राशि जानें');
  });
  var rA=_isEn?USD.rashi:(p.rashi||5);
  var mA=_isEn?USD.monthly:(p.monthly||99);
  var sA=_isEn?USD.sixMonth:(p.sixMonth||499);
  var yA=_isEn?USD.yearly:(p.yearly||999);
  window._langPricing={basic:bA,premium:pA,rashi:rA,monthly:mA,sixMonth:sA,yearly:yA,currency:_isEn?'USD':'INR'};
}
window.applyPricingLang=applyPricing;

/* ── LOAD USD FROM FIREBASE ─────────────────────────────── */
function loadUSD(){
  try{
    if(typeof database==='undefined')return;
    database.ref('settings/usdPricing').once('value').then(function(s){
      var d=s.val();
      if(d){
        USD.basic=d.basic||USD.basic;USD.premium=d.premium||USD.premium;
        USD.rashi=d.rashi||USD.rashi;USD.monthly=d.monthly||USD.monthly;
        USD.sixMonth=d.sixMonth||USD.sixMonth;USD.yearly=d.yearly||USD.yearly;
        window.BD_CURRENCY_SETTINGS=USD;
        if(_isEn)applyPricing();
      }
    });
  }catch(e){}
}

/* ── UPDATE MENU BUTTONS ────────────────────────────────── */
function updateBtns(){
  var hi=document.getElementById('lang-btn-hi');
  var en=document.getElementById('lang-btn-en');
  if(!hi||!en)return;
  if(_isEn){
    hi.style.cssText='flex:1;padding:10px 0;border:1.5px solid rgba(255,255,255,0.15);border-radius:12px;background:rgba(255,255,255,0.05);color:#aaa;font-size:0.88rem;font-weight:700;cursor:pointer;font-family:inherit;';
    en.style.cssText='flex:1;padding:10px 0;border:1.5px solid rgba(255,215,0,0.5);border-radius:12px;background:rgba(255,215,0,0.18);color:#ffd700;font-size:0.88rem;font-weight:700;cursor:pointer;font-family:inherit;';
  }else{
    hi.style.cssText='flex:1;padding:10px 0;border:1.5px solid rgba(255,215,0,0.5);border-radius:12px;background:rgba(255,215,0,0.18);color:#ffd700;font-size:0.88rem;font-weight:700;cursor:pointer;font-family:inherit;';
    en.style.cssText='flex:1;padding:10px 0;border:1.5px solid rgba(255,255,255,0.15);border-radius:12px;background:rgba(255,255,255,0.05);color:#aaa;font-size:0.88rem;font-weight:700;cursor:pointer;font-family:inherit;';
  }
}

/* ── APPLY LANGUAGE ─────────────────────────────────────── */
function applyLang(lang){
  if(lang!=='hi'&&lang!=='en')lang='hi';
  var wasEn=_isEn;
  _lang=lang;_isEn=(lang==='en');
  window._currentLangCode=lang;window._isEn=_isEn;
  localStorage.setItem('bd_lang',lang);
  document.documentElement.lang=lang;
  // Splash messages
  if(_isEn){
    window._splashMsgs=['🔮 Preparing your cosmic reading...','⭐ Analyzing planetary positions...','✨ Your horoscope is being prepared...'];
  } else {
    window._splashMsgs=['🔮 भविष्य जानने की तैयारी हो रही है...','⭐ ग्रहों की स्थिति जांची जा रही है...','✨ कुंडली तैयार हो रही है...'];
  }
  // Translate DOM
  if(_isEn&&!wasEn) walkDOM(true);
  else if(!_isEn&&wasEn) walkDOM(false);
  // Apply prices
  applyPricing();
  // Update buttons
  updateBtns();
  console.log('✅ Lang:',lang);
}

/* ── GLOBAL EXPORTS ─────────────────────────────────────── */
window.bdSetLang=function(lang){applyLang(lang);};
window.applyLanguage=window.bdSetLang;

/* ── INIT ───────────────────────────────────────────────── */
function init(){
  detectLang(function(){
    setTimeout(function(){
      if(_isEn) walkDOM(true);
      applyPricing();
      updateBtns();
      loadUSD();
    },1000);
  });
}

if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',function(){setTimeout(init,800);});
}else{
  setTimeout(init,800);
}

})();
