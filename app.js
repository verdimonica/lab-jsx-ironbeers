const express = require('express');

const erv = require('express-react-views');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', erv.createEngine());

app.use(express.static(__dirname + '/public'));

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('Home');
});

// Iteration 3.1
app.get('/beers', (req, res, next) => {
  punkAPI.getBeers().then(beersFromApi => {
    const data = { beersFromApi: beersFromApi };
    // same as:
    // const data = { beersFromApi }
    res.render('Beers', data);
  });
});


// Iteration 4.1
app.get('/random-beer', (req, res, next) => {
  punkAPI
    .getRandom()
    .then(beersFromApi => {
      const oneBeer = beersFromApi[0]; // The response from the API is an array with only one beer object
      const data = { oneBeer: oneBeer };

      console.log('oneBeer', oneBeer)

      // same as:
      // const data = { oneBeer }
      res.render('RandomBeer', data);
  });
});


// Iteration 6
app.get('/beers/:beerId', (req, res, next) => {
  const beerId = req.params.beerId;

  punkAPI.getBeer(beerId).then(beersFromApi => {
    const oneBeer = beersFromApi[0]; // The response from the API is an array with only one beer object
    const data = { oneBeer: oneBeer };
    // same as:
    // const data = { oneBeer }
    res.render('BeerDetails', data);
  });
});


app.listen(3000, () => console.log('🏃‍ on port 3000'));
