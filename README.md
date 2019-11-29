# create-process
![enter image description here](https://img.shields.io/npm/dt/create-process)

Small utility library to help your create and manage node processes more easily.
(work in progress)

## Installation
```shell
npm install --save create-process
```

## Usage
```javascript
const createProcess = require('create-process')

// Simple usage:
const p = createProcess('npm run build')

// Advanced usage:
const p = createProcess({
  cmd: 'npm',
  args: ['run', 'build'],
  opts: {
    cwd: path.join(__dirname, '..')
  }
})

// Killing your process:
p.kill()
```
