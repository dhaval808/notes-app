let stock = {
    Fruits : ["strawberry","grapes","banana","apple"],
    liquid : ["water","ice"],
    holder : ["cone","cup","stick"],
    topping : ["chocolate","peanuts"]
};

let is_shop_open = true;

let order = (time,work) => {

    return new Promise((resolve,reject)=>{
        if(is_shop_open){

            setTimeout(() =>{
                resolve(work());
            },time);
        }
        else{
            reject(console.log("our shop is closed."));
        }
    });
};

order(2000, ()=> console.log(`${stock.Fruits[0]} was selected.`))

.then(()=>{
    return order(0000,() => console.log("production has started"));
})

.then(()=>{
    return order(2000,() => console.log("The fruits has been chopped."));
})

.then(()=>{
    return order(1000,() => console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was Added`));
})

.then(()=>{
    return order(1000,() => console.log("Machine was started."));
})

.then(()=>{
    return order(2000,() => console.log(`Ice Cream was placed on ${stock.holder[2]}`));
})

.then(()=>{
    return order(3000,()=> console.log(`${stock.topping[1]} was added as toppings`));
})

.then(()=>{
    return order(2000,()=> console.log("serve ice-cream"));
})

.catch(()=>{
    console.log("Customer left");
})

.finally(()=>{
    console.log("day ended, shop is closed.");
})