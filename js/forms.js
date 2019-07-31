"use strict";

window.onload = function(){
    alert("loaded");
};


// let inputs = document.querySelectorAll("form input");

// for(let i=0; i< inputs.length-1; i++){
//     inputs[i].addEventListener("blur", function(){
//         if(this.value != ""){
//            this.nextElementSibling.removeAttribute("disabled");
//         }
        
//     });
// }



function validateForm(){
    let input = document.querySelector("form input");
    
    if(input.value == ""){
        input.nextElementSibling.innerHTML = "input bosh ola bilmez";
        input.style.borderColor = 'red';
        return false;
    }

    if( isNaN(input.value)){
        input.nextElementSibling.innerHTML = "yalniz eded olmalidir";
        input.style.borderColor = 'red';
        return false;
    }

    let pattern = /^\d{1}\d{5}?$/;
    let match = pattern.test(input.value);

    console.log(match);
    
    
    return true;
}
