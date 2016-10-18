'use strict'

const mqtt = require('mqtt')
const stochasm = require('stochasm')
const generator = stochasm({min: 1000, max: 2000}) // TODO: adjust min/max, if needed
const randomBoard = stochasm({min: 1, max: 2})
const randomChannel = stochasm({min: 1, max: 2})

var client

const generateData = opts => ({
  remote_ip: opts.remote_ip,
  board_id: Math.round(randomBoard.next()),
  channel_id: Math.round(randomChannel.next()),
  adc_value: Math.round(generator.next())
})

const sendData = opts => () => {
  const data = generateData(opts)
  console.log(`Publishing ${JSON.stringify(data)} to MQTT ${opts.url} / ${opts.topic}`)
  client.publish(opts.topic, JSON.stringify(data))
}

/**
 * Mock Sensor
 */
function sensor (opts, callback) {
  client = mqtt.connect(opts.url)
  client.subscribe(opts.topic)
  client.on('connect', () => setInterval(sendData(opts), opts.interval))
}

module.exports = sensor
