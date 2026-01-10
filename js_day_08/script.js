// LOOPS AND CONDITIONALS IN JS

// conditionals
// programming m kai baar aisa phase aata h jaha par ki decide krna padta h ki kya kre, option A choose kre ya option B

// EX - agr baarish ho rhi h to print kro hello nhi to print kro bye-bye

// if else else-if   ternary   switch-case

// if else
let a = 12;
if(a > 10){
    console.log("Hello");
}
else{
    console.log("bye-bye");
}

// truthy and falsy

// 0 "" false NaN null undefined document.all -> these all get converted in false

// iske alawa kuchh v dikhe -> false

if(23){
    console.log("true");
}
else{
    console.log("false");
}

// if else if-else

    if(12>14)
    {
      console.log("if chla");
    }
    else if(10>14)
    {
      console.log("else-if chla");
    }
    else if(13>14)
    {
      console.log("else-if 2 chla");
    }
    else
    {
       console.log("else chla");
    }

    // ternary operator

    // condition ? if true: if false;

    12>14 ? console.log("vivek"): console.log("anii");

    // switch case

    switch(9){
      case 1:
        console.log("case 1");
        break;
      case 2:
        console.log("case 2");
        break;
      case 3:
        console.log("case 3");
        break;
      case 4:
        console.log("case 4");
        break;
      default:
        console.log("default case");
    }


    // LOOPS - repeat krna

    // straightforward loops -> na hi value badalti h na hi printing badalti h

    // dynamic loops -> value bhi badal sakti h r printing v badal sakti h

    // for loop
    /* syntax

    for(satrt; end; change){
    } 
    */

    for(let i = 1; i<6; i++){
      console.log("harsh");
    }

// print 30 to 10
    for(let i = 30; i>9; i--){
      console.log(i);
    }

    // print 12 to 1 except 5 and 7
    for(let i = 12; i>=1; i--)
    {
      if(i === 5 || i === 7) {}
      else{
      console.log(i);}
    }