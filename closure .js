function mayank() {
    var name = 'hello';  //name is local

    function displayname() {
        console.log(name);
    }
    //  name = "mayank"  it will print hello 
    return displayname;
}
let m = mayank();
m()


function returnfun() {
    const x = () => {
        let a = 1;
        console.log(a)

        const y = () => {
            let a = 2;
            console.log(a)   

            const z = () => {
                let a = 3;
                console.log(a)
            }
            z()
        }
        // a = 999
        y()
    }
    return x;
}

let f = returnfun()
f()
