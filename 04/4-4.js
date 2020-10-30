/**
 * Buffer.byteLength() 字节长度
 * Buffer.isBuffer() 是否是Buffer
 * Buffer.concat() param:Array,拼接Buffer
 */

console.log(Buffer.byteLength("我"));

console.log(Buffer.isBuffer(Buffer.alloc(123)));

const val1 = Buffer.from("l")
const val2 = Buffer.from("love")
const val3 = Buffer.from("you")
const val = Buffer.concat([val1, val2, val3])
console.log(val.toString());
