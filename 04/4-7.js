const EventEmitter = require("events");

class MyEvent extends EventEmitter { }

// const e1 = new MyEvent();
// e1.on("error", error => {
//   console.log(error);
// })
// e1.emit("error", new Error("报错了"))

// const fn1 = () => {
//   console.log("fn1");
// }
// const fn2 = () => {
//   console.log("fn2");
// }
// const e2 = new MyEvent();
// e2.on("test", fn1)
// e2.on("test", fn2)

// setInterval(() => {
//   e2.emit("test")
// }, 500);
// setTimeout(() => {
//   e2.removeListener("test", fn1)
// })

const e3 = new MyEvent();
e3.once("test", () => {
  console.log("e3 test");
})
setInterval(() => {
  e3.emit("test")
}, 500);