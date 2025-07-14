function someFunc() {
    let username = 'einstein';
    function printName(){
        console.log(username);
    }

    return printName;
}

let returnedValue = someFunc();
returnedValue(); //function printName(){
                 //console.log(username);
                // } 
                
 //closures -> A function bundled together with reference to its surrounding state or lexical environment
            //    that is called Clouseres             