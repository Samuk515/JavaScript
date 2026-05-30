// this is chapter one of javascript
let a = "Samir"
let b =  6
console.log(a + b );

//Question no2
console.log(typeof (a+b))

// Qno 3
let a1 = {
    name: "Samuk",
    section: "A",
    isPrincipal: false
 }
 // a1 = "Samuk" // commented out: reassigning the object to a string will make subsequent property assignments throw in strict (module) mode
// Qno 4
a1['Friend'] = "Aman"
a1['Name'] = "Lawesh"
console.log(a1);

//Q 5
const dict ={
    appreciate:" recogonize your full worth of.",
    democracy:" the freedom of everything",
    nonchalant:" feeling or appearing casually calm and relaxed; not displaying anxiety, interest, or enthusiasm.",
    effortless:" requiring no physical or mental exertion."
}
console.log(dict['nonchalant'])