import React from 'react';
import Row from './Row';
import Item from './Item';

import '../public/css/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      res: [],
    };
    this.loadMap = this.loadMap.bind(this);
  }

  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    let xhr = new XMLHttpRequest();
    xhr.overrideMimeType('application/json');
    xhr.open('GET', './assets/map/color.json');
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        const res = JSON.parse(xhr.response);
        this.setState(() => ({ res }));
      }
    };
    xhr.send();
  }

  render() {

    const res = this.state.res;
    let rows = [];
    if (res) {
      const x = 6;
      const count = res.length / x;

      for (let i = 0; i < count; i++) {
        let row = (
          <Row>
            <Item obj={ res[i * x + 0] } />
            <Item obj={ res[i * x + 1] } />
            <Item obj={ res[i * x + 2] } />
            <Item obj={ res[i * x + 3] } />
            <Item obj={ res[i * x + 4] } />
            <Item obj={ res[i * x + 5] } />
          </Row>
        );
        rows.push(row);
      }
    }

    return (
      <div id='neon-box' className='box grid'>
        { rows }
      </div>
    );
  }
}

export default App;
