import React from 'react';
import Item from './Item';

class Row extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = [].map.call(this.props.items, (item, index) => {
      return <Item key={ index.toString() } item={ item } />;
    });

    return (
      <div className='row'>
        { items }
      </div>
    );
  }
}

export default Row;
