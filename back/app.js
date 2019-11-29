const express = require('express');

let app = express();
const PORT =  process.env.PORT || 3000;

var reservations = [
  {
    name: 'pepe',
  }
];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/reserve', (req, res) => {
  var newReservation = req.body;

  res.json(newReservation);
})

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

app.get('/tables', (_, res) => {
	res.send(reservations);
})