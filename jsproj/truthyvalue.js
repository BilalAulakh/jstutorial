const userEmail=[]

if(userEmail){
console.log('User exists')

}else{
    console.log('user not exist')
}

// falsy value

// false,0,-0,BigInt 0n,"",null,undefined,NaN


// Truthy value

// "0",'false',[],{},function(){}," "

// if(userEmail.length===0){
//     console.log('Array is Empety')
// }

// const obj={}

// if(Object.keys(obj).length===0){
//     console.log('object is empty')
// }

// Nulish Coalescing Operator (??) null Undefined


// let val1;
// val1=5 ?? 10
// val1=null??10
// val1 =undefined ??10
// val1=null??20??50
// console.log(val1)

if(2=='2'){
    console.log('this is true')
}else{
    console.log('this is not true')
}