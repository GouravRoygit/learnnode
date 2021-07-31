const chalk = require('chalk');
const validator = require('validator');
const yargs = require('yargs');
const notes = require('./notes.js');

//const msg = chalk.green.bold('Success');

//console.log(validator.isEmail('aaaa@bbc.com'));

yargs.version('1.0.0');

//Create add command
yargs.command ({
   command : 'add',
   describe : 'Add a new Note',
   builder : {
       title :{
           describe : 'Add a note',
           demandOption : true,
           type : 'string'
       },
       body :{
        describe : 'Note body',
        demandOption : true,
        type : 'string'
    }
   },
   handler(argv){
       console.log("In Add notes")
       notes.addNote(argv.title,argv.body)
   }
    
})

//Remove Note
yargs.command ({
    command : 'remove',
    describe : 'Remove Note',
    builder : {
        title :{
            describe : 'Remove a note',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
     
 })

 //List the notes
 yargs.command ({
    command : 'listNotes',
    describe : 'List all the Note',
    handler(){
        notes.listNotes()
    }
     
 })

 //Read the note
//Remove Note
yargs.command ({
    command : 'readNote',
    describe : 'Read Note',
    builder : {
        title :{
            describe : 'Read a note',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
     
 })

yargs.parse();

//List Notes
// console.log(process.argv);
// console.log(yargs.argv);