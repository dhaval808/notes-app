const validator = require('validator');

const contacts = [
    {
      firstName: 'Manan',
      lastName: 'Mankodi',
      email: 'mankodimanan@gmail.com'
    },

  ];
    let areAllContactsValid = function(){
        const a = fn();
        const b = ln();
        const c = em();
       if(a===true && b===true && c===true){
        return 'Contacts are valid'
       }
       else{
           return 'Contacts are not valid'
       }      
        
    }

    let fn = function(){
        
        const first = contacts.reduce(function(previousValue,currentValue){
            if(previousValue[0].firstName === currentValue[0].firstName.toUpperCase()){
                return true;
            }
            else{   
                return false;
            }
        },Manan)

        // for(let i = 0; i<contacts.length; i++){
        //     if(contacts[i].firstName[0] === contacts[i].firstName[0].toUpperCase()){
        //         return true              
        //     }
        //     else{
        //         return false
        //     }
        // }
        
    }

    let ln = function(){
        for(let i = 0; i<contacts.length ; i++){
            if(contacts[i].hasOwnProperty('lastName') && contacts[i].lastName[0] === contacts[i].lastName[0].toUpperCase()){
                return true
            }
            else{
                return false
            }
        }
   
    }

    let em = function(){
        for(let i = 0; i<contacts.length; i++){
            if(validator.isEmail(contacts[i].email)){
                return true
            }
            else{
                return false
            }
        }
        
    }

let value = areAllContactsValid();
console.log(value);