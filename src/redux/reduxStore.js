import { createStore, applyMiddleware, compose } from "redux";
import {persistStore } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import rootReducer from "./rootReducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers( applyMiddleware(thunkMiddleware)) );

export const persistor = persistStore(store);



export default {store, persistor};

/*
 Ниже код нативной реализация localStorage с нативным способом есть проблема которая заключается в том что функцию которую мы слушаем будет вызываться каждый раз когда меняется state, а данная функция выполняет дорогостующею операцию JSON.stringify(), что бы решить это проблему нужно подключать либу lodash. Я нахожу лучшем решением использовать другой подход, который сразу использует либу Redux Persist.
*/

// function loadFromLocalStorage() {
//   try {
//     const serializedState = localStorage.getItem('links');
//     if(serializedState === null) return undefined;
//     return JSON.parse(serializedState)
//   } catch(e) {
//     console.log(e)
//   }
// }

// function saveToLocalStorage(state) {
//   try {
//     const serializedState = JSON.stringify(state)
//     localStorage.setItem('links', serializedState)
//   } catch(e) {
//     console.log(e)
//   }
// }

// const persistedState = loadFromLocalStorage(); Добавить в createStore


// store.subscribe(() => {
//   saveToLocalStorage({
//     links: store.getState().links
//   })
// })