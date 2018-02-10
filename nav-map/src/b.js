import React from 'react';

class B extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{color: '#f23'}}>{this.props.name}</h1>
        <h1 style={{color: '#f23'}}>{this.props.name}</h1>
        <h1 style={{color: '#f23'}}>{this.props.name}</h1>
      </div>
    );
  }
}

export default B;