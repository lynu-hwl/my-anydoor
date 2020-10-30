const { argv, argv0, execArgv, execPath } = require("process");

console.log(argv, "argv");
console.log(argv0, "argv0");
console.log(execArgv, "execArgv");
console.log(execPath, "execPath");

// [
//   '/usr/local/bin/node',
//   '/Users/hwl/Desktop/project/Node.js/03/3-7/index.js',
//   '--test',
//   'a=1',
//   'b=2'
// ] argv
// node argv0
// [ '--inspect' ] execArgv
// /usr/local/bin/node execPath