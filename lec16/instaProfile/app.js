// function step1(){
//     setTimeout(function(){
//         console.log('image select kar raha hu');
//         return 'image';
//     } , 4000)
// }

// function step2(image){
//     setTimeout(function(){
//         console.log(`sundar kar raha hu ${image} ko rukjao`)
//         return 'sundar waali photo'
//     } , 2000)
// }

// function step3(filteredImage){
//     setTimeout(function(){
//         console.log(` badhiya sa caption on ${filteredImage} `);
//         return 'photo plus caption dono' ;
//     } , 3000)
// }

// function step4(final){
//     setTimeout(function(){
//         console.log(` ${final} uploaded `);
//     } , 2000)
// }

// // calling
// let image = step1();
// let filteredImage = step2(image);
// let finalImage = step3(filteredImage);
// step4(finalImage);

//-----------------------------------------------------------------------------------
//better tarika
function step1(fn){
    setTimeout(function(){
        console.log('selecting image');
        // return 'image';
        fn('image');
    } , 4000)
}

function step2(image , cb){
    setTimeout(function(){
        console.log(`applying filter to ${image} `)
        // return 'filtered photo'
        cb('filtered Image')
    } , 2000)
}

function step3(filteredImage , cb){
    setTimeout(function(){
        console.log(` badhiya sa caption on ${filteredImage} `);
        // return 'photo plus caption dono' ;
        cb('filtered with caption');
    } , 3000)
}

function step4(final){
    setTimeout(function(){
        console.log(` ${final} uploaded `);
    } , 2000)
}

step1(function(image){
    step2(image , function(filteredImage){
        step3(filteredImage , function(finalImage){
            step4(finalImage);
        })
    });
})