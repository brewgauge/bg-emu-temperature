# sensors-emulator
It's a MQTT client that emulates the arduino sensors, sending `sensorMessages` to a MQTT broker.

## Usage
-----------
```
npm start
```
The messages produced are in the form:

```
  var sensorMessage = {
    remote_ip: '10.10.10.10',
    board_id: 3,
    channel_id: 2,
    adc_value: 2075
  }
```
The default configuration is in `config/config.json`:

```
{
  "url": "mqtt://test.mosquitto.org",
  "topic": "brewgauge",
  "remote_ip": "10.10.10.10",
  "board_id": 3,
  "channel_id": 2,
  "interval": 1000
}
```
* `interval` is the time interval used to produce the data
* `url` / `topic` are the coordinates of the MQTT broker
* `remote_ip`, `board_id`, `channel_id` are the sensor coordinates, which are produced in the outcoming JSON as-is
* `adc_value` is a random value between `100` and `3000`


You can specify you own configuration using: `-C myconfig.json`

Acknowledgements
----------------

This project was kindly sponsored by [nearForm](http://nearform.com).
