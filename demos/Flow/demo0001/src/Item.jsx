import React from 'react';


class Flow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { color, borderColor, bgColor, fontColor } = this.props.obj;

    const className = 'flow';
    const name = 'IAdB Ctrl Switch';

    return (
      <div ref={ el => this.el = el } className={ className } style={{ '--flowColor': color, '--borderColor': borderColor, '--bgColor': bgColor, '--fontColor': fontColor }}>
        { name }
      </div>
    );
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='item' style={{ '--color': '123' }}>
        <Flow { ...this.props } />
      </div>
    );
  }
}

export default Item;
