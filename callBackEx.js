let stock = {
    Fruits : ["strawberry","grapes","banana","apple"],
    liquid : ["water","ice"],
    holder : ["cone","cup","stick"],
    topping : ["chocolate","peanuts"]
};

let order = (Fruit__name,call_production) =>{
    
    setTimeout(()=>{
        console.log(`${stock.Fruits[Fruit__name]} was selected.`);
        call_production();
    },2000)
    
    
}   

let production = () => {
   setTimeout(()=>{
       console.log("production has started.");

       setTimeout(()=>{
           console.log("The fruits has been chopped.");

           setTimeout(()=>{
               console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was Added`);

               setTimeout(()=>{
                    console.log("Machine was started.");

                    setTimeout(()=>{
                        console.log(`Ice Cream was placed on ${stock.holder[0]}`);

                        setTimeout(()=>{
                            console.log(`${stock.topping[0]} was added as toppings`);

                            setTimeout(()=>{
                                console.log("serve ice-cream");
                            },2000);
                        },3000);
                    },2000);
               },1000);
           },1000);
       },2000);
   },0000);
}

order(0,production);