console.log("Ex.1")
for(let i = 1; i <= 20; i += 1) {
    console.log(i)
}

console.log("Ex.2")
for(let i = 1; i <= 20; i += 1) {
    console.log(i%2 === 0 ? i : "")             //if i modulu 2 eqaul 0  True return 0, False return ""
}

console.log("Ex.3")
let temp = [-1,2,3,56,6,-93,0,4].map(el => el*2)
console.log(temp)


console.log("Ex.4")
let filterModuluTwo = [10,12,44,55,89,0,12,1].filter(el => el%2 == 0)
console.log(filterModuluTwo)