// let intervalId;
// let runCount = 0;
// function valid(){
//     runCount++;
//     if(runCount>5){
//         clearInterval(intervalId);
//     }
//     console.log("HIIIIIIIIIII");
// }
// console.log("Wait ......")
// intervalId=setInterval(valid,1000);


// setInterval(function(){
//     console.log("HIIIII");
// },1000)



// let myFun = function(){
//     console.log("HIIIII");
// }
// setInterval(myFun,1000);



for(let i=0;i<3;i++){
    const log = () => {
        console.log(i);
    }
    setTimeout(log,1000);
}


