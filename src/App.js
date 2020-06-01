import React from 'react';

function Food(props) {
return <h1>I like {props.fav}</h1>;
}
/**
 * 방법 1
function Food(props) {
  { fav } = props;
  return <h1>I like {fav}</h1>;
  }
 */
/**
 * 방법 2
 
function Food({ fav }) {
return <h1>I like {fav}</h1>;
}

*/


function App() {
//  return <div className="App" />;
  return (
    <div>
      <h1>hello</h1>
      <Food fav="kimchi"></Food>
      <Food fav="ramen"></Food>
      <Food fav="samgiopsal"></Food>
      <Food fav="chukumi"></Food>
    </div>
  );
}

export default App;
