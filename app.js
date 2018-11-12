var express = require('express');
var app = express();


// INDEX
app.get('/theatre/shows', (req, res) => {
    res.send('list of movies');
});

// SHOW SEATS
app.get( '/theatre/shows/:showsId', (req, res) => {
    res.json({
        "_id" : 1
        , "name" : "The Royal"
        , "seats" : [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
        , [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
        , [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
        , [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
        , [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ]
        , "seatsAvailable" : 80
    });
});

// SHOW RESERVATION FORM
app.get( '/theatre/shows/:showId/reservations', (req, res) => {
    res.send('reservation form')
})

// CREATE single reservation for this show/movie
app.post( '/theatre/shows/:showId/reservations', (req, res) => {
    res.redirect(`/theatre/shows/:showId/reservations`);
});

// SHOW ONE RESERVATION
app.get('/theatre/shows/:showId/reservations/:id', (req, res) => {
    res.send('show info for ONE reservation');
});
 
// SHOW Reservation to EDIT
app.get( '/theatre/shows/:showId/reservations/:id/edit', (req, res) => {
    res.send('show ONE previously made reservation');
});

// UPDATE 
app.put( '/theatre/shows/:showId/reservations/:id', (req, res) => {
    res.redirect(`/theatre/shows/:showId/reservations/:id`);
});

// DELETE
app.delete( '/theatre/shows/:showId/reservations/:id', (req, res) => {
    findOneAndDelete({_id: id}).then( reservations => {
        res.redirect(`/theatre/shows/:showId/reservations`);
    });
});

// LISTEN
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})


// 1. (INDEX) GET >>> theatre/shows >>> SHOWS list of shows/movie in the theatre
// 2. GET >>> theatre/shows/:showId >>> SHOWS list of all available seats for this particular show
// 3. GET >>> theatre/shows/:showId/reservations >>> SHOWS reservation form
// 4. POST >>> theatre/shows/:showId/reservations/ >>> CREATES single reservation for this show/movie
// 5. PUT >>> theatre/shows/:showId/reservations/:reservationId >>> UPDATES single reservation for this show/movie
// 6. DELETE >>> theatre/shows/:showId/reservations/:reservationId >>> DESTROYS single reservation for this show/movie
