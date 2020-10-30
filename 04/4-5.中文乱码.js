// const buf = Buffer.from("中文字符串！");
// for (let i = 0; i < buf.length; i += 5) {
//   const b = Buffer.alloc(5);
//   buf.copy(b, 0, i)
//   console.log(b.toString());
// }

// const buf = Buffer.from("中文字符串！");
// let takeOver = Buffer.alloc(0);
// for (let i = 0; i < buf.length; i += 5) {
//   const b = Buffer.alloc(5);
//   buf.copy(b, 0, i)
//   takeOver = Buffer.concat([takeOver, b])
// }
// console.log(takeOver.toString());

const StringDecoder = require("string_decoder").StringDecoder;
const decoder = new StringDecoder("utf8");
const buf = Buffer.from("中文字符串！");
for (let i = 0; i < buf.length; i += 5) {
  const b = Buffer.alloc(5);
  buf.copy(b, 0, i)
  console.log(decoder.write(b));
}