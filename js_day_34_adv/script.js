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

const prm = new promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve();
    },3000);
});