import React from "react";

export default class ImageSlider extends React.Component {
  state = {
    image: [
      "https://i.pinimg.com/236x/b6/21/07/b62107d70659823c6f409480f7435d14--watercolor-food-watercolor-print.jpg",
      "https://i.pinimg.com/236x/8a/61/c1/8a61c1ca0d1a20db922aa5e3a8493d0e--watercolour-flowers-watercolor-ideas.jpg",
      "https://i.pinimg.com/236x/86/d6/46/86d646ce2f92efd7890843ef5af9e700.jpg",
      "https://i.pinimg.com/236x/f6/4d/d7/f64dd7eb8df298195d61569b9634f982--watercolor-sketch-watercolor-kiwi.jpg",
    ],
    index: 0,
  };

  nextImage = () => {
    this.setState({
      index: this.state.index + 1,
    });
  };

  previousImage = () => {
    this.setState({
      index: this.state.index - 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.previousImage}>Previous</button>
        <img
          style={{
            width: 100,
            height: 100,
          }}
          alt="Loading"
          src={this.state.image[this.state.index]}
        />
        <button onClick={this.nextImage}>Next</button>
      </div>
    );
  }
}
