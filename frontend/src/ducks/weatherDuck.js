import R from 'ramda'
import axios from '../utils/axios'

export const FETCH_WEATHER = 'weather/FETCH_WEATHER'

export const fetchWeatherData = () => ({
  type: FETCH_WEATHER,
  payload: axios('/predict').then((res) => res.data)
})

const defaultState = {
  fetching: false,
  forecast: [],
  messages: [],
}

const frontpageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case `${FETCH_WEATHER}_PENDING`:
      return R.assoc('fetching', true, state)
    case `${FETCH_WEATHER}_FULFILLED`:
      return R.pipe(
        R.assoc('forecast', action.payload),
        R.assoc('fetching', false)
      )(state)
    case `${FETCH_WEATHER}_REJECTED`:
      return R.pipe(
        R.assoc('messages', ['Fetching weather data failed, please reload']),
        R.assoc('fetching', false)
      )(state)
    default:
      return state
  }
}

export default frontpageReducer
