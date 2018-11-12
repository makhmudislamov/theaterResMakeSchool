var express = require('express');
var app = express();



app.get('/', => (req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Part 2.`});
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!'));
}


// 1. (INDEX) GET >>> theatre/shows >>> SHOWS list of shows/movie in the theatre
// 2. GET >>> theatre/shows/:showId >>> SHOWS list of all available seats for this particular show
// 3. GET >>> theatre/shows/:showId/reservations >>> SHOWS reservation form
// 4. POST >>> theatre/shows/:showId/reservations/:reservationId >>> CREATES single reservation for this show/movie
// 5. PUT >>> theatre/shows/:showId/reservations/:reservationId >>> UPDATES single reservation for this show/movie
// 6. DELETE >>> theatre/shows/:showId/reservations/:reservationId >>> DESTROYS single reservation for this show/movie
