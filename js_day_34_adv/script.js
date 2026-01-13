// PROMISES
// ASYNC AWAWIT
// setTimeout and setInterval


// promises -> ek kaam jake karo
// work is being done(in the priocess) -> pending state
// work done(completed) -> resolved
// work not done -> reject

// facebook -> mera data lao
// facebook p gya -> pending state
// data aya -> resolve
// data nhi aya -> reject

const prm = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve();
    },2000);
});

prm
.then(function(){
    console.log("resolved")
})
.catch(function(){
    console.log("reject")
});

let prm2 = new Promise((resolve, reject)=>{
    // logic to go to meta and get data
    // if data aaya -> resolve -> .then() chlega
    // else reject -> .catch() chlega
})

prm2.then(()=>{

}).catch(()=>{

})

fetch("https://randomuser.me/api/")
.then((notReadableDtat)=>{
    return notReadableDtat.json(); // json() will convert it in readable data rformat (convert in object)
})
.then((asliData)=>{
    console.log(asliData.results[0].name.first);
})
.catch(()=>{
    console.log("failed to fetch the data")
})

// fetch se kisi v url par jaa skte h
// fetch ka data readable nhi hota
// usey json bnake readable krte  h
// iske baad jo data milta h wo readable hota h



// async await
// .then and .catch se bachne ke liye async await ka use krte h

async function abcd(){
    let raw = await fetch('https://randomuser.me/api/');
    let data = await raw.json();
    console.log(data);
}

abcd();


function getNum(){
    return new Promise((resolve, reject) => {
      let num = Math.floor(Math.random() * 10);
      if (num < 5) {
        resolve(num);
      } else reject(num);
    }, 3000);
}

async function abc(){
let v = await getNum();
console.log(v);
}

abc();