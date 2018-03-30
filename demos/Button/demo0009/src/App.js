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
            <Item typeA={ res[i * x + 0].typeA } typeB={ res[i * x + 0].typeB } />
            <Item typeA={ res[i * x + 1].typeA } typeB={ res[i * x + 1].typeB } />
            <Item typeA={ res[i * x + 2].typeA } typeB={ res[i * x + 2].typeB } />
          </Row>
        );
        rows.push(row);
      }
    }

    return (
      <div id='neon-box' className='grid'>
        { rows }
        {/* <Row> */}
        {/*   <Item typeA='Bounce' typeB='easeInOut' /> */}
        {/* </Row> */}
      </div>
    );
  }
}

export default App;
