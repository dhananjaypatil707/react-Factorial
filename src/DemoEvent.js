import React from "react";

class MyEvent extends React.Component {
  handleMyClick(e) {
    console.log("Button Click");
  }
  render() {
    return (
      <div>
        <button onclick={this.handleMyClick}>Okay</button>
      </div>
    );
  }
}
export default MyEvent;
