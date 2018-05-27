import React from 'react';


class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // const { typeA, typeB } = this.props;
    // let btn = this.btn;
    // const from = 1;
    // const to = 0.86;

    // btn.addEventListener('mousedown', () => {
    //   let start = 0, during = 20;
    //   let _run = function() {
    //     start++;
    //     let scale = Tween[typeA][typeB](start, from, to - from, during);
    //     btn.style.transform = `scale(${scale})`;
    //     console.log(scale, btn.style.transform);
    //     if (start < during) requestAnimationFrame(_run);
    //   };
    //   _run();
    // });

    // btn.addEventListener('mouseup', () => {
    //   let start = 0, during = 20;
    //   let _run = function() {
    //     start++;
    //     let scale = Tween[typeA][typeB](start, to, from - to, during);
    //     btn.style.transform = `scale(${scale})`;
    //     console.log(scale, btn.style.transform);
    //     if (start < during) requestAnimationFrame(_run);
    //   };
    //   _run();
    // });
  }

  render() {
    const { color, borderColor, bgColor, fontColor } = this.props.obj;

    const className = 'btn lg flow';
    const name = 'Button';

    return (
      <button ref={(btn) => { this.btn = btn; }} className={ className } style={{ '--flowColor': color, '--borderColor': borderColor, '--bgColor': bgColor, '--fontColor': fontColor }}>
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
    // const { typeA, typeB } = this.props;
    return (
      <div className='item' style={{ '--color': '123' }}>
        <Button { ...this.props } />
      </div>
    );
  }
}

export default Item;
