import { combineReducers } from "redux"; // to combine all reducers

import userReducer from './User/UserReducer';

import cartReducer from "./Cart/CartReducer";

import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage"; // to local storage

// import sessionStorage from "redux-persist/es/storage/session"; to session storage

import directoryReducer from './Directory/DirectoryReducer';

import shopReducer from "./Shop/ShopReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] // contains the string name of any reducer that we want to store  
}

const rootReducer = combineReducers({
    user: userReducer, 
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);