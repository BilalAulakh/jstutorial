// Object literals
const mysym=Symbol('key1')
const object={
    name:"Bilal",
    [mysym]:'mykey1',
    age:25,
    email:"bilaljut@gmail.com",
    isLogged:false,
    lastLogindays:['Monday','Sunday']

}
console.log(object['age'])

// console.log(typeof object[mysym]);
// console.log(object)

// object.greeting=function(){
//     console.log('this is function')
// }

// console.log(object.greeting());

// object.greeting2=function(){
//     console.log(`this is function  ${this.name}`)
// }
// console.log(object.greeting2())