const spawn = require('cross-spawn')

function createProcess (config) {
  const name = config.name || 'process'
  const tag = `[${name}]`
  let { cmd, args, opts } = config.cmd

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
    p.on('close', (c) => console.log(`process '${name}' exited with code: ${c}`))
  }

  return p
}

module.exports = createProcess