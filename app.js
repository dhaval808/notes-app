const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');


// Create Add Command
yargs.command({
    command:'add',
    describe:'Add DJ',
    builder:{
        title : {
            describe:'NOTE TITLE',
            demandOption: true,
            type:'integer'
        },
        body : {
            describe:'ADD description',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title,argv.body);
    }
})

// Create remove Command
yargs.command({
    command:'remove',
    describe:'Remove DJ',
    builder : {
        title : {
            decribe : 'Note Title',
            demandOption : true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title);
    }
})

// Create list Command
yargs.command({
    command:'list',
    describe:'list of  DJ',
    handler(argv){
        notes.listNotes();
    }
})

// Create read Command
yargs.command({
    command:'read',
    describe:'read of  DJ',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type : 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title);
    }
})

//yargs.parse();
console.log(yargs.argv);






// const strings = require('./notes.js');
// const name = getNotes;
// console.log(name);

// const greenMsg = chalk.blue.bold('hiiii');
// console.log(greenMsg);


// const addition = require('./utils.js');
// const sum = addition(5,5);
// console.log(sum);