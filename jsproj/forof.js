// for of
const arr=[1,3,2,4,5]
for (const num of arr) {
    // console.log(num)
}

const greetings="hello word"

for (const greet of greetings) {

    if(greet==" ")
    {
        // console.log(`this is empty`)
        continue
    }
    // console.log(`${greet}`)
    
}

//Map 

const map=new Map()
map.set('pk','Pakistan')
map.set('ch','China')
map.set('ru','Pakistan')

// console.log(map)

for (const [key,value] of map) {
    console.log(key, '=',value)
    
}