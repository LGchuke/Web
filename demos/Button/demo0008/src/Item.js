import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { hex } = this.props;
    const className = 'btn neon-1 default lg';
    const name = 'Button';
    return (
      <button className={ className } style={{ '--color': hex }}>
        <span>{ name }</span>
      </button>
    );
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='item'>
        <Button { ...this.props } />
      </div>
    );
  }
}

export default Item;
