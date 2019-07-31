"use strict";


const button = document.querySelector("#ajax-button");
const pElem = document.querySelector("#result");

button.addEventListener("click", ajaxRequest);
button.addEventListener("click", showMessage);

function showMessage(){
    console.log("showMessage clicked");
    
}

function ajaxRequest(){
    let request = new XMLHttpRequest();
    
  
    request.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
    request.send();


    request.onreadystatechange = function(){
        if(request.readyState == 4 && request.status == 200){
            let resObj =  JSON.parse(request.responseText);
            console.log(resObj.length);
            console.log(resObj[0]);

        }
    };
}