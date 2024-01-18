var buffer = Buffer.from("genshin", "utf-8")

const buf2 = Buffer.alloc(10, 1);

const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf);

console.log(json);

const copy = JSON.parse(json, (key, value) => {
  return value && value.type === 'Buffer' ?
    Buffer.from(value.data) :
    value;
});

var buffer1 = Buffer.from('genshin');
var buffer2 = Buffer.from(' impact');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3: " + buffer3.toString());

console.log(copy);

buffer.write("impact ")
console.log(buffer.toString())