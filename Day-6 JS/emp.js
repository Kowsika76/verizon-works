class Employee{
    constructor(ename,eid,salary){
        this.ename =ename;
        this.eid =eid;
        this.salary =salary;
    }
}

function getEmployee(){
let emp1 = new Employee('Rahul',123456,10000);
console.log(emp1.eid);
console.log(emp1.salary);
console.log(emp1.ename);
}

