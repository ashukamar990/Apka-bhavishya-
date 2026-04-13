/* ============================================================
   Bhavishya Dekho — lang.js  v3.0
   Complete bilingual system — Hindi & English
   Auto-detect by IP + Manual menu switch
   bhavishyadekho.online
   ============================================================ */
(function() {
'use strict';

/* ══════════════════════════════════════════════════════════
   COMPLETE TRANSLATION MAP — Hindi → English
   ══════════════════════════════════════════════════════════ */
var HI_TO_EN = {
  /* Splash */
  'वैदिक ज्योतिष का सटीक संगम': 'The Science of Vedic Astrology',
  '✨ ग्रह · नक्षत्र · कुंडली · भविष्यफल ✨': '✨ Planets · Stars · Kundli · Horoscope ✨',
  '🔮 भविष्य जानने की तैयारी हो रही है...': '🔮 Preparing your cosmic reading...',
  '⭐ ग्रहों की स्थिति जांची जा रही है...': '⭐ Analyzing planetary positions...',
  '✨ कुंडली तैयार हो रही है...': '✨ Your horoscope is being prepared...',
  '🔮 Bhavishya Dekho — भविष्य बन रहा है...': '🔮 Bhavishya Dekho — Building your future...',
  'ग्रहों की स्थिति का विश्लेषण हो रहा है': 'Analyzing your planetary positions...',
  'आपका भविष्य तैयार हो रहा है 🌟': 'Your future is being prepared 🌟',
  'परिणाम तैयार हो रहा है...': 'Preparing your result...',

  /* Payment */
  '💳 भुगतान करें': '💳 Make Payment',
  '🔐 सुरक्षित भुगतान करें': '🔐 Secure Payment',
  'सभी payment methods accept होते हैं': 'All payment methods accepted',
  '100% Secure Payment — भुगतान होते ही सेवा तुरंत मिलेगी!': '100% Secure Payment — Service activated instantly!',
  'भुगतान प्रक्रिया जारी...': 'Processing payment...',
  '✦ सभी payments एक बार के होते हैं': '✦ All payments are one-time',
  '✦ Report generate होने के बाद refund नहीं होगा': '✦ No refund after report is generated',
  '✦ हम किसी भी गलत उपयोग के लिए जिम्मेदार नहीं होंगे': '✦ We are not responsible for any misuse',
  '✦ User को अपनी सही जानकारी भरनी जरूरी है': '✦ User must enter correct information',
  '✦ यह service केवल digital report के रूप में प्रदान की जाती है': '✦ This service is provided as a digital report only',

  /* Hero / Main */
  'मेरा भविष्य देखें (मुफ्त)': 'See My Future (Free)',
  'अपनी जानकारी दर्ज करें (मुफ्त भविष्य)': 'Enter your details (free prediction)',
  'मेरा भविष्य देखें': 'See My Future',
  'मुफ्त भविष्यफल देखें': 'Get Free Prediction',

  /* Feature cards */
  'लव कैलकुलेटर': 'Love Calculator',
  'प्यार का प्रतिशत जानें': 'Calculate love %',
  'दैनिक राशिफल': 'Daily Horoscope',
  'आज का भविष्यफल': "Today's horoscope",
  'विस्तृत कुंडली': 'Detailed Kundli',
  'जीवन विश्लेषण': 'Life Analysis',
  'प्रीमियम कुंडली': 'Premium Kundli',
  'संपूर्ण जीवन दर्शन': 'Complete Life Reading',
  'मुफ्त': 'Free',

  /* Form */
  'अपना नाम लिखें': 'Enter your name',
  'जन्म स्थान दर्ज करें': 'Enter birth place',
  'आपका नाम': 'Your name',
  'साथी का नाम': "Partner's name",
  'नाम': 'Name',
  'नाम *': 'Name *',
  'नाम:': 'Name:',
  'जन्म तिथि': 'Date of Birth',
  'जन्म समय': 'Birth Time',
  'जन्म स्थान': 'Birth Place',
  'लिंग': 'Gender',
  'लिंग:': 'Gender:',
  'पुरुष': 'Male',
  'महिला': 'Female',
  'अन्य': 'Other',
  'राशि': 'Zodiac Sign',
  'राशि:': 'Zodiac:',
  '-- अपनी राशि चुनें --': '-- Select your zodiac --',
  'नक्षत्र': 'Nakshatra',
  'शहर का नाम': 'City name',
  'समय': 'Time',
  'दिन': 'Day',
  'महीना': 'Month',
  'साल': 'Year',
  'आयु': 'Age',
  'वार': 'Day',

  /* Rashis */
  'मेष': 'Aries', 'वृष': 'Taurus', 'मिथुन': 'Gemini',
  'कर्क': 'Cancer', 'सिंह': 'Leo', 'कन्या': 'Virgo',
  'तुला': 'Libra', 'वृश्चिक': 'Scorpio', 'धनु': 'Sagittarius',
  'मकर': 'Capricorn', 'कुंभ': 'Aquarius', 'मीन': 'Pisces',

  /* Graha */
  'सूर्य:': 'Sun:', 'चंद्र:': 'Moon:', 'मंगल:': 'Mars:',
  'बुध:': 'Mercury:', 'गुरु:': 'Jupiter:', 'शुक्र:': 'Venus:',
  'शनि:': 'Saturn:', 'राहु:': 'Rahu:', 'केतु:': 'Ketu:',

  /* Nav */
  'होम': 'Home',
  'मासिक राशिफल': 'Monthly Horoscope',
  'वार्षिक राशिफल': 'Yearly Horoscope',
  'कुंडली मिलान': 'Kundli Matching',
  'रत्न सुझाव': 'Gemstone Guide',
  'उपाय': 'Remedies',
  'मेरी रिपोर्ट्स (हिस्ट्री)': 'My Reports (History)',
  'हमारे बारे में': 'About Us',
  'संपर्क करें': 'Contact Us',
  'गोपनीयता नीति': 'Privacy Policy',
  'नियम और शर्तें': 'Terms & Conditions',
  'History Backup': 'History Backup',

  /* History page */
  '📋 मेरी रिपोर्ट्स': '📋 My Reports',
  'वापस': 'Back',
  '🗑️ साफ़ करें': '🗑️ Clear',
  'कोई रिपोर्ट नहीं': 'No Reports Found',
  'अभी तक कोई भविष्यफल नहीं देखा। पहले भविष्य देखें!': 'No predictions yet. See your future first!',
  'मेरी रिपोर्ट': 'My Report',

  /* Prediction results */
  '🔮 भविष्यफल': '🔮 Prediction',
  '📲 शेयर करें': '📲 Share',
  '📲 दोस्तों के साथ शेयर करें': '📲 Share with friends',
  '📲 Share करें — 1 और मुफ्त पाएं': '📲 Share — Get 1 more free',
  '📲 इस रिपोर्ट को शेयर करें': '📲 Share this report',
  '【 विस्तृत भविष्यफल 】': '【 Detailed Prediction 】',
  '【 व्यक्तिगत जानकारी 】': '【 Personal Information 】',
  '🔮 मुख्य भविष्यवाणी': '🔮 Main Prediction',
  'रिपोर्ट': 'Report',
  '📜 कुंडली रिपोर्ट': '📜 Kundli Report',
  '📜 विस्तृत कुंडली रिपोर्ट': '📜 Detailed Kundli Report',
  '👑 प्रीमियम कुंडली रिपोर्ट': '👑 Premium Kundli Report',

  /* Kundli buy */
  '✨ इस रिपोर्ट में क्या मिलेगा?': '✨ What\'s included in this report?',
  '👑 और विस्तृत जानकारी?': '👑 Want more details?',
  'में रिपोर्ट खरीदें': 'Buy Report',
  'में प्रीमियम रिपोर्ट खरीदें': 'Buy Premium Report',
  '₹19 में रिपोर्ट खरीदें': '₹19 Buy Report',
  '₹49 में प्रीमियम रिपोर्ट खरीदें': '₹49 Buy Premium Report',

  /* Upsell */
  '📜 ₹19 विस्तृत कुंडली': '📜 Detailed Kundli',
  '👑 ₹49 प्रीमियम कुंडली': '👑 Premium Kundli',
  '📜 विस्तृत कुंडली': '📜 Detailed Kundli',
  '👑 प्रीमियम कुंडली': '👑 Premium Kundli',

  /* Premium */
  'आपके Premium लाभ': 'Your Premium Benefits',
  'आप प्रीमियम सदस्य हैं': 'You are a Premium Member',
  'प्रीमियम सदस्यता के लाभ': 'Premium membership benefits',
  'सभी प्रीमियम सुविधाएं': 'All premium features',
  'प्रीमियम में मिलेंगे ये अतिरिक्त लाभ': 'Additional benefits in Premium',
  'प्रीमियम में बनें एड-फ्री': 'Go Ad-Free with Premium',
  'बिना किसी रुकावट के सेवाएं': 'Uninterrupted services',
  'बिना किसी रुकावट के ज्योतिषीय सेवाओं का लाभ उठाएं': 'Enjoy astrological services without interruption',
  '👑 Premium लें — रोज़ 10+ भविष्यफल': '👑 Get Premium — 10+ daily predictions',
  'सभी प्रीमियम प्लान में ऑटो-नवीनीकरण की सुविधा': 'All premium plans include auto-renewal',
  'यह रिपोर्ट आपके प्रीमियम प्लान के तहत मुफ्त है': 'This report is free under your premium plan',
  'प्रीमियम प्लान देखें': 'View Premium Plan',
  'एड-फ्री': 'Ad-Free',
  'बिना रुकावट': 'No interruptions',
  'मुफ्त कुंडली': 'Free Kundli',
  'मुफ्त प्रीमियम': 'Free Premium',
  'रत्न सुझाव': 'Gemstone Guide',
  'व्यक्तिगत': 'Personal',
  'ग्रह उपाय': 'Planetary Remedies',
  'दोष निवारण': 'Dosha Removal',
  'शुभ मुहूर्त': 'Auspicious Time',
  'महत्वपूर्ण कार्य': 'Important Tasks',
  'प्राथमिकता': 'Priority',
  'तेज सहायता': 'Fast Support',
  'प्रीमियम सदस्य': 'Premium Member',
  'मासिक (₹99)': 'Monthly (₹99)',
  '6 माह (₹499)': '6 Months (₹499)',
  '12 माह (₹999)': '12 Months (₹999)',
  '6 माह': '6 Months',
  '/माह': '/month',
  '/6 माह': '/6 months',
  '/साल': '/year',
  '/12 माह': '/12 months',
  'सबसे लोकप्रिय': 'Most Popular',
  'मासिक': 'Monthly',
  'वार्षिक': 'Yearly',
  '12 माह': '12 Months',
  '20 बार': '20 times',
  '30 बार': '30 times',
  '10 बार': '10 times',
  'कस्टम': 'Custom',
  'कुंडली': 'Kundli',

  /* Comparison */
  'विस्तृत कुंडली (₹19)': 'Detailed Kundli (₹19)',
  'प्रीमियम कुंडली (₹49)': 'Premium Kundli (₹49)',
  'संपूर्ण जीवन विश्लेषण': 'Complete Life Analysis',
  '12 भावों का विस्तृत फल': 'Detailed results for all 12 houses',
  '9 ग्रहों की विस्तृत स्थिति और प्रभाव': 'Detailed position and effect of 9 planets',
  'सभी 12 भावों का विस्तृत विश्लेषण': 'Detailed analysis of all 12 houses',
  'ग्रहों के लिए रत्न और धारण विधि': 'Gemstones for planets and wearing method',
  'आपकी सटीक राशि और नक्षत्र की जानकारी': 'Your accurate zodiac and nakshatra info',
  'प्रेम जीवन और विवाह की संभावनाएं': 'Love life and marriage possibilities',
  'नौकरी और व्यवसाय में उन्नति के योग': 'Job and business growth prospects',
  'व्यक्तित्व में निखार': 'Personality enhancement',
  'व्यक्तिगत रत्न सिफारिशें': 'Personal gemstone recommendations',
  'दोष निवारण के लिए सरल उपाय': 'Simple remedies for dosha removal',
  'ग्रहों की विस्तृत स्थिति': 'Detailed planetary positions',
  'मासिक राशिफल रिपोर्ट': 'Monthly Horoscope Report',
  'वार्षिक राशिफल रिपोर्ट': 'Yearly Horoscope Report',
  'विस्तृत कुंडली रिपोर्ट': 'Detailed Kundli Report',
  'प्रीमियम कुंडली रिपोर्ट': 'Premium Kundli Report',
  'संपूर्ण जीवन दर्शन': 'Complete Life Reading',
  'पूरा जीवन विश्लेषण, 5 साल का भविष्य और सही समय जानने के लिए': 'For complete life analysis, 5-year future and right timing',
  'प्रीमियम कुंडली में पाएं और भी विस्तृत जानकारी': 'Get even more detailed info in Premium Kundli',

  /* Rashi package */
  'सिर्फ ₹5 में सटीक राशि जानें': 'Know your accurate zodiac for just ₹5',
  '⭐ ₹5 राशि पैकेज': '⭐ Zodiac Package',
  '⏰ 24 घंटे के लिए सक्रिय': '⏰ Active for 24 hours',
  'नाम से राशि auto-detect • 24 घंटे valid': 'Auto-detect zodiac from name • Valid 24 hours',
  '✅ राशि auto-detect होगी': '✅ Zodiac will be auto-detected',
  'Auto Detect — राशि रिपोर्ट में दिखेगी': 'Auto Detect — zodiac shown in report',
  'Auto Detect (नाम से)': 'Auto Detect (from name)',
  'जितने चाहें नाम डालें — सभी की राशि जानें!': 'Enter any names — know everyone\'s zodiac!',
  'जितने चाहें नाम डालें — सभी की राशि!': 'Enter any names — everyone\'s zodiac!',
  '✅ राशि auto-detect होगी': '✅ Zodiac will be auto-detected',
  '✅ राशि auto-detect होगी': '✅ Zodiac will be auto-detected',

  /* Love Calculator */
  '❤️ प्यार का प्रतिशत जानें': '❤️ Calculate Love %',
  'प्रेम अनुकूलता': 'Love Compatibility',

  /* Horoscope */
  '☀️ दैनिक राशिफल': '☀️ Daily Horoscope',
  '📆 मासिक राशिफल': '📆 Monthly Horoscope',
  '📅 वार्षिक राशिफल': '📅 Yearly Horoscope',
  'राशि चुनें': 'Select zodiac',
  'अपनी राशि चुनें': 'Select your zodiac',
  'राशि चुनिए': 'Choose your zodiac',

  /* Kundli matching */
  '👰 वधू': '👰 Bride',
  '🤵 वर': '🤵 Groom',
  '💕 मिलान करें': '💕 Match Now',
  '🌟 उत्कृष्ट मिलान!': '🌟 Excellent Match!',
  '✅ अच्छा मिलान।': '✅ Good Match.',
  '⚠️ सावधानी आवश्यक।': '⚠️ Caution Advised.',
  'गुण मिलान': 'Guna Milan',

  /* Gemstones */
  '💎 रत्न सुझाव': '💎 Gemstone Guide',
  'धारण दिन': 'Wear Day',
  'पुखराज (गुरु के लिए)': 'Yellow Sapphire (for Jupiter)',
  'Coral (Moonga)': 'Coral (Moonga)',
  'Diamond (Heera)': 'Diamond (Heera)',
  'Emerald (Panna)': 'Emerald (Panna)',
  'Pearl (Moti)': 'Pearl (Moti)',
  'Ruby (Manik)': 'Ruby (Manik)',
  'Yellow Sapphire (Pukhraj)': 'Yellow Sapphire (Pukhraj)',
  'Blue Sapphire (Neelam)': 'Blue Sapphire (Neelam)',
  'मंगलवार': 'Tuesday',
  'शुक्रवार': 'Friday',
  'बुधवार': 'Wednesday',
  'सोमवार': 'Monday',
  'रविवार': 'Sunday',
  'गुरुवार': 'Thursday',
  'शनिवार': 'Saturday',

  /* Remedies */
  '🕉️ ग्रह उपाय': '🕉️ Planetary Remedies',

  /* Panchang */
  'पंचांग': 'Panchang',

  /* Premium member benefits */
  '₹19 — 4 बार': '₹19 — 4 times',
  '₹49 — 3 बार': '₹49 — 3 times',

  /* Limit messages */
  'आज के': "Today's",
  'रात 12 बजे आपको 2 नए मुफ्त भविष्यफल मिलेंगे!': 'You will get 2 new free predictions at midnight!',
  'Share = +1': 'Share = +1',
  'रोज़ रीसेट': 'Daily reset',
  'बचे': 'remaining',

  /* Support */
  '🙏 कृपया हमें सपोर्ट करें': '🙏 Please support us',
  'आपके सहयोग से हम और बेहतर सेवाएं दे सकते हैं': 'With your support we can provide better services',
  'रोज़ भविष्य देखते रहें': 'Keep checking your future daily',
  '📲 Website को Bookmark करें और हर रोज़ अपना भविष्य देखें!': '📲 Bookmark this website and check your future every day!',
  'और जानें कि ग्रह आपके लिए क्या लेकर आ रहे हैं।': 'Learn what the planets are bringing for you.',

  /* Disclaimer */
  '⚠️ यह भविष्यफल वैदिक ज्योतिष पर आधारित है। महत्वपूर्ण निर्णयों के लिए विशेषज्ञ से परामर्श लें।': '⚠️ This prediction is based on Vedic astrology. Consult an expert for important decisions.',
  'यह website केवल मनोरंजन और सामान्य मार्गदर्शन के उद्देश्य से बनाई गई है।': 'This website is for entertainment and general guidance purposes only.',
  'यहाँ दी गई भविष्यवाणियाँ logic और calculation पर आधारित हैं और 100% सटीक होने की गारंटी नहीं देतीं।': 'Predictions here are based on logic and calculation and do not guarantee 100% accuracy.',
  'यह रिपोर्ट ज्योतिषीय मान्यताओं पर आधारित है।': 'This report is based on astrological beliefs.',
  'किसी भी महत्वपूर्ण निर्णय के लिए केवल इस prediction पर निर्भर न रहें।': 'Do not rely only on this prediction for any important decision.',

  /* Report sections */
  '【 व्यक्तित्व झलक 】': '【 Personality Glimpse 】',
  '⭐ जीवन की चुनौतियां': '⭐ Life Challenges',
  '🔮 विशेष रहस्योद्घाटन': '🔮 Special Revelation',
  '⏳ आपकी भविष्य की Timeline': '⏳ Your Future Timeline',
  '🌿 विशेष उपाय': '🌿 Special Remedies',
  'शुभ कारक': 'Lucky Factors',
  'ग्रहों की स्थिति': 'Planetary Positions',
  '12 भाव फल': '12 House Results',
  'जीवन टाइमलाइन': 'Life Timeline',
  '5 साल का भविष्य': '5-Year Future',
  'अगले 3–6 महीने': 'Next 3-6 Months',
  'व्यक्तित्व झलक': 'Personality Glimpse',
  'विशेष उपाय': 'Special Remedies',

  /* History */
  '📋 मेरी रिपोर्ट्स': '📋 My Reports',
  '🗑️ पूरी History साफ़ करें': '🗑️ Clear All History',
  '✕ एक भविष्यफल हटाएं (History से चुनें)': '✕ Remove a prediction (choose from history)',
  'मुफ्त भविष्य': 'Free Prediction',

  /* Result upsell */
  '🌟 अपने दोस्तों के साथ शेयर करें': '🌟 Share with your friends',
  'प्रीमियम में मिलेंगे ये अतिरिक्त लाभ': 'Additional benefits in Premium',

  /* General */
  'कृपया प्रतीक्षा करें': 'Please wait...',
  'लोड हो रहा है...': 'Loading...',
  'Ad देख रहे हैं...': 'Watching Ad...',
  '5 सेकंड प्रतीक्षा करें': 'Please wait 5 seconds',
  'नाम दर्ज करना आवश्यक है': 'Name is required',
  'कृपया सभी जानकारी भरें': 'Please fill all information',
  'कोई रिपोर्ट नहीं देखी गई': 'No reports viewed yet',
  'चुनें': 'Select',
  'अन्य': 'Other',
  '✅ 1 मुफ्त ': '✅ 1 free ',
  ' मिला!': ' received!',
};

/* ══════════════════════════════════════════════════════════
   STATE
   ══════════════════════════════════════════════════════════ */
var _lang = 'hi';
var _isEn = false;
window._currentLangCode = 'hi';
window._isEn = false;

/* ══════════════════════════════════════════════════════════
   DETECT LOCATION BY IP
   ══════════════════════════════════════════════════════════ */
function detectLang(callback) {
  var saved = localStorage.getItem('bd_lang');
  if (saved && (saved === 'hi' || saved === 'en')) {
    _lang = saved; _isEn = (saved === 'en');
    window._currentLangCode = _lang; window._isEn = _isEn;
    callback(); return;
  }
  fetch('https://ipapi.co/json/')
    .then(function(r) { return r.json(); })
    .then(function(d) {
      var engCountries = ['US','GB','CA','AU','NZ','IE','SG','ZA','PH','MY'];
      if (engCountries.indexOf(d.country_code) > -1) {
        _lang = 'en'; _isEn = true;
      } else {
        _lang = 'hi'; _isEn = false;
      }
      window._currentLangCode = _lang; window._isEn = _isEn;
      callback();
    })
    .catch(function() {
      _lang = 'hi'; _isEn = false;
      window._currentLangCode = 'hi'; window._isEn = false;
      callback();
    });
}

/* ══════════════════════════════════════════════════════════
   TRANSLATE TEXT NODE — Hindi → English or reverse
   ══════════════════════════════════════════════════════════ */
function translateText(text, toEn) {
  if (!text || !text.trim()) return text;
  var result = text;
  if (toEn) {
    Object.keys(HI_TO_EN).forEach(function(hi) {
      if (result.indexOf(hi) > -1) {
        result = result.split(hi).join(HI_TO_EN[hi]);
      }
    });
  } else {
    // English → Hindi (reverse map)
    Object.keys(HI_TO_EN).forEach(function(hi) {
      var en = HI_TO_EN[hi];
      if (result.indexOf(en) > -1) {
        result = result.split(en).join(hi);
      }
    });
  }
  return result;
}

/* ══════════════════════════════════════════════════════════
   TRANSLATE ALL TEXT NODES IN DOM
   ══════════════════════════════════════════════════════════ */
function translateDOM(toEn) {
  // Walk all text nodes
  var walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: function(node) {
        var parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        var tag = parent.tagName;
        // Skip script, style, meta
        if (['SCRIPT','STYLE','META','LINK','NOSCRIPT','SVG','PATH'].indexOf(tag) > -1)
          return NodeFilter.FILTER_REJECT;
        // Skip if no content
        if (!node.nodeValue || !node.nodeValue.trim())
          return NodeFilter.FILTER_SKIP;
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  var nodes = [];
  var node;
  while (node = walker.nextNode()) {
    nodes.push(node);
  }

  nodes.forEach(function(n) {
    var original = n.nodeValue;
    var translated = translateText(original, toEn);
    if (translated !== original) {
      n.nodeValue = translated;
    }
  });

  // Also translate placeholder attributes
  document.querySelectorAll('[placeholder]').forEach(function(el) {
    var ph = el.getAttribute('placeholder');
    var translated = translateText(ph, toEn);
    if (translated !== ph) el.setAttribute('placeholder', translated);
  });

  // Translate select option text
  document.querySelectorAll('option').forEach(function(opt) {
    var translated = translateText(opt.textContent, toEn);
    if (translated !== opt.textContent) opt.textContent = translated;
  });
}

/* ══════════════════════════════════════════════════════════
   LOAD USD PRICES FROM FIREBASE
   ══════════════════════════════════════════════════════════ */
var USD = {basic:0.25, premium:0.60, rashi:0.07, monthly:1.20, sixMonth:6.00, yearly:12.00};
window.BD_CURRENCY_SETTINGS = USD;

function loadUSD() {
  try {
    if (typeof database === 'undefined') return;
    database.ref('settings/usdPricing').once('value').then(function(snap) {
      var d = snap.val();
      if (d) {
        USD.basic    = d.basic    || USD.basic;
        USD.premium  = d.premium  || USD.premium;
        USD.rashi    = d.rashi    || USD.rashi;
        USD.monthly  = d.monthly  || USD.monthly;
        USD.sixMonth = d.sixMonth || USD.sixMonth;
        USD.yearly   = d.yearly   || USD.yearly;
        window.BD_CURRENCY_SETTINGS = USD;
        if (_isEn) applyPricingEN();
      }
    });
  } catch(e) {}
}

/* ══════════════════════════════════════════════════════════
   APPLY PRICING
   ══════════════════════════════════════════════════════════ */
function pr(type) {
  var p = window._adminPricing || {basic:19,premium:49,rashi:5,monthly:99,sixMonth:499,yearly:999};
  if (_isEn) {
    var m = {basic:USD.basic,premium:USD.premium,rashi:USD.rashi,monthly:USD.monthly,sixMonth:USD.sixMonth,yearly:USD.yearly};
    return '$'+(m[type]||0).toFixed(2);
  }
  var n = {basic:p.basic,premium:p.premium,rashi:p.rashi,monthly:p.monthly,sixMonth:p.sixMonth,yearly:p.yearly};
  return '₹'+(n[type]||0);
}

function applyPricingEN() {
  var p = window._adminPricing || {basic:19,premium:49,rashi:5,monthly:99,sixMonth:499,yearly:999};
  function st(id,txt){var e=document.getElementById(id);if(e&&txt!==undefined)e.textContent=txt;}

  st('basicKundliPrice',  pr('basic'));
  st('basicKundliBadge',  pr('basic'));
  st('basicKundliBtnText', pr('basic')+' Buy Report');
  st('premiumKundliPrice', pr('premium'));
  st('premiumKundliBadge', pr('premium'));
  st('premiumKundliBtnText', pr('premium')+' Buy Premium Report');

  var basicAmt  = _isEn ? USD.basic   : p.basic;
  var premAmt   = _isEn ? USD.premium : p.premium;
  var rashiAmt  = _isEn ? USD.rashi   : p.rashi;

  var bb = document.getElementById('basicKundliBtn');
  if (bb) bb.setAttribute('onclick',"processKundliPayment("+basicAmt+",'basic')");
  var pb = document.getElementById('premiumKundliBtn');
  if (pb) pb.setAttribute('onclick',"processKundliPayment("+premAmt+",'premium')");

  // Premium cards
  document.querySelectorAll('.premium-card').forEach(function(card) {
    var oc = card.getAttribute('onclick') || '';
    var pe = card.querySelector('.premium-price');
    if (oc.indexOf("'monthly'") > -1) {
      var mAmt = _isEn ? USD.monthly : p.monthly;
      if (pe) pe.innerHTML = pr('monthly') + '<small>' + (_isEn?'/month':'/माह') + '</small>';
      card.setAttribute('onclick',"showPremiumPayment("+mAmt+",'monthly')");
    } else if (oc.indexOf("'6months'") > -1) {
      var sAmt = _isEn ? USD.sixMonth : p.sixMonth;
      if (pe) pe.innerHTML = pr('sixMonth') + '<small>' + (_isEn?'/6 months':'/6 माह') + '</small>';
      card.setAttribute('onclick',"showPremiumPayment("+sAmt+",'6months')");
    } else if (oc.indexOf("'yearly'") > -1) {
      var yAmt = _isEn ? USD.yearly : p.yearly;
      if (pe) pe.innerHTML = pr('yearly') + '<small>' + (_isEn?'/year':'/साल') + '</small>';
      card.setAttribute('onclick',"showPremiumPayment("+yAmt+",'yearly')");
    }
  });

  // Upsell buttons
  document.querySelectorAll('.upsell-btn').forEach(function(el) {
    var oc = el.getAttribute('onclick') || '';
    if (oc.indexOf('showKundliSection') > -1 && oc.indexOf('Premium') === -1)
      el.textContent = '📜 ' + pr('basic') + ' Detailed Kundli';
    if (oc.indexOf('showPremiumKundliSection') > -1)
      el.textContent = '👑 ' + pr('premium') + ' Premium Kundli';
  });

  // Comparison prices
  document.querySelectorAll('.comparison-price').forEach(function(el) {
    var txt = el.textContent;
    if (txt.match(/19|0\.25/)) el.textContent = pr('basic');
    if (txt.match(/49|0\.60/)) el.textContent = pr('premium');
  });

  // h4 comparison headings
  document.querySelectorAll('h4').forEach(function(el) {
    var txt = el.textContent.trim();
    if (txt.indexOf('Detailed Kundli') > -1 || txt.indexOf('विस्तृत कुंडली') > -1)
      el.textContent = 'Detailed Kundli (' + pr('basic') + ')';
    if (txt.indexOf('Premium Kundli') > -1 || txt.indexOf('प्रीमियम कुंडली') > -1)
      el.textContent = 'Premium Kundli (' + pr('premium') + ')';
  });

  // Rashi hints
  document.querySelectorAll('#loveRashiBuyMsg,#horoRashiBuyMsg,#rashiBuyHint').forEach(function(c) {
    var badge = c.querySelector('span[style*="border-radius:20px"]');
    var txt   = c.querySelector('div[style*="ffd700"]');
    if (badge) badge.textContent = pr('rashi');
    if (txt)   txt.textContent   = 'Just ' + pr('rashi') + ' for accurate zodiac detection';
    var rAmt = _isEn ? USD.rashi : (window._adminPricing ? window._adminPricing.rashi : 5);
    c.setAttribute('onclick','triggerRashiPurchase()');
  });
}

function applyPricingHI() {
  var p = window._adminPricing || {basic:19,premium:49,rashi:5,monthly:99,sixMonth:499,yearly:999};
  function st(id,txt){var e=document.getElementById(id);if(e&&txt!==undefined)e.textContent=txt;}

  st('basicKundliPrice',  '₹'+p.basic);
  st('basicKundliBadge',  '₹'+p.basic);
  st('basicKundliBtnText', '₹'+p.basic+' में रिपोर्ट खरीदें');
  st('premiumKundliPrice', '₹'+p.premium);
  st('premiumKundliBadge', '₹'+p.premium);
  st('premiumKundliBtnText', '₹'+p.premium+' में प्रीमियम रिपोर्ट खरीदें');

  var bb = document.getElementById('basicKundliBtn');
  if (bb) bb.setAttribute('onclick',"processKundliPayment("+p.basic+",'basic')");
  var pb = document.getElementById('premiumKundliBtn');
  if (pb) pb.setAttribute('onclick',"processKundliPayment("+p.premium+",'premium')");

  document.querySelectorAll('.premium-card').forEach(function(card) {
    var oc = card.getAttribute('onclick') || '';
    var pe = card.querySelector('.premium-price');
    if (oc.indexOf("'monthly'") > -1) {
      if (pe) pe.innerHTML = '₹'+p.monthly+'<small>/माह</small>';
      card.setAttribute('onclick',"showPremiumPayment("+p.monthly+",'monthly')");
    } else if (oc.indexOf("'6months'") > -1) {
      if (pe) pe.innerHTML = '₹'+p.sixMonth+'<small>/6 माह</small>';
      card.setAttribute('onclick',"showPremiumPayment("+p.sixMonth+",'6months')");
    } else if (oc.indexOf("'yearly'") > -1) {
      if (pe) pe.innerHTML = '₹'+p.yearly+'<small>/साल</small>';
      card.setAttribute('onclick',"showPremiumPayment("+p.yearly+",'yearly')");
    }
  });

  document.querySelectorAll('.upsell-btn').forEach(function(el) {
    var oc = el.getAttribute('onclick') || '';
    if (oc.indexOf('showKundliSection') > -1 && oc.indexOf('Premium') === -1)
      el.textContent = '📜 ₹'+p.basic+' विस्तृत कुंडली';
    if (oc.indexOf('showPremiumKundliSection') > -1)
      el.textContent = '👑 ₹'+p.premium+' प्रीमियम कुंडली';
  });

  document.querySelectorAll('#loveRashiBuyMsg,#horoRashiBuyMsg,#rashiBuyHint').forEach(function(c) {
    var badge = c.querySelector('span[style*="border-radius:20px"]');
    var txt   = c.querySelector('div[style*="ffd700"]');
    if (badge) badge.textContent = '₹'+p.rashi;
    if (txt)   txt.textContent   = 'सिर्फ ₹'+p.rashi+' में सटीक राशि जानें';
  });
}

/* ══════════════════════════════════════════════════════════
   APPLY FULL LANGUAGE
   ══════════════════════════════════════════════════════════ */
function applyLang(lang) {
  if (lang !== 'hi' && lang !== 'en') lang = 'hi';
  var wasEn = _isEn;
  _lang = lang; _isEn = (lang === 'en');
  window._currentLangCode = lang; window._isEn = _isEn;
  localStorage.setItem('bd_lang', lang);
  document.documentElement.lang = lang;

  if (_isEn) {
    // If was Hindi, translate to English
    if (!wasEn) translateDOM(true);
    applyPricingEN();
  } else {
    // If was English, translate back to Hindi
    if (wasEn) translateDOM(false);
    applyPricingHI();
  }

  // Update menu buttons
  updateMenuButtons();
  console.log('✅ Language set to:', lang);
}

/* ══════════════════════════════════════════════════════════
   MENU LANGUAGE BUTTONS UI
   ══════════════════════════════════════════════════════════ */
function updateMenuButtons() {
  var hiBtn = document.getElementById('lang-btn-hi');
  var enBtn = document.getElementById('lang-btn-en');
  if (!hiBtn || !enBtn) return;
  if (_isEn) {
    hiBtn.style.cssText = 'flex:1;padding:10px;border:1.5px solid rgba(255,255,255,0.2);border-radius:12px;background:rgba(255,255,255,0.06);color:#aaa;font-size:0.9rem;font-weight:700;cursor:pointer;transition:all 0.2s;font-family:inherit;';
    enBtn.style.cssText = 'flex:1;padding:10px;border:1.5px solid rgba(255,215,0,0.6);border-radius:12px;background:rgba(255,215,0,0.18);color:#ffd700;font-size:0.9rem;font-weight:700;cursor:pointer;transition:all 0.2s;font-family:inherit;';
  } else {
    hiBtn.style.cssText = 'flex:1;padding:10px;border:1.5px solid rgba(255,215,0,0.6);border-radius:12px;background:rgba(255,215,0,0.18);color:#ffd700;font-size:0.9rem;font-weight:700;cursor:pointer;transition:all 0.2s;font-family:inherit;';
    enBtn.style.cssText = 'flex:1;padding:10px;border:1.5px solid rgba(255,255,255,0.2);border-radius:12px;background:rgba(255,255,255,0.06);color:#aaa;font-size:0.9rem;font-weight:700;cursor:pointer;transition:all 0.2s;font-family:inherit;';
  }
}

/* ══════════════════════════════════════════════════════════
   GLOBAL EXPORTS
   ══════════════════════════════════════════════════════════ */
window.bdSetLang = function(lang) { applyLang(lang); };
window.applyLanguage = window.bdSetLang;
window.applyPricingWithLang = function() { _isEn ? applyPricingEN() : applyPricingHI(); };

/* ══════════════════════════════════════════════════════════
   INIT — Auto-detect then apply
   ══════════════════════════════════════════════════════════ */
function init() {
  detectLang(function() {
    // Small delay to let Firebase and DOM fully load
    setTimeout(function() {
      if (_isEn) {
        translateDOM(true);
        applyPricingEN();
      } else {
        applyPricingHI();
      }
      updateMenuButtons();
      loadUSD();
    }, 800);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() { setTimeout(init, 1500); });
} else {
  setTimeout(init, 1500);
}

})();
