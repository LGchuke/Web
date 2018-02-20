import React from 'react';
import Panel from './Panel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      res: []
    };
  }

  componentDidMount() {
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
    let panels = [];
    if (this.state.res.panels) {
      panels = [].map.call(this.state.res.panels, panel => {
        return <Panel panel={panel} />;
      });
    }

    return (
      <div>
        { panels }
      </div>
    );
  }
}

export default App;