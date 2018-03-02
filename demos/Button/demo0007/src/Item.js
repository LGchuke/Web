import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className='item'>
        <p>
          <a className='btn btn-neon' href='#'>Features</a>
        </p>
      </div>
    );
  }
}

export default Item;
