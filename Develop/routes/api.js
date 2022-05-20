const util = require('util');
const fs = require('fs');
express = require('express');
const app = express();


const uuid1 = require("uuid/v1")

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

class Store {
    readNotes() {
        return readFile("db/db.json", "utf8");
    }
    writeNotes(note) {
        return writeFile("db/db.json", JSON.stringify(note))
    }
}
    // //get notes(readNotes)
    fs.readFile('db/db.json', function (err, note){
        console.log(note.toString());
    });
     app.get('/api', function (req, res) {
         fs.readFile('db/db.json', 'utf8', function (err, data) {
             if (err) {
                 res.send({error: err});
             }
             res.send(data);
        })
     });
    //add Notes
     app.post('/api', function (req, res) {
         fs.writeFile('./test.json', 'utf8', function (err, data) {
             if (err) {
                 res.send({error: err});
             }
             res.send(data);
         })
     });
     //delete notes
     app.post('/api/:id', function (req, res) {
         let noteList = [];
        fs.writeFile('db/db.json', 'utf8', function (err, data) {
            if (err) {
                res.send({error: err});
            }
            res.json(noteList);
        })
    });

//export a NEW instance of your class
module.exports = app;