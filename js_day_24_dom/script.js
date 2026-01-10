let allh1 = document.querySelectorAll('h1');

console.log(allh1)  // we will get nodelist in allh1 as we have selected all h1 ---this nodelist is similar to array but not neccessarily all operations of array will also be applicable on it

allh1.forEach( (elem) => {
    console.log(elem.innerHTML)
})

// we can't apply map() , .reduce , filter , push and most of the array methods on nodelist

// using .innerHTML we can modify content in the tag

allh1[1].innerHTML = 'BYE BYE'

console.log(allh1[1].innerHTML)

// 

let outer = document.querySelector('#outer')

// outer.style.backgroundColor = 'red'
console.log(outer.childNodes)

//

let allElem = document.querySelectorAll('.elem')

allElem.forEach( (val) =>{
    // console.log(val)
    // console.log(val.innerHTML)

    // console.log(val.childNodes)

    // val.childNodes[3].addEventListener('click', () => {
    //     val.childNodes[3].innerHTML = 'Remove Friend'
    // })
})

// OR

let allBtn =  document.querySelectorAll('button')

allBtn.forEach( (elem) => {
elem.addEventListener('click', () => {
    if(elem.innerHTML === 'Add Friend'){
        elem.innerHTML = "Remove Friend"
    }else{
        elem.innerHTML = "Add Friend"
    }
})
})
