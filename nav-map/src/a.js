import React from 'react';  

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Click</button>
        <button onClick={this.handleClick}>Click</button>
        <button onClick={this.handleClick}>Click</button>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }

  // handleClick = () => {
  //   this.setState(prevState => ({ count: prevState.count + 1 }));
  // }
}

export default Counter;