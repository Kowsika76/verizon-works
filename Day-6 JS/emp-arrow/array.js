//linear search in array

// let arr=new Array(5);
// arr[0]=143;
// arr[1]=123;
// arr[2]=56;
// arr[3]=23;
// arr[4]=45;
// console.log(arr[i]);

let arr=[67,98,45,67,21];
let key=908;
for(var i=0;i<arr.length;i++){
    if(arr[i]==key){
        console.log(i +" is found");
        break;
    }
if(i==arr.length)
    console.log("not found");
}

//converting to method
function lin_search(){
    let arr=[67,98,45,67,21];
let key=908;
for(var i=0;i<arr.length;i++){
    if(arr[i]==key){
        console.log(i +" is found");
        break;
    }
if(i==arr.length)
    console.log("not found");
}
console.log(arr.includes(key));
}
lin_search();

//or
let arr1=[67,98,45,67,21];
console.log(arr1.includes(67));   //linear search
console.log(arr1.length);
console.log(arr1.slice(0, 3));  //3 is exclusive
arr1.push(44);         //it will added to end   of array
console.log(arr1);      //print the array
console.log(arr1.sort());
console.log(arr1.pop());
arr1.splice(1,2,65);   //1->index,2->how many elements need to be replaced, 65->replaced value

console.log(arr1);
//try -with method
arr1.shift();

console.log(arr1);
arr1.unshift(11);
console.log(arr1);

//try-flat(it takes 2d array and convert into single dimensional array) and join, concat

let a1=[1,2,3,45,67];
let b1=[11,12,13,14];
console.log(a1.concat(b1));
c1=[...a1,...b1];    //spread operator(...) for a and b=>it will spread a1 and b1 in c1

console.log(c1);
c1=[76,84,87,...a1,...b1];  
console.log(c1);
 let ar1=[[74,6,7,7],[7,8,9,3]];
 console.log(ar1);
 console.log(ar1.flat());    //2d changes to 1d (inside single [])



//instead of 
//function lin_search(){

//}

//use this 

 //let lin_search=()=>{

 //}

//var can be used inside that scope only but let used outside the scope also
//const can be used to modify the value in array (i.e num can be modified on same refrence and variable location) but cannot be reassigned in array
//in single value we cannot modify the value using const
//The variables that are defined with var statement have function scope.	
//The variables that are defined with let statement have block scope.


 //function fun()