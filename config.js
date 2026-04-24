// ============================================================
//   BHAVISHYA DEKHO — CONFIG FILE
//   Sirf yahi file edit karo, baaki kuch mat chhuo
//   Ye file index.html ke saath same folder mein honi chahiye
// ============================================================


// ─────────────────────────────────────────────
//  FIREBASE CONFIG  (already filled — mat badlo)
// ─────────────────────────────────────────────
var FIREBASE_CONFIG = {
    apiKey:            "AIzaSyCAjf6a111RYNrczir5UVQrkctxlNIYERI",
    authDomain:        "apka-bhavishya-42426.firebaseapp.com",
    databaseURL:       "https://apka-bhavishya-42426-default-rtdb.firebaseio.com",
    projectId:         "apka-bhavishya-42426",
    storageBucket:     "apka-bhavishya-42426.appspot.com",
    messagingSenderId: "490450742753",
    appId:             "1:490450742753:web:63a59cd70e1ac24304b6a0"
};


// ─────────────────────────────────────────────
//  RAZORPAY KEY  ← SIRF YE EK LINE BADLO
// ─────────────────────────────────────────────
//
//  Apni Razorpay Dashboard se Live Key copy karo
//  aur neeche "rzp_live_..." ki jagah paste karo
//
var RAZORPAY_KEY = "rzp_live_SblFMVrk0vpfPc";
//
//  Example:
//  var RAZORPAY_KEY = "rzp_live_AbCdEf1234567890";
// ─────────────────────────────────────────────


// ============================================================
//  NEECHE KUCH MAT BADLO
// ============================================================
window.__SITE_CONFIG__ = {
    firebase: FIREBASE_CONFIG,
    razorpay: RAZORPAY_KEY
};
window.__CONFIG_LOADED__ = true;
