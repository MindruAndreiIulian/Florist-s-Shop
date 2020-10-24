import { createStore, combineReducers, applyMiddleware } from 'redux';
import {cartReducer} from './Cart/CartReducer'
import {userReducer} from './User/UserReducer'
import {favoriteReducer} from './Favorite/FavoriteReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    favorite: favoriteReducer
});

const middlewares = [thunk,logger]  

const store = createStore(rootReducer,applyMiddleware(...middlewares));

export default store;