for(let i = 1; i <= 20;i += 1) {
    console.log(i)
}

let temp = ['apple','banana','coconut']
temp.forEach((element,idx) => {
    console.log(idx, element)
});

let newValue = temp.map((element,idx) => {
    return `${idx+1}.${element}`
})

let filterMoreThanZero = [-1,2,3,65,412,548,5,6].filter(el => el <= 0)
console.log(filterMoreThanZero)