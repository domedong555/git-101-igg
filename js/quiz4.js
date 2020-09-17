word = "Hello my name is Joke";
console.log(word.length)

word = "Hello my name is Joke nice to meet you!"
console.log(word.indexOf("Joke"))

console.log("1")
console.log("2")
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(console.log("3"))
    }, 1000);
}).then(() => {
    console.log("4")
    console.log("5")
})

myFirstAsync = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Success');
        }, 250);
    })
}

