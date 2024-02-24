class Employee{
    constructor(ename,eid,salary){
        this.ename =ename;
        this.eid =eid;
        this.salary =salary;
    }
}
function insertEmp(){
//capture the data
    ename=document.getElementById("ename").value;
    eid=document.getElementById("eid").value;
    salary=document.getElementById("salary").value;
    // console.log(ename+" "+eid+" "+salary);
    emp=new Employee(ename,eid,salary);
    showEmp(emp);
}
//arrow function
// let insertEmp=()=>{
//     ename=document.getElementById("ename").value;
//     eid=document.getElementById("eid").value;
//     salary=document.getElementById("salary").value;
//     emp=new Employee(ename,eid,salary);
//     showEmp(emp);
// }

function showEmp(emp){
    
const arr=document.getElementsByTagName("input");
let str=" ";
for(let i=0;i<arr.length;i++)
str=str+arr[i].value+" "+"<br>";
document.write("<h2>str</h2>");

/* console.log(emp.eid);
console.log(emp.salary);
console.log(emp.ename); */
}

