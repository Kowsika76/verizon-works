//this file is about arrow function




// function getName(){         //define func
//    console.log("kowsi")
   
// }
// getName();          //invoke func

//assigning function to a variable, with that variable only we are invoking a function
let getName=function(){
    console.log("kowsi")
}
getName();


//to reduce further, insted of writing func keyword, ()->it shows that it is a anonyms method, and instead of func keyword use => to say that it is a function

let print =()=>{          //func declarationand definition 
    console.log("kowsika")  //invoke func
}
print();
//or
let prin=()=>"nila"  //one line so remove {}
console.log(prin());     //invoke function

//by default  arrow will return the value 
let add=(a,b,c)=>a+b+c;  //or let add =(q,b)=>{ return(a+b); }
console.log(add(9,10,1));


//max of two numbers
let max=(a,b)=>(a>b)?a:b; 
console.log(max(34,90));