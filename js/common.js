/*
==========================================================
 MQTT Dashboard
 Common JavaScript Library
==========================================================
*/

"use strict";

/* ==========================================================
   MQTT Settings
========================================================== */

const MQTT = {

    broker: localStorage.getItem("mqttBroker"),
    username: localStorage.getItem("mqttUsername"),
    password: localStorage.getItem("mqttPassword"),

    client: null,

    topicHandlers: new Map(),

    allHandlers: []

};

/* ==========================================================
   Login check
========================================================== */

function requireLogin() {

    if (
        !MQTT.broker ||
        !MQTT.username ||
        !MQTT.password
    ) {

        if (!location.pathname.endsWith("login.html")) {

            location.href = "login.html";

        }

        return false;

    }

    return true;

}

/* ==========================================================
   MQTT Connect
========================================================== */

function connectMQTT() {

    if (!requireLogin())
        return;

    MQTT.client = mqtt.connect(MQTT.broker, {

        clientId:
            "MQTTDashboard_" +
            Math.random().toString(16).substring(2),

        username: MQTT.username,

        password: MQTT.password,

        clean: true,

        reconnectPeriod: 3000

    });

    MQTT.client.on("connect", () => {

        setStatus("🟢 Connected");

        MQTT.client.subscribe("#");

    });

    MQTT.client.on("reconnect", () => {

        setStatus("🟡 Reconnecting...");

    });

    MQTT.client.on("offline", () => {

        setStatus("🟠 Offline");

    });

    MQTT.client.on("close", () => {

        setStatus("🔴 Disconnected");

    });

    MQTT.client.on("error", (err) => {

        setStatus("🔴 " + err.message);

    });

    MQTT.client.on("message", (topic, message) => {

        dispatchMessage(
            topic,
            message.toString()
        );

    });

}

/* ==========================================================
   Subscribe exact topic
========================================================== */

function subscribeTopic(topic, callback) {

    if (!MQTT.topicHandlers.has(topic)) {

        MQTT.topicHandlers.set(topic, []);

    }

    MQTT.topicHandlers
        .get(topic)
        .push(callback);

}

/* ==========================================================
   Subscribe all topics
========================================================== */

function subscribeAll(callback) {

    MQTT.allHandlers.push(callback);

}

/* ==========================================================
   Dispatch MQTT message
========================================================== */

function dispatchMessage(topic, payload) {

    if (MQTT.topicHandlers.has(topic)) {

        MQTT.topicHandlers
            .get(topic)
            .forEach(callback => {

                callback(topic, payload);

            });

    }

    MQTT.allHandlers.forEach(callback => {

        callback(topic, payload);

    });

}

/* ==========================================================
   Disconnect
========================================================== */

function disconnectMQTT() {

    if (MQTT.client) {

        MQTT.client.end(true);

    }

}

/* ==========================================================
   Logout
========================================================== */

function logout() {

    disconnectMQTT();

    localStorage.removeItem("mqttBroker");
    localStorage.removeItem("mqttUsername");
    localStorage.removeItem("mqttPassword");

    location.href = "login.html";

}

/* ==========================================================
   Helpers
========================================================== */

function parseJSON(payload) {

    try {

        return JSON.parse(payload);

    }

    catch {

        return null;

    }

}

function currentTime() {

    return new Date().toLocaleTimeString();

}

function setStatus(text) {

    const e = document.getElementById("status");

    if (e) {

        e.textContent = text;

    }

}

function flattenObject(obj, prefix = "", result = {}) {

    for (const key in obj) {

        const value = obj[key];

        const name =
            prefix ?
            prefix + "." + key :
            key;

        if (
            value &&
            typeof value === "object" &&
            !Array.isArray(value)
        ) {

            flattenObject(
                value,
                name,
                result
            );

        }

        else {

            result[name] = value;

        }

    }

    return result;

}
