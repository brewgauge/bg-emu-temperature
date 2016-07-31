'use strict'

var path = require('path')
var sensor = require('./lib')
var minimist = require('minimist')
var argv = minimist(process.argv.slice(2), {
  alias: {
    'config': 'c'
  },
  default: {
    'config': path.join(__dirname, 'config', 'config.json')
  }
})

argv.config = path.resolve(argv.config)
var config = require(argv.config)

sensor(config)
