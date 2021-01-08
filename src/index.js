import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import ReactDOM from 'react-dom'
import App from './App'

const initialState = {
  places: []
}

const placesReducer = (state = initialState, action) => {
  if (action.type === 'SET_ALL_PLACES') {
    return {
      ...state,
      places: action.payload
    }
  }

  return state
}

const store = createStore(placesReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
