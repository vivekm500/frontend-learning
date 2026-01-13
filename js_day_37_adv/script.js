// DEBOUNCING AND THROTTLING

// debouncing -> Debouncing ensures a function runs only after a specified pause in repeated events.

//  Debouncing limits how often a function runs by delaying its execution until a pause occurs.

// “Don’t run this function until the user stops doing something for X milliseconds.”  User types fast → nothing happens. User stops typing for 300ms → API call fires ONCE

// used in seach engine for suggestions. when a user type something and stop for a while then it suggest he user foe what they are searching for

function debounce(fn, delay){
    let timer;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(fn, delay);
    }
}


document.querySelector("#search")
.addEventListener("input", debounce(function(){
    console.log("chla")
},400)
)


// throttling -> 
/*
EXPLANATION FROM CHATGPT
What throttling actually is

Throttling limits how often a function can run — at most once every X milliseconds.

Translation:

“You can call this function as many times as you want, but I’ll only let it run once per time window.”

This is rate-limiting, not delaying until silence.

The problem throttling solves

Some events fire insanely fast:

scroll

mousemove

touchmove

resize (sometimes)

If you handle every event → jank, dropped frames, battery drain.

Throttling keeps your app responsive.

Throttle vs Debounce (read carefully)
Feature	Throttle	Debounce
Runs when	At fixed intervals	After pause
Guarantees execution	Yes (periodic)	No
Best for	Scroll, drag	Search, input
Missed events	Ignored	Collapsed

If you use debounce on scroll, your UI will feel broken.

How throttling works (mechanically)

Function runs immediately (usually)

Start a cooldown timer

Calls during cooldown → ignored

After cooldown ends → next call allowed

No waiting for silence. Just enforcement.

Basic throttle implementation (understand this)
function throttle(fn, limit) {
  let inThrottle = false;

  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}


If you don’t understand why inThrottle persists, you don’t understand closures.

Example: scroll event (correct usage)
function onScroll() {
  console.log(window.scrollY);
}

const throttledScroll = throttle(onScroll, 200);

window.addEventListener("scroll", throttledScroll);


Behavior:

Scroll fires constantly

Handler runs once every 200ms

Smooth scrolling, stable FPS

Leading vs trailing throttle (important nuance)
Leading (default)

Runs immediately, then blocks.

Trailing

Runs one final time after the throttle window.

Advanced version (leading + trailing):

function throttle(fn, limit) {
  let lastCall = 0;
  let timer = null;

  return function (...args) {
    const now = Date.now();
    const remaining = limit - (now - lastCall);

    if (remaining <= 0) {
      clearTimeout(timer);
      timer = null;
      lastCall = now;
      fn.apply(this, args);
    } else if (!timer) {
      timer = setTimeout(() => {
        lastCall = Date.now();
        timer = null;
        fn.apply(this, args);
      }, remaining);
    }
  };
}


Use this if you need:

Immediate response

Final state update

Common mistakes (these hurt performance)
❌ Using debounce instead of throttle on scroll

Your UI updates only after scrolling stops.
Feels laggy and broken.

❌ Throttling inside the event listener
window.addEventListener("scroll", throttle(fn, 200)); // ❌


New throttle instance every event → useless.

Correct:

const throttled = throttle(fn, 200);
window.addEventListener("scroll", throttled);

❌ Throttling CPU-heavy logic

Throttle reduces frequency, not cost.
If one call is expensive, throttling won’t save you.

Throttling is NOT async

No Promises

No await

Just timers + closures

Anyone explaining throttle with async/await is confused.

One-sentence definition (final)

Throttling ensures a function runs at most once within a specified time interval.

Brutal takeaway

Scroll → throttle

Resize → throttle or debounce (depends)

Search → debounce

Mousemove → throttle

If you mix these up, your app feels like garbage.
*/

function throttle(fn, delay){
    let last = 0;
    return function(){
        const now = Date.now();
        if(now-last >= delay){
            last = now;
            fn();
        }
    }
}

window.addEventListener("mousemove", throttle(function(){
    console.log("vivek")
},2000)
)


//


// json - javaScript object notation

// json parse -> json se object bnate ho
JSON.parse('{"name":"vivek","age":21}');
// output  - {name: 'vivek', age: 21}


// json stringify -> stringify ke through aap json bnate ho
JSON.stringify({name: "vivek", age: 21})

// output - '{"name":"vivek","age":21}'
