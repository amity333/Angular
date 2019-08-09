class Employee
{
    empId:number;
    name:string;
    salary:number;
    static noOfEmployees:number=0;

    constructor(empId:number,name:string,salary:number)
    {
        this.empId=empId;
        this.name=name;
        this.salary=salary;
        Employee.noOfEmployees++;
    }

    display()
    {
        console.log("Id : "+this.empId+"\nName : "+this.name+"\nSalary : "+this.salary+"\nTotalcount : "+Employee.noOfEmployees);
    }
}

class Manager extends Employee
{
   noOfReporties:number;
   constructor(empId:number,name:string,salary:number,noOfReporties:number)
   {
       super(empId,name,salary);
       this.noOfReporties=noOfReporties;
   }
   display()
   {
       super.display();
       console.log("No. of Reporties:" +this.noOfReporties);
   }
}

var e1=new Employee(456,"amit",8000);
e1.display();

var m1=new Manager(978,"sumit",9000,5);
console.log("\n");
m1.display();