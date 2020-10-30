const EventEmitter = require("events");

class MyEvent extends EventEmitter { }

const e = new MyEvent()

e.on("test", () => {
  console.log("执行test");
})

setInterval(() => {
  e.emit("test")
}, 500);

