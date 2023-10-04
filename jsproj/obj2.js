// singleton Object

// const singleobj=new Object()

const singleobj={}

singleobj.id='123avc'
singleobj.name='Bilal'
singleobj.isLoggedin=false

// console.log(singleobj);

const regularuser={
    email:"bilaljutt@gmail.com",
    fullname:{
        userfuulname:{
            firstname:'Bilal',
            lastname:'jutt'
        }
    }

}
// console.log(regularuser['fullname']['userfuulname']['firstname'])

const target = { a: 1, b: 2 };
const source = { z: 4, k: 5 };
const splash = { h: 8, n: 9 };

// const returnedTarget = Object.assign({},target, source,splash);

// console.log(returnedTarget)

// const returnedTarget={...target,...source,...splash}

// console.log(returnedTarget);


console.log(singleobj)
console.log(Object.keys(singleobj));
console.log(Object.values(singleobj));
console.log(Object.entries(singleobj));
console.log(singleobj.hasOwnProperty('name'));
