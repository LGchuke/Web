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
    xhr.open('GET', './assets/maps/index.json');
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
      const count = res.length / x - 1;

      for (let i = 0; i < count; i++) {
        let row = (
          <Row>
            <Item hex={res[i * 6 + 0].hex} />
            <Item hex={res[i * 6 + 1].hex} />
            <Item hex={res[i * 6 + 2].hex} />
            <Item hex={res[i * 6 + 3].hex} />
            <Item hex={res[i * 6 + 4].hex} />
            <Item hex={res[i * 6 + 5].hex} />
          </Row>
        );
        rows.push(row);
      }
    }

    return (
      <div id='neon-box' className='grid'>
        { rows }
      </div>
    );
  }
}

export default App;
