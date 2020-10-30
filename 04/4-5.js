/**
 * buf.length Buffer实例长度
 * buf.toString() Buffer实例字符串
 * buf.fill() Buffer实例填充
 * buf.equals() 比较两个Buffer实例的内容是否一致
 * buf.indexOf() 在Buffer实例中找特定内容的位置
 * buf.copy() copy字节
 */

const buf1 = Buffer.alloc(10);
console.log(buf1.length);
console.log(buf1.toString());
console.log(buf1.fill(10, 0, 10));

const buf2 = Buffer.from("123");
const buf3 = Buffer.from("123");
console.log(buf2.equals(buf3));

const buf4 = Buffer.from("456");
console.log(buf4.indexOf("5"));
const buf5 = Buffer.alloc(10);
buf4.copy(buf5, 0, 0, 4)
console.log(buf5.toString());
