import React from 'react';
// import Main from './Main';

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   index: 0,
    //   res: [],
    //   sidebarSwitch: true
    // };
    // this.loadMap = this.loadMap.bind(this);
  }


  // componentDidMount() {
  //   this.loadMap();
  // }

  // loadMap() {
  //   let xhr = new XMLHttpRequest();
  //   xhr.overrideMimeType('application/json');
  //   xhr.open('GET', '/assets/maps/index.json');
  //   xhr.onload = () => {
  //     if (xhr.status >= 200 && xhr.status < 300) {
  //       const res = JSON.parse(xhr.response);
  //       this.setState(() => ({ res }));
  //     }
  //   };
  //   xhr.send();
  // }

  render() {
    return (
      <div>
        Hello World
      </div>
    );
  }
}

export default App;
