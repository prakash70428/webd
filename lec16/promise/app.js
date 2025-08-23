
//example 1:

// let promise = new Promise(function(resolve , reject){
//     console.log('hi utkarsh dekho ye sabse pehle chal jayega , phir 4 second wait karlena!');

//     setTimeout( function(){
//         // let data = 'hi dosto ye promise hai'
//         // resolve(data); //case 1
//         // let err = 'oops dikkat aagyi'
//         // reject(err);

//         // resolve('hi mai resolve hogya i.e .then()');
//         reject('hi mai loot gya barbaad hogya i.e .catch()')

//     } , 4000 );
// })

// promise.then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// })

//example 2:

let p1 = new Promise( (resolve , reject) => {
        console.log('3 second ka wait kro kaam in process...');

        setTimeout( () => {
            // resolve();
            reject();
            
        } , 3000 );
} )

p1.then( () => {
    console.log('kaam process hogya!');
}).catch( () => {
    console.log('error aagya bhai !')
} )














