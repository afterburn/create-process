const spawn = require('cross-spawn')
const EventEmitter = require('events').EventEmitter

class Process extends EventEmitter {
  constructor (cmd, args, opts) {
    super()
    this.cmd = cmd;
    this.args = args;
    this.opts = opts;
    this.instance = null;
  }

  start () {
    const { cmd, args, opts } = this;
    const p = this.instance = spawn(cmd, args, {
      ...opts,
      stdio: [process.stdin, process.stdout, process.stderr]
    });
    p.on('close', c => this.emit('close', c))
    return p;
  }

  kill () {
    this.instance.kill();
  }
}

module.exports = Process;