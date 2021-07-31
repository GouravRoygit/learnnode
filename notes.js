const fs = require('fs');
const chalk = require('chalk');

//console.log('I am in notes');

const getNotes = () => {
    return 'Here are my notes';
}

const addNote = (title,body) => {
  
    const notes = loadNotes();
    const duplicateNotes = notes.find(note => note.title===title)
    if(!duplicateNotes){
        notes.push({
            title : title,
            body: body
        })
        saveNote(notes);
        console.log(chalk.green.inverse('Notes added successfully'))
    }
    else
        console.log(chalk.red.inverse('Notes alreay taken'))
}

const removeNote = (title) => {
    console.log('Remove Title: '+ title);
    const notes = loadNotes();
    const newnotes = notes.filter(note => note.title!==title)
    if(notes.length > newnotes.length){
        saveNote(newnotes);   
        console.log(chalk.green.inverse('Note deleted successfully'))
    }
    else {
        console.log(chalk.red.inverse('Note does not exist'))
    }
    
}

const listNotes = () => {
    
    console.log(chalk.inverse('Your are in list note'))
    const notes = loadNotes();
    notes.forEach(note => {
        console.log(chalk.green.inverse(note.title));
        //console.log(chalk.blue.inverse(note.body));
    });
   
}

const readNote = (title)=> {
    console.log('You are in Read Note: ');
    const notes = loadNotes();
    const note = notes.find(note => note.title===title)
    if(note){
        console.log('The body is '+ chalk.green(note.body));
    }
    else{
        console.log(chalk.red.inverse('No note found'));
    }
}

const saveNote = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON);
    }
    catch(e){
        return []
    }    
}



module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote : removeNote,
    listNotes: listNotes,
    readNote: readNote

}