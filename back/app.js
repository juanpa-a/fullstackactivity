const express = require('express');
let path = require('path');

let app = express();
const PORT =  process.env.PORT || 3000;

var reservations = [
  {
    name: 'pepe',
  }
];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "interface.html"));
});

app.get('/reserve', (req, res) => {
  res.sendFile(path.join(__dirname, 'interfaceReserve.html'));
});

app.get('/tables', (req, res) => {
  res.sendFile(path.join(__dirname, 'interfaceTables.html'));
  console.log(reservations);
	// res.json(reservations);
});

app.get('/reserveData',(req,res) =>{
  res.json(reservations);
});

app.post('/reserve', (req, res) => {
  var newReservation = req.body;
  console.log(newReservation);
  reservations.push(newReservation);

  res.json(newReservation);
})

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});