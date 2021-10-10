let arr = [4,9,5],arr1=[9,4,9,8,4];
let intersection =arr.filter((ele)=>{
   return arr1.includes(ele);
})
console.log([...new Set(intersection)].reverse());