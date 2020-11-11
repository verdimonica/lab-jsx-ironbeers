const React = require('react');
const Layout = require('./Layout');

function Home() {

  return (
    <Layout>
      <main>
        <h1>Home</h1>
        <div>
          <img src="../public/images/beer.png" alt="Beer-pic"/>
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


module.exports = Home;