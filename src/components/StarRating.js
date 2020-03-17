import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

  // Initialize a 'rating' state
state = {
  rating: 0

}

  // Write a function that returns 5 Star components
renderStars = () => {
  let stars = [];
  for (let i = 0; i < 10; i++){
    stars.push(
      <Star
        isSelected = { this.state.rating > i}
        updateRating= { () => this.handleUpdateStars(i +1 )}
        key={i}

        />


    )
  }
  return stars
}
  // Write an event handler that updates the rating state.

handleUpdateStars = (rating) => {
  this.setState({ rating: rating})
}
  // Pass the function to a Star component via props


  render() {
    return (
      <ul className="course--stars">
        {/* Render the Star components */}
        { this.renderStars() }
      </ul>
    );
  }
}

export default StarRating;
