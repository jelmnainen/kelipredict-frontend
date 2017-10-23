import { combineReducers } from 'redux'

import weather from './weatherDuck'

const rootReducer = combineReducers({
  weather
})

export default rootReducer
