import React from 'react'
import { useState } from 'react'
import more from './more.png'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

//   const [count, setCount] = useState(0)
//   const updateCount = () => {
//     setCount((count) => count + 1);
//   }

  return (
      <div className="Card">
          <Link to={'/edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
          <h2 className="name">{props.name}</h2>
          <p className="sweetness">{"Sweetness: " + props.sweetness}</p>
          <p className="color">{"Color: " + props.color}</p>
      </div>
  );
};

export default Card;