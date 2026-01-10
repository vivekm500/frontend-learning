const para = document.querySelector('p')

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const text = para.innerText;

// let iteration = 0

// para.addEventListener('mouseenter', function(){
   
//     setInterval(() => {
        
//         const str = text.split('').map( (char,indx)=>{
//             if(indx < iteration){
//                 return char
//             }
//             return characters.split("")[Math.floor(Math.random()*53)]
//         }).join("")  // .join("") :- will join the elements of array returned by .map()  or we can say bapas array ofc characters ko string m join krke deti h
//         para.innerText = str

//         iteration += 0.2
        
//     }, 30);

//     // console.log(str)
// })

// OR

let iteration = 0;

function randomText(){

        const str = text.split("").map((char, index) => {
        if(index < iteration){
            return char
        }
        return characters.split("")[Math.floor(Math.random() * 53)];
      }).join(""); 

       para.innerText = str;
    
       iteration += 0.5   
    
}

setInterval(randomText, 30);


