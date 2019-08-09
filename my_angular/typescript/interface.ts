interface Customer
{
    name:string;
    age:number;
    phone:number;
}

let customers:Customer[]=[];
customers[0]={name:`amit`,age:40,phone:9654536524};
customers.push({name:`sumit`,age:30,phone:8256352774});

for(let c of customers)
{
    console.log(c);
}