# MQTT IoT Monitoring Dashboard

A web-based MQTT monitoring dashboard built with **GitHub Pages**, **HiveMQ Cloud** and **ESP32** devices.

The project provides a real-time browser interface for monitoring MQTT topics and IoT devices without requiring a backend server. Data is received directly from HiveMQ Cloud over a secure WebSocket connection (WSS).

---

## Features

### 🌡️ SCD30 Indoor Air Quality Monitor

Displays real-time measurements from a Sensirion SCD30 sensor.

Measured values:

- CO₂ concentration (ppm)
- Temperature (°C)
- Relative humidity (%)
- Last update time

---

### 🔌 Shelly Plug S Gen3 Monitor

Displays all MQTT data published by a Shelly Plug S Gen3.

Features:

- Automatic JSON parsing
- Displays all MQTT fields
- Nested JSON objects are flattened into a readable table
- Live updates

---

### 📡 MQTT Topics Monitor

A browser-based MQTT Topic Explorer.

Features:

- Subscribe to all topics (`#`)
- Automatically discovers new MQTT topics
- Displays:
  - Topic name
  - Message counter
  - Last update time
  - Latest payload
- Click any topic to inspect it in detail

---

### 📄 JSON Viewer

Displays all messages from a selected MQTT topic.

Features:

- Topic selected through URL parameter
- Pretty JSON view
- Automatic JSON parsing
- Table view of every JSON field
- Live message counter
- Last received timestamp

Example:

```
json.html?topic=scd30%2Fdata
```

---

## Hardware

- Wemos D1 R32 (ESP32)
- Sensirion SCD30 CO₂ Sensor
- Shelly Plug S Gen3
- Shelly Gen3 devices
- Wi-Fi network

---

## Software

- Arduino IDE
- ESP32 Arduino Framework
- HiveMQ Cloud
- MQTT.js
- HTML
- CSS
- JavaScript
- GitHub Pages

---

## MQTT Broker

HiveMQ Cloud

Protocol:

- MQTT over TLS
- Secure WebSockets (WSS)

---

## Example MQTT Message

Topic

```
scd30/data
```

Payload

```json
{
  "co2": 533,
  "temperature": 27.57,
  "humidity": 40.57
}
```

---

## Project Structure

```
/
├── index.html            SCD30 dashboard
├── shelly-plug.html      Shelly Plug monitor
├── topics.html           MQTT Topic Explorer
├── json.html             Topic JSON Viewer
├── favicon.ico
└── README.md
```

---

## Current Capabilities

- ✅ Secure connection to HiveMQ Cloud
- ✅ MQTT over WebSockets
- ✅ Real-time updates
- ✅ Automatic topic discovery
- ✅ JSON decoding
- ✅ Supports multiple MQTT devices
- ✅ GitHub Pages hosting
- ✅ Mobile friendly interface

---

## Planned Features

- Historical charts
  - 1 hour
  - 24 hours
  - 7 days
- Search topics
- Dark mode
- MQTT publish support
- Device control (Shelly ON/OFF)
- Historical database integration
- Export to CSV / JSON
- Dashboard with multiple device cards
- User authentication

---

## Screenshots

Current pages:

- SCD30 Indoor Air Quality Monitor
- Shelly Plug S Gen3 Monitor
- MQTT Topics Monitor
- JSON Viewer

---

## License

This project is released as open source for educational, research and hobby use.
