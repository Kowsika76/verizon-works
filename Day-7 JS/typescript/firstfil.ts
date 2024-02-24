console.log("nila");
let nu=456;
console.log(nu);
let value=true;
console.log(value);
let myname="nila";
console.log(myname);

//not possible to give diff data type:
// myname=7;
// console.log(myname);

//array-push,pop,delete all are possible
let arr=[7,8,9,10,11,12,13,14,15,16];
console.log(arr);
arr.push(8);
console.log(arr);


let emp={
    ename:"nila",
    eid:23,
    esal:50000
}
console.log(emp);

function method(num:number){
 console.log(num);
}
method(1)
//not possible
//method("kowsi");

//to assign datatype to variable externally ,if we are using function.
let num1:number;

//q-class student=>attributes-name,id,mark entry sub,total,avg,print res-first,second,third class(func in arrow)
class Student {
    name: string;
    id: number;
    s1Mrk: number;
    s2Mrk: number;
    s3Mrk: number;
    s4Mrk: number;
    
    total: number;
    avg: number;
    res:string;
    }

   
    let s1=new Student();
    s1.name="nila";
    s1.id=23;
    s1.s1Mrk=45;
    s1.s2Mrk=67;
    s1.s3Mrk=89;
    s1.s4Mrk=10;
    s1.total=s1.s1Mrk+s1.s2Mrk+s1.s3Mrk+s1.s4Mrk;
    console.log(s1.total);
    s1.avg=s1.total/4;
    console.log(s1.avg);

    const calculateResult = (avg: number)=> {
        if (avg > 60) {
            return "First";
        } else if (avg < 40) {
            return "Third";
        } else if (avg >= 40 && avg <= 60) {
            return "Second";
        } else {
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
let arrNames=["Nila","Kowsi","Vicky","Ayushi"]
arrNames.forEach(arrName =>console.log(arrName.toUpperCase()));
arrNames.forEach(arrNam =>console.log(arrNam.toLowerCase()));