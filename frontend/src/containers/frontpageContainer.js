import { connect } from 'react-redux'

import Frontpage from '../components/Frontpage'
import { fetchWeatherData } from '../ducks/weatherDuck'

const mapStateToProps = (state) => ({
  forecast: state.weather.forecast,
  messages: state.weather.messages,
})

const mapDispatchToProps = (dispatch) => ({
  fetchContent() {
    dispatch(fetchWeatherData())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Frontpage)
