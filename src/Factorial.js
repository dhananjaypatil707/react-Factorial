import React from "react";

class Factorial extends React.Component {
  constructor(props) {
    super(props);
  }

  calFactorial(num) {
    var i = 1;
    var ans = 1;
    for (i = num; i > 0; i--) {
      ans = ans * i;
    }
    return ans;
  }

  render() {
    return <div>Factorial is{this.calFactorial(this.props.num)}</div>;
  }
}
export default Factorial;
