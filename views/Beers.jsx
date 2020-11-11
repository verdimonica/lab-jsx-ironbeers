const React = require('react')
const Layout = require('./Layout')

function Beers(props) {
    return (
      <Layout>
        <main>
          <h1>Beers</h1>
          <div>
            {props.beersFromApi.map(beerObj =>{
                return(
                  <div>
                    <img src={beerObj.image_url} width="200" alt="" />
                    <h3>{beerObj.name}</h3>
                    <h5>{beerObj.tagline}</h5>
                    <p>{beerObj.description}</p>
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
  module.exports = Beers