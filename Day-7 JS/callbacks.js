//normal function
// let sayhello=function(name){
//     console.log("Hello"+name+"!");
// }

//arrow function
// let sayHello =(name) => {
//     console.log(`Hello `+name);
// }

//1 param so no {}
//let sayHellos=name => console.log("Hello "+name);

let callsayhello=(sayHellos) => {     //declaring function
    let myname="nila";
    sayHellos(myname);           //invoke function
}

//callsayhello(sayHellos);         //invoking sayHellos method with callsayhello func, callback
//or-if there is only one line
callsayhello(myname=>console.log("Hello "+myname+"!"));



//cube of a num

let cube=(n) =>
{
    console.log(n*n*n);
}
cube(3);
//function with return

//let printfruit=(fruit)=>console.log(fruit)
let fruits=["apple", "banana","orange","mushrooms"]
fruits.forEach(fruits => console.log(fruits))  //writing line no.34 inside foreach method


//print array
let nums=[54,76,87,85,90,43]
nums.forEach(n=>console.log(n));

//print only  even num in array(concept of filtering used here)=even numbers with call back
let num=[54,76,87,85,90,43]
num.forEach(n=>{
    if(n%2==0)
    console.log(n);
});

//sum of an array
let s=0;
num.forEach(n=>s=s+n)
console.log(s);

//squaring nums of an array
num.forEach(n=>{
    s=s+n*n;    //check this line
})
console.log(s);



//max of two number
//sum of two numbers
//sub,mul,div,printname
//greet,cube,square, power,fact,sumofdigits