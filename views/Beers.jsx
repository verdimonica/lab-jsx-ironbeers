const React = require('react');
// Iteration 3.2
const Layout = require('./Layout');

// function Beers(props) {
//   return (
//     <Layout>
//       <div>
//         {props.beersFromApi.map(beerObj => {
//           return (
//             <div>
//               <img src={beerObj.image_url} width="200" alt="" />
//               <div>
//                 <h3>{beerObj.name}</h3>
//                 <h5>{beerObj.tagline}</h5>
//                 <p>{beerObj.description}</p>
//                 <hr/>
//             </div>
//           </div>
//           );
//         })}
//       </div>
//     </Layout>
//   );
// }

// Iteration 5.3
const BeerCard = require('./components/BeerCard');

function Beers(props) {
  return (
    <Layout>
      <div>
        {props.beersFromApi.map((beerObj, i) => {
          return <BeerCard key={i} beer={beerObj} hideDetails={true} />;
        })}
      </div>
    </Layout>
  );
}

module.exports = Beers;
