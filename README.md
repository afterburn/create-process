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
const process = createProcess('npm run build')

// Advanced usage:
const process = createProcess({
  name: 'webpack',
  cmd: 'npm',
  args: ['run', 'build'],
  opts: {
    cwd: path.join(__dirname, '..')
  }
})
```
