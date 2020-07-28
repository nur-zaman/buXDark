try {
    var style=document.querySelector("#content > style").innerHTML;
document.querySelector("#content > style").innerHTML = style.replace(/!important/g,'');
} catch (error) {
    console.log(error)
    
}
try {
    var headStyle=document.querySelector("head > style").innerHTML;
document.querySelector("head > style").innerHTML=headStyle.replace(/!important/g,'');
} catch (error) {
    console.log(error)
}

try {
    document.querySelector("head > style:nth-child(21)").innerHTML = document.querySelector("head > style:nth-child(21)").innerHTML.replace(/!important/g,'');
} catch (error) {
    console.log(error)
}
try {
    document.querySelector("body > div.window-wrap > style:nth-child(6)").innerHTML = document.querySelector("body > div.window-wrap > style:nth-child(6)").innerHTML.replace(/!important/g,'');
   
} catch (error) {
    console.log(error)
}
// Removes !important form the code , used try-catch as a quick fix to the error 
