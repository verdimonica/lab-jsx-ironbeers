const React = require('react')
const Layout = require('./Layout')

function RandomBeer(props) {
    console.log(props)
    return (
      <Layout>
        <main>
          <h1>Random Beer</h1>
          <div>
            {props.randomBeer.map((beerObj, i) =>{
                return(
                  <div key = {i}>
                    <img src={beerObj.image_url} width="200" alt="" />
                    <h3>{beerObj.name}</h3>
                    <h5>{beerObj.tagline}</h5>
                    <p>{beerObj.description}</p>
                    <p>{beerObj.food_pairing}</p>
                    <p>{beerObj.brewers_tips}</p>
                  </div>
                )
            }) }
          <div>
            <a href="/beers">Check the Beers!</a>
          </div>
          <div>
            <a href="/random-beers">Check a Random Beer</a>
          </div>
          </div>
        </main>
      </Layout>
    );
    
  }
  module.exports = RandomBeer