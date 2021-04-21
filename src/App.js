import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Events from './components/Events';
import Buy from './components/Buy';
import Tickets from './components/Tickets';
import lastAssets from "./assets/names.json";
import addOrder from './actions/addOrder';

function App() {


  const dispatch = useDispatch();

  dispatch(addOrder(lastAssets))

  console.log(lastAssets)

  return (
    <div className="wrapper">
      <Switch>
        <Route exact path="/" component={ Events } />
        <Route path="/buy/:id" component={ Buy } />
        <Route path="/tickets/:id" component={ Tickets } />
      </Switch>
    </div>
  );
}

export default App;
