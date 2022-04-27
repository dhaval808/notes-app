const validator = require('validator');

const contacts = [
    {
      firstName: 'Manan',
      lastName: 'Mankodi',
      email: 'mankodimanan@gmail.com'
    },
    {
        firstName: 'Dhaval',
        lastName: 'Gohel',
        email: 'dhavalgohel@gmail.com'
    }
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
        
        a=true;
  
        const first = contacts.reduce((previousValue,currentValue)=>{
        // console.log(previousValue);
        // console.log(currentValue.firstName[0]);
        //return previousValue===true && currentValue.firstName[0] === currentValue.firstName[0].toUpperCase()
            if(previousValue || currentValue.firstName[0] === currentValue.firstName[0].toUpperCase()){
            //if(previousValue[0] === currentValue.firstName[0]){
                return true;
            }
            else{                  
                return false;
            }
        },a)
        
        return first;
    }

    let ln = function(){

        a=true;
        
        const last = contacts.reduce((previousValue,currentValue)=>{
            if(previousValue===true && currentValue.hasOwnProperty('lastName') && currentValue.lastName[0] === currentValue.lastName[0].toUpperCase()){
                return true;
            }
            else{ 
                return false;
            }
        },a)
        
        return last;
    }

    let em = function(){

        a=true;
        const mail = contacts.reduce((previousValue,currentValue)=>{
            if(previousValue===true && validator.isEmail(currentValue.email)){
                return true;
            }
            else{
                return false;
            }
        },a)
        return mail;      
    }
let value = areAllContactsValid();
console.log(value);