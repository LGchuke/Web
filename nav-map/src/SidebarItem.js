import React from 'react';

class LiItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.item;
    return (
      <li>
        <a href={ '#' + item.anchor }>
          <i className={ 'csz ' + item.iClass }></i>
          { item.name }
        </a>
      </li>
    );
  }
}

class SidebarItem extends React.Component {
  constructor(props) {
    super(props);
    this.handle = this.handle.bind(this);
    this.state = {
      active: false
    };
  }

  handle() {
    if (!this.state.active) {
      this.props.handleClick(this.props.index);
    }
    this.setState(prevState => ({ active: !prevState.active }));
  }

  render() {
    const column = this.props.column;

    let liItems = [];
    if (column) {
      liItems = [].map.call(column.panels, item => {
        return <LiItem item={ item } />;
      });
    }

    let titleClass = this.state.active ? 'nav-item nav-item-1 active' : 'nav-item nav-item-1';
    return (
      <div>
        <div className={ titleClass } onClick={ this.handle }>
          <a>
            <i className='csz czs-circle'></i>
            <span>{ column.name }&nbsp;{ column.en }</span>
          </a>
        </div>

        <ul className='nav-tags mCustomScrollbar' style={{ display: 'block' }}>
          { liItems }
        </ul>
      </div>
    );
  }
}

export default SidebarItem;