import React from 'react';
import './App.css';
import About from './routes/About';
import { HashRouter, Route} from 'react-router-dom';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App() {
  return (
          <HashRouter>
          <Navigation />
          <Route path="/" exact={true} component={Home}></Route>
          <Route path="/about"  component={About}></Route>
          <Route path="/movie-detail"  component={Detail}></Route>
          </HashRouter>
          );
}
export default App;
