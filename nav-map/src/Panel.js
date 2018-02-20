import React from 'react';  
import Card from './Card';

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panel: this.props.panel
    };
  }

  render() {
    const panel = this.state.panel;
    let items = [];
    if (panel) {
      items = [].map.call(panel.items, item => {
        return <Card item={item} />;
      });
    }

    return (
      <div className='panel'>
        <div className='panel-title card'>
          <i className={ panel.iClass }></i>
          { panel.name }
        </div>
        <div class='panel-body'>
          <div class='row'>
            { items }
          </div>
        </div>
      </div>
    );
  }
}

export default Panel;