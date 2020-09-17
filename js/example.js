const PI = 3.14
joke = 'Me'
fun= `${joke} You`                                            //เชื่อมคำ ตัวแปล่jokeกับfun
console.log("Hello, Internet", PI, joke, fun)

let arr = ['K','D','P']
console.log("arr: ", arr[1])

let person = {
    name: 'Pakorn',
    lastname: 'Tawansan',
    age: 20,
    gender: {                                                  // สามารถเอาObject ใส่ใน Object
        sex: 'male'
    },
    arr                                                        // สามารถใส่Arrayได้
}
console.log(person.name)
console.log(person.gender.sex)
console.log(person.arr)
