addEventListener('mousemove', function(elem){
    console.log(elem.clientX, elem.clientY) // .clientX and .clientY gives x and y position of mousemove

    document.body.style.setProperty("--x", elem.clientX + 'px')

    document.body.style.setProperty("--y", elem.clientY + "px");
})

// .setProperty("--rootVariable", value):- is used to update the value of root variable