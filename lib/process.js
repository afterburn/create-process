const spawn = require('cross-spawn')

class Process {
  constructor (cmd, args, opts) {
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
    return p;
  }

  kill () {
    this.instance.kill();
  }
}

module.exports = Process;