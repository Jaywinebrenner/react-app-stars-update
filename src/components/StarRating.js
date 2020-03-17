import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

  // Initialize a 'rating' state
state = {
  rating: 0
}
  // Write a function that returns 5 Star components
renderStars = () => {
  let stars = []

  for (let i = 0; i < 5; i++) {
    stars.push(
      <Star
        setRating={() => this.handleSetRating( i + 1)}
        key={i}
        />
    )
  }
  return stars
}

  // Write an event handler that updates the rating state.


handleSetRating = (rating) => {
  this.setState({ rating: rating });
}

  // Pass the function to a Star component via props


  render() {
    return (
      <ul className="course--stars">
        {/* Render the Star components */}
        {this.renderStars()}
      </ul>
    );
  }
}

export default StarRating;
