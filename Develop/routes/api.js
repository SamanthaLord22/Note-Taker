const util = require('util');
const fs = require('fs');
express = require('express');
const app = express();
const db = require("../db/db.json")

// const uuid1 = require("uuid/v1");


// const readFile = util.promisify(fs.readFile)
// const writeFile = util.promisify(fs.writeFile)

// class Store {
//     readNotes() {
//         return readFile("db/db.json", "utf8");
//     }
//     writeNotes(note) {
//         return writeFile("db/db.json", JSON.stringify(note))
//     }
// }
// //get notes(readNotes)
// fs.readFile('db/db.json', function (err, note){
//     console.log(note.toString());
// });
app.get('/api/notes', function (req, res) {
    fs.readFileSync('db/db.json', 'utf8', function (err, data) {
        if (err) {
            res.send({ error: err });
        }
        db = JSON.parse(data)
        res.json(db)
    })
});
//add Notes
app.post('/api/notes', function (req, res) {
    db.push({
        id: Math.floor(Math.random() * 999),
        title: req.body.title,
        text: req.body.text
    })
    fs.writeFileSync('db/db.json', JSON.stringify(db), function (err, data) {
        if (err) {
            res.send({ error: err });
        }

    })
    res.json(db)
});
//delete notes
app.delete('/api/notes/:id', function (req, res) {
    let temparr = []
    for (let i = 0; i < db.length; i++) {
        if (db[i].id != req.params.id) {
            temparr.push(db[i])
        }
    }
    db = temparr;
    fs.writeFileSync('db/db.json', JSON.stringify(db), function (err, data) {
        if (err) {
            res.send({ error: err });
        }

    })
    res.json(db)
});

//export a NEW instance of your class
module.exports = app;