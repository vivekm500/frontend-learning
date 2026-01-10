let chutki = document.querySelector('img')
let msg = document.querySelector('h2 span')

let body = document.querySelector('body')
// or document.body

chutki.addEventListener('mouseenter', () => {
    msg.innerHTML = 'chutki se dur ho ja 🤬🤬'
    body.style.backgroundColor = 'red'
})

chutki.addEventListener("mouseleave", () => {
  msg.innerHTML = "ab chutki se dur hi rahna 🤬🤬";
  body.style.backgroundColor = "lightseagreen";
});


//

let main = document.querySelector('#main')

let cursor = document.querySelector('#cursor')

main.addEventListener('mousemove', (elem) => {
  //console.log(elem) // to find details of the event

  cursor.style.left = elem.x+'px'
  cursor.style.top = elem.y + "px";
})

// 

let h1 = document.querySelector('h1')

document.body.addEventListener('keydown', (dets) => {
  h1.innerHTML = dets.code
})