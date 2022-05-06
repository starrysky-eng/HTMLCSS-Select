const hello : string = "Hello World!"
console.log(hello)

interface Person { 
    age:number 
 } 
  
 interface Musician extends Person { 
    instrument:string
    sayHi: () => string
 } 
 var obj = <Musician>{}

//  obj.age = 20
//  obj.instrument = "Hello World!"

 console.log(obj)