/**
 * alloc 创建Buffer，默认0填充
 * allocUnsafe 创建Buffer,以旧数据填充
 * from  以string、array为底创建Buffer
 */

const val1 = Buffer.alloc(10);
console.log(val1);
const val2 = Buffer.alloc(10, 1);
console.log(val2);
const val3 = Buffer.allocUnsafe(10);
console.log(val3);
const val4 = Buffer.from("123")
console.log(val4.toString());
const val5 = Buffer.from([1, 2, 3])
console.log(val5);