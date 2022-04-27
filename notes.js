const fs = require('fs');
const chalk = require('chalk');

const addNotes = (title,body) => {
    const notes = loadNotes();

    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote){
        notes.push({
            title : title,
            body : body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('New Note Added'));
    }
    else{
        console.log(chalk.red.inverse('Note Title Taken'));
    }  
}

const removeNotes = (title) =>{
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title)

    // const notesToKeep = notes.filter(function (note){
    //     return note.title !== title;
    // })
    
    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed'));
        saveNotes(notesToKeep);
    }
    else{
        console.log(chalk.red.inverse('No note found'));
    }
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('your notes'))

    notes.forEach((note) => {
        console.log(note.title);
    })
}

const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try{
        dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch (e){
        return [];
    }
}

const readNotes = (title) =>{
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title)

    if(note){
        console.log(chalk.inverse(note.title));
        console.log(note.body)
    }
    else{
        console.log(chalk.red.inverse('Note not found !'))
    }
}



module.exports = {
    addNotes : addNotes,
    removeNotes : removeNotes,
    listNotes : listNotes,
    readNotes : readNotes
}