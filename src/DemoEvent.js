import React from "react";

class MyEvent extends React.Component {
  handleMyClick(e) {
    console.log("Button Click");
  }
  MyInput(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.MyInput} />
        <button onclick={this.handleMyClick}>Okay</button>
      </div>
    );
  }
}
export default MyEvent;
