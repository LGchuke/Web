import React from 'react';
{/* import Tween from 'Tween'; */}

/* eslint global Tween */

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let btn = this.btn;
    btn.addEventListener('click', () => {
      console.log('click');
      let start = 0, during = 10;
      let _run = function() {
        start++;
        let scale = Tween.Bounce.easeOut(start, 1, -0.14, during);
        btn.style.transform = `scale(${scale})`;
        console.log(scale, btn.style.transform);
        if (start < during) requestAnimationFrame(_run);
      };
      _run();
    });

    this.btn.addEventListener('keydown', () => {
      console.log('keydown');
    });
  }

  render() {
    {/* const { typeA, typeB } = this.props; */}
    const className = 'btn neon-1 default lg';
    const name = 'Button';
    return (
      <button ref={(btn) => { this.btn = btn; }} className={ className } style={{ '--color': '#0ff' }}>
        <span>{ name }</span>
      </button>
    );
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='item' style={{ '--color': '123' }}>
        <Button { ...this.props } />
      </div>
    );
  }
}

export default Item;
