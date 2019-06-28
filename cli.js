#!/usr/bin/env node

const { spawnSync } = require('child_process');

const peerDeps = require('./peerDeps.json');
const pkg = require('./package.json');

// Log to console
function log(msg) {
  console.log(`\x1b[96m${msg}`);
}

// Log error to console
function error(msg) {
  console.error(`\x1b[91m${msg}`);
}

// Run a command
function runCommand(cmd) {
  log(`Executing "${cmd}"`);

  const result = spawnSync(cmd, {
    stdio: 'inherit',
    shell: true,
  });

  if (result.status !== 0) {
    error(`Command exited with code ${result.status}`);
    process.exit(result.status);
  }
}

// Get the CLI options provided
const options = process.argv
  .slice(2)
  .map(arg => arg.toLowerCase());

// Return if there are unknown options
const unknown = options.filter(arg => !peerDeps[arg]);
if (unknown.length) {
  error(`Unknown arguments "${unknown.join('", "')}"`);
  log(`Possible options are "${Object.keys(peerDeps).join('", "')}"`);
  process.exit(1);
}

// Install dependencies
function install(deps) {
  deps.forEach((dep) => {
    const version = pkg.peerDependencies[dep];
    const command = `npm i ${dep}@${version} -D`;

    runCommand(command);
  });
}

// Install deps
options.forEach((arg) => {
  install(peerDeps[arg]);
});

// Done!
log('Done!');
