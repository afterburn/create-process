const spawn = require('cross-spawn')

function parseCommand (str) {
  const config = {}
  const strData = str.split(' ')
  config.cmd = strData.shift()
  config.args = strData
  config.opts = { cwd: process.cwd() }
  return config
}

function createProcess (config) {
  if (typeof config === 'string') {
    config = parseCommand(config)
  }

  const name = config.name
  const tag = `[${name}]`
  let { cmd, args, opts } = config

  if (!args) {
    args = []
  }

  if (!opts) {
    opts = {}
  }

  const p = spawn(cmd, args, opts)
  if (name) {
    p.stdout.on('data', (data) => console.log(tag, data.toString().trim()))
    p.stdout.on('error', (err) => console.log(tag, err.toString().trim()))
    p.on('error', (err) => console.log(tag, err))
    p.on('close', (c) => console.log(`process '${name}' exited with code: ${c}`))
  } else {
    p.stdout.on('data', (data) => console.log(data.toString().trim()))
    p.stdout.on('error', (err) => console.log(err.toString().trim()))
    p.on('error', (err) => console.log(err))
    p.on('close', (c) => console.log(`process exited with code: ${c}`))
  }

  return p
}

module.exports = createProcess