import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {combineReducers, createStore} from 'redux'
import ReactDOM from 'react-dom'
import App from './App'

const initialStatePlaces = {
  places: []
}

const initialStateMap = {
  long: -101.20869,
  lat: 39.8383872,
  zoom: 3.5,
  style: 'mapbox://styles/mapbox/light-v9',
  map: null,
}

const placesReducer = (state = initialStatePlaces, action) => {
  if (action.type === 'SET_ALL_PLACES') {
    return {
      ...state,
      places: action.payload
    }
  }

  return state
}

const mapReducer = (state = initialStateMap, action) => {
  if (action.type === 'SET_MAP') {
    return {
      ...state,
      long: action.payload.long,
      lat: action.payload.lat,
      zoom: action.payload.zoom,
      style: action.payload.style,
      map: action.payload.map
    }
  }

  return state
}

const singleReducer = {
  placesInfo: placesReducer,
  mapInfo: mapReducer
}

const rootReducer = combineReducers(singleReducer)

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
