
const revValue = (num) => {
    let myRevNum = num.toString().split('').reverse().join('');
  let myStriVal =num.toString();
   if(myRevNum==myStriVal) {
       console.log("Pallindrome");
   }
   else{
       console.log("not a pallindrome");
   }
    };
    revValue("aoa");