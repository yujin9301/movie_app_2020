import React from 'react';
import PropTypes from 'prop-types';

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
function Food({ name, picture, rating}) {
return (
  <div>
    <h1>I like {name}</h1>
<h4>{rating}/5.0</h4>
    <img src={picture} alt={name} ></img>
  </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'kimchi',
    image:'https://m.hansanggung.com/web/product/big/hansanggung1_44.jpg',
    rating: 5
  },
  {
    id: 2,
    name: 'ramen',
    image:'https://post-phinf.pstatic.net/MjAxODAyMDVfNDAg/MDAxNTE3NzkzMzYwNjQz.fqaN8BhckNlQsH-W6I8OIy2ZsA76pAhkVjtFNa0TEw8g.G8FVDa92ISHCm0kEcJHupls7ObpE9IGIYKXw9SFgUBAg.JPEG/image_6921511681517793230752.jpg?type=w1200',
    rating: 4
  },
  {
    id: 3,
    name: 'samgiopsal',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRm1p6Om8NS0rreCe9jyFODbaMg5YJZj_GVzFklK9aNZ5E6qoo_&usqp=CAU',
    rating: 2
  },
  {
    id: 4,
    name: 'chukumi',
    image:'https://recipe1.ezmember.co.kr/cache/recipe/2019/03/05/52d2be99c015378a75c9db81362422c71.jpg',
    rating: 4.9
  },
];

//npm install prop-types
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
}

//function renderFood(dish){
//  return <Food name={dish.nme} picture={dish.image} />;
//}
// const renderFood = dish => <Food name={dish.nme} picture={dish.image} />
function App() {
//  return <div className="App" />;
//  return (<div> {foodILike.map(renderFood)} </div> );
return (
<div>
  {foodILike.map(dish => (
    <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
  ))}
</div>
);
}
export default App;
