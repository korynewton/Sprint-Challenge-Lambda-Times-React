import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types'


const Cards = props => {
  // console.log(props.cards)
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {props.cards.map((card,index) => <Card key={index} card={card} />)}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards : PropTypes.arrayOf(PropTypes.shape({
    headline : PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string,
  }))
}



export default Cards;