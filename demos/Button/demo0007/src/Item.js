import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name } = this.props.item;
    return (
      <button className='btn'>{ name }</button>
    );
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.item;
    return (
      <div className='item'>
        {/* <p>
          <a className='btn btn-neon' href='#'>Features</a>
        </p> */}
        <Button item={ item } />
      </div>
    );
  }
}

export default Item;
