const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db, collection;

const url = "mongodb+srv://NBwebdev:8n5LLTKbQGn87b8@cluster0.fe6hb.mongodb.net/Calculator?retryWrites=true&w=majority";
const dbname = "Calculator";

app.listen(5000, () => {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
        if(error) {
            throw error;
        }
        db = client.db(dbname);
        console.log("Connected to `" + dbname + "`!");
    });
});

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  db.collection('history').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {history: result})//use to be {message: result}
  })
})

app.post('/history', (req, res) => {
  db.collection('history').insertOne({num1: req.body.num1, num2: req.body.num2, historyTotal: req.body.historyTotal}, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

app.put('/history', (req, res) => {
  db.collection('history')
  .findOneAndUpdate({num1: req.body.num1, num2: req.body.num2}, {
    $set: {
      thumbUp:req.body.thumbUp + 1
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})
app.put('/historyDown', (req, res) => {
  db.collection('history')
  .findOneAndUpdate({num1: req.body.num1, num2: req.body.num2}, {
    $set: {
      thumbUp:req.body.thumbUp - 1
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

app.delete('/history', (req, res) => {
  db.collection('history').findOneAndDelete({num1: req.body.num1, num2: req.body.num2}, (err, result) => {
    if (err) return res.send(500, err)
    res.send('Message deleted!')
  })
})
