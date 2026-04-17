/* ============================================================
   Bhavishya Dekho — lang.js v7.0 COMPLETE FIX
   Fixes: hidden elements, dynamic content, timing, all labels
   bhavishyadekho.online
   ============================================================ */
(function(){
'use strict';

/* ══════════════════════════════════════════════════════════
   TRANSLATION MAP — Hindi → English
   ══════════════════════════════════════════════════════════ */
var H = {
  /* Single words */
  'साल':'Year','मकर':'Capricorn','मीन':'Pisces','दिन':'Day',
  'धनु':'Sagittarius','मेष':'Aries','वृष':'Taurus','होम':'Home',
  'सिंह':'Leo','कर्क':'Cancer','उपाय':'Remedies','राशि':'Zodiac',
  'कुंभ':'Aquarius','तुला':'Libra','अन्य':'Other','/माह':'/month',
  '/साल':'/year','6 माह':'6 Months','मासिक':'Monthly','महीना':'Month',
  'मिथुन':'Gemini','कन्या':'Virgo','कस्टम':'Custom','महिला':'Female',
  'चुनें':'Select','मुफ्त':'Free','पुरुष':'Male','वापस':'Back',
  'नाम':'Name','वर्ष':'years','बेटे':'son','बेटी':'daughter','बच्चे':'child',
  'नवजात':'newborn','महीने के':'months old',

  /* Phrases — longer ones first (important for tx() matching) */
  'वैदिक ज्योतिष का सटीक संगम':'The Science of Vedic Astrology',
  '✨ ग्रह · नक्षत्र · कुंडली · भविष्यफल ✨':'✨ Planets · Stars · Kundli · Horoscope ✨',
  '🔮 भविष्य जानने की तैयारी हो रही है...':'🔮 Preparing your cosmic reading...',
  '⭐ ग्रहों की स्थिति जांची जा रही है...':'⭐ Analyzing planetary positions...',
  '✨ कुंडली तैयार हो रही है...':'✨ Preparing your Kundli...',
  '🔮 Bhavishya Dekho — भविष्य बन रहा है...':'🔮 Bhavishya Dekho — Building your future...',
  'ग्रहों की स्थिति का विश्लेषण हो रहा है':'Analyzing your planetary positions...',
  'AI आपकी 10 साल की Timeline देख रहा है...':'AI is preparing your 10-year timeline...',
  'जन्म तिथि से नक्षत्र स्वतः पहचाना जाएगा':'Nakshatra auto-detected from birth date',
  'नाम से राशि auto-detect • 24 घंटे valid':'Auto-detect zodiac from name • Valid 24 hours',
  'Auto Detect — राशि रिपोर्ट में दिखेगी':'Auto Detect — Zodiac shown in report',
  '✅ राशि auto-detect होगी':'✅ Zodiac will be auto-detected',
  'सिर्फ ₹5 में सटीक राशि जानें':'Know Accurate Zodiac for just ₹5',
  '⏰ 24 घंटे के लिए सक्रिय':'⏰ Active for 24 hours',
  'नाम से राशि auto-detect • 24hr valid':'Auto-detect zodiac from name • 24hr valid',

  /* Nav & Menu */
  '← वापस':'← Back','▼ और देखें':'▼ See More','▲ कम दिखाएं':'▲ Show Less',
  'होम':'Home','दैनिक राशिफल':'Daily Horoscope','मासिक राशिफल':'Monthly Horoscope',
  'वार्षिक राशिफल':'Yearly Horoscope','कुंडली मिलान':'Kundli Matching',
  'रत्न सुझाव':'Gemstone Guide','उपाय':'Remedies',
  'मेरी रिपोर्ट्स (हिस्ट्री)':'My Reports (History)',
  'हमारे बारे में':'About Us','संपर्क करें':'Contact Us',
  'गोपनीयता नीति':'Privacy Policy','नियम और शर्तें':'Terms & Conditions',
  'प्रीमियम प्लान':'Premium Plan','सब्सक्राइब करें':'Subscribe',

  /* Feature cards */
  'लव कैलकुलेटर':'Love Calculator','विस्तृत कुंडली':'Detailed Kundli',
  'प्रीमियम कुंडली':'Premium Kundli','प्यार का प्रतिशत जानें':'Calculate Love %',
  'आज का भविष्यफल':"Today's Prediction",'जीवन विश्लेषण':'Life Analysis',
  'संपूर्ण जीवन दर्शन':'Complete Life Reading',

  /* Form labels */
  'नाम *':'Name *','लिंग *':'Gender *','जन्म तिथि *':'Date of Birth *',
  'जन्म समय *':'Birth Time *','जन्म स्थान *':'Birth Place *',
  'जन्म तिथि':'Date of Birth','जन्म समय':'Birth Time','जन्म स्थान':'Birth Place',
  'लिंग':'Gender','आपका नाम *':'Your Name *','आपका नाम':'Your name',
  'अपना नाम':'Your Name','साथी का नाम *':"Partner's Name *",
  'साथी का नाम':"Partner's name",'अपना नाम लिखें':'Enter your name',
  'जन्म स्थान दर्ज करें':'Enter Birth Place','शहर का नाम':'City name',
  'समय':'Time','दिन':'Day','महीना':'Month','आयु':'Age','वार':'Weekday',

  /* Select options */
  '-- अपनी राशि चुनें --':'-- Select your zodiac --',
  'अपनी राशि चुनें':'Select Your Zodiac','राशि चुनें':'Select Zodiac',
  'लिंग चुनें':'Select Gender',

  /* Zodiac names */
  'मेष (Aries)':'Aries','वृष (Taurus)':'Taurus','मिथुन (Gemini)':'Gemini',
  'कर्क (Cancer)':'Cancer','सिंह (Leo)':'Leo','कन्या (Virgo)':'Virgo',
  'तुला (Libra)':'Libra','वृश्चिक (Scorpio)':'Scorpio','धनु (Sagittarius)':'Sagittarius',
  'मकर (Capricorn)':'Capricorn','कुंभ (Aquarius)':'Aquarius','मीन (Pisces)':'Pisces',
  'वृश्चिक':'Scorpio',

  /* Days */
  'मंगलवार':'Tuesday','शुक्रवार':'Friday','बुधवार':'Wednesday',
  'सोमवार':'Monday','रविवार':'Sunday','गुरुवार':'Thursday','शनिवार':'Saturday',

  /* Months */
  'जनवरी':'January','फरवरी':'February','मार्च':'March','अप्रैल':'April',
  'मई':'May','जून':'June','जुलाई':'July','अगस्त':'August',
  'सितंबर':'September','अक्टूबर':'October','नवंबर':'November','दिसंबर':'December',

  /* Panchang */
  'तिथि':'Date','नक्षत्र':'Nakshatra',

  /* Buttons & CTAs */
  'मेरा भविष्य देखें (मुफ्त)':'See My Future (Free)',
  'मेरा भविष्य देखें':'See My Future',
  'मुफ्त भविष्यफल देखें':'Get Free Prediction',
  'राशिफल देखें':'View Horoscope',
  'लव परसेंटेज देखें':'See Love %',
  '💕 मिलान करें':'💕 Match Now',
  '🔮 भविष्य देखें':'🔮 See Future',
  '🗑️ साफ़ करें':'🗑️ Clear','🗑️ पूरी History साफ़ करें':'🗑️ Clear All History',
  'शेयर करें':'Share','📲 शेयर करें':'📲 Share',
  '📲 Share करें — 1 और मुफ्त पाएं':'📲 Share — Get 1 more free',
  '📲 इस रिपोर्ट को शेयर करें':'📲 Share this report',
  '📲 दोस्तों के साथ शेयर करें':'📲 Share with friends',
  '🔁 दोस्तों के साथ शेयर करें':'🔁 Share with friends',
  '🙏 कृपया हमें सपोर्ट करें':'🙏 Please support us',
  'दान करें':'Donate',
  'प्रीमियम प्लान देखें':'View Premium Plan',
  '✨ प्रीमियम प्लान':'✨ Premium Plan',
  'संपर्क करें':'Contact Us',

  /* Payment */
  '💳 भुगतान करें':'💳 Make Payment',
  '🔐 सुरक्षित भुगतान करें':'🔐 Secure Payment',
  'भुगतान प्रक्रिया जारी...':'Processing payment...',
  '100% Secure Payment — भुगतान होते ही सेवा तुरंत मिलेगी!':'100% Secure Payment — Service activated instantly!',
  'सभी payment methods accept होते हैं':'All payment methods accepted',
  'लिंक कॉपी करें':'Copy Link',

  /* Kundli report labels */
  'व्यक्तिगत जानकारी':'Personal Information',
  'ज्योतिषीय जानकारी':'Astrological Information',
  'ग्रहों की स्थिति':'Planetary Positions',
  'भाव फल':'House Results',
  'विशेष उपाय':'Special Remedies',
  'शुभ अंक और रंग':'Lucky Numbers & Colors',
  'शुभ अंक':'Lucky Numbers','शुभ रंग':'Lucky Colors',
  'शुभ दिन':'Lucky Day','शुभ दिशा':'Lucky Direction',
  'शुभ समय':'Auspicious Time','शुभ मुहूर्त':'Auspicious Time',
  'कुंडली रिपोर्ट':'Kundli Report',
  'विस्तृत कुंडली रिपोर्ट':'Detailed Kundli Report',
  'प्रीमियम कुंडली रिपोर्ट':'Premium Kundli Report',
  'विस्तृत रिपोर्ट':'Detailed Report',
  'मुफ्त कुंडली':'Free Kundli',

  /* House names */
  'प्रथम भाव':'1st House','द्वितीय भाव':'2nd House','तृतीय भाव':'3rd House',
  'चतुर्थ भाव':'4th House','पंचम भाव':'5th House','षष्ठ भाव':'6th House',
  'सप्तम भाव':'7th House','अष्टम भाव':'8th House','नवम भाव':'9th House',
  'दशम भाव':'10th House','एकादश भाव':'11th House','द्वादश भाव':'12th House',
  'तनु भाव':'Tanu Bhav (Self)','धन भाव':'Dhan Bhav (Wealth)',
  'सहज भाव':'Sahaj Bhav (Siblings)','सुख भाव':'Sukh Bhav (Happiness)',
  'पुत्र भाव':'Putra Bhav (Children)','रिपु भाव':'Ripu Bhav (Enemies)',
  'कलत्र भाव':'Kalatra Bhav (Spouse)','आयु भाव':'Aayu Bhav (Longevity)',
  'भाग्य भाव':'Bhagya Bhav (Fortune)','कर्म भाव':'Karma Bhav (Career)',
  'लाभ भाव':'Labh Bhav (Gains)','व्यय भाव':'Vyay Bhav (Expenses)',

  /* Planets */
  'सूर्य':'Sun','चंद्र':'Moon','मंगल':'Mars','बुध':'Mercury',
  'गुरु':'Jupiter','शुक्र':'Venus','शनि':'Saturn',
  'चंद्र राशि':'Moon Sign','सूर्य राशि':'Sun Sign',

  /* Bhav section */
  'शरीर, स्वभाव, व्यक्तित्व':'Body, Nature, Personality',
  'धन, परिवार, वाणी':'Wealth, Family, Speech',
  'साहस, भाई-बहन, पराक्रम':'Courage, Siblings, Valor',
  'माता, सुख, वाहन':'Mother, Happiness, Vehicle',
  'बुद्धि, संतान, मंत्र':'Intellect, Children, Mantras',
  'शत्रु, रोग, ऋण':'Enemies, Disease, Debt',
  'विवाह, व्यापार, भागीदारी':'Marriage, Business, Partnership',
  'आयु, रहस्य, मृत्यु':'Longevity, Secrets, Death',
  'भाग्य, गुरु, धर्म':'Fortune, Guru, Dharma',
  'कर्म, पिता, मान':'Karma, Father, Honor',
  'लाभ, आय, इच्छा':'Gains, Income, Desires',
  'व्यय, मोक्ष, दान':'Expenses, Moksha, Charity',

  /* Premium section */
  'प्रीमियम में बनें एड-फ्री':'Go Ad-Free with Premium',
  'बिना किसी रुकावट के ज्योतिषीय सेवाओं का लाभ उठाएं':'Enjoy astrological services without interruption',
  'एड-फ्री अनुभव':'Ad-Free Experience','एड-फ्री':'Ad-Free',
  'बिना रुकावट':'No interruptions',
  '₹19 वाली कुंडली':'₹19 Kundli','₹49 वाली कुंडली':'₹49 Kundli',
  '4 बार मुफ्त':'4 times free','3 बार मुफ्त':'3 times free',
  '8 बार मुफ्त':'8 times free','5 बार मुफ्त':'5 times free',
  '10 बार':'10 times','20 बार':'20 times','30 बार':'30 times',
  '12 माह':'12 months','/6 माह':'/6 months',
  'मुफ्त भविष्य —':'Free Prediction —','लव कैलकुलेटर —':'Love Calculator —',
  'दैनिक राशिफल —':'Daily Horoscope —',
  'विशेष रत्न सुझाव':'Special Gemstone Guide',
  'दैनिक राशिफल नोटिफिकेशन':'Daily Horoscope Notification',
  'प्राथमिकता समर्थन':'Priority Support',
  'सभी प्रीमियम प्लान में ऑटो-नवीनीकरण की सुविधा':'All premium plans include auto-renewal',
  'प्रीमियम में मिलेंगे ये अतिरिक्त लाभ':'Additional Benefits in Premium',
  'आपके Premium लाभ':'Your Premium Benefits',
  'आप प्रीमियम सदस्य हैं':'You are a Premium Member',
  '6 माह':'6 Months','/माह':'/month','/साल':'/year',

  /* Result / prediction */
  '📋 विस्तृत भविष्यफल':'📋 Detailed Prediction',
  '🏠 भाव अनुसार फल':'🏠 House Results',
  '🍀 शुभ अंक एवं रंग':'🍀 Lucky Numbers & Colors',
  '🔮 भविष्यफल':'🔮 Prediction',
  '🔮 मुख्य भविष्यवाणी':'🔮 Main Prediction',
  '【 विस्तृत भविष्यफल 】':'【 Detailed Prediction 】',
  '【 व्यक्तिगत जानकारी 】':'【 Personal Information 】',
  'प्रीमियम कुंडली में पाएं और भी विस्तृत जानकारी':'Get even more detail in Premium Kundli',
  '👑 और विस्तृत जानकारी?':'👑 Want more details?',
  'में रिपोर्ट खरीदें':'Buy Report',
  'में प्रीमियम रिपोर्ट खरीदें':'Buy Premium Report',

  /* Upsell */
  '📜 ₹19 विस्तृत कुंडली':'📜 ₹19 Detailed Kundli',
  '👑 ₹49 प्रीमियम कुंडली':'👑 ₹49 Premium Kundli',
  '📜 ₹19 कुंडली':'📜 ₹19 Kundli',
  '👑 ₹49 प्रीमियम':'👑 ₹49 Premium',
  '₹19 — 4 बार':'₹19 — 4 times','₹49 — 3 बार':'₹49 — 3 times',
  'मुफ्त प्रीमियम':'Free Premium',
  'ग्रह उपाय':'Planetary Remedies','ग्रहों के उपाय':'Planetary Remedies',
  'दशा विश्लेषण':'Dasha Analysis',
  'प्राथमिकता':'Priority','तेज सहायता':'Fast Support',
  '5 साल का भविष्य':'5-Year Future','अगले 3–6 महीने':'Next 3-6 Months',
  'जीवन टाइमलाइन':'Life Timeline','12 भाव फल':'12 House Results',
  'शुभ कारक':'Lucky Factors',

  /* Kundli comparison */
  'विस्तृत कुंडली (₹19)':'Detailed Kundli (₹19)',
  'प्रीमियम कुंडली (₹49)':'Premium Kundli (₹49)',
  'फ्री भविष्य':'Free Prediction',
  '12 भावों का फल':'12 House Results',
  '12 भावों का विस्तृत फल':'Detailed 12 House Results',
  'राशि और नक्षत्र':'Zodiac & Nakshatra',
  'करियर भविष्यवाणी':'Career Prediction',
  'प्रेम और विवाह':'Love & Marriage',
  'दोष निवारण':'Dosha Removal','दोष निवारण के उपाय':'Dosha Removal Remedies',
  'दोष निवारण के लिए सरल उपाय':'Simple Remedies for Dosha Removal',
  'व्यक्तिगत रत्न सिफारिशें':'Personal Gemstone Recommendations',
  'विशेषज्ञ ज्योतिषी से सलाह':'Expert Astrologer Advice',
  'ग्रहों की विस्तृत स्थिति':'Detailed Planetary Positions',
  'ग्रहों की स्थिति नहीं':'No Planetary Positions',
  'आपकी सटीक राशि और नक्षत्र की जानकारी':'Your Accurate Zodiac & Nakshatra Info',
  '9 ग्रहों की विस्तृत स्थिति और प्रभाव':'Position & Effect of 9 Planets',
  'सभी 12 भावों का विस्तृत विश्लेषण':'Detailed Analysis of all 12 Houses',
  'प्रेम जीवन और विवाह की संभावनाएं':'Love Life & Marriage Possibilities',
  'महत्वपूर्ण कार्यों के लिए शुभ समय':'Auspicious Time for Important Tasks',
  'नौकरी और व्यवसाय में उन्नति के योग':'Career & Business Growth Prospects',
  'शुभ समय और मुहूर्त':'Auspicious Time & Muhurta',
  'करियर, प्रेम, धन फल':'Career, Love & Money',
  'संपूर्ण जीवन विश्लेषण':'Complete Life Analysis',
  'सामान्य भविष्यवाणी':'General Prediction',
  'आपकी कुंडली के अनुसार भविष्यफल':'Prediction as per your Kundli',
  'व्यक्तिगत राशिफल':'Personal Horoscope',
  'जीवन विश्लेषण':'Life Analysis',

  /* Love calculator */
  '❤️ प्यार का प्रतिशत जानें':'❤️ Calculate Love %',
  'साथी की राशि':'Partner Zodiac',
  '👰 वधू':'👰 Bride','🤵 वर':'🤵 Groom',
  'गुण मिलान':'Guna Milan',
  '🌟 उत्कृष्ट मिलान!':'🌟 Excellent Match!',
  '✅ अच्छा मिलान।':'✅ Good Match.',
  '⚠️ सावधानी आवश्यक।':'⚠️ Caution Advised.',
  'कुंडली मिलान':'Kundli Matching',

  /* Horoscope section */
  'आज का राशिफल':'Today\'s Horoscope',
  'इस महीने':'This Month',
  '☀️ दैनिक राशिफल':'☀️ Daily Horoscope',
  '📆 मासिक राशिफल':'📆 Monthly Horoscope',
  '📅 वार्षिक राशिफल':'📅 Yearly Horoscope',
  'आज का भविष्यफल':"Today's Prediction",
  'लोड हो रहा है...':'Loading...',
  '⏳ लोड हो रहा है...':'⏳ Loading...',
  '🔮 ग्रहों की स्थिति देखी जा रही है...':'🔮 Reading planetary positions...',
  '🔮 भविष्य देखा जा रहा है...':'🔮 Preparing your future...',

  /* Timeline */
  'आपकी भविष्य की Timeline':'Your Future Timeline',
  '⏳ आपकी भविष्य की Timeline':'⏳ Your Future Timeline',
  'अगले 1 साल':'Next 1 Year','अगले 5 साल':'Next 5 Years','अगले 10 साल':'Next 10 Years',

  /* Revisit message */
  'आज का भविष्यफल यही है!':'This is your prediction for today!',
  'ध्यान दें:':'Note:',
  'ग्रह-नक्षत्र हर दिन बदलते हैं — इसलिए कल का भविष्यफल आज से बिल्कुल अलग हो सकता है।':'Planetary positions change every day — so tomorrow\'s prediction will be different from today\'s.',
  'रोज़ भविष्य देखते रहें':'Check your future daily',
  'और जानें कि ग्रह आपके लिए क्या लेकर आ रहे हैं। जो लोग रोज़ अपना भविष्य देखते हैं, वे जीवन की चुनौतियों के लिए पहले से तैयार रहते हैं!':'and know what the planets have in store for you. People who check daily stay prepared for life\'s challenges!',
  'Website को Bookmark करें और हर रोज़ अपना भविष्य देखें!':'Bookmark this site & check your future every day!',
  '📲 Website को Bookmark करें और हर रोज़ अपना भविष्य देखें!':'📲 Bookmark this site & check your future daily!',

  /* Header prediction title */
  'का भविष्यफल':'\'s Prediction',
  'वैदिक ज्योतिष':'Vedic Astrology',
  'जी, आपकी व्यक्तिगत कुंडली':'\'s Personal Kundli Report',
  'यह रिपोर्ट आपके प्रीमियम प्लान के तहत मुफ्त है':'This report is free under your Premium plan',

  /* History */
  '📋 मेरी रिपोर्ट्स':'📋 My Reports',
  'कोई रिपोर्ट नहीं देखी गई':'No reports viewed yet',
  'कोई रिपोर्ट नहीं मिली':'No reports found',
  'कोई रिपोर्ट नहीं':'No Reports Found',
  'अभी तक कोई भविष्यफल नहीं देखा। पहले भविष्य देखें!':'No predictions yet. See your future first!',
  'मुफ्त भविष्य':'Free Prediction',

  /* Alert / error messages */
  'कृपया सभी जानकारी भरें':'Please fill all information',
  'कृपया सभी जानकारी भरें!':'Please fill all information!',
  'कृपया राशि चुनें':'Please select your zodiac sign',
  'नाम दर्ज करना आवश्यक है':'Name is required',
  'कृपया जन्म तिथि भरें':'Please enter date of birth',
  'कोई history नहीं है':'No history found',
  'रिपोर्ट नहीं मिली':'Report not found',
  'कोई भविष्यफल नहीं मिला। पहले भविष्य देखें।':'No prediction found. Please see your future first.',
  'कोई रिपोर्ट नहीं मिली। पहले कुंडली देखें।':'No report found. Please check kundli first.',
  'कृपया प्रतीक्षा करें':'Please wait...',
  'परिणाम तैयार हो रहा है...':'Preparing your result...',
  'आपका भविष्य तैयार हो रहा है 🌟':'Your future is being prepared 🌟',
  '⚠️ यह तारीख अभी नहीं आई है। सही जन्म तिथि डालें।':'⚠️ This date is in the future. Please enter correct date of birth.',
  '⚠️ यह तारीख अभी नहीं आई है!':'⚠️ This date is in the future!',

  /* Misc labels in results */
  'मुफ्त':'Free','रिपोर्ट':'Report','नक्षत्र':'Nakshatra',
  'आपकी राशि':'Your Zodiac','आपके लिए भाग्यशाली अंक और रंग':'Your Lucky Numbers & Colors',
  'दशा विश्लेषण':'Dasha Analysis','करियर, प्रेम, धन फल':'Career, Love & Money',
  'महत्वपूर्ण कार्य':'Important Tasks',
  'प्रीमियम सदस्यता के लाभ':'Premium Membership Benefits',
  'सभी प्रीमियम सुविधाएं':'All Premium Features',
  '🔱 12 भाव (Houses)':'🔱 12 Houses',
  'जन्म तिथि चुनें':'Select Birth Date',
  '₹19 में रिपोर्ट खरीदें':'Buy Report for ₹19',
  '₹49 में प्रीमियम रिपोर्ट खरीदें':'Buy Premium Report for ₹49',
  'विस्तृत कुंडली (₹19)':'Detailed Kundli (₹19)',
  'प्रीमियम कुंडली (₹49)':'Premium Kundli (₹49)',
  '✨ इस रिपोर्ट में क्या मिलेगा?':"✨ What's in this report?",
  'अपनी जानकारी दर्ज करें (मुफ्त भविष्य)':'Enter your details (Free Prediction)',
  'आपके सहयोग से हम और बेहतर सेवाएं दे सकते हैं':'With your support we can serve you better',
  'यह रिपोर्ट ज्योतिषीय मान्यताओं पर आधारित है।':'This report is based on astrological beliefs.',
  'यह website केवल मनोरंजन और सामान्य मार्गदर्शन के उद्देश्य से बनाई गई है।':'This website is for entertainment and general guidance only.',
  '⚠️ यह भविष्यफल वैदिक ज्योतिष पर आधारित है। महत्वपूर्ण निर्णयों के लिए विशेषज्ञ से परामर्श लें।':'⚠️ This prediction is based on Vedic astrology. Consult an expert for important decisions.',
  '* 5 मिनट के उपयोग के बाद यह विकल्प दिखाई देता है':'* This option appears after 5 minutes of use',
  'भुगतान प्रक्रिया जारी...':'Processing payment...',

  /* Kundli form auto-detect placeholders */
  'ऑटो-डिटेक्ट (नाम से)':'Auto-detect (from name)',
  'ऑटो-डिटेक्ट (तिथि से)':'Auto-detect (from birth date)',

  /* Legal */
  '✦ सभी payments एक बार के होते हैं':'✦ All payments are one-time',
  '✦ Report generate होने के बाद refund नहीं होगा':'✦ No refund after report is generated',
  '✦ हम किसी भी गलत उपयोग के लिए जिम्मेदार नहीं होंगे':'✦ We are not responsible for any misuse',
  '✦ User को अपनी सही जानकारी भरनी जरूरी है':'✦ User must enter correct information',
  '✦ यह service केवल digital report के रूप में प्रदान की जाती है':'✦ This service is provided as digital report only',
  '🌐 भाषा / Language':'🌐 Language',
};

/* Reverse map EN→HI */
var E = {};
Object.keys(H).forEach(function(h){ E[H[h]] = h; });

/* ── STATE ─────────────────────────────────────────────── */
var _lang = 'hi', _isEn = false;
window._currentLangCode = 'hi';
window._isEn = false;

/* ── USD PRICES ─────────────────────────────────────────── */
var USD = {basic:0.25,premium:0.60,rashi:0.07,monthly:1.20,sixMonth:6.00,yearly:12.00};
window.BD_CURRENCY_SETTINGS = USD;

/* ── SAFE TRANSLATE — works even before init ────────────── */
function tx(text, toEn) {
  if (!text || typeof text !== 'string') return text;
  var t = text.trim();
  if (!t) return text;
  var map = toEn ? H : E;
  var keys = Object.keys(map).sort(function(a,b){ return b.length - a.length; });
  var r = text;
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    if (r.indexOf(k) > -1) r = r.split(k).join(map[k]);
  }
  return r;
}

/* Export IMMEDIATELY so script.js can use it any time */
window.bdTx = function(text) { return _isEn ? tx(text, true) : text; };
window.bdIsEn = function() { return _isEn; };

/* ── WALK ALL DOM NODES — includes hidden elements ──────── */
function walkAll(toEn) {
  var skipTags = {SCRIPT:1,STYLE:1,META:1,LINK:1,NOSCRIPT:1,SVG:1,PATH:1,TEXTAREA:1};

  /* ① Walk ALL text nodes including inside hidden elements */
  function walkNode(root) {
    var walker = document.createTreeWalker(
      root, NodeFilter.SHOW_TEXT,
      {acceptNode: function(n) {
        if (!n.parentElement) return NodeFilter.FILTER_REJECT;
        if (skipTags[n.parentElement.tagName]) return NodeFilter.FILTER_REJECT;
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_SKIP;
        return NodeFilter.FILTER_ACCEPT;
      }}
    );
    var nodes = [], nd;
    while ((nd = walker.nextNode())) nodes.push(nd);
    nodes.forEach(function(nd) {
      var t = tx(nd.nodeValue, toEn);
      if (t !== nd.nodeValue) nd.nodeValue = t;
    });
  }

  walkNode(document.documentElement); /* walk entire page including hidden */

  /* ② Placeholders */
  document.querySelectorAll('[placeholder]').forEach(function(el) {
    var t = tx(el.getAttribute('placeholder'), toEn);
    el.setAttribute('placeholder', t);
  });

  /* ③ Select options */
  document.querySelectorAll('option').forEach(function(o) {
    var t = tx(o.textContent, toEn);
    if (t !== o.textContent) o.textContent = t;
  });

  /* ④ Title */
  document.title = toEn
    ? 'Bhavishya Dekho - Free Kundli, Horoscope & Vedic Astrology Online'
    : 'Bhavishya Dekho - मुफ्त कुंडली, राशिफल और वैदिक ज्योतिष | Free Kundli Online';
}

/* ── TRANSLATE DYNAMICALLY ADDED CONTENT ───────────────── */
window.bdTranslateDynamic = function(rootEl) {
  if (!_isEn) return;
  if (!rootEl || !rootEl.nodeType) return;
  var skipTags = {SCRIPT:1,STYLE:1,META:1,LINK:1,NOSCRIPT:1,SVG:1,PATH:1,TEXTAREA:1};
  try {
    var walker = document.createTreeWalker(
      rootEl, NodeFilter.SHOW_TEXT,
      {acceptNode: function(n) {
        if (!n.parentElement) return NodeFilter.FILTER_REJECT;
        if (skipTags[n.parentElement.tagName]) return NodeFilter.FILTER_REJECT;
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_SKIP;
        return NodeFilter.FILTER_ACCEPT;
      }}
    );
    var nodes = [], nd;
    while ((nd = walker.nextNode())) nodes.push(nd);
    nodes.forEach(function(nd) {
      var t = tx(nd.nodeValue, true);
      if (t !== nd.nodeValue) nd.nodeValue = t;
    });
    if (rootEl.querySelectorAll) {
      rootEl.querySelectorAll('[placeholder]').forEach(function(el) {
        el.setAttribute('placeholder', tx(el.getAttribute('placeholder'), true));
      });
      rootEl.querySelectorAll('option').forEach(function(o) {
        var t = tx(o.textContent, true);
        if (t !== o.textContent) o.textContent = t;
      });
    }
  } catch(e) {}
};

/* ── MUTATION OBSERVER — catches every innerHTML injection ─ */
var _observer = null;
function startObserver() {
  if (typeof MutationObserver === 'undefined') return;
  if (_observer) return;
  _observer = new MutationObserver(function(muts) {
    if (!_isEn) return;
    muts.forEach(function(m) {
      m.addedNodes.forEach(function(nd) {
        if (nd.nodeType === 1) {
          setTimeout(function() { window.bdTranslateDynamic(nd); }, 80);
        } else if (nd.nodeType === 3) {
          /* text node directly added */
          var t = tx(nd.nodeValue, true);
          if (t !== nd.nodeValue) nd.nodeValue = t;
        }
      });
      /* Also handle characterData changes */
      if (m.type === 'characterData' && _isEn) {
        var t = tx(m.target.nodeValue, true);
        if (t !== m.target.nodeValue) m.target.nodeValue = t;
      }
    });
  });
  _observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
  });
}

/* ── PRICE DISPLAY ──────────────────────────────────────── */
function pr(type) {
  var p = window._adminPricing || {basic:19,premium:49,rashi:5,monthly:99,sixMonth:499,yearly:999};
  if (_isEn) {
    var m = {basic:USD.basic,premium:USD.premium,rashi:USD.rashi,monthly:USD.monthly,sixMonth:USD.sixMonth,yearly:USD.yearly};
    return '$' + (m[type] || 0).toFixed(2);
  }
  return '₹' + (p[type] || 0);
}

/* ── APPLY PRICING ──────────────────────────────────────── */
function applyPricing() {
  var p = window._adminPricing || {basic:19,premium:49,rashi:5,monthly:99,sixMonth:499,yearly:999};
  function st(id,t){ var e=document.getElementById(id); if(e&&t!==undefined) e.textContent=t; }
  var buyTxt = _isEn ? 'Buy Report' : 'में रिपोर्ट खरीदें';
  var buyPTxt = _isEn ? 'Buy Premium Report' : 'में प्रीमियम रिपोर्ट खरीदें';
  st('basicKundliPrice', pr('basic'));
  st('basicKundliBadge', pr('basic'));
  st('basicKundliBtnText', pr('basic') + ' ' + buyTxt);
  st('premiumKundliPrice', pr('premium'));
  st('premiumKundliBadge', pr('premium'));
  st('premiumKundliBtnText', pr('premium') + ' ' + buyPTxt);
  var bA = _isEn ? USD.basic : p.basic;
  var pA = _isEn ? USD.premium : p.premium;
  var bb = document.getElementById('basicKundliBtn');
  if (bb) bb.setAttribute('onclick', "processKundliPayment("+bA+",'basic')");
  var pb = document.getElementById('premiumKundliBtn');
  if (pb) pb.setAttribute('onclick', "processKundliPayment("+pA+",'premium')");
  var pm = _isEn?'/month':'/माह', ps = _isEn?'/6 months':'/6 माह', py = _isEn?'/year':'/साल';
  document.querySelectorAll('.premium-card').forEach(function(c) {
    var oc = c.getAttribute('onclick') || '';
    var pe = c.querySelector('.premium-price');
    if (oc.indexOf("'monthly'") > -1) {
      if (pe) pe.innerHTML = pr('monthly') + '<small>' + pm + '</small>';
      c.setAttribute('onclick', "showPremiumPayment("+(_isEn?USD.monthly:p.monthly)+",'monthly')");
    } else if (oc.indexOf("'6months'") > -1) {
      if (pe) pe.innerHTML = pr('sixMonth') + '<small>' + ps + '</small>';
      c.setAttribute('onclick', "showPremiumPayment("+(_isEn?USD.sixMonth:p.sixMonth)+",'6months')");
    } else if (oc.indexOf("'yearly'") > -1) {
      if (pe) pe.innerHTML = pr('yearly') + '<small>' + py + '</small>';
      c.setAttribute('onclick', "showPremiumPayment("+(_isEn?USD.yearly:p.yearly)+",'yearly')");
    }
  });
  document.querySelectorAll('.kundli-comparison h4').forEach(function(el) {
    var t = el.textContent.trim();
    if (t.indexOf('फ्री') > -1 || t.indexOf('Free Prediction') > -1)
      el.textContent = _isEn ? 'Free Prediction' : 'फ्री भविष्य';
    else if (t.indexOf('विस्तृत') > -1 || t.indexOf('Detailed Kundli') > -1)
      el.textContent = _isEn ? 'Detailed Kundli (' + pr('basic') + ')' : 'विस्तृत कुंडली (' + pr('basic') + ')';
    else if (t.indexOf('प्रीमियम') > -1 || t.indexOf('Premium Kundli') > -1)
      el.textContent = _isEn ? 'Premium Kundli (' + pr('premium') + ')' : 'प्रीमियम कुंडली (' + pr('premium') + ')';
  });
  document.querySelectorAll('.upsell-btn').forEach(function(el) {
    var oc = el.getAttribute('onclick') || '';
    if (oc.indexOf('showKundliSection') > -1 && oc.indexOf('Premium') === -1)
      el.textContent = '📜 ' + pr('basic') + (_isEn ? ' Detailed Kundli' : ' विस्तृत कुंडली');
    if (oc.indexOf('showPremiumKundliSection') > -1)
      el.textContent = '👑 ' + pr('premium') + (_isEn ? ' Premium Kundli' : ' प्रीमियम कुंडली');
  });
  document.querySelectorAll('.comparison-price').forEach(function(el) {
    var t = el.textContent.trim();
    if (t === 'मुफ्त' || t === 'Free') el.textContent = _isEn ? 'Free' : 'मुफ्त';
    else if (t.match(/^[₹$]/)) {
      if (t.match(/19|0\.25/)) el.textContent = pr('basic');
      else if (t.match(/49|0\.60/)) el.textContent = pr('premium');
    }
  });
  document.querySelectorAll('#loveRashiBuyMsg,#horoRashiBuyMsg,#rashiBuyHint').forEach(function(c) {
    var b = c.querySelector('span[style*="border-radius:20px"]');
    var t = c.querySelector('div[style*="ffd700"]');
    if (b) b.textContent = pr('rashi');
    if (t) t.textContent = _isEn
      ? ('Just ' + pr('rashi') + ' for accurate zodiac')
      : ('सिर्फ ' + pr('rashi') + ' में सटीक राशि जानें');
  });
  window._langPricing = {basic:bA, premium:pA, currency:_isEn?'USD':'INR'};
}
window.applyPricingLang = applyPricing;

/* ── LOAD USD FROM FIREBASE ─────────────────────────────── */
function loadUSD() {
  try {
    if (typeof database === 'undefined') return;
    database.ref('settings/usdPricing').once('value').then(function(s) {
      var d = s.val(); if (!d) return;
      USD.basic=d.basic||USD.basic; USD.premium=d.premium||USD.premium;
      USD.rashi=d.rashi||USD.rashi; USD.monthly=d.monthly||USD.monthly;
      USD.sixMonth=d.sixMonth||USD.sixMonth; USD.yearly=d.yearly||USD.yearly;
      window.BD_CURRENCY_SETTINGS = USD;
      if (_isEn) applyPricing();
    });
  } catch(e) {}
}

/* ── UPDATE LANG BUTTONS ────────────────────────────────── */
function updateBtns() {
  var hi = document.getElementById('lang-btn-hi');
  var en = document.getElementById('lang-btn-en');
  if (!hi || !en) return;
  var ON  = 'flex:1;padding:10px 0;border:1.5px solid rgba(255,215,0,0.5);border-radius:12px;background:rgba(255,215,0,0.18);color:#ffd700;font-size:0.88rem;font-weight:700;cursor:pointer;font-family:inherit;';
  var OFF = 'flex:1;padding:10px 0;border:1.5px solid rgba(255,255,255,0.15);border-radius:12px;background:rgba(255,255,255,0.05);color:#aaa;font-size:0.88rem;font-weight:700;cursor:pointer;font-family:inherit;';
  hi.style.cssText = _isEn ? OFF : ON;
  en.style.cssText = _isEn ? ON  : OFF;
}

/* ── DETECT LOCATION ────────────────────────────────────── */
function detectLang(cb) {
  var saved = localStorage.getItem('bd_lang');
  if (saved === 'hi' || saved === 'en') {
    _lang = saved; _isEn = (saved === 'en');
    window._currentLangCode = _lang; window._isEn = _isEn;
    /* Update bdTx immediately after state set */
    window.bdTx = function(text){ return _isEn ? tx(text, true) : text; };
    cb(); return;
  }
  fetch('https://ipapi.co/json/')
    .then(function(r){ return r.json(); })
    .then(function(d) {
      var eng = ['US','GB','CA','AU','NZ','IE','SG','ZA'];
      _lang = (eng.indexOf(d.country_code) > -1) ? 'en' : 'hi';
      _isEn = (_lang === 'en');
      window._currentLangCode = _lang; window._isEn = _isEn;
      window.bdTx = function(text){ return _isEn ? tx(text, true) : text; };
      cb();
    })
    .catch(function() {
      _lang = 'hi'; _isEn = false;
      window._currentLangCode = 'hi'; window._isEn = false;
      cb();
    });
}

/* ── APPLY LANGUAGE (called when user clicks button) ─────── */
function applyLang(lang) {
  if (lang !== 'hi' && lang !== 'en') lang = 'hi';
  _lang = lang; _isEn = (lang === 'en');
  window._currentLangCode = lang; window._isEn = _isEn;
  localStorage.setItem('bd_lang', lang);
  document.documentElement.lang = lang;

  /* Update bdTx FIRST so any code running after can use it */
  window.bdTx = function(text){ return _isEn ? tx(text, true) : text; };
  window.bdIsEn = function(){ return _isEn; };

  window._splashMsgs = _isEn
    ? ['🔮 Preparing your cosmic reading...','⭐ Analyzing planetary positions...','✨ Your horoscope is being prepared...']
    : ['🔮 भविष्य जानने की तैयारी हो रही है...','⭐ ग्रहों की स्थिति जांची जा रही है...','✨ कुंडली तैयार हो रही है...'];

  /* Translate entire page including hidden sections */
  walkAll(_isEn);
  applyPricing();
  updateBtns();
  console.log('✅ Language set:', lang);
}

/* ── GLOBAL EXPORTS ─────────────────────────────────────── */
window.bdSetLang = function(lang) { applyLang(lang); };
window.applyLanguage = window.bdSetLang;

/* ── INIT ───────────────────────────────────────────────── */
function init() {
  detectLang(function() {
    if (_isEn) walkAll(true);
    applyPricing();
    updateBtns();
    loadUSD();
    startObserver();
  });
}

/* Start as early as possible */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

})();
