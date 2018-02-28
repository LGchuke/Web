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
        return <LiItem key={item.name} item={ item } />;
      });
    }

    const smallIntro = column.intro ? column.intro : 'el psy congroo... el psy congroo... el psy congroo...';

    const titleClass = this.state.active ? 'nav-item nav-item-1 active' : 'nav-item nav-item-1';
    return (
      <div>
        <div className={ titleClass } onClick={ this.handle }>
          <h1>
            { column.name }
          </h1>
          <p>
            { column.en }
            <small>{ smallIntro }</small>
          </p>
        </div>

        <ul className='nav-tags mCustomScrollbar'>
          { liItems }
        </ul>
      </div>
    );
  }
}

export default SidebarItem;