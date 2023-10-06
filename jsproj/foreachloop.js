const arays=['amir','bilal','qasim','yousaf']

// arays.forEach(function (val){
//     console.log(val)
// });

// arays.forEach((val)=>{
// console.log(val)
// })

// function printme(val){
// console.log(val)
// }

// arays.forEach(printme)

// arays.forEach((val,index,arr)=>{
// console.log(val,index,arr)
// })

const mycoding=[
    {
        name:'bilal',
        age:27
    },
    {
        name:'saif',
        age:28
    },
    {
        name:'amir',
        age:30
    },
    {
        name:'asif',
        age:33
    }
]
mycoding.forEach((item)=>{
    console.log(item['name'])
})
