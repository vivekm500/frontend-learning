// js - js is single threaded - ek kaam ek baar me kar payegi - this is called synchronous approach

// Asynchronous approch - interfaring order of execution and changing it according to need

// callback - ek function jo turant nhi chalega ye chalega jab aapka kaam complete hoga 

// callback - any function is passed in to any function

setTimeout( function (){
    console.log("hey")
},2000);

// getDataFromInstagram("piyush", function(){

// })

// pehle user ka data ayega uske baad function chlega

function abcd(fn){
    fn(function(fn2){
        console.log("fn1")
        fn2(function(){
            console.log("fn3")
        });
    }); // function which is passed in calling of function abcd ...that will run
}

abcd(function(fn1){
    console.log("abcd")
    fn1(function(fn3){
        console.log("fn2")
        fn3();
    });
});



// jaha par v function call ho raha h woha par hm ek function pass kr sakte h.....r dusri trf use accept krke chlana padega or call krna padega

function xyz(fn){
    fn(function(fn3){
        fn3(function(fn5){
            fn5();
        });
    });
}


xyz(function(fn2){
    fn2(function(fn4){
        fn4(function(){
            console.log("hloo")
        });
    });
});


// callbacks
// situation -> github se repository data lao

// getUserDetails(username, cb)
// getAllRepos(userid, cb)
// getRepoDetail(repos[0], cb)


// amitSeDetailsLaao(address, cb)
// dukaanDhundo(details, cb)
// samaanLelo(samaanList, cb)
// gharAaaJaao(address, cb)

function amitSeDetailsLaao(address, cb){
    console.log("fetching details...")
    setTimeout(()=>{
        cb({lat: 23.43, lng: 76.5});
    },3000)
}


amitSeDetailsLaao("indrapuri 231-H Block", function(details){
    console.log(details)
})