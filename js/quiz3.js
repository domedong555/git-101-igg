const calculateGrade = (point) => {
    let grade = null
    if (point < 50) {
        grade = 'F'
    } else if (point >= 50 && point < 60) {
        grade = 'D'
    }else if (point >= 60 && point < 70) {
        grade = 'C'
    }else if (point >= 70 && point < 80) {
        grade = 'B'
    }else if (point >= 80) {
        grade = 'A'
    }
    return grade
}

console.log(calculateGrade(80))
console.log(calculateGrade(75))
console.log(calculateGrade(64))
console.log(calculateGrade(52))
console.log(calculateGrade(42))