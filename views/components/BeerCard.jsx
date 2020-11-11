const React = require('react');

// // Iteration 5.1
// function BeerCard( props ) {
//   return(
//       <div>
//         <img src={props.beer.image_url} width="200" alt="" />
//         <div>
//           <h3>{props.beer.name}</h3>  
//           <h5>{props.beer.tagline}</h5>  
//           <p>{props.beer.description}</p>  
          
//           <h4>Food Pairing</h4>  
//           <ul>
//             { props.beer.food_pairing.map( ( food, i) => {
//               return <li key={i}> {food} </li>
//             })}
//           </ul>

//           <p><strong>Brewers Tips:</strong> {props.beer.brewers_tips} </p>

//         </div>
//       </div>
//   )
// }



// // Iteration 5.3
// function BeerCard( props ) {
//   return(
//       <div>
//         <img src={props.beer.image_url} width="200" alt="" />
//         <div>
//           <h3>{props.beer.name}</h3>  
//           <h5>{props.beer.tagline}</h5>  
//           <p>{props.beer.description}</p>

//           {/*    Iteration 5.3     */}
//           {
//             props.hideDetails 
//               ?  null
//               : (
//                 <div>
//                   <h4>Food Pairing</h4>  
//                   <ul>
//                     { props.beer.food_pairing.map( ( food, i) => {
//                       return <li key={i}> {food} </li>
//                     })}
//                   </ul>

//                   <p><strong>Brewers Tips:</strong> {props.beer.brewers_tips} </p>
//                 </div>
//                 )
//           }  

//         </div>
//       </div>
//   )
// }



// Iteration 6
function BeerCard( props ) {

  console.log('BEER CARD', props.hideDetails)
  return(
    <a href={`/beers/${props.beer.id}`}>

      <div>
        <img src={props.beer.image_url} width="200" alt="" />
        <div>
          <h3>{props.beer.name}</h3>  
          <h5>{props.beer.tagline}</h5>  
          <p>{props.beer.description}</p>

          {
            props.hideDetails 
              ?  null
              : (
                <div>
                  <h4>Food Pairing</h4>  
                  <ul>
                    { props.beer.food_pairing.map( ( food, i) => {
                      return <li key={i}> {food} </li>
                    })}
                  </ul>

                  <p><strong>Brewers Tips:</strong> {props.beer.brewers_tips} </p>
                </div>
                )
          }  

        </div>
      </div>

    </a>
  )
}

module.exports = BeerCard;