const myNums=[1,3,4]

// const mySum=myNums.reduce(function(acc,currval){
//     return acc+currval
// },0)


const mySum=myNums.reduce((acc,currval)=>{
    return acc+currval
},0)
console.log(mySum)