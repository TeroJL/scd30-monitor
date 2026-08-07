"use strict";

const topicSet = new Set();

connectMQTT();

subscribeAll(updateDashboard);

function updateDashboard(topic, payload) {

    topicSet.add(topic);

    document.getElementById("topics").textContent =
        topicSet.size;

    const data = parseJSON(payload);

    if (!data)
        return;

    if (topic === "scd30/data") {

        document.getElementById("temperature").textContent =
            data.temperature.toFixed(1) + " °C";

        document.getElementById("humidity").textContent =
            data.humidity.toFixed(1) + " %";

        document.getElementById("co2").textContent =
            data.co2 + " ppm";

        document.getElementById("scdtime").textContent =
            currentTime();

    }

    if (topic.endsWith("/events/rpc")) {

        const sw = data.params?.["switch:0"];

        if (!sw)
            return;

        document.getElementById("power").textContent =
            (sw.apower ?? 0).toFixed(1) + " W";

        document.getElementById("voltage").textContent =
            sw.voltage ?? "-";

        document.getElementById("current").textContent =
            sw.current ?? "-";

        document.getElementById("relay").textContent =
            sw.output ? "ON" : "OFF";

        document.getElementById("plugtime").textContent =
            currentTime();

    }

}
