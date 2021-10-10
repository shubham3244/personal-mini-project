let isPrime =true;
var num =12;


for(let i =2;i<num;i++){
    if(num%i==0){
      isPrime = false;
    };
}
if(isPrime==false)
{
    console.log(`${num} is a composite number`);
}else{
    console.log(`${num} is a prime number`);
}
