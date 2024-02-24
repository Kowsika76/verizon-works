console.log("nila");
var nu = 456;
console.log(nu);
var value = true;
console.log(value);
var myname = "nila";
console.log(myname);
//not possible to give diff data type:
// myname=7;
// console.log(myname);
//array-push,pop,delete all are possible
var arr = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
console.log(arr);
arr.push(8);
console.log(arr);
var emp = {
    ename: "nila",
    eid: 23,
    esal: 50000
};
console.log(emp);
function method(num) {
    console.log(num);
}
method(1);
//not possible
//method("kowsi");
//to assign datatype to variable externally ,if we are using function.
var num1;
//q-class student=>attributes-name,id,mark entry sub,total,avg,print res-first,second,third class(func in arrow)
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
var s1 = new Student();
s1.name = "nila";
s1.id = 23;
s1.s1Mrk = 45;
s1.s2Mrk = 67;
s1.s3Mrk = 89;
s1.s4Mrk = 10;
s1.total = s1.s1Mrk + s1.s2Mrk + s1.s3Mrk + s1.s4Mrk;
console.log(s1.total);
s1.avg = s1.total / 4;
console.log(s1.avg);
var calculateResult = function (avg) {
    if (avg > 60) {
        return "First";
    }
    else if (avg < 40) {
        return "Third";
    }
    else if (avg >= 40 && avg <= 60) {
        return "Second";
    }
    else {
        return "Fail";
    }
};
s1.res = calculateResult(s1.avg);
console.log(s1.res);
// if(s1.avg>60)
//  console.log("first")
// else if(s1.avg<40)
//     console.log("third")
// else if(s1.avg<60&&s1.avg>40)
// console.log("second")
// else
// console.log("fail")
//max of two num
//sqr of num in ts using arrow
//arrow,callback and methods in ts
//first go to tsc filame.ts then go to node filename.js
//try let,var,const
//push -add element at last like stack- but it won't possible in js, in ts its possible(but with same datatype we should do)
//both js and ts are inter connected, if u do modification in ts it will also reflect in js file
//class classname- is also an object here not class, and we cannot change the strcuture of the object 
//same method can take different datatype arguments of argumennts in js but not in ts
//we should specify the datatype externally, to take data from user
//ts-it is strictly typed
//convert string array into upper case string and lower case string
var arrNames = ["Nila", "Kowsi", "Vicky", "Ayushi"];
arrNames.forEach(function (arrName) { return console.log(arrName.toUpperCase()); });
arrNames.forEach(function (arrNam) { return console.log(arrNam.toLowerCase()); });
