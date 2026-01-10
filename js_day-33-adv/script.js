// callback - ek function hota hai jo jab certain kaam ho jaye tab chalta hai

// function inataParJaoDataLaao(username, cb){
//     // logic foe giong to inata anad taking out data from there

//     setTimeout(()=>{
//         cb({ id: 1, username: "vivek", age: 21 });
//     },2000)

// }

// inataParJaoDataLaao("vivek", function(data){
//     console.log(data);
// });

// QUESTION PRACTICE

// Q1 - **Task (Hindi):** Ek function banao `afterDelay` **Requirements:** - Ye function do cheezein lega: 
// 1. `time` (milliseconds) 
// 2. `callback` function 
// - Given `time` ke baad `callback` call kare 
// - Callback ke andar `"Callback executed"` print hona chahiye 
// **Use case:** > “2 second baad ek kaam karna hai” **Goal:** - Samajhna ki callback delay ke baad kaise execute hota hai - Ye `setTimeout` + callback connection hai


// function  afterDelay(time, cb){
// setTimeout(()=>{
//     cb();
// },time)
// }

// afterDelay(4000, function(){
//     console.log("callback executed");
// })


// Q2 - 
/* **Task (Hindi):** Ek function banao `getUser`

**Requirements:**
- `getUser` `username` lega
- 1 second ke baad `callback` ko ek object de:
  - `id`
  - `username`

**Then:**
- Callback ke andar ek aur function call karo `getUserPosts`

**`getUserPosts` requirements:**
- `userId` lega
- 1 second ke baad `callback` ko `posts` ka array de

**Final output:**
- User ka `username` print ho
- Fir uske `posts` print ho

**Goal:**
- Samajhna ki ek async ka result next async ko kaise milta hai
- Callback chaining practice */


// function getUser(username,cb){
//     console.log("fetching user details...")
//     setTimeout(()=>{
//         cb({id: 123, username: "reen_12"})
//     },1000)
// }

// function getUserPosts(id,cb){
//     console.log("fetching user allposts...")
//     setTimeout(()=>{
//         cb(["sunshine", "having fun", "chill day"])
//     },1000)
// }

// getUser("reena", function(user){
    
//     getUserPosts(user.id, function(allposts){
//         console.log(user.username, allposts);
//     });
// });


// Q3 - 
/***Task (Hindi):** Teen functions banao:

1. `loginUser`
   - 1 second baad callback ko `user` object de
2. `fetchPermissions`
   - `userId` lega
   - 1 second baad callback ko `permissions` array de
3. `loadDashboard`
   - `permissions` lega
   - 1 second baad callback ko `"Dashboard loaded"` bole

**Flow:**
- Pehle `loginUser`
- Uske andar `fetchPermissions`
- Uske andar `loadDashboard`
- Final output console mein print ho

**Goal:**
- Callback nesting ko feel karna
- Yehi structure baad mein callback hell banta hai

---

### Notes
- Practice in plain JavaScript using `setTimeout` and callbacks to understand the flow before converting to Promises/async–await. */

function loginUser(username, cb){
    console.log("loging in user...")
    setTimeout(()=>{
        cb({id: 1331, username: "diyu12" })
    },1000)
}

function fetchPermissions(id, cb){
    console.log("fetching permissions")
    setTimeout(() => {
      cb(["read", "write", "delete"]);
    },2000);
}

function loadDashboard(permissions, cb){
    console.log("loading dashboard...")
    setTimeout(() => {
      cb();
    }, 3000);
}


loginUser("divya", function(data){
    fetchPermissions(data.id, function(permissions){
        loadDashboard(Permissions, function(){
            console.log("dashboard loaded ✅")
        });
    });
});


// callback hell/christmas tree problem  - allback ke andar callback and so on


// PROMISES:-

