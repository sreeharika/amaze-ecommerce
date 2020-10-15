import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { productDetailsReducer, productListReducer } from './reducers/productReducer.';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/CartReducers';
import Cookie from 'js-cookie'

const cartItems = Cookie.getJSON('cartItems') || [];

const initialState = { cart: { cartItems } };
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
})
const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;  


