import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import About from './Pages/About/About';
import Page404 from './Pages/Page404';
import Category from './Pages/Category/Category';
import './utils/utility-classes.css';
import TermsAndConditions from './Pages/TermsAndConditions';
import Product from './Pages/Product/Product';
import Cart from './Pages/Cart/Cart';
import Favorite from './Pages/Favorites/Favorite'
import MainCategory from './Pages/MainCategory/MainCategory'

function App() {
  return (
    <div className = "App">
        <Switch>
          <Route path = '/products' component = {MainCategory} />
          <Route path = '/terms' component = {TermsAndConditions} />
          <Route path = '/login' component = {Login} />
          <Route exact path = '/' component = {Home} />
          <Route path = '/about' component = {About} />
          <Route path = '/favorite' component = {Favorite} />
          <Route path = '/cart' component = {Cart} />
          <Route path = "/category/:categoryName" component = {Category}/>
          <Route path = "/product/:productId" component = {Product} /> 
          <Route path = '/404' component = {Page404} />

        </Switch>
    </div>
  );
}

export default App;
