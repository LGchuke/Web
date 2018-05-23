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
    xhr.open('GET', './assets/map/btn-type.json');
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
      const x = 3;
      const count = res.length / x - 1;

      for (let i = 0; i < count; i++) {
        let row = (
          <Row>
            <Item typeA={ res[i * x + 0].typeA } typeB={ '#f05050' } />
            <Item typeA={ res[i * x + 1].typeA } typeB={ '#ffa500' } />
            <Item typeA={ res[i * x + 2].typeA } typeB={ '#ffd52e' } />
            <Item typeA={ res[i * x + 2].typeA } typeB={ '#49dd8e' } />
            <Item typeA={ res[i * x + 2].typeA } typeB={ '#58b3ff' } />
            <Item typeA={ res[i * x + 2].typeA } typeB={ '#ae99ff' } />
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
