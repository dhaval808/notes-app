// let fullName = "Dhaval Gohel";
// let details = fullName.split(' ')
// let firstName = details[0];
// let lastName = details[1];

// console.log(firstName);
// console.log(lastName);

// let fullName1 = "Dhaval Js Gohel";
// let firstName1 = fullName1.split(' ').slice(0, -1).join(' ');
// let lastName1 = fullName1.split(' ').slice(-1).join(' ');

// console.log(firstName1);
// console.log(lastName1);

// let fullName2 = "jay ponda";
// let firstName2 = Array.from(fullName2).slice(0,3).join(""); 
// let lastName2 = Array.from(fullName2).slice(4,9).join("");  

// console.log(firstName2);
// console.log(lastName2);


let fullName3 = "Dhaval Gohel";
let firstName3 = [...fullName3].slice(0,6).join("");
let lastName3 = [...fullName3].slice(7,12).join("");
console.log(firstName3);
console.log(lastName3);


// let fullname4 = "Dhaval Gohel"

// let first4 = fullname4.replace(/\s.*$/, "").trim(); 
// let last4 = fullname4.replace(/^.*\s/, "").trim(); 
 

// console.log(first4);
// console.log(last4);