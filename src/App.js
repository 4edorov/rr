import React from 'react'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Counter from './Counter'
import './App.css'

const initialState = {
  count: 0
}

function reducer(state = initialState, action) {
  console.log('reducer', state, action)

  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        count: state.count - 1
      }
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state
  }
}
const store = createStore(
  reducer,
  applyMiddleware(thunk)
)
console.log('store', store)

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App
