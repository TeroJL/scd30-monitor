"use strict";

const DEFAULT_BROKER =
    "wss://220eb1c6c03d48fea06df6599189b756.s1.eu.hivemq.cloud:8884/mqtt";

const brokerInput = document.getElementById("broker");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

brokerInput.value =
    localStorage.getItem("mqttBroker") || DEFAULT_BROKER;

usernameInput.value =
    localStorage.getItem("mqttUsername") || "";

passwordInput.value =
    localStorage.getItem("mqttPassword") || "";

document
    .getElementById("loginForm")
    .addEventListener("submit", saveSettings);

function saveSettings(event) {

    event.preventDefault();

    localStorage.setItem(
        "mqttBroker",
        brokerInput.value.trim()
    );

    localStorage.setItem(
        "mqttUsername",
        usernameInput.value.trim()
    );

    localStorage.setItem(
        "mqttPassword",
        passwordInput.value
    );

    location.href = "index.html";

}
