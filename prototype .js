let a = {
    name : "mayank",
    language : "c++",
    run : ()  =>{
        alert("self run")
    }
}
console.log(a)


let p ={
    run : ()=>{
        alert ("run") 
    }
}
// p.__proto__={
// }
a.__proto__ =p // ACCQURING INFO FROM A IN P 
a.run()
console.log(a.name)
