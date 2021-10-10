let x,y;
    x=0;y=1;
    let fibo=[];
    fibo[1] =x;
    fibo[2] =y;
    for(let i=1;i<=5;i++)
{ 
fibo[i+2] = fibo[i] + fibo[i+1];
console.log(fibo[i]);
}

 