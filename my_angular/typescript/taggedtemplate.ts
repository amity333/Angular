var ename:string="amit";
var age:number=40;
function mytag(str1,str2,str3)
{
    var s1=str1[0];
    var s2=str1[1];
  // var s3=str3[2];
    var agestr;

    if(str3>18)
    {
        agestr=`adult`;
    }
    else
    {
        agestr="child";
    }

    return `${s1}${str2}${s2}${str3} ${agestr}`
}

  var output=mytag`That${ename} is ${age}`
  console.log(output);