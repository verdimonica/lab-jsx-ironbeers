const React = require('react');
const Layout = require('./Layout');

function Home() {
  return (
    <Layout>
      <div className="index-container">
        <img src="/images/beer.png" width="200" alt="" />

        <a href="/beers"> Check the beers! </a>

        <a href="/random-beer"> Check random beer </a>
      </div>
    </Layout>
  );
}

module.exports = Home;
