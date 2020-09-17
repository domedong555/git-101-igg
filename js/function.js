function add(a,b) {
    return a + b
}

function mul(a,b) {
    return a * b
}

let person = {
    name: "Pakorn",
    last: "Tawansang"
}

function findIdentity(person) {
    return person.name
}

const adder = (a,b) => a + b 

// const more = (a,b) => {
//     this.user = 'Joke'
//     return a + b
// }

console.log(add(2,33),mul(3,2))
console.log(findIdentity(person))
console.log(adder(33,2))