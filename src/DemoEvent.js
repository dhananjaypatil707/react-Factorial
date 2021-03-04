import React from "react";

class MyEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { val1: "", val2: "" };
  }

  myButtonClick = e => {
    this.setState({ val2: this.state.val1 });
  };

  inputTextChange = e => {
    this.setState({ val1: e.target.value });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.inputTextChange} />
        <button onClick={this.myButtonClick}>Okay</button>
        <p>{this.state.val2}</p>
        <p>{this.state.val1}</p>
      </div>
    );
  }
}

export default MyEvent;
//Write name of Functional Component not filename
