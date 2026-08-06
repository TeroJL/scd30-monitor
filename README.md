# SCD30 Indoor Air Quality Monitor

A real-time indoor air quality monitoring system built with an ESP32 (Wemos D1 R32),
a Sensirion SCD30 sensor and HiveMQ Cloud.

The project publishes CO₂ concentration, temperature and relative humidity over MQTT.
A responsive web application hosted on GitHub Pages subscribes to the MQTT topic through
a secure WebSocket connection and displays the measurements in real time.

## Features

- Real-time monitoring of:
  - CO₂ concentration (ppm)
  - Temperature (°C)
  - Relative humidity (%)
- MQTT communication via HiveMQ Cloud
- Secure WebSocket connection (WSS)
- Responsive web interface for desktop and mobile devices
- Hosted free with GitHub Pages

## Hardware

- Wemos D1 R32 (ESP32)
- Sensirion SCD30 CO₂ sensor
- Wi-Fi network

## Software

- Arduino IDE
- ESP32 Arduino framework
- HiveMQ Cloud
- MQTT.js
- HTML / CSS / JavaScript
- GitHub Pages

## MQTT Message Format

Topic:

```
scd30/data
```

Payload:

```json
{
  "co2": 605,
  "temperature": 27.1,
  "humidity": 44.6
}
```

## Project Structure

```
/
├── index.html      Web application
├── favicon.ico
└── README.md
```

## Roadmap

Planned improvements include:

- Historical charts (1 hour, 24 hours, 7 days)
- CO₂ quality indicators
- Alarm notifications
- Multiple sensor support
- Dark mode
- Historical database (InfluxDB or similar)
- Data export

## License

This project is open source and intended for educational and hobby use.
