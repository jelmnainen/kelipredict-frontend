import React from 'react'
import moment from 'moment'

import Spin from './Spin'

const SingleForecast = ({ forecast: { frictionClass, surTemp, timeObj }}) => {
  const val = frictionClass == 3 ? 'good' : frictionClass == 2 ? 'average' : 'bad'
  const time = timeObj.format('dddd H:mm')
  const temp = Math.round(surTemp * 100) / 100
  return(
    <div className={`card prediction-card prediction-${val} card-${val}`}>
      <div className="card-body">
        <p className="card-title">
          {time}
        </p>
        <h3 className={`card-text prediction-${val}`}>
            {temp}&deg;
        </h3>
      </div>
    </div>
  )
}

const ForecastDisplay = ({ forecast, fetching }) => {
  const forecasts = forecast.map(f => ({
    frictionClass: f.frictionClass,
    surTemp: f.surTemp,
    timestamp: f.timestamp,
    timeObj: moment(f.timestamp)
  }))
  const keptForecasts = forecasts.filter((f, i) => i % 4 == 0)
  const ForecastElems = keptForecasts.map(f => <SingleForecast forecast={f} key={f.timestamp} />)
  return(
    <div className="row frontpage-content">
      <div className="col-sm-12 prediction-content">
        <Spin visible={fetching} />
        {ForecastElems}
      </div>
    </div>
  )
}

export default ForecastDisplay
