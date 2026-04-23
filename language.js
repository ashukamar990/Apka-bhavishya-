/* ═══════════════════════════════════════════════════════════
   BHAVISHYA DEKHO — COMPLETE LANGUAGE SYSTEM v3.0
   File: language.js
   
   - Hindi (hi) : Original text
   - English (en): Word-by-word simple translation
   - Auto-detect by IP location
   - Manual switch via dropdown in header
════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ══════════════════════════════════════════════════════════
     SECTION 1 — FULL WORD-BY-WORD DICTIONARY (Hindi → English)
     ══════════════════════════════════════════════════════ */
  var DICT = {
    // Core verbs
    'देखें'       : 'See',
    'देखो'        : 'See',
    'देखने'       : 'Seeing',
    'देखा'        : 'Seen',
    'करें'        : 'Do',
    'करना'        : 'Do',
    'करता'        : 'Does',
    'करते'        : 'Do',
    'करो'         : 'Do',
    'जानें'       : 'Know',
    'जानिए'       : 'Know',
    'जानने'       : 'Knowing',
    'बनाएं'       : 'Make',
    'बनाने'       : 'Making',
    'बनें'        : 'Become',
    'बन'          : 'Build',
    'भरें'        : 'Fill',
    'दर्ज'        : 'Enter',
    'लिखें'       : 'Write',
    'चुनें'       : 'Choose',
    'पाएं'        : 'Get',
    'दिखेगा'      : 'Shown',
    'दिखेगी'      : 'Shown',
    'दिखाई'       : 'Visible',
    'दिखाएं'      : 'Show',
    'मिलेगा'      : 'Available',
    'मिलेगी'      : 'Available',
    'मिलेंगे'     : 'Available',
    'मिलती'       : 'Available',
    'मिलान'       : 'Match',
    'बताया'       : 'Told',
    'बताएगा'      : 'Tell',
    'उठाएं'       : 'Take',
    'सब्सक्राइब'  : 'Subscribe',
    'खरीदें'      : 'Buy',
    'शेयर'        : 'Share',
    'जाएगा'       : 'Will be',
    'जाएगी'       : 'Will be',
    'होगी'        : 'Will be',
    'होती'        : 'Is',
    'होते'        : 'Are',
    'होने'        : 'Being',
    'रहा'         : 'Going',
    'रही'         : 'Going',
    'है'          : 'is',
    'हैं'         : 'are',
    'हो'          : 'be',
    'था'          : 'was',
    'थी'          : 'was',
    'हाँ'         : 'Yes',

    // Nouns — Astrology
    'भविष्य'      : 'Future',
    'भविष्यफल'    : 'Future-Result',
    'भविष्यवाणी'  : 'Prediction',
    'कुंडली'      : 'Kundli',
    'राशिफल'      : 'Horoscope',
    'राशि'        : 'Zodiac',
    'राशियों'     : 'Zodiacs',
    'नक्षत्र'     : 'Star',
    'ज्योतिष'     : 'Astrology',
    'ज्योतिषी'    : 'Astrologer',
    'ज्योतिषीय'   : 'Astrological',
    'वैदिक'       : 'Vedic',
    'ग्रह'        : 'Planet',
    'ग्रहों'      : 'Planets',
    'भाव'         : 'House',
    'भावों'       : 'Houses',
    'लग्न'        : 'Ascendant',
    'दशा'         : 'Dasha',
    'मुहूर्त'     : 'Auspicious-Time',
    'नवीनीकरण'    : 'Renewal',
    'संगम'        : 'Union',
    'दोष'         : 'Defect',
    'निवारण'      : 'Removal',
    'धारण'        : 'Wear',
    'उपाय'        : 'Remedy',
    'मान्यताओं'   : 'Beliefs',
    'योग'         : 'Yoga',

    // Zodiac signs
    'मेष'         : 'Aries',
    'वृष'         : 'Taurus',
    'मिथुन'       : 'Gemini',
    'कर्क'        : 'Cancer',
    'सिंह'        : 'Leo',
    'कन्या'       : 'Virgo',
    'तुला'        : 'Libra',
    'वृश्चिक'     : 'Scorpio',
    'धनु'         : 'Sagittarius',
    'मकर'         : 'Capricorn',
    'कुंभ'        : 'Aquarius',
    'मीन'         : 'Pisces',

    // Planets
    'सूर्य'       : 'Sun',
    'चंद्र'       : 'Moon',
    'मंगल'        : 'Mars',
    'बुध'         : 'Mercury',
    'गुरु'        : 'Jupiter',
    'शुक्र'       : 'Venus',
    'शनि'         : 'Saturn',
    'राहु'        : 'Rahu',
    'केतु'        : 'Ketu',

    // People & Gender
    'नाम'         : 'Name',
    'लिंग'        : 'Gender',
    'पुरुष'       : 'Male',
    'महिला'       : 'Female',
    'अन्य'        : 'Other',
    'साथी'        : 'Partner',
    'दोस्तों'     : 'Friends',
    'सदस्य'       : 'Member',
    'सदस्यता'     : 'Membership',
    'विशेषज्ञ'    : 'Expert',
    'ज्योतिष।'    : 'Astrology.',

    // Personal pronouns
    'मेरा'        : 'My',
    'मेरी'        : 'My',
    'मेरे'        : 'My',
    'आपका'        : 'Your',
    'आपकी'        : 'Your',
    'आपके'        : 'Your',
    'आप'          : 'You',
    'मैं'         : 'I',
    'हम'          : 'We',
    'हमारे'       : 'Our',
    'हमें'        : 'Us',
    'अपना'        : 'Your',
    'अपनी'        : 'Your',
    'अपने'        : 'Your',

    // Adjectives
    'मुफ्त'       : 'Free',
    'फ्री'        : 'Free',
    'विस्तृत'     : 'Detailed',
    'सटीक'        : 'Exact',
    'संपूर्ण'     : 'Complete',
    'व्यक्तिगत'   : 'Personal',
    'महत्वपूर्ण'  : 'Important',
    'शुभ'         : 'Lucky',
    'भाग्यशाली'   : 'Lucky',
    'सामान्य'     : 'General',
    'सुरक्षित'    : 'Safe',
    'सरल'         : 'Simple',
    'बेहतर'       : 'Better',
    'विशेष'       : 'Special',
    'तुरंत'       : 'Instant',
    'बिल्कुल'     : 'Absolutely',
    'सिर्फ'       : 'Only',
    'मात्र'       : 'Just',
    'केवल'        : 'Only',
    'सब'          : 'All',
    'सभी'         : 'All',
    'पूरी'        : 'Full',
    'पूरा'        : 'Full',
    'प्रकार'      : 'Type',

    // Time
    'दैनिक'       : 'Daily',
    'मासिक'       : 'Monthly',
    'वार्षिक'     : 'Yearly',
    'साप्ताहिक'   : 'Weekly',
    'आज'          : 'Today',
    'दिन'         : 'Day',
    'महीना'       : 'Month',
    'माह'         : 'Month',
    'साल'         : 'Year',
    'घंटे'        : 'Hours',
    'मिनट'        : 'Minutes',
    'समय'         : 'Time',
    'तैयारी'      : 'Preparation',
    'तैयार'       : 'Ready',

    // Actions / Payment
    'भुगतान'      : 'Payment',
    'खरीद'        : 'Buy',
    'रिपोर्ट'     : 'Report',
    'रिपोर्ट्स'   : 'Reports',
    'प्रक्रिया'   : 'Process',
    'जारी'        : 'Going',
    'शुल्क'       : 'Fee',
    'सेवा'        : 'Service',
    'सेवाएं'      : 'Services',
    'सेवाओं'      : 'Services',
    'सहयोग'       : 'Support',
    'सहायता'      : 'Help',
    'समर्थन'      : 'Support',
    'सुविधा'      : 'Feature',
    'सुविधाएं'    : 'Features',
    'विकल्प'      : 'Option',
    'लाभ'         : 'Benefit',
    'प्लान'       : 'Plan',
    'बोनस'        : 'Bonus',
    'रेफरल'       : 'Referral',

    // Information / Data
    'जानकारी'     : 'Information',
    'विश्लेषण'    : 'Analysis',
    'स्थिति'      : 'Position',
    'प्रभाव'      : 'Effect',
    'अनुकूलता'    : 'Compatibility',
    'प्रतिशत'     : 'Percent',
    'परसेंटेज'    : 'Percentage',
    'परामर्श'     : 'Advice',
    'सलाह'        : 'Advice',
    'सुझाव'       : 'Suggestion',
    'सिफारिशें'   : 'Suggestions',
    'विधि'        : 'Method',
    'आधार'        : 'Basis',
    'आधारित'      : 'Based',
    'तरह'         : 'Like',
    'अनुसार'      : 'As per',
    'अनुभव'       : 'Experience',
    'संभावनाएं'   : 'Possibilities',

    // People / Life
    'जन्म'        : 'Birth',
    'तिथि'        : 'Date',
    'स्थान'       : 'Place',
    'जीवन'        : 'Life',
    'स्वास्थ्य'   : 'Health',
    'करियर'       : 'Career',
    'व्यवसाय'     : 'Business',
    'नौकरी'       : 'Job',
    'विवाह'       : 'Marriage',
    'प्रेम'       : 'Love',
    'प्यार'       : 'Love',
    'धन'          : 'Money',
    'उन्नति'      : 'Growth',
    'दर्शन'       : 'Philosophy',
    'दर्शाती'     : 'Shows',
    'चार्ट'       : 'Chart',

    // Features
    'लव'          : 'Love',
    'कैलकुलेटर'   : 'Calculator',
    'प्लेटफॉर्म'  : 'Platform',
    'भारत'        : 'India',
    'हिस्ट्री'    : 'History',
    'नोटिफिकेशन'  : 'Notification',
    'ऑटो'         : 'Auto',
    'डिटेक्ट'     : 'Detect',
    'अंक'         : 'Number',
    'रंग'         : 'Color',
    'रत्न'        : 'Gem',
    'कस्टम'       : 'Custom',
    'प्राथमिकता'  : 'Priority',
    'एड'          : 'Ad',
    'एड-फ्री'     : 'Ad-Free',
    'कॉपी'        : 'Copy',
    'डाउनलोड'     : 'Download',

    // Navigation
    'होम'         : 'Home',
    'वापस'        : 'Back',
    'गोपनीयता'    : 'Privacy',
    'नीति'        : 'Policy',
    'नियम'        : 'Rules',
    'शर्तें'      : 'Conditions',
    'संपर्क'      : 'Contact',
    'बारे'        : 'About',
    'हिंदी'       : 'Hindi',

    // Filler words
    'का'          : 'of',
    'की'          : 'of',
    'के'          : 'of',
    'को'          : 'to',
    'में'         : 'in',
    'से'          : 'from',
    'पर'          : 'on',
    'और'          : 'and',
    'या'          : 'or',
    'भी'          : 'also',
    'ही'          : 'only',
    'तो'          : 'then',
    'न'           : 'not',
    'नहीं'        : 'Not',
    'कोई'         : 'No',
    'कुछ'         : 'Some',
    'यह'          : 'This',
    'ये'          : 'These',
    'वह'          : 'That',
    'वे'          : 'Those',
    'जो'          : 'Which',
    'इस'          : 'This',
    'इससे'        : 'From this',
    'उस'          : 'That',
    'एक'          : 'One',
    'कम'          : 'Less',
    'बाद'         : 'After',
    'पहले'        : 'Before',
    'साथ'         : 'With',
    'लिए'         : 'For',
    'तक'          : 'Till',
    'अभी'         : 'Now',
    'बिना'        : 'Without',
    'रुकावट'      : 'Interruption',
    'कैसे'        : 'How',
    'क्या'        : 'What',
    'कितने'       : 'How many',
    'कहाँ'        : 'Where',
    'कहां'        : 'Where',
    'क्यों'       : 'Why',
    'नीचे'        : 'Below',
    'ऊपर'         : 'Above',
    'बार'         : 'Times',
    'माह'         : 'Month',
    'शहर'         : 'City',
    'पहचाना'      : 'Detected',
    'स्वतः'       : 'Auto',
    'आवश्यक'      : 'Required',
    'उपलब्ध'      : 'Available',
    'उपयोग'       : 'Use',
    'काम'         : 'Work',
    'कार्य'       : 'Work',
    'कार्यों'     : 'Works',
    'तेज'         : 'Fast',
    'तेजी'        : 'Faster',
    'साफ़'        : 'Clear',
    'नवीनीकरण'    : 'Renewal',
    'निर्णय'      : 'Decision',
    'प्रकार'      : 'Type',

    // Misc common words
    'बड़ा'        : 'Big',
    'छोटा'        : 'Small',
    'नया'         : 'New',
    'पुराना'      : 'Old',
    'अच्छा'       : 'Good',
    'बुरा'        : 'Bad',
    'सच'          : 'True',
    'झूठ'         : 'False',
  };

  /* ══════════════════════════════════════════════════════════
     SECTION 2 — FULL PHRASE MAP (complete sentence translations)
     These override word-by-word for common full sentences
     ══════════════════════════════════════════════════════ */
  var PHRASES = {
    'मेरा भविष्य देखें (मुफ्त)'                     : 'See My Future (Free)',
    'वैदिक ज्योतिष का सटीक संगम'                    : 'Vedic Astrology Exact Union',
    'भविष्य जानने की तैयारी हो रही है...'           : 'Future reading is being prepared...',
    'ग्रहों की स्थिति जांची जा रही है...'           : 'Planetary positions being checked...',
    'कुंडली तैयार हो रही है...'                     : 'Kundli is being prepared...',
    'ग्रहों की स्थिति का विश्लेषण हो रहा है'       : 'Planetary positions being analyzed',
    'भविष्य बन रहा है...'                            : 'Future being built...',
    'भुगतान करें'                                    : 'Make Payment',
    'सुरक्षित भुगतान करें'                          : 'Secure Payment',
    'भुगतान प्रक्रिया जारी...'                      : 'Payment processing...',
    'सभी payment methods accept होते हैं'            : 'All payment methods accepted',
    'अपनी जानकारी दर्ज करें (मुफ्त भविष्य)'        : 'Enter Your Details (Free Future)',
    'लव कैलकुलेटर'                                   : 'Love Calculator',
    'प्यार का प्रतिशत जानें'                        : 'Know Love Percentage',
    'दैनिक राशिफल'                                   : 'Daily Horoscope',
    'आज का भविष्यफल'                                 : "Today's Horoscope",
    'विस्तृत कुंडली'                                 : 'Detailed Kundli',
    'जीवन विश्लेषण'                                  : 'Life Analysis',
    'प्रीमियम कुंडली'                                : 'Premium Kundli',
    'संपूर्ण जीवन दर्शन'                            : 'Complete Life View',
    'आपके Premium लाभ'                               : 'Your Premium Benefits',
    'आप प्रीमियम सदस्य हैं'                         : 'You are a Premium Member',
    'मुफ्त कुंडली'                                   : 'Free Kundli',
    'मुफ्त भविष्य'                                   : 'Free Future',
    'आज का राशिफल'                                   : "Today's Horoscope",
    'मासिक राशिफल'                                   : 'Monthly Horoscope',
    'वार्षिक राशिफल'                                 : 'Yearly Horoscope',
    'साप्ताहिक राशिफल'                              : 'Weekly Horoscope',
    'कुंडली मिलान'                                   : 'Kundli Matching',
    'रत्न सुझाव'                                     : 'Gem Advice',
    'हमारे बारे में'                                 : 'About Us',
    'संपर्क करें'                                    : 'Contact Us',
    'गोपनीयता नीति'                                  : 'Privacy Policy',
    'नियम और शर्तें'                                 : 'Terms & Conditions',
    'मेरी रिपोर्ट्स (हिस्ट्री)'                    : 'My Reports (History)',
    'राशि और नक्षत्र'                               : 'Zodiac & Star',
    'ग्रहों की स्थिति'                              : 'Planet Position',
    '12 भावों का फल'                                 : '12 Houses Result',
    'शुभ अंक और रंग'                                : 'Lucky Number & Color',
    'करियर भविष्यवाणी'                              : 'Career Prediction',
    'प्रेम और विवाह'                                 : 'Love & Marriage',
    'ग्रहों के उपाय'                                 : 'Planet Remedies',
    'शुभ मुहूर्त'                                    : 'Auspicious Time',
    'व्यक्तिगत राशिफल'                              : 'Personal Horoscope',
    'ग्रहों के लिए रत्न और धारण विधि'              : 'Gems & Wear Method for Planets',
    'दोष निवारण के लिए सरल उपाय'                   : 'Simple Remedy for Defect Removal',
    'महत्वपूर्ण कार्यों के लिए शुभ समय'            : 'Auspicious Time for Important Work',
    'आपकी कुंडली के अनुसार भविष्यफल'               : 'Horoscope as per Your Kundli',
    'जन्म तिथि से नक्षत्र स्वतः पहचाना जाएगा'     : 'Star auto-detected from birth date',
    '9 ग्रहों की विस्तृत स्थिति और प्रभाव'         : 'Detailed Position & Effect of 9 Planets',
    '12 भावों का विस्तृत विश्लेषण'                  : 'Detailed Analysis of 12 Houses',
    'नौकरी और व्यवसाय में उन्नति के योग'           : 'Job & Business Growth Yoga',
    'प्रेम जीवन और विवाह की संभावनाएं'             : 'Love Life & Marriage Possibilities',
    'आपकी सटीक राशि और नक्षत्र की जानकारी'        : 'Your Exact Zodiac & Star Info',
    'आपके लिए भाग्यशाली अंक और रंग'               : 'Your Lucky Number & Color',
    'आपके सहयोग से हम और बेहतर सेवाएं दे सकते हैं': 'With your support we can give better services',
    'बिना रुकावट'                                    : 'Without Interruption',
    'एड-फ्री'                                        : 'Ad-Free',
    'एड-फ्री अनुभव'                                 : 'Ad-Free Experience',
    'मुफ्त कुंडली (₹19)'                            : 'Free Kundli (₹19)',
    'तेज सहायता'                                     : 'Fast Support',
    '4 बार मुफ्त'                                    : '4 Times Free',
    '3 बार मुफ्त'                                    : '3 Times Free',
    '8 बार मुफ्त'                                    : '8 Times Free',
    '5 बार मुफ्त'                                    : '5 Times Free',
    '3 बार'                                          : '3 Times',
    'कोई रिपोर्ट नहीं'                              : 'No Report',
    '-- अपनी राशि चुनें --'                         : '-- Choose Your Zodiac --',
    'अपना नाम लिखें'                                 : 'Write Your Name',
    'जन्म स्थान दर्ज करें'                          : 'Enter Birth Place',
    'शहर का नाम'                                     : 'City Name',
    'साथी का नाम'                                    : "Partner's Name",
    'आपका नाम'                                       : 'Your Name',
    'जन्म तिथि चुनें'                               : 'Choose Birth Date',
    'जन्म स्थान दर्ज करें'                          : 'Enter Birth Place',
    'नाम दर्ज करना आवश्यक है'                       : 'Name is required',
    'लिंग चुनें'                                     : 'Choose Gender',
    'जन्म तिथि चुनें'                               : 'Choose Birth Date',
    'जन्म स्थान दर्ज करें'                          : 'Enter Birth Place',
    'सिर्फ ₹5 में सटीक राशि जानें'                 : 'Know Exact Zodiac in just ₹5',
    'Auto Detect — राशि रिपोर्ट में दिखेगी'        : 'Auto Detect — Zodiac shown in report',
    'नाम से राशि auto-detect • 24 घंटे valid'      : 'Zodiac auto-detect from name • Valid 24 hours',
    '₹19 में रिपोर्ट खरीदें'                        : 'Buy Report in ₹19',
    '₹49 में प्रीमियम रिपोर्ट खरीदें'              : 'Buy Premium Report in ₹49',
    'इस रिपोर्ट में क्या मिलेगा?'                  : 'What will I get in this Report?',
    'प्रीमियम में मिलेंगे ये अतिरिक्त लाभ'         : 'These extra benefits in Premium',
    'प्रीमियम प्लान देखें'                          : 'See Premium Plan',
    'फ्री भविष्य'                                    : 'Free Future',
    'सामान्य भविष्यवाणी'                            : 'General Prediction',
    'करियर, प्रेम, धन फल'                           : 'Career, Love, Money Result',
    'ग्रहों की स्थिति नहीं'                         : 'No Planet Position',
    'उपाय नहीं'                                      : 'No Remedy',
    '12 भाव (Houses)'                                : '12 Houses',
    'अपनी राशि चुनें'                               : 'Choose Your Zodiac',
    'अपना नाम'                                       : 'Your Name',
    'जन्म तिथि *'                                    : 'Birth Date *',
    'जन्म समय *'                                     : 'Birth Time *',
    'जन्म स्थान *'                                   : 'Birth Place *',
    'नाम *'                                          : 'Name *',
    'लिंग *'                                         : 'Gender *',
    'राशि'                                           : 'Zodiac',
    'नक्षत्र'                                        : 'Star',
    'मेरा भविष्य देखें (मुफ्त)'                     : 'See My Future (Free)',
    '← वापस'                                         : '← Back',
    'विस्तृत भविष्यफल'                              : 'Detailed Future Result',
    'दोस्तों के साथ शेयर करें'                     : 'Share with Friends',
    'कुंडली रिपोर्ट'                                 : 'Kundli Report',
    'भविष्य देखें'                                   : 'See Future',
    'और विस्तृत जानकारी?'                           : 'More Detailed Info?',
    'होम'                                            : 'Home',
    'वापस'                                           : 'Back',
    'हिंदी'                                          : 'Hindi',
    'दिन'                                            : 'Day',
    'महीना'                                          : 'Month',
    'साल'                                            : 'Year',
    'चुनें'                                          : 'Choose',
    '* 5 मिनट के उपयोग के बाद यह विकल्प दिखाई देता है' : '* This option appears after 5 minutes of use',
    'अभी तक कोई भविष्यफल नहीं देखा। पहले भविष्य देखें!' : 'No horoscope seen yet. See Future first!',
    '100% Secure Payment — भुगतान होते ही सेवा तुरंत मिलेगी!' : '100% Secure Payment — Service instant after payment!',
    'सबसे लोकप्रिय'                                  : 'Most Popular',
    '/माह'                                           : '/Month',
    '/6 माह'                                         : '/6 Month',
    '/साल'                                           : '/Year',
    '12 माह'                                         : '12 Month',
    '6 माह'                                          : '6 Month',
    '10 बार'                                         : '10 Times',
    '20 बार'                                         : '20 Times',
    '30 बार'                                         : '30 Times',
    'एड-फ्री'                                        : 'Ad-Free',
    'व्यक्तिगत'                                      : 'Personal',
    'तेज सहायता'                                     : 'Fast Support',
    'प्राथमिकता'                                     : 'Priority',
    'मुफ्त प्रीमियम'                                 : 'Free Premium',
    'मुफ्त कुंडली'                                   : 'Free Kundli',
  };

  /* ══════════════════════════════════════════════════════════
     SECTION 3 — TRANSLATION ENGINE
     ══════════════════════════════════════════════════════ */

  // Cache to store original Hindi text of every text node
  var _originalCache = new Map();
  var _translatedCache = new Map();
  var _isEnglish = false;

  // Translate a single string (phrase-first, then word-by-word)
  function translateString(text) {
    if (!text || !text.trim()) return text;

    // 1. Try full phrase match first
    var trimmed = text.trim();
    if (PHRASES[trimmed]) return PHRASES[trimmed];

    // 2. Word-by-word translation
    var result = text.replace(/[\u0900-\u097F]+/g, function (word) {
      // Clean punctuation for lookup
      var clean = word.replace(/[।,.!?;:]/g, '');
      if (DICT[clean]) return DICT[clean];
      if (DICT[word]) return DICT[word];
      return word; // Keep as-is if no translation found
    });

    return result;
  }

  // Walk all text nodes in a container and translate
  function walkAndTranslate(root, toEnglish) {
    var walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function (node) {
          // Skip script, style, noscript content
          var parent = node.parentNode;
          if (!parent) return NodeFilter.FILTER_REJECT;
          var tag = parent.tagName ? parent.tagName.toLowerCase() : '';
          if (tag === 'script' || tag === 'style' || tag === 'noscript') {
            return NodeFilter.FILTER_REJECT;
          }
          // Only process nodes with Devanagari or cached content
          var t = node.nodeValue;
          if (toEnglish && /[\u0900-\u097F]/.test(t)) return NodeFilter.FILTER_ACCEPT;
          if (!toEnglish && _originalCache.has(node)) return NodeFilter.FILTER_ACCEPT;
          return NodeFilter.FILTER_SKIP;
        }
      },
      false
    );

    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(function (node) {
      if (toEnglish) {
        if (!_originalCache.has(node)) {
          _originalCache.set(node, node.nodeValue);
        }
        node.nodeValue = translateString(node.nodeValue);
      } else {
        if (_originalCache.has(node)) {
          node.nodeValue = _originalCache.get(node);
        }
      }
    });
  }

  // Translate placeholder attributes
  function translatePlaceholders(root, toEnglish) {
    var inputs = root.querySelectorAll('[placeholder]');
    inputs.forEach(function (el) {
      if (toEnglish) {
        var orig = el.getAttribute('data-hi-placeholder') || el.placeholder;
        if (/[\u0900-\u097F]/.test(orig)) {
          if (!el.getAttribute('data-hi-placeholder')) {
            el.setAttribute('data-hi-placeholder', orig);
          }
          el.placeholder = translateString(orig);
        }
      } else {
        var hiPh = el.getAttribute('data-hi-placeholder');
        if (hiPh) el.placeholder = hiPh;
      }
    });
  }

  // Translate <option> text values (select dropdowns)
  function translateOptions(root, toEnglish) {
    var options = root.querySelectorAll('option');
    options.forEach(function (opt) {
      var text = opt.textContent.trim();
      if (toEnglish && /[\u0900-\u097F]/.test(text)) {
        if (!opt.getAttribute('data-hi')) opt.setAttribute('data-hi', text);
        opt.textContent = translateString(text);
      } else if (!toEnglish) {
        var hiText = opt.getAttribute('data-hi');
        if (hiText) opt.textContent = hiText;
      }
    });
  }

  // Main translate function — called on language switch
  function applyTranslation(lang) {
    var toEnglish = (lang === 'en');
    var body = document.body;
    if (!body) return;

    walkAndTranslate(body, toEnglish);
    translatePlaceholders(body, toEnglish);
    translateOptions(body, toEnglish);
  }

  /* ══════════════════════════════════════════════════════════
     SECTION 4 — ID-BASED TRANSLATIONS (for dynamic elements)
     ══════════════════════════════════════════════════════ */
  var T = {
    hi: {
      currency: '₹', currencyCode: 'INR',
      splash1: '🔮 भविष्य जानने की तैयारी हो रही है...',
      splash2: '⭐ ग्रहों की स्थिति जांची जा रही है...',
      splash3: '✨ कुंडली तैयार हो रही है...',
      splash_subtitle: 'वैदिक ज्योतिष का सटीक संगम',
      hero_tagline: '✨ ग्रह · नक्षत्र · कुंडली · भविष्यफल ✨',
      hero_btn: 'मेरा भविष्य देखें (मुफ्त)',
      loading_text: '🔮 Bhavishya Dekho — भविष्य बन रहा है...',
      loading_subtext: 'ग्रहों की स्थिति का विश्लेषण हो रहा है',
      pay_title: '💳 भुगतान करें',
      pay_btn: '🔐 सुरक्षित भुगतान करें',
      pay_methods: 'सभी payment methods accept होते हैं',
      pay_secure_short: '100% Secure Payment — भुगतान होते ही सेवा तुरंत मिलेगी!',
      pay_processing: 'भुगतान प्रक्रिया जारी...',
      pay_once: '✦ सभी payments एक बार के होते हैं',
      pay_norefund: '✦ Report generate होने के बाद refund नहीं होगा',
      nav_home: 'होम', nav_daily: 'दैनिक राशिफल', nav_monthly: 'मासिक राशिफल',
      nav_yearly: 'वार्षिक राशिफल', nav_matching: 'कुंडली मिलान',
      nav_gemstones: 'रत्न सुझाव', nav_remedies: 'उपाय',
      nav_history: 'मेरी रिपोर्ट्स (हिस्ट्री)', nav_premium: 'Premium Plan',
      nav_about: 'हमारे बारे में', nav_contact: 'संपर्क करें',
      nav_privacy: 'गोपनीयता नीति', nav_terms: 'नियम और शर्तें',
      nav_disclaimer: 'Disclaimer', nav_backup: 'History Backup',
      fc_love_title: 'लव कैलकुलेटर', fc_love_desc: 'प्यार का प्रतिशत जानें', fc_love_price: 'मुफ्त',
      fc_horo_title: 'दैनिक राशिफल', fc_horo_desc: 'आज का भविष्यफल', fc_horo_price: 'मुफ्त',
      fc_basic_title: 'विस्तृत कुंडली', fc_basic_desc: 'जीवन विश्लेषण',
      fc_prem_title: 'प्रीमियम कुंडली', fc_prem_desc: 'संपूर्ण जीवन दर्शन',
      prem_benefits_title: 'आपके Premium लाभ',
      prem_member_text: 'आप प्रीमियम सदस्य हैं',
      disclaimer_text: '⚠️ यह भविष्यफल वैदिक ज्योतिष पर आधारित है। महत्वपूर्ण निर्णयों के लिए विशेषज्ञ से परामर्श लें।',
      form_name_ph: 'अपना नाम लिखें', form_place_ph: 'जन्म स्थान दर्ज करें',
      form_love_ph: 'आपका नाम', form_partner_ph: 'साथी का नाम',
      form_horo_ph: 'अपना नाम लिखें',
      gender_male: 'पुरुष', gender_female: 'महिला', gender_other: 'अन्य',
      rashi_ph: '-- अपनी राशि चुनें --',
      kundli_basic_buy: 'में रिपोर्ट खरीदें',
      kundli_prem_buy: 'में प्रीमियम रिपोर्ट खरीदें',
      upsell_basic: 'विस्तृत कुंडली', upsell_prem: 'प्रीमियम कुंडली',
      pkg_monthly: '/माह', pkg_6month: '/6 माह', pkg_yearly: '/साल',
      rashi_pkg_prefix: 'सिर्फ ', rashi_pkg_hint: 'में सटीक राशि जानें',
      compare_basic: 'विस्तृत कुंडली', compare_prem: 'प्रीमियम कुंडली',
      rashi_aries: 'मेष', rashi_taurus: 'वृष', rashi_gemini: 'मिथुन',
      rashi_cancer: 'कर्क', rashi_leo: 'सिंह', rashi_virgo: 'कन्या',
      rashi_libra: 'तुला', rashi_scorpio: 'वृश्चिक', rashi_sagittarius: 'धनु',
      rashi_capricorn: 'मकर', rashi_aquarius: 'कुंभ', rashi_pisces: 'मीन',
      form_info: 'अपनी जानकारी दर्ज करें (मुफ्त भविष्य)',
      lang_label: 'भाषा',
    },
    en: {
      currency: '$', currencyCode: 'USD',
      splash1: '🔮 Future reading is being prepared...',
      splash2: '⭐ Planetary positions being checked...',
      splash3: '✨ Kundli is being prepared...',
      splash_subtitle: 'Vedic Astrology Exact Union',
      hero_tagline: '✨ Planet · Star · Kundli · Future ✨',
      hero_btn: 'See My Future (Free)',
      loading_text: '🔮 Bhavishya Dekho — Future being built...',
      loading_subtext: 'Planetary positions being analyzed',
      pay_title: '💳 Make Payment',
      pay_btn: '🔐 Secure Payment',
      pay_methods: 'All payment methods accepted',
      pay_secure_short: '100% Secure Payment — Service instant after payment!',
      pay_processing: 'Payment processing...',
      pay_once: '✦ All payments are one-time',
      pay_norefund: '✦ No refund after report is generated',
      nav_home: 'Home', nav_daily: 'Daily Horoscope', nav_monthly: 'Monthly Horoscope',
      nav_yearly: 'Yearly Horoscope', nav_matching: 'Kundli Matching',
      nav_gemstones: 'Gem Advice', nav_remedies: 'Remedy',
      nav_history: 'My Reports (History)', nav_premium: 'Premium Plan',
      nav_about: 'About Us', nav_contact: 'Contact Us',
      nav_privacy: 'Privacy Policy', nav_terms: 'Terms & Conditions',
      nav_disclaimer: 'Disclaimer', nav_backup: 'History Backup',
      fc_love_title: 'Love Calculator', fc_love_desc: 'Know Love Percentage', fc_love_price: 'Free',
      fc_horo_title: 'Daily Horoscope', fc_horo_desc: "Today's Horoscope", fc_horo_price: 'Free',
      fc_basic_title: 'Detailed Kundli', fc_basic_desc: 'Life Analysis',
      fc_prem_title: 'Premium Kundli', fc_prem_desc: 'Complete Life View',
      prem_benefits_title: 'Your Premium Benefits',
      prem_member_text: 'You are a Premium Member',
      disclaimer_text: '⚠️ This prediction is based on Vedic astrology. Consult an expert for important decisions.',
      form_name_ph: 'Write Your Name', form_place_ph: 'Enter Birth Place',
      form_love_ph: 'Your Name', form_partner_ph: "Partner's Name",
      form_horo_ph: 'Write Your Name',
      gender_male: 'Male', gender_female: 'Female', gender_other: 'Other',
      rashi_ph: '-- Choose Your Zodiac --',
      kundli_basic_buy: 'Buy Report',
      kundli_prem_buy: 'Buy Premium Report',
      upsell_basic: 'Detailed Kundli', upsell_prem: 'Premium Kundli',
      pkg_monthly: '/Month', pkg_6month: '/6 Month', pkg_yearly: '/Year',
      rashi_pkg_prefix: 'Only ', rashi_pkg_hint: 'for Exact Zodiac',
      compare_basic: 'Detailed Kundli', compare_prem: 'Premium Kundli',
      rashi_aries: 'Aries', rashi_taurus: 'Taurus', rashi_gemini: 'Gemini',
      rashi_cancer: 'Cancer', rashi_leo: 'Leo', rashi_virgo: 'Virgo',
      rashi_libra: 'Libra', rashi_scorpio: 'Scorpio', rashi_sagittarius: 'Sagittarius',
      rashi_capricorn: 'Capricorn', rashi_aquarius: 'Aquarius', rashi_pisces: 'Pisces',
      form_info: 'Enter Your Details (Free Future)',
      lang_label: 'Language',
    }
  };

  /* ══════════════════════════════════════════════════════════
     SECTION 5 — USD PRICES
     ══════════════════════════════════════════════════════ */
  var USD = { basic: 0.25, premium: 0.60, rashi: 0.07, monthly: 1.20, sixMonth: 6.00, yearly: 12.00 };
  window.BD_CURRENCY_SETTINGS = USD;

  var _lang = 'hi';
  var _isEn = false;
  window._currentLangCode = 'hi';

  /* ══════════════════════════════════════════════════════════
     SECTION 6 — IP DETECT LANGUAGE
     ══════════════════════════════════════════════════════ */
  function detectLang(callback) {
    var saved = localStorage.getItem('bd_lang');
    if (saved && T[saved]) {
      _lang = saved; _isEn = (saved === 'en');
      window._currentLangCode = _lang;
      callback(); return;
    }
    fetch('https://ipapi.co/json/')
      .then(function (r) { return r.json(); })
      .then(function (d) {
        var eng = ['US', 'GB', 'CA', 'AU', 'NZ', 'IE', 'SG', 'ZA'];
        if (eng.indexOf(d.country_code) > -1) { _lang = 'en'; _isEn = true; }
        else { _lang = 'hi'; _isEn = false; }
        window._currentLangCode = _lang;
        callback();
      })
      .catch(function () { _lang = 'hi'; _isEn = false; window._currentLangCode = 'hi'; callback(); });
  }

  /* ══════════════════════════════════════════════════════════
     SECTION 7 — USD FROM FIREBASE
     ══════════════════════════════════════════════════════ */
  function loadUSD() {
    try {
      if (typeof database === 'undefined') return;
      database.ref('settings/usdPricing').once('value').then(function (snap) {
        var d = snap.val();
        if (d) {
          USD.basic = d.basic || USD.basic;
          USD.premium = d.premium || USD.premium;
          USD.rashi = d.rashi || USD.rashi;
          USD.monthly = d.monthly || USD.monthly;
          USD.sixMonth = d.sixMonth || USD.sixMonth;
          USD.yearly = d.yearly || USD.yearly;
          window.BD_CURRENCY_SETTINGS = USD;
          applyPricing();
        }
      });
    } catch (e) { }
  }

  /* ══════════════════════════════════════════════════════════
     SECTION 8 — PRICE DISPLAY
     ══════════════════════════════════════════════════════ */
  function pr(type) {
    var p = window._adminPricing || { basic: 19, premium: 49, rashi: 5, monthly: 99, sixMonth: 499, yearly: 999 };
    if (_isEn) {
      var m = { basic: USD.basic, premium: USD.premium, rashi: USD.rashi, monthly: USD.monthly, sixMonth: USD.sixMonth, yearly: USD.yearly };
      return '$' + (m[type] || 0).toFixed(2);
    }
    var n = { basic: p.basic, premium: p.premium, rashi: p.rashi, monthly: p.monthly, sixMonth: p.sixMonth, yearly: p.yearly };
    return '₹' + (n[type] || 0);
  }

  function s(id, txt) { var e = document.getElementById(id); if (e && txt !== undefined) e.textContent = txt; }
  function sp(id, txt) { var e = document.getElementById(id); if (e && txt) e.placeholder = txt; }

  /* ══════════════════════════════════════════════════════════
     SECTION 9 — APPLY LANGUAGE (main function)
     ══════════════════════════════════════════════════════ */
  function applyLang(lang) {
    if (!T[lang]) lang = 'hi';
    _lang = lang; _isEn = (lang === 'en');
    window._currentLangCode = lang;
    localStorage.setItem('bd_lang', lang);
    document.documentElement.lang = lang;
    var tl = T[lang];

    // Sync dropdown
    var dd = document.getElementById('langSelectDropdown');
    if (dd) dd.value = lang;

    // ── Step 1: Full DOM word-by-word translation ──
    applyTranslation(lang);

    // ── Step 2: ID-based overrides for dynamic elements ──
    s('splashMsg', tl.splash1);
    s('splash-subtitle', tl.splash_subtitle);
    s('splash-tagline', tl.hero_tagline);
    window._splashMsgs = [tl.splash1, tl.splash2, tl.splash3];

    s('loading-text', tl.loading_text);
    s('loading-subtext', tl.loading_subtext);

    s('pay-title-text', tl.pay_title);
    s('pay-btn-text', tl.pay_btn);
    s('pay-methods-text', tl.pay_methods);
    s('pay-secure-text', tl.pay_secure_short);
    s('pay-processing-text', tl.pay_processing);

    s('hero-btn', tl.hero_btn);
    s('main-predict-btn', tl.hero_btn);

    var navKeys = ['home', 'daily', 'monthly', 'yearly', 'matching', 'gemstones', 'remedies', 'history', 'premium', 'about', 'contact', 'privacy', 'terms', 'disclaimer', 'backup'];
    navKeys.forEach(function (k) { s('nav-' + k, tl['nav_' + k]); });

    s('fc-love-title', tl.fc_love_title); s('fc-love-desc', tl.fc_love_desc); s('fc-love-price', tl.fc_love_price);
    s('fc-horo-title', tl.fc_horo_title); s('fc-horo-desc', tl.fc_horo_desc); s('fc-horo-price', tl.fc_horo_price);
    s('fc-basic-title', tl.fc_basic_title); s('fc-basic-desc', tl.fc_basic_desc);
    s('fc-prem-title', tl.fc_prem_title); s('fc-prem-desc', tl.fc_prem_desc);

    s('prem-benefits-title', tl.prem_benefits_title);
    s('prem-member-text', tl.prem_member_text);
    s('disclaimer-text', tl.disclaimer_text);

    ['name', 'kundliName', 'premiumKundliName'].forEach(function (id) { sp(id, tl.form_name_ph); });
    ['birthPlace', 'kundliPlace', 'premiumKundliPlace'].forEach(function (id) { sp(id, tl.form_place_ph); });
    sp('loveYourName', tl.form_love_ph);
    sp('lovePartnerName', tl.form_partner_ph);
    sp('horoscopeName', tl.form_horo_ph);

    ['gender', 'kundliGender', 'premiumKundliGender'].forEach(function (selId) {
      var sel = document.getElementById(selId); if (!sel) return;
      sel.querySelectorAll('option').forEach(function (o) {
        if (o.value === 'male') o.textContent = tl.gender_male;
        else if (o.value === 'female') o.textContent = tl.gender_female;
        else if (o.value === 'other' || o.value === '') o.textContent = tl.gender_other;
      });
    });

    var rashiMap = {
      aries: tl.rashi_aries, taurus: tl.rashi_taurus, gemini: tl.rashi_gemini,
      cancer: tl.rashi_cancer, leo: tl.rashi_leo, virgo: tl.rashi_virgo,
      libra: tl.rashi_libra, scorpio: tl.rashi_scorpio, sagittarius: tl.rashi_sagittarius,
      capricorn: tl.rashi_capricorn, aquarius: tl.rashi_aquarius, pisces: tl.rashi_pisces
    };
    document.querySelectorAll('select option').forEach(function (o) {
      var v = (o.value || '').toLowerCase();
      if (rashiMap[v]) o.textContent = rashiMap[v];
    });

    applyPricing();

    console.log('✅ Language applied:', lang);
  }

  /* ══════════════════════════════════════════════════════════
     SECTION 10 — APPLY PRICING
     ══════════════════════════════════════════════════════ */
  function applyPricing() {
    var tl = T[_lang] || T.hi;
    var p = window._adminPricing || { basic: 19, premium: 49, rashi: 5, monthly: 99, sixMonth: 499, yearly: 999 };
    var basicAmt = _isEn ? USD.basic : p.basic;
    var premAmt = _isEn ? USD.premium : p.premium;
    var rashiAmt = _isEn ? USD.rashi : p.rashi;
    var mAmt = _isEn ? USD.monthly : p.monthly;
    var sAmt = _isEn ? USD.sixMonth : p.sixMonth;
    var yAmt = _isEn ? USD.yearly : p.yearly;

    s('basicKundliPrice', pr('basic'));
    s('basicKundliBadge', pr('basic'));
    s('premiumKundliPrice', pr('premium'));
    s('premiumKundliBadge', pr('premium'));
    s('basicKundliBtnText', pr('basic') + ' ' + tl.kundli_basic_buy);
    s('premiumKundliBtnText', pr('premium') + ' ' + tl.kundli_prem_buy);

    var bb = document.getElementById('basicKundliBtn');
    if (bb) bb.setAttribute('onclick', "processKundliPayment(" + basicAmt + ",'basic')");
    var pb = document.getElementById('premiumKundliBtn');
    if (pb) pb.setAttribute('onclick', "processKundliPayment(" + premAmt + ",'premium')");

    document.querySelectorAll('.premium-card').forEach(function (card) {
      var oc = card.getAttribute('onclick') || '';
      var pe = card.querySelector('.premium-price');
      if (oc.indexOf("'monthly'") > -1) {
        if (pe) pe.innerHTML = pr('monthly') + '<small>' + tl.pkg_monthly + '</small>';
        card.setAttribute('onclick', "showPremiumPayment(" + mAmt + ",'monthly')");
      } else if (oc.indexOf("'6months'") > -1) {
        if (pe) pe.innerHTML = pr('sixMonth') + '<small>' + tl.pkg_6month + '</small>';
        card.setAttribute('onclick', "showPremiumPayment(" + sAmt + ",'6months')");
      } else if (oc.indexOf("'yearly'") > -1) {
        if (pe) pe.innerHTML = pr('yearly') + '<small>' + tl.pkg_yearly + '</small>';
        card.setAttribute('onclick', "showPremiumPayment(" + yAmt + ",'yearly')");
      }
    });

    document.querySelectorAll('.upsell-btn').forEach(function (el) {
      var oc = el.getAttribute('onclick') || '';
      if (oc.indexOf('showKundliSection') > -1 && oc.indexOf('Premium') === -1)
        el.textContent = '📜 ' + pr('basic') + ' ' + tl.upsell_basic;
      if (oc.indexOf('showPremiumKundliSection') > -1)
        el.textContent = '👑 ' + pr('premium') + ' ' + tl.upsell_prem;
    });

    document.querySelectorAll('.comparison-price').forEach(function (el) {
      var txt = el.textContent;
      if (txt.match(/19|0\.25/)) el.textContent = pr('basic');
      if (txt.match(/49|0\.60/)) el.textContent = pr('premium');
    });

    document.querySelectorAll('h4').forEach(function (el) {
      var txt = el.textContent.trim();
      if (txt.indexOf('विस्तृत') > -1 || txt.indexOf('Detailed') > -1)
        el.textContent = tl.compare_basic + ' (' + pr('basic') + ')';
      if ((txt.indexOf('प्रीमियम') > -1 && txt.indexOf('कुंडली') > -1) || txt.indexOf('Premium Kundli') > -1)
        el.textContent = tl.compare_prem + ' (' + pr('premium') + ')';
    });

    document.querySelectorAll('#loveRashiBuyMsg,#horoRashiBuyMsg,#rashiBuyHint').forEach(function (c) {
      var badge = c.querySelector('span[style*="border-radius:20px"]');
      var txt = c.querySelector('div[style*="ffd700"]');
      if (badge) badge.textContent = pr('rashi');
      if (txt) txt.textContent = tl.rashi_pkg_prefix + pr('rashi') + ' ' + tl.rashi_pkg_hint;
    });
  }

  /* ══════════════════════════════════════════════════════════
     SECTION 11 — OLD FLOATING SWITCHER (disabled — dropdown in header)
     ══════════════════════════════════════════════════════ */
  function createSwitcher() {
    // Dropdown is now in header — no floating button needed
  }

  /* ══════════════════════════════════════════════════════════
     SECTION 12 — GLOBAL FUNCTIONS
     ══════════════════════════════════════════════════════ */
  window.bdSetLang = function (lang) {
    applyLang(lang);
    window._isEn = (lang === 'en');
  };
  window.applyLanguage = window.bdSetLang;
  window.applyPricingWithLang = applyPricing;
  window._isEn = false;

  // Expose translate function for use in script.js
  window.bdTranslate = translateString;
  window.bdApplyTranslation = applyTranslation;

  /* ══════════════════════════════════════════════════════════
     SECTION 13 — INIT
     ══════════════════════════════════════════════════════ */
  function init() {
    createSwitcher();
    detectLang(function () {
      window._isEn = _isEn;
      applyLang(_lang);
      loadUSD();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      setTimeout(init, 500);
    });
  } else {
    setTimeout(init, 500);
  }

})();
