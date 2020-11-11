const React = require('react')
const Lauyout = require('./Layaout')

function Beers(props) {

    return (
      <Layout>
        <main>
          <h1>Home</h1>
          <div>
            {props.beers.map(beerObj, =>{
                
            })}
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