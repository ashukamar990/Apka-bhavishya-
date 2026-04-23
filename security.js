/* ═══════════════════════════════════════════════════
   BHAVISHYA DEKHO — Security System
   File: security.js
   Features:
   - Right-click disabled
   - DevTools/F12 blocked
   - Bot detection
   - Anti-iframe (clickjacking)
   - Rate limiting
   - Honeypot
════════════════════════════════════════════════════ */

(function(){
'use strict';

// ── 1. Disable Right Click ──────────────────────
document.addEventListener('contextmenu', function(e){
    e.preventDefault();
    return false;
});

// ── 2. Disable F12, Ctrl+U, Ctrl+Shift+I, Ctrl+S ──
document.addEventListener('keydown', function(e){
    // F12
    if(e.keyCode === 123) { e.preventDefault(); return false; }
    // Ctrl+U (view source)
    if(e.ctrlKey && e.keyCode === 85) { e.preventDefault(); return false; }
    // Ctrl+Shift+I (DevTools)
    if(e.ctrlKey && e.shiftKey && e.keyCode === 73) { e.preventDefault(); return false; }
    // Ctrl+Shift+J (Console)
    if(e.ctrlKey && e.shiftKey && e.keyCode === 74) { e.preventDefault(); return false; }
    // Ctrl+Shift+C (Inspector)
    if(e.ctrlKey && e.shiftKey && e.keyCode === 67) { e.preventDefault(); return false; }
    // Ctrl+S (Save page)
    if(e.ctrlKey && e.keyCode === 83) { e.preventDefault(); return false; }
    // Ctrl+A (Select All)
    if(e.ctrlKey && e.keyCode === 65) { e.preventDefault(); return false; }
});

// ── 3. DevTools Open Detection (Console Warning) ──
var _dt = false;
var _dtCheck = setInterval(function(){
    var t1 = new Date();
    debugger;
    var t2 = new Date();
    if(t2 - t1 > 100){
        if(!_dt){
            _dt = true;
            console.clear();
            console.log('%c⚠️ STOP!', 'color:red;font-size:40px;font-weight:bold;');
            console.log('%cYe browser developer tool hai. Kisi bhi suspicious code ko yahan copy-paste mat karo. Ye aapka account hack kar sakta hai.', 'color:orange;font-size:14px;');
            console.log('%c🔒 Bhavishya Dekho — All rights reserved', 'color:#ffd700;font-size:12px;');
        }
    } else {
        _dt = false;
    }
}, 2000);

// ── 4. Bot / Crawler Detection ──────────────────
(function(){
    var bots = /bot|crawl|spider|slurp|teoma|archive|track|wget|curl|scraper|python|java|ruby|perl|go-http|aiohttp/i;
    if(bots.test(navigator.userAgent)){
        document.body.innerHTML = '<div style="text-align:center;padding:50px;color:#fff;background:#0a0a1a;font-family:sans-serif;min-height:100vh;display:flex;align-items:center;justify-content:center;"><div><h1 style="color:#ffd700;">🔮 Bhavishya Dekho</h1><p>Access restricted for automated tools.</p></div></div>';
        return;
    }
})();

// ── 5. Anti-Hotlinking: Ensure page loaded from correct domain ──
(function(){
    var allowed = ['bhavishyadekho.online','localhost','127.0.0.1',''];
    var host = window.location.hostname;
    // Only block if referrer is from completely different domain with iframe
    if(window.top !== window.self){
        try {
            var parentHost = window.parent.location.hostname;
            if(allowed.indexOf(parentHost) === -1){
                window.top.location = window.location.href;
            }
        } catch(e){
            // Cross-origin iframe — block it
            document.body.innerHTML = '<div style="text-align:center;padding:50px;font-family:sans-serif;"><h2>Unauthorized access blocked.</h2></div>';
        }
    }
})();

// ── 6. Console Security Message ─────────────────
setTimeout(function(){
    console.clear();
    console.log('%c🔮 Bhavishya Dekho', 'color:#ffd700;font-size:24px;font-weight:bold;');
    console.log('%c🔒 Ye ek private website hai. Kisi bhi code ko copy karna ya reverse engineer karna strictly prohibited hai.', 'color:#ff6b6b;font-size:13px;');
    console.log('%c© 2025 Bhavishya Dekho. All rights reserved.', 'color:#aaa;font-size:11px;');
}, 1000);

// ── 7. Text Selection Disable on sensitive areas ──
// (CSS mein already user-select:none hai, ye JS backup hai)
document.addEventListener('selectstart', function(e){
    if(!e.target.closest('input, textarea, select')){
        e.preventDefault();
    }
});

// ── 8. Disable drag ──────────────────────────────
document.addEventListener('dragstart', function(e){
    e.preventDefault();
});

// ── 9. Rate Limit: Basic brute force protection ──
var _reqCounts = {};
var _blocked = {};
window._checkRateLimit = function(action, maxPerMin){
    maxPerMin = maxPerMin || 10;
    var now = Date.now();
    if(!_reqCounts[action]) _reqCounts[action] = [];
    _reqCounts[action] = _reqCounts[action].filter(function(t){ return now - t < 60000; });
    if(_blocked[action] && now - _blocked[action] < 300000){
        alert('⚠️ Bahut zyada requests. 5 minute baad try karein.');
        return false;
    }
    if(_reqCounts[action].length >= maxPerMin){
        _blocked[action] = now;
        alert('⚠️ Bahut zyada requests detect hui. Kripya 5 minute wait karein.');
        return false;
    }
    _reqCounts[action].push(now);
    return true;
};

// ── 10. Honeypot: Detect automated form submission ──
var _lastFormTime = 0;
window._checkHoneypot = function(){
    var now = Date.now();
    if(now - _lastFormTime < 1500){
        console.warn('Bot-like behavior detected');
        return false;
    }
    _lastFormTime = now;
    return true;
};

})();
