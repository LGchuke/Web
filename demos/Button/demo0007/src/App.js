import React from 'react';
import Row from './Row';
import '../public/css/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   index: 0,
    //   res: [],
    //   sidebarSwitch: true
    // };
    this.loadMap = this.loadMap.bind(this);
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
        console.log(res);
        // this.setState(() => ({ res }));
      }
    };
    xhr.send();
  }

  render() {
    const items = [
      {

      },
      {

      }
    ];
    return (
      <div id='neon-box' className='grid'>
        <Row items={ items } />
        <div className='row'>
          <div id='item0000' className='item'>
            <p>
              <a className='btn btn-neon' href='#'>Features</a>
            </p>
          </div>
          <div id='item0001' className='item'>
            <p>
              <a className='btn btn-neon' href='#'>Project</a>
            </p>
          </div>
          <div id='item0002' className='item'>
            <p>
              <a className='btn btn-neon' href='#'>Donate</a>
            </p>
          </div>
          <div id='item0003' className='item'>
            <h1>Resource</h1>
          </div>
          <div className='item'></div>
          <div className='item'></div>
        </div>
        <div className='row'>
          <div className='item'>
            <span className='neon-circle neon-circle-pink'>1</span>
          </div>
          <div className='item'>
            <span className='neon-circle neon-circle-blue'>2</span>
          </div>
          <div className='item'>
            <span className='neon-circle neon-circle-green'>3</span>
          </div>
          <div className='item'>
            <span className='neon-circle neon-circle-yellow'>7</span>
          </div>
          <div className='item'></div>
          <div className='item'></div>
        </div>
      </div>
    );
  }
}

export default App;