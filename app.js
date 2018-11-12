var express = require('express');
var app = express();


// Paste this at the top of `server.js`
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'Theatres';
let db;





db.collection('Theatres').insertOne(
    {
        "_id" : 1
      , "name" : "The Royal"
      , "seats" : [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
        , [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
        , [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
        , [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
        , [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ]
      , "seatsAvailable" : 80
    }, (err, result) => {
    if (err){
        return console.log('Unable to add theatre')
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2))
})







// Use connect method to connect to the server.
// Paste this inside `app.listen` callback!



app.get('/', function (req, res) {
    res.json({movies: ['Rush Hour 2', 'Star Wars', 'Shawshank', 'Prisonbreak']})
});


app.listen(3000, () => {

    MongoClient.connect(url, function(err, client) {
      assert.equal(null, err);
      console.log("Connected successfully to server");

      db = client.db(dbName);
    });

  console.log('Example app listening on port 3000!')
})

// 1. (INDEX) GET >>> theatre/shows >>> SHOWS list of shows/movie in the theatre
// 2. GET >>> theatre/shows/:showId >>> SHOWS list of all available seats for this particular show
// 3. GET >>> theatre/shows/:showId/reservations >>> SHOWS reservation form
// 4. POST >>> theatre/shows/:showId/reservations/:reservationId >>> CREATES single reservation for this show/movie
// 5. PUT >>> theatre/shows/:showId/reservations/:reservationId >>> UPDATES single reservation for this show/movie
// 6. DELETE >>> theatre/shows/:showId/reservations/:reservationId >>> DESTROYS single reservation for this show/movie
