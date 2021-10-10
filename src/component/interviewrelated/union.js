const arr = [2,4,5,3];
const arr1 = [3,7,2,9];
const getunion = () => {
    let resarr =[...arr,...arr1];
    return [...new Set(resarr)];
}
console.log(getunion().sort().reverse());
