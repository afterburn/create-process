const Process = require('./lib/process');

function parseCommand (str) {
  const config = {};
  const strData = str.split(' ');
  config.cmd = strData.shift();
  config.args = strData;
  config.opts = { cwd: process.cwd() };
  return config;
}

function createProcess (config) {
  if (typeof config === 'string') {
    config = parseCommand(config);
  }

  let { cmd, args, opts } = config;

  if (!args) {
    args = [];
  }

  if (!opts) {
    opts = {};
  }

  const p = new Process(cmd, args, opts);
  p.start();
  return p;
}

module.exports = createProcess;