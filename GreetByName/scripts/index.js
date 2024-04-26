"use strict"

window.onload = init;

function init() {

    const onGreetUserBtnClicked = document.getElementById("greetBtn");
    
    onGreetUserBtnClicked.onclick = onClickMessage;

}

function onClickMessage () {

    var userNameInput = document.getElementById("nameField");

    var greetName = userNameInput.value;
    
    alert ("Hello " + greetName)

}
