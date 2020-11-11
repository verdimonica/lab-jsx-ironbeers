const React = require('react');
const Layout = require('./Layout');

function Home() {

  return (
    <Layout>
      <main>
        <h1>Home</h1>
        <div>
        <img src="./../public/images/beer.png" alt=""/>
        </div>
      </main>
    </Layout>

  );
  
}


module.exports = Home;