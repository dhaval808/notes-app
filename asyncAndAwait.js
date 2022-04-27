let stock = {
    Fruits : ["strawberry","grapes","banana","apple"],
    liquid : ["water","ice"],
    holder : ["cone","cup","stick"],
    topping : ["chocolate","peanuts"]
};

let is_shop_open = true;

function time(ms){
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms);
        }
        else{
            reject(console.log("our shop is closed."));
        }
    })
}

async function kitchen(){
    try{
        await time(2000);
        console.log(`${stock.Fruits[1]} was selected`);

        await time(0000)
        console.log("production has started.");

        await time(2000)
        console.log("The fruits has been chopped.");

        await time(1000);
        console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was Added`);

        await time(1000);
        console.log("Machine was started.");

        await time(2000);
        console.log(`Ice Cream was placed on ${stock.holder[2]}`);

        await time(3000);
        console.log(`${stock.topping[1]} was added as toppings`);

        await time(2000);
        console.log("serve ice-cream");
    }
    catch(error){
        console.log("Customer left",error);
    }
    finally{
        console.log("day ended, shop is closed.");
    }
}

kitchen()

//-------------------------------------------------------------------------------------------

// let topping_choice = () =>{

//     return new Promise((resolve,reject)=>{

//         setTimeout(()=>{
//             resolve(
//                 console.log("which topping would uou like?")
//             )
//         },3000)
//     })
// }

// async function kitchen (){
//     console.log(" A ");
//     console.log(" B ");
//     console.log(" C ");

//     await topping_choice();

//     console.log(" D ");
//     console.log(" E ");
// }

// kitchen();

// console.log("doing the dishes");
// console.log("cleaning the dishes");
// console.log("taking others order");