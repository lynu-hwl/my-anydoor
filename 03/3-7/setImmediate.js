setImmediate(() => {
  console.log("setImmediate");
})

setTimeout(() => {
  console.log("setTimeout");
}, 0)

process.nextTick(() => {
  console.log("process.nextTick");
})

/**
 * process.nextTick() 当前队列尾部
 * setTimeout 当前队列结束后，下一个队列开始前
 * setTimmediate 下一个队列头部
 */