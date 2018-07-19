import React, { Component } from 'react';

class Counter extends Component {

  constructor(props) {
    super(props);
    this.inputValue = React.createRef();
  }

  multiple = () => {
    const onMultiple = this.props.onMultiple;
    onMultiple(this.props.index,this.inputValue.current.value);
  }

  render() {
    const { state, onIncrement, onDecrement,index } = this.props;
    return (
        <p>
          Clicked: {state} times
        {' '}
          <button onClick={()=>onIncrement(index)}>
            +
          </button>
          <button onClick={()=>onDecrement(index)}>
            -
          </button>
          <input type = "text" defaultValue={0} ref={this.inputValue}/>
          <button onClick={this.multiple}>
            *
          </button>
          <button onClick={()=>setTimeout(() => {
            onIncrement(index)
          }, 1000)}>
           Increment Async
          </button>
        </p >
    );
  }
}

export default Counter;