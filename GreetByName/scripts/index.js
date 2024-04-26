"use strict"

window.onload = init;

function init() {

    const onGreetUserBtn = document.getElementById("greetBtn");
    
    onGreetUserBtn.onclick = onClickMessage;

}

function onClickMessage () {

    var userNameInput = document.getElementById("nameField");

    var greetName = userNameInput.value;

    alert ("Hello " + greetName)

}
