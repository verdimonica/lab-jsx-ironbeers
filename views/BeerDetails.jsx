const React = require('react');
const Layout = require('./Layout');

const BeerCard = require('./components/BeerCard')

// Iteration 4.2
function BeerDetails( props ) {
  return(
    <Layout>
      <BeerCard beer={props.oneBeer} />
    </Layout>
  )
}

module.exports = BeerDetails;