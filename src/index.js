import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import StepCounter from './StepCounter';
import 'bootstrap/dist/css/bootstrap.css';

export const INCREMENT = 'INCREMENT'
export const RESET = 'RESET'

export function increment() {
  return { type: INCREMENT };
}

export function reset() {
  return { type: RESET }
}

const initialState = {
  count: 0
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      };
    case RESET:
      return {
        count: 0
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <StepCounter />
  </Provider>
)



ReactDOM.render(<App />, document.getElementById('root'));

