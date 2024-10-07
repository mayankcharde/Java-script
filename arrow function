
let p1 = new Promise((resolve, reject) => {
    console.log("hello mayank")
    setTimeout(() => {
        console.log("i am promisew and i am resolved")

        resolve(90)
    }, 5000)
})

let p2 = new Promise((resolve, reject) => {
    console.log("promise is pending")
    setTimeout(() => {
        console.log("i am promise and i am rejected")
        reject(new Error("i am an error"))
    }, 5000)
})

p1.then((value) => {
    console.log("value")
})
// FOR NOT OCCURING ERROR WE USE P2.CATCH (CATCHING ERROR)
p2.catch((error) => {
    console.log("soome error ocureed")
})
