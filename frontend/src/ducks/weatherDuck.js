import R from 'ramda'
import axios from '../utils/axios'

export const FETCH_WEATHER = 'weather/FETCH_WEATHER'

export const fetchWeatherData = () => ({
  type: FETCH_WEATHER,
  payload: axios('/predict').then((res) => res.data)
})

const defaultState = {
  forecast: [],
  messages: [],
}

const frontpageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case `${FETCH_WEATHER}_FULFILLED`:
      return R.assoc('forecast', action.payload, state)
    case `${FETCH_WEATHER}_REJECTED`:
      return R.assoc('messages', ['Fetching weather data failed, please reload'], state)
    default:
      return state
  }
}

export default frontpageReducer
