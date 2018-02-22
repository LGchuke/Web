import React from 'react';
import Sidebar from './Sidebar';
import Main from './Main';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      res: []
    };
    this.loadMap = this.loadMap.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.setState(() => ({ index }));
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

    return (
      <div>
        <Sidebar columns={ columns } handleClick={ this.handleClick } />
        <Main index={ index } columns={ columns } />
      </div>
    );
  }
}

export default App;