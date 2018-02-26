import React from 'react';
import Sidebar from './Sidebar';
import Main from './Main';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      res: [],
      sidebarSwitch: true
    };
    this.loadMap = this.loadMap.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  handleClick(index) {
    this.setState(() => ({ index }));
  }

  toggleSidebar() {
    this.setState((prevState) => ({ sidebarSwitch: !prevState.sidebarSwitch }));
  }

  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    let xhr = new XMLHttpRequest();
    xhr.overrideMimeType('application/json');
    xhr.open('GET', '/assets/maps/index.json');
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        const res = JSON.parse(xhr.response);
        this.setState(() => ({ res }));
      }
    };
    xhr.send();
  }

  render() {
    const index = this.state.index;
    const columns = this.state.res.columns;
    const sidebarSwitch = this.state.sidebarSwitch;
    return (
      <div>
        <header className='mobile-header-wrap'>
          <a className='mobile-logo' href='#'>
            <img src='assets/img/logo/logo2.svg' />
          </a>
        </header>

        <div className='btn-mobile-sidenav' onClick={ this.toggleSidebar }>
          <div className='nav-bar'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <Sidebar columns={ columns } handleClick={ this.handleClick } sidebarSwitch={ sidebarSwitch } />
        <Main index={ index } columns={ columns } />
      </div>
    );
  }
}

export default App;