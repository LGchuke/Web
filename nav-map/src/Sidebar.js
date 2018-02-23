import React from 'react';
import SidebarItem from './SidebarItem';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const handleClick = this.props.handleClick;
    const columns = this.props.columns;
    let items = [];
    if (columns) {
      items = [].map.call(columns, (column, index) => {
        return <SidebarItem column={ column } index={ index } handleClick={ handleClick } />;
      });
    }
    return (
      <div className="sidenav">
        <a className="logo" href="/">
          <img src="assets/img/logo/logo2.svg" alt="logo" />
        </a>

        <div className="site-description">
          Web Nav Map
        </div>
        
        { items }
      </div>
    );
  }
}

export default Sidebar;