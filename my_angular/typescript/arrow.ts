//normal
function add(x,y)
{
    return x+y;
}

//using arrow

var add1=(x,y)=>x+y;
var add2=(x,y)=>{return x+y};
var add3=(x:number,y:number):number=>{return x+y};

console.log("sum = "+add(10,20));
console.log("sum = "+add1(10,20));
console.log("sum = "+add2(10,20));
console.log("sum = "+add3(10,20));

var printname=(name)=>console.log("welcome "+name);
printname("amit");

var hi=()=>console.log("hi");
hi();