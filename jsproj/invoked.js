//immediately invoked function Expression (IIFE)

(function invokedf(){

    //this is named (IIFE)
console.log('this is invoked')
})();

((name)=>{
console.log(`this is ${name}`)
})('Bilal')