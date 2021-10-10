const revInt = (num) => {
let myRevNum = num.toString().split('').reverse().join('');
if(myRevNum.endsWith("-")){
    myRevNum = "-" + myRevNum;
    return parseInt(myRevNum);
}else{
    return parseInt(myRevNum);
}

};
console.log(revInt(-7895));