module.exports = function solveEquation(equation) {
  
  //var s = "2 * x^2 - 10 * x + 12";
  var s=equation;
  var l=s.length;
  var minus=1,t,abc,a=0,b=0,c=0,predt=0,k=0;
  do
  {
     predt=0;
    
    while(s[k]=='0'||s[k]=='1'||s[k]=='2'||s[k]=='3'||s[k]=='4'||s[k]=='5'||s[k]=='6'||s[k]=='7'||s[k]=='8'||s[k]=='9')
    {
      t=Number(s[k]);
      abc=predt*10+t;
      predt=abc;
      k++;
    }
   
     if(s[k]=='x')
         {
          if(s[++k]=='^')
          {
            a=abc*minus;
            k++;
          }
          else
            b=abc*minus;
         // alert("iam here");
          minus=1;
         }
      if(s[k]=='-')
          minus=-1;
    k++;
  }
  while(k<l);
c=abc*minus;
//alert("a=");
//alert(a);
//alert(b);
console.log(c);
 // c=abc*minus;
var d=Math.pow(b,2)-4*a*c;
var t=Math.sqrt(d)
var s=[];
var x1,x2,t1,t2;
if(d>0)
{
  x1=(b*(-1)-t)/(2*a);
x2=(b*(-1)+t)/(2*a);

x1=x1*1;
x2=x2*1;
t1=Math.round(x1);
t2=Math.round(x2);
//s[0]=t1;
//s[1]=t2;
s.push(t2);
s.push(t1);
}
if( d=='0')
{
x1=(b*(-1))/(2*a);
x1=x1*1;
t1=Math.round(x1);
s[0]=t1;
}

return s;
}
