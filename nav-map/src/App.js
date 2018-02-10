import React from 'react';
import Counter from './a';
import B from './b';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   };
  // }

  render() {
    return (
      <div>
        <B name={this.props.name} />
        <Counter />
      </div>
    );
  }
}

export default App;