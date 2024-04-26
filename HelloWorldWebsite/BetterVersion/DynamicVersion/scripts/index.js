"use strict";

window.onload = init;

function init() {

    const helloBtnElemenet = document.getElementById("helloBtn");
    helloBtnElemenet.onclick = onHelloClicked;

}

function onHelloClicked() {
    alert("Hi there!");

}