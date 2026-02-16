// localStorage -> hmare browser m thodi si storage hoti about 5-10mb depending upon domain jisme login credentials theme choie.... ye sb store hota h

localStorage.clear() // this command is used to clear the data saved in localStorage of our website


// to add something in local storage or overwrite existing one's use localStorage.setItem('key','value')
localStorage.setItem('User', 'vivek')
localStorage.setItem('age', '21')

// To get something from localStorage use getItem('key')
let userAge = localStorage.getItem('age')

console.log(userAge)

localStorage.setItem('city','patna')

// To remove something from localStorage use removeItem('key)
localStorage.removeItem('city')

// localStorage.clear() // clears everyything from localStorage


// 

let arr = [10,20,30,40]
localStorage.setItem('arr', arr)
console.log(localStorage.getItem('arr'))

// localstorage me data save krte time aap data string ke form me save krte ho aur wapis v string ke form me milta h

//

let obj = {
    user: "Haryy",
    age: 56,
    city: "london"
}

// object itself doesn't convert to string so its not get saved in localStorage so we need to first convert the object in string

// localStorage doesn't directly save object in it

// let newObj = JSON.stringify(obj)  // JSON.stringify(object) is the metod used to convert any object in string

// localStorage.setItem('obj', obj) ❌

localStorage.setItem('obj',JSON.stringify(obj)) //✅
console.log(localStorage.getItem('obj'))

let obj2 = localStorage.getItem('obj')

let realObj = JSON.parse(obj2) //if any string can be converted in array or object then JSON.parse(array/object) will convert it in array or object

console.log(realObj)


// sessionStorage -> allows you to store data as key-value pair within a user's browser for the duration of a single page session

sessionStorage.setItem('user', 'piyush') // to add new item in sessionStorage

// Data is always stored as string