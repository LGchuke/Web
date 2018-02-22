import React from 'react';
import Panel from './Panel';


class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const index = this.props.index;
    const columns = this.props.columns;

    let panels = [];
    let navCnName = '默认';
    let navEnName = 'Default';
    if (columns) {
      navCnName = columns[index].name;
      navEnName = columns[index].en;
      panels = [].map.call(columns[index].panels, panel => {
        return <Panel panel={ panel } />;
      });
    }

    return (
      <div className='main-wrap'>
        <div className='main'>
          <div className='board selected-nav'>
            <div className='nav-left'>
              <i className='czs-circle'></i>
              <span className='selected-nav-cn' onClick={ this.load }>{ navCnName }</span>
              <span className='selected-nav-en'>{ navEnName }</span>
            </div>
            <div className='navigator'>
              <a href='#' className='up'><i className='czs-angle-up-l'></i></a><a href='#' className='down'><i className='czs-angle-down-l'></i></a>
            </div>
          </div>
          <div className='select-bar'>
            <ul>
              <li>
                <a className='active' href='#'>
                  <i className='czs-bookmark-l'></i>书签
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='czs-wrench-l'></i>利器
                </a>
              </li>
            </ul>
          </div>

          <div>
            { panels }
          </div>
        </div>
      </div>
    );
  }
}

export default Main;