import React from "react";
class life extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {}

  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    return (
      <div>
        <p>react生命周期</p>
        <button onClick={this.handleAdd}>+++</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default life;
