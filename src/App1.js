import React from 'react';

class App1 extends React.Component {

  state = {
    count: 0,
  };
  
  add = () => {
    //this.setState({ count: this.state.count + 1 });
    this.setState(
      current => ({
        count: current.count +1,
      })
    );
  };

  minus = () => {
    
    // 성능 떨어짐
    //this.setState({ count: this.state.count - 1 });
    this.setState(
      current => ({
        count: current.count -1,
    })
  );
  }

  // render 함수보다 먼저 실행됨. 
  constructor(props){
   
      super(props);
      console.log('hello'); 
    
  }

  // render 다음에 실행.
  componentDidMount() {
    console.log('component rendered');
  }

  //setState -> render -> componentDidUpdate
  componentDidUpdate() {
    console.log('I just updated');
  }

  componenetWillUnmount() {
    console.log('Goodbyt, cruel world');
  }

  // constructor -> render -> componentDidMount
  render() {
    console.log("I'm rendering");
  return (  
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
  )
  }  
}

export default App1;
