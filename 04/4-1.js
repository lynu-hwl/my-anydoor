/**
 * normalize 处理路径
 * join 拼接路径
 * resolve 把相对路径解析为绝对路径,从后向前，若字符以 / 开头，不会拼接到前面的路径(因为拼接到此已经是一个绝对路径)；若以 ../ 开头，拼接前面的路径，且不含最后一节路径；若以 ./ 开头 或者没有符号 则拼接前面路径；
 * relative 返回from到to的相对路径
 * basenamee 获取文件名
 * extname 获取文件扩展名
 * dirname 获取文件夹名
 * parse 解析路径
 * format 路径对象化为字符路径
 */

const path = require("path");
const val = "/user/../local/bin/1.txt";

console.log(path.normalize(val));
console.log(path.join("/C", "content", "1.txt"));
console.log(path.resolve(__dirname, "./content"));
console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));
console.log(path.basename("/local/bin/1.txt"));
console.log(path.extname("/local/bin/1.txt"));
console.log(path.dirname("/local/bin/1.txt"));
console.log(path.parse("/local/bin/1.txt"));
console.log(path.format({ root: '/', dir: '/local/bin', base: '1.txt', ext: '.txt', name: '1' }));

