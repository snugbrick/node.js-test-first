var hello = "Hello World!";
console.log(hello);

class Site { 
    name() { 
       console.log("Genshin") 
    } 
 } 
 var obj = new Site(); 
 obj.name();
 
 var Site1 = /** @class */ (function () {
    function Site1() {
    }
    Site1.prototype.name = function () {
        console.log("yuan shen");
    };
    return Site1;
}());
var obj1 = new Site1();
obj1.name();