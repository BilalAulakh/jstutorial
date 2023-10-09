const newNums=[2,6,4,3,1,8,9]

// const numsarray=newNums.map((num)=>{
//     return num
// })

const numsarray=newNums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)

console.log(numsarray)