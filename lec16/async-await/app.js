// function somefun(){

// }
// console.log(somefun());
// undefined

//------------

// let p1 = new function(){

// }

// console.log(p1);
//return an empty object

// -------------
async function somefun(){
    await new Promise( (resolve , reject) => {
        setTimeout( ()=>{
            console.log('3 second hogya!');
            resolve();
        } , 3000 )
    } )

    await new Promise( (resolve , reject) => {
        setTimeout( () => {
            console.log('2 second hogye !');
            resolve();
        }, 2000);
    } )

    console.log('dono kaam hogye')
}

somefun();