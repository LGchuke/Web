import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item
    };
  }

  render() {
    const item = this.state.item;

    let icon = item.icon ? item.icon : 'assets/img/icons/default.ico';
    return (
      <div class='sm-6 md-4 lg-3'>
        <div class='card no-footer'>
          <a class='card-heading link-tooltip' title={ item.title } href={ item.href } target='_blank'>
            <span class='card-icon'>
              <img src={ icon } />
            </span>
            <span class='card-title'>{ item.title }</span>
          </a>
          <div class='card-body'>{ item.intro }</div>
        </div>
      </div>
    );
  }
}

export default Card;