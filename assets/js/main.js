
// output
const body=document.querySelector("body")
const output=document.getElementById("output");

// Inputs

const inputRed=document.getElementById("rangeRed");
const inputGreen=document.getElementById("rangeGreen");
const inputBlue=document.getElementById("rangeBlue");


function changeColor(){
    let color =`rgb(${inputRed.value},${inputGreen.value},${inputBlue.value})`;
    body.style.backgroundColor= color;
    output.innerHTML= color;
}










