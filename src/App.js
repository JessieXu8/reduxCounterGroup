import React, { Component } from 'react';
import CounterGroup from './component/CounterGroup'
class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <CounterGroup amount={2}/>
      </div>
    );
  }
}

export default App;