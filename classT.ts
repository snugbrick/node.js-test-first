class classt {
  method1() {
    let list = [4, 5, 6];
    let result = list.every((val, idx, array) => {
      console.log(val);
      return true;
    });
    return result;
  }
}
function aFun() {
  console.log("aFun");
}
console.log(new classt().method1());
aFun();

var msg = function () {
  console.log("1");
};
var msg2 = {
  function() {
    console.log("2");
  },
};
msg();
msg2.function();
