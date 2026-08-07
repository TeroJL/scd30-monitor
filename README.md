# MQTT Dashboard

A web-based MQTT monitoring dashboard built with **GitHub Pages**, **HiveMQ Cloud**, and **ESP32** devices.

The application connects directly to an MQTT broker over secure WebSockets (WSS) and provides a modern browser interface for monitoring IoT devices in real time. No backend server is required.

---

## Features

### 🏠 Dashboard

A real-time overview of all connected MQTT devices.

- Connection status
- Number of discovered MQTT topics
- Latest SCD30 measurements
- Latest Shelly Plug measurements
- Navigation to all monitoring pages

---

### 🌡️ SCD30 Monitor

Displays indoor air quality measurements from a Sensirion SCD30 sensor.

Measured values:

- CO₂ concentration (ppm)
- Temperature (°C)
- Relative humidity (%)
- Last update timestamp

MQTT Topic

```
scd30/data
```

Example payload

```json
{
  "co2": 533,
  "temperature": 27.6,
  "humidity": 40.5
}
```

---

### 🔌 Shelly Plug S Gen3 Monitor

Displays all MQTT messages published by a Shelly Plug S Gen3.

Features:

- Automatic JSON parsing
- Live MQTT updates
- Hierarchical JSON field viewer
- Easy inspection of all published values

---

### 📡 MQTT Topics Monitor

Automatically discovers every MQTT topic available to the connected client.

For every topic the application displays:

- Topic name
- Message counter
- Last received timestamp
- Latest payload

Every topic is clickable and opens the JSON Viewer.

---

### 📄 JSON Viewer

Displays all messages from a selected MQTT topic.

Features

- Topic selected through URL parameter
- Live updates
- Pretty JSON formatting
- Automatic JSON parsing
- JSON field table
- Message counter
- Last update timestamp

Example

```
json.html?topic=scd30%2Fdata
```

---

## Technologies

### Hardware

- ESP32 (Wemos D1 R32)
- Sensirion SCD30
- Shelly Plug S Gen3
- Shelly Gen3 devices

### Software

- Arduino IDE
- ESP32 Arduino Framework
- HiveMQ Cloud
- MQTT.js
- HTML5
- CSS3
- JavaScript (ES6)
- GitHub Pages

---

## Project Structure

```
mqtt-dashboard/

├── index.html          Dashboard
├── scd30.html          SCD30 Monitor
├── shelly-plug.html    Shelly Plug Monitor
├── topics.html         MQTT Topics Monitor
├── json.html           JSON Viewer
├── favicon.ico
└── README.md
```

---

## MQTT Broker

The application communicates with an MQTT broker using

- MQTT 5
- TLS encryption
- Secure WebSockets (WSS)

---

## Current Features

- ✅ Real-time MQTT monitoring
- ✅ Automatic topic discovery
- ✅ Secure WebSocket connection
- ✅ JSON decoding
- ✅ Nested JSON field viewer
- ✅ Responsive layout
- ✅ Mobile friendly
- ✅ GitHub Pages hosting
- ✅ Multiple device support

---

## Planned Features

- 📈 Historical charts
  - Last hour
  - Last 24 hours
  - Last 7 days
- 🔍 Topic filtering
- 🌙 Dark mode
- 🔔 Alarm notifications
- ⚡ MQTT Publish page
- 🎛 Device control
- 💾 Historical database
- 📤 Export to CSV / JSON
- 👥 User authentication
- 📊 Automatic dashboard cards for discovered devices

---

## Screenshots

Current application pages

- Dashboard
- SCD30 Monitor
- Shelly Plug S Gen3 Monitor
- MQTT Topics Monitor
- JSON Viewer

---

## Future Goals

The long-term goal is to create a lightweight, browser-based MQTT monitoring platform that can monitor any MQTT-enabled IoT device without requiring dedicated desktop software.

Supported device types will include:

- Environmental sensors
- Smart plugs
- Energy meters
- Temperature sensors
- Humidity sensors
- CO₂ sensors
- Shelly devices
- ESP32-based DIY devices

---

## License

This project is released under the MIT License.

Feel free to use, modify and improve it.
