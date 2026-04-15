/* ============================================================
   Bhavishya Dekho — lang.js v5.0 COMPLETE
   Every single Hindi word translated
   bhavishyadekho.online
   ============================================================ */
(function(){
'use strict';

/* ══════════════════════════════════════════════════════════
   COMPLETE MAP — 212 strings, har ek HTML text covered
   ══════════════════════════════════════════════════════════ */
var H = {
  /* Single words */
  'साल':'Year',
  'मकर':'Capricorn',
  'मीन':'Pisces',
  'दिन':'Day',
  'धनु':'Sagittarius',
  'मेष':'Aries',
  'वृष':'Taurus',
  'होम':'Home',
  'सिंह':'Leo',
  'कर्क':'Cancer',
  'उपाय':'Remedies',
  'राशि':'Zodiac',
  'कुंभ':'Aquarius',
  'तुला':'Libra',
  'अन्य':'Other',
  '/माह':'/month',
  '/साल':'/year',
  '6 माह':'6 Months',
  'मासिक':'Monthly',
  'महीना':'Month',
  'मिथुन':'Gemini',
  'कन्या':'Virgo',
  'कस्टम':'Custom',
  'महिला':'Female',
  'चुनें':'Select',
  'मुफ्त':'Free',
  'पुरुष':'Male',

  /* Short phrases */
  '← वापस':'← Back',
  '▼ और देखें':'▼ See More',
  '20 बार':'20 times',
  '/6 माह':'/6 months',
  '30 बार':'30 times',
  '12 माह':'12 months',
  'लिंग *':'Gender *',
  '10 बार':'10 times',
  'रिपोर्ट':'Report',
  'शुभ अंक':'Lucky Numbers',
  'नक्षत्र':'Nakshatra',
  'वृश्चिक':'Scorpio',
  'एड-फ्री':'Ad-Free',
  'दान करें':'Donate',
  'अपना नाम':'Your Name',
  'व्यक्तिगत':'Personal',
  'शेयर करें':'Share',
  'उपाय नहीं':'No Remedies',
  'आपकी राशि':'Your Zodiac',
  'ग्रह उपाय':'Planetary Remedies',
  'जन्म समय *':'Birth Time *',
  'रत्न सुझाव':'Gemstone Guide',
  '🔮 भविष्यफल':'🔮 Prediction',
  'दोष निवारण':'Dosha Removal',
  'प्राथमिकता':'Priority',
  'लिंग चुनें':'Select Gender',
  'तेज सहायता':'Fast Support',
  'आपका नाम *':'Your Name *',
  'पूरी फ्री +':'All Free +',
  '₹49 — 3 बार':'₹49 — 3 times',
  'संपर्क करें':'Contact Us',
  'बिना रुकावट':'No interruptions',
  'शुभ मुहूर्त':'Auspicious Time',
  '5 बार मुफ्त':'5 times free',
  '3 बार मुफ्त':'3 times free',
  '📲 शेयर करें':'📲 Share',
  'जन्म तिथि *':'Date of Birth *',
  'फ्री भविष्य':'Free Prediction',
  '₹19 — 4 बार':'₹19 — 4 times',
  '4 बार मुफ्त':'4 times free',
  '8 बार मुफ्त':'8 times free',
  'साथी की राशि':'Partner Zodiac',
  'दशा विश्लेषण':'Dasha Analysis',
  '📜 ₹19 कुंडली':'📜 ₹19 Kundli',
  'कुंडली मिलान':'Kundli Matching',
  'लव कैलकुलेटर':'Love Calculator',
  'मासिक राशिफल':'Monthly Horoscope',
  '🗑️ साफ़ करें':'🗑️ Clear',
  'दैनिक राशिफल':'Daily Horoscope',
  'राशिफल देखें':'View Horoscope',
  'जन्म स्थान *':'Birth Place *',
  'मुफ्त कुंडली':'Free Kundli',
  'एड-फ्री अनुभव':'Ad-Free Experience',
  'साथी का नाम *':"Partner's Name *",
  'जीवन विश्लेषण':'Life Analysis',
  '💳 भुगतान करें':'💳 Make Payment',
  'गोपनीयता नीति':'Privacy Policy',
  '🔮 भविष्य देखें':'🔮 See Future',
  'नियम और शर्तें':'Terms & Conditions',
  'प्रीमियम प्लान':'Premium Plan',
  'दैनिक राशिफल —':'Daily Horoscope —',
  'ग्रहों के उपाय':'Planetary Remedies',
  'तेजी से सहायता':'Fast Support',
  'मुफ्त प्रीमियम':'Free Premium',
  'मुफ्त भविष्य —':'Free Prediction —',
  'वार्षिक राशिफल':'Yearly Horoscope',
  'शुभ अंक और रंग':'Lucky Numbers & Colors',
  'लव कैलकुलेटर —':'Love Calculator —',
  'प्रेम और विवाह':'Love & Marriage',
  'आज का भविष्यफल':"Today's Prediction",
  '12 भावों का फल':'12 House Results',
  'विस्तृत कुंडली':'Detailed Kundli',
  '👑 ₹49 प्रीमियम':'👑 ₹49 Premium',
  'हमारे बारे में':'About Us',
  'अपनी राशि चुनें':'Select Your Zodiac',
  '🏠 भाव अनुसार फल':'🏠 House Results',
  'सब्सक्राइब करें':'Subscribe',
  '₹19 वाली कुंडली':'₹19 Kundli',
  'जन्म तिथि चुनें':'Select Birth Date',
  'विस्तृत रिपोर्ट':'Detailed Report',
  'प्रीमियम कुंडली':'Premium Kundli',
  'राशि और नक्षत्र':'Zodiac & Nakshatra',
  '₹49 वाली कुंडली':'₹49 Kundli',
  'विशेष रत्न सुझाव':'Special Gemstone Guide',
  'ग्रहों की स्थिति':'Planetary Positions',
  'विशेष उपाय सुझाव':'Special Remedy Guide',
  'कोई रिपोर्ट नहीं':'No Reports Found',
  'महत्वपूर्ण कार्य':'Important Tasks',
  '✨ प्रीमियम प्लान':'✨ Premium Plan',
  '📋 मेरी रिपोर्ट्स':'📋 My Reports',
  'करियर भविष्यवाणी':'Career Prediction',
  'आपके Premium लाभ':'Your Premium Benefits',
  '🔮 कुंडली रिपोर्ट':'🔮 Kundli Report',
  'व्यक्तिगत राशिफल':'Personal Horoscope',
  'प्राथमिकता समर्थन':'Priority Support',
  '🔱 12 भाव (Houses)':'🔱 12 Houses',
  'लव परसेंटेज देखें':'See Love %',
  '₹19 वाली सब कुछ +':'All ₹19 features +',
  'दोष निवारण के उपाय':'Dosha Removal Remedies',
  '📋 विस्तृत भविष्यफल':'📋 Detailed Prediction',
  'संपूर्ण जीवन दर्शन':'Complete Life Reading',
  'सामान्य भविष्यवाणी':'General Prediction',
  'शुभ समय और मुहूर्त':'Auspicious Time & Muhurta',
  'करियर, प्रेम, धन फल':'Career, Love & Money',
  '📜 ₹19 विस्तृत कुंडली':'📜 ₹19 Detailed Kundli',
  'प्रीमियम प्लान देखें':'View Premium Plan',
  'जन्म स्थान दर्ज करें':'Enter Birth Place',
  'मासिक राशिफल रिपोर्ट':'Monthly Horoscope Report',
  'विस्तृत कुंडली (₹19)':'Detailed Kundli (₹19)',
  '👑 और विस्तृत जानकारी?':'👑 Want more details?',
  'प्रीमियम कुंडली (₹49)':'Premium Kundli (₹49)',
  'सभी प्रीमियम सुविधाएं':'All Premium Features',
  'आप प्रीमियम सदस्य हैं':'You are a Premium Member',
  'संपूर्ण जीवन विश्लेषण':'Complete Life Analysis',
  '👑 ₹49 प्रीमियम कुंडली':'👑 ₹49 Premium Kundli',
  'ग्रहों की स्थिति नहीं':'No Planetary Positions',
  '-- अपनी राशि चुनें --':'-- Select your zodiac --',
  'प्यार का प्रतिशत जानें':'Calculate Love %',
  'वार्षिक राशिफल रिपोर्ट':'Yearly Horoscope Report',
  '12 भावों का विस्तृत फल':'Detailed 12 House Results',
  '🔐 सुरक्षित भुगतान करें':'🔐 Secure Payment',
  '₹19 में रिपोर्ट खरीदें':'Buy Report for ₹19',
  'विस्तृत कुंडली रिपोर्ट':'Detailed Kundli Report',
  'प्रीमियम सदस्यता के लाभ':'Premium Membership Benefits',
  'प्रीमियम कुंडली रिपोर्ट':'Premium Kundli Report',
  '✅ राशि auto-detect होगी':'✅ Zodiac will be auto-detected',
  'दैनिक राशिफल नोटिफिकेशन':'Daily Horoscope Notification',
  'नाम दर्ज करना आवश्यक है':'Name is required',
  'भुगतान प्रक्रिया जारी...':'Processing payment...',
  'व्यक्तिगत रत्न सिफारिशें':'Personal Gemstone Recommendations',
  '🙏 कृपया हमें सपोर्ट करें':'🙏 Please support us',
  'ग्रहों की विस्तृत स्थिति':'Detailed Planetary Positions',
  'मेरी रिपोर्ट्स (हिस्ट्री)':'My Reports (History)',
  'विशेषज्ञ ज्योतिषी से सलाह':'Expert Astrologer Advice',
  'प्रीमियम में बनें एड-फ्री':'Go Ad-Free with Premium',
  'मेरा भविष्य देखें (मुफ्त)':'See My Future (Free)',
  '🔁 दोस्तों के साथ शेयर करें':'🔁 Share with friends',
  'वैदिक ज्योतिष का सटीक संगम':'The Science of Vedic Astrology',
  'दोष निवारण के लिए सरल उपाय':'Simple Remedies for Dosha Removal',
  'बिना किसी रुकावट के सेवाएं':'Uninterrupted Services',
  'सिर्फ ₹5 में सटीक राशि जानें':'Know Accurate Zodiac for just ₹5',
  'महत्वपूर्ण कार्यों के लिए समय':'Time for Important Tasks',
  'आपके लिए भाग्यशाली अंक और रंग':'Your Lucky Numbers & Colors',
  '✨ इस रिपोर्ट में क्या मिलेगा?':"✨ What's in this report?",
  'आपकी कुंडली के अनुसार भविष्यफल':'Prediction as per your Kundli',
  '₹49 में प्रीमियम रिपोर्ट खरीदें':'Buy Premium Report for ₹49',
  'ग्रहों के लिए रत्न और धारण विधि':'Gemstones for Planets & Wearing Method',
  'सभी 12 भावों का विस्तृत विश्लेषण':'Detailed Analysis of all 12 Houses',
  'प्रेम जीवन और विवाह की संभावनाएं':'Love Life & Marriage Possibilities',
  'महत्वपूर्ण कार्यों के लिए शुभ समय':'Auspicious Time for Important Tasks',
  'नौकरी और व्यवसाय में उन्नति के योग':'Career & Business Growth Prospects',
  'सभी payment methods accept होते हैं':'All payment methods accepted',
  'प्रीमियम में मिलेंगे ये अतिरिक्त लाभ':'Additional Benefits in Premium',
  'आपकी सटीक राशि और नक्षत्र की जानकारी':'Your Accurate Zodiac & Nakshatra Info',
  '9 ग्रहों की विस्तृत स्थिति और प्रभाव':'Position & Effect of 9 Planets',
  '🔮 भविष्य जानने की तैयारी हो रही है...':'🔮 Preparing your cosmic reading...',
  'अपनी जानकारी दर्ज करें (मुफ्त भविष्य)':'Enter your details (Free Prediction)',
  'Auto Detect — राशि रिपोर्ट में दिखेगी':'Auto Detect — Zodiac shown in report',
  '✨ ग्रह · नक्षत्र · कुंडली · भविष्यफल ✨':'✨ Planets · Stars · Kundli · Horoscope ✨',
  'ग्रहों की स्थिति का विश्लेषण हो रहा है':'Analyzing your planetary positions...',
  'जन्म तिथि से नक्षत्र स्वतः पहचाना जाएगा':'Nakshatra auto-detected from birth date',
  '🔮 Bhavishya Dekho — भविष्य बन रहा है...':'🔮 Bhavishya Dekho — Building your future...',
  'नाम से राशि auto-detect • 24 घंटे valid':'Auto-detect zodiac from name • Valid 24 hours',
  'आपके सहयोग से हम और बेहतर सेवाएं दे सकते हैं':'With your support we can provide better services',
  'यह रिपोर्ट ज्योतिषीय मान्यताओं पर आधारित है।':'This report is based on astrological beliefs.',
  'सभी प्रीमियम प्लान में ऑटो-नवीनीकरण की सुविधा':'All premium plans include auto-renewal',
  'प्रीमियम कुंडली में पाएं और भी विस्तृत जानकारी':'Get even more detail in Premium Kundli',
  '* 5 मिनट के उपयोग के बाद यह विकल्प दिखाई देता है':'* This option appears after 5 minutes of use',
  'अभी तक कोई भविष्यफल नहीं देखा। पहले भविष्य देखें!':'No predictions yet. See your future first!',
  'बिना किसी रुकावट के ज्योतिषीय सेवाओं का लाभ उठाएं':'Enjoy astrological services without interruption',
  '100% Secure Payment — भुगतान होते ही सेवा तुरंत मिलेगी!':'100% Secure Payment — Service activated instantly!',

  /* Zodiac with English in brackets */
  'सिंह (Leo)':'Leo',
  'मेष (Aries)':'Aries',
  'वृष (Taurus)':'Taurus',
  'मिथुन (Gemini)':'Gemini',
  'कर्क (Cancer)':'Cancer',
  'कन्या (Virgo)':'Virgo',
  'तुला (Libra)':'Libra',
  'वृश्चिक (Scorpio)':'Scorpio',
  'धनु (Sagittarius)':'Sagittarius',
  'मकर (Capricorn)':'Capricorn',
  'कुंभ (Aquarius)':'Aquarius',
  'मीन (Pisces)':'Pisces',

  /* Extra strings from JS alerts / dynamic content */
  'आपका भविष्य तैयार हो रहा है 🌟':'Your future is being prepared 🌟',
  'परिणाम तैयार हो रहा है...':'Preparing your result...',
  'कृपया प्रतीक्षा करें':'Please wait...',
  'कोई history नहीं है':'No history found',
  'रिपोर्ट नहीं मिली':'Report not found',
  'कोई भविष्यफल नहीं मिला। पहले भविष्य देखें।':'No prediction found. Please see your future first.',
  'कोई रिपोर्ट नहीं मिली। पहले कुंडली देखें।':'No report found. Please check kundli first.',
  'कृपया सभी जानकारी भरें':'Please fill all information',
  'कोई रिपोर्ट नहीं देखी गई':'No reports viewed yet',
  '⭐ ग्रहों की स्थिति जांची जा रही है...':'⭐ Analyzing planetary positions...',
  '✨ कुंडली तैयार हो रही है...':'✨ Your horoscope is being prepared...',
  '🗑️ पूरी History साफ़ करें':'🗑️ Clear All History',
  '📲 Website को Bookmark करें और हर रोज़ अपना भविष्य देखें!':'📲 Bookmark this site & check your future daily!',
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
  '✦ सभी payments एक बार के होते हैं':'✦ All payments are one-time',
  '✦ Report generate होने के बाद refund नहीं होगा':'✦ No refund after report is generated',
  '✦ हम किसी भी गलत उपयोग के लिए जिम्मेदार नहीं होंगे':'✦ We are not responsible for any misuse',
  '✦ User को अपनी सही जानकारी भरनी जरूरी है':'✦ User must enter correct information',
  '✦ यह service केवल digital report के रूप में प्रदान की जाती है':'✦ This service is provided as digital report only',
  'मेरा भविष्य देखें':'See My Future',
  'मुफ्त भविष्यफल देखें':'Get Free Prediction',
  'आज का भविष्यफल':"Today's horoscope",
  'जीवन विश्लेषण':'Life Analysis',
  'संपूर्ण जीवन दर्शन':'Complete Life Reading',
  '🔮 भविष्यफल':'🔮 Prediction',
  '【 विस्तृत भविष्यफल 】':'【 Detailed Prediction 】',
  '【 व्यक्तिगत जानकारी 】':'【 Personal Information 】',
  '🔮 मुख्य भविष्यवाणी':'🔮 Main Prediction',
  'में रिपोर्ट खरीदें':'Buy Report',
  'में प्रीमियम रिपोर्ट खरीदें':'Buy Premium Report',
  'आपके Premium लाभ':'Your Premium Benefits',
  'आप प्रीमियम सदस्य हैं':'You are a Premium Member',
  'सभी प्रीमियम प्लान में ऑटो-नवीनीकरण की सुविधा':'All premium plans include auto-renewal',
  '💕 मिलान करें':'💕 Match Now',
  '👰 वधू':'👰 Bride',
  '🤵 वर':'🤵 Groom',
  '🌟 उत्कृष्ट मिलान!':'🌟 Excellent Match!',
  '✅ अच्छा मिलान।':'✅ Good Match.',
  '⚠️ सावधानी आवश्यक।':'⚠️ Caution Advised.',
  'गुण मिलान':'Guna Milan',
  '💎 रत्न सुझाव':'💎 Gemstone Guide',
  'धारण दिन':'Wear Day',
  'मंगलवार':'Tuesday',
  'शुक्रवार':'Friday',
  'बुधवार':'Wednesday',
  'सोमवार':'Monday',
  'रविवार':'Sunday',
  'गुरुवार':'Thursday',
  'शनिवार':'Saturday',
  '⚠️ यह भविष्यफल वैदिक ज्योतिष पर आधारित है। महत्वपूर्ण निर्णयों के लिए विशेषज्ञ से परामर्श लें।':'⚠️ This prediction is based on Vedic astrology. Consult an expert for important decisions.',
  '📲 शेयर करें':'📲 Share',
  '📲 Share करें — 1 और मुफ्त पाएं':'📲 Share — Get 1 more free',
  '📲 इस रिपोर्ट को शेयर करें':'📲 Share this report',
  '🙏 कृपया हमें सपोर्ट करें':'🙏 Please support us',
  '👑 Premium लें — रोज़ 10+ भविष्यफल':'👑 Get Premium — 10+ daily predictions',
  'यह website केवल मनोरंजन और सामान्य मार्गदर्शन के उद्देश्य से बनाई गई है।':'This website is for entertainment and general guidance only.',
  'प्रीमियम में मिलेंगे ये अतिरिक्त लाभ':'Additional Benefits in Premium',
  'प्रीमियम में बनें एड-फ्री':'Go Ad-Free with Premium',
  'बिना किसी रुकावट के सेवाएं':'Uninterrupted Services',
  '⏳ आपकी भविष्य की Timeline':'⏳ Your Future Timeline',
  'नाम से राशि auto-detect • 24 घंटे valid':'Auto-detect zodiac from name • 24hr valid',
  '⏰ 24 घंटे के लिए सक्रिय':'⏰ Active for 24 hours',
  '❤️ प्यार का प्रतिशत जानें':'❤️ Calculate Love %',
  '☀️ दैनिक राशिफल':'☀️ Daily Horoscope',
  '📆 मासिक राशिफल':'📆 Monthly Horoscope',
  '📅 वार्षिक राशिफल':'📅 Yearly Horoscope',
  'राशि चुनें':'Select Zodiac',
  'अपनी राशि चुनें':'Select Your Zodiac',
  'रोज़ रीसेट':'Daily reset',
  'बचे':'remaining',
  'एड-फ्री':'Ad-Free',
  'बिना रुकावट':'No interruptions',
  'ग्रह उपाय':'Planetary Remedies',
  'शुभ मुहूर्त':'Auspicious Time',
  'प्राथमिकता':'Priority',
  'तेज सहायता':'Fast Support',
  'मुफ्त कुंडली':'Free Kundli',
  'मुफ्त प्रीमियम':'Free Premium',
  '5 साल का भविष्य':'5-Year Future',
  'अगले 3–6 महीने':'Next 3-6 Months',
  'जीवन टाइमलाइन':'Life Timeline',
  'ग्रहों की स्थिति':'Planetary Positions',
  '12 भाव फल':'12 House Results',
  'शुभ कारक':'Lucky Factors',
  'विशेष उपाय':'Special Remedies',
  'दशा विश्लेषण':'Dasha Analysis',
  '📲 दोस्तों के साथ शेयर करें':'📲 Share with friends',
  '🔁 दोस्तों के साथ शेयर करें':'🔁 Share with friends',
  'नाम *':'Name *',
  'नाम':'Name',
  'जन्म तिथि':'Date of Birth',
  'जन्म समय':'Birth Time',
  'जन्म स्थान':'Birth Place',
  'लिंग':'Gender',
  'अपना नाम लिखें':'Enter your name',
  'जन्म स्थान दर्ज करें':'Enter birth place',
  'आपका नाम':'Your name',
  'साथी का नाम':"Partner's name",
  '-- अपनी राशि चुनें --':'-- Select your zodiac --',
  'शहर का नाम':'City name',
  'समय':'Time',
  'दिन':'Day',
  'महीना':'Month',
  'आयु':'Age',
  'वार':'Weekday',
  '📋 मेरी रिपोर्ट्स':'📋 My Reports',
  'वापस':'Back',
  '🗑️ साफ़ करें':'🗑️ Clear',
  'कोई रिपोर्ट नहीं':'No Reports Found',
};

/* Build reverse map (EN→HI) once */
var E = {};
Object.keys(H).forEach(function(hi){ E[H[hi]] = hi; });

/* ── STATE ──────────────────────────────────────────── */
var _lang='hi', _isEn=false;
window._currentLangCode='hi'; window._isEn=false;

/* ── USD PRICES ─────────────────────────────────────── */
var USD={basic:0.25,premium:0.60,rashi:0.07,monthly:1.20,sixMonth:6.00,yearly:12.00};
window.BD_CURRENCY_SETTINGS=USD;

/* ── DETECT LOCATION ────────────────────────────────── */
function detectLang(cb){
  var saved=localStorage.getItem('bd_lang');
  if(saved==='hi'||saved==='en'){
    _lang=saved;_isEn=(saved==='en');
    window._currentLangCode=_lang;window._isEn=_isEn;cb();return;
  }
  fetch('https://ipapi.co/json/')
    .then(function(r){return r.json();})
    .then(function(d){
      var eng=['US','GB','CA','AU','NZ','IE','SG','ZA'];
      _lang=(eng.indexOf(d.country_code)>-1)?'en':'hi';
      _isEn=(_lang==='en');
      window._currentLangCode=_lang;window._isEn=_isEn;cb();
    })
    .catch(function(){_lang='hi';_isEn=false;window._currentLangCode='hi';window._isEn=false;cb();});
}

/* ── TRANSLATE TEXT ─────────────────────────────────── */
function tx(text, toEn){
  if(!text||!text.trim())return text;
  var r=text;
  var map=toEn?H:E;
  /* Sort by length descending so longer strings match first */
  var keys=Object.keys(map).sort(function(a,b){return b.length-a.length;});
  keys.forEach(function(k){
    if(r.indexOf(k)>-1) r=r.split(k).join(map[k]);
  });
  return r;
}

/* ── WALK ALL DOM TEXT NODES ────────────────────────── */
function walkDOM(toEn){
  var skipTags={'SCRIPT':1,'STYLE':1,'META':1,'LINK':1,'NOSCRIPT':1,'SVG':1,'PATH':1};
  var walker=document.createTreeWalker(
    document.body, NodeFilter.SHOW_TEXT,
    {acceptNode:function(n){
      if(!n.parentElement||skipTags[n.parentElement.tagName])return NodeFilter.FILTER_REJECT;
      if(!n.nodeValue||!n.nodeValue.trim())return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    }}
  );
  var nodes=[];
  var n;
  while((n=walker.nextNode()))nodes.push(n);
  nodes.forEach(function(nd){
    var t=tx(nd.nodeValue,toEn);
    if(t!==nd.nodeValue)nd.nodeValue=t;
  });
  /* Placeholders */
  document.querySelectorAll('[placeholder]').forEach(function(el){
    var t=tx(el.getAttribute('placeholder'),toEn);
    el.setAttribute('placeholder',t);
  });
  /* Select options */
  document.querySelectorAll('option').forEach(function(o){
    var t=tx(o.textContent,toEn);
    if(t!==o.textContent)o.textContent=t;
  });
  /* Title */
  if(toEn && document.title.match(/[\u0900-\u097F]/)){
    document.title='Bhavishya Dekho - Free Kundli, Horoscope & Vedic Astrology Online';
  }
}

/* ── PRICE DISPLAY ───────────────────────────────────── */
function pr(type){
  var p=window._adminPricing||{basic:19,premium:49,rashi:5,monthly:99,sixMonth:499,yearly:999};
  if(_isEn){
    var m={basic:USD.basic,premium:USD.premium,rashi:USD.rashi,monthly:USD.monthly,sixMonth:USD.sixMonth,yearly:USD.yearly};
    return '$'+(m[type]||0).toFixed(2);
  }
  var n={basic:p.basic,premium:p.premium,rashi:p.rashi,monthly:p.monthly,sixMonth:p.sixMonth,yearly:p.yearly};
  return '₹'+(n[type]||0);
}

/* ── APPLY PRICING ───────────────────────────────────── */
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

  /* onclick amounts */
  var bA=_isEn?USD.basic:p.basic, pA=_isEn?USD.premium:p.premium;
  var bb=document.getElementById('basicKundliBtn');
  if(bb)bb.setAttribute('onclick',"processKundliPayment("+bA+",'basic')");
  var pb=document.getElementById('premiumKundliBtn');
  if(pb)pb.setAttribute('onclick',"processKundliPayment("+pA+",'premium')");

  /* Premium package cards */
  var pm=_isEn?'/month':'/माह', ps=_isEn?'/6 months':'/6 माह', py=_isEn?'/year':'/साल';
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

  /* Comparison card h4 titles */
  document.querySelectorAll('.kundli-comparison h4').forEach(function(el){
    var t=el.textContent.trim();
    if(t.indexOf('फ्री')>-1||t.indexOf('Free Prediction')>-1)
      el.textContent=_isEn?'Free Prediction':'फ्री भविष्य';
    else if(t.indexOf('विस्तृत')>-1||t.indexOf('Detailed Kundli')>-1)
      el.textContent=_isEn?'Detailed Kundli ('+pr('basic')+')':'विस्तृत कुंडली ('+pr('basic')+')';
    else if(t.indexOf('प्रीमियम')>-1||t.indexOf('Premium Kundli')>-1)
      el.textContent=_isEn?'Premium Kundli ('+pr('premium')+')':'प्रीमियम कुंडली ('+pr('premium')+')';
  });

  /* Upsell buttons */
  document.querySelectorAll('.upsell-btn').forEach(function(el){
    var oc=el.getAttribute('onclick')||'';
    if(oc.indexOf('showKundliSection')>-1&&oc.indexOf('Premium')===-1)
      el.textContent='📜 '+pr('basic')+(_isEn?' Detailed Kundli':' विस्तृत कुंडली');
    if(oc.indexOf('showPremiumKundliSection')>-1)
      el.textContent='👑 '+pr('premium')+(_isEn?' Premium Kundli':' प्रीमियम कुंडली');
  });

  /* Comparison prices */
  document.querySelectorAll('.comparison-price').forEach(function(el){
    var t=el.textContent.trim();
    if(t==='मुफ्त'||t==='Free')el.textContent=_isEn?'Free':'मुफ्त';
    else if(t.match(/^[₹\$]/)){
      if(t.match(/19|0\.25/))el.textContent=pr('basic');
      else if(t.match(/49|0\.60/))el.textContent=pr('premium');
    }
  });

  /* Rashi hints */
  document.querySelectorAll('#loveRashiBuyMsg,#horoRashiBuyMsg,#rashiBuyHint').forEach(function(c){
    var b=c.querySelector('span[style*="border-radius:20px"]');
    var t=c.querySelector('div[style*="ffd700"]');
    if(b)b.textContent=pr('rashi');
    if(t)t.textContent=_isEn?('Just '+pr('rashi')+' for accurate zodiac'):('सिर्फ '+pr('rashi')+' में सटीक राशि जानें');
  });

  /* store for payment */
  window._langPricing={basic:bA,premium:pA,currency:_isEn?'USD':'INR'};
}
window.applyPricingLang=applyPricing;

/* ── LOAD USD FROM FIREBASE ──────────────────────────── */
function loadUSD(){
  try{
    if(typeof database==='undefined')return;
    database.ref('settings/usdPricing').once('value').then(function(s){
      var d=s.val();if(!d)return;
      USD.basic=d.basic||USD.basic;USD.premium=d.premium||USD.premium;
      USD.rashi=d.rashi||USD.rashi;USD.monthly=d.monthly||USD.monthly;
      USD.sixMonth=d.sixMonth||USD.sixMonth;USD.yearly=d.yearly||USD.yearly;
      window.BD_CURRENCY_SETTINGS=USD;
      if(_isEn)applyPricing();
    });
  }catch(e){}
}

/* ── UPDATE MENU BUTTONS ─────────────────────────────── */
function updateBtns(){
  var hi=document.getElementById('lang-btn-hi');
  var en=document.getElementById('lang-btn-en');
  if(!hi||!en)return;
  var activeStyle='flex:1;padding:10px 0;border:1.5px solid rgba(255,215,0,0.5);border-radius:12px;background:rgba(255,215,0,0.18);color:#ffd700;font-size:0.88rem;font-weight:700;cursor:pointer;font-family:inherit;';
  var inactiveStyle='flex:1;padding:10px 0;border:1.5px solid rgba(255,255,255,0.15);border-radius:12px;background:rgba(255,255,255,0.05);color:#aaa;font-size:0.88rem;font-weight:700;cursor:pointer;font-family:inherit;';
  hi.style.cssText=_isEn?inactiveStyle:activeStyle;
  en.style.cssText=_isEn?activeStyle:inactiveStyle;
}

/* ── APPLY LANGUAGE ──────────────────────────────────── */
function applyLang(lang){
  if(lang!=='hi'&&lang!=='en')lang='hi';
  var wasEn=_isEn;
  _lang=lang;_isEn=(lang==='en');
  window._currentLangCode=lang;window._isEn=_isEn;
  localStorage.setItem('bd_lang',lang);
  document.documentElement.lang=lang;

  /* Splash messages */
  window._splashMsgs=_isEn?
    ['🔮 Preparing your cosmic reading...','⭐ Analyzing planetary positions...','✨ Your horoscope is being prepared...']:
    ['🔮 भविष्य जानने की तैयारी हो रही है...','⭐ ग्रहों की स्थिति जांची जा रही है...','✨ कुंडली तैयार हो रही है...'];

  /* Translate DOM */
  if(_isEn&&!wasEn) walkDOM(true);
  else if(!_isEn&&wasEn) walkDOM(false);

  applyPricing();
  updateBtns();
  console.log('✅ Language:',lang);
}

/* ── GLOBAL EXPORTS ──────────────────────────────────── */
window.bdSetLang=function(lang){applyLang(lang);};
window.applyLanguage=window.bdSetLang;

/* ── INIT ────────────────────────────────────────────── */
function init(){
  detectLang(function(){
    setTimeout(function(){
      if(_isEn)walkDOM(true);
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
