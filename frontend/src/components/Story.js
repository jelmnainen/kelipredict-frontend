import React from 'react'
import { Link } from 'react-router-dom'

const Story = () => (
  <div className="row">
    <div className="col-sm-12">
      <div className="story">
        <h4>What is this and how does it work?</h4>

        <Link to="/">&laquo; back to predictor</Link>

        <h6>The short story:</h6>
        <p>
          This is a road slipperiness predictor made by Duc Tran, Vinh Vo and Johannes Elmnäinen for Introduction to Data Science class of 2017.
        </p>

        <p>
          It predicts the slipperiness of roads around Helsinki University's Kumpula campus based on weather forecast, and it should be right about 85% of the time. Just so you know to be prepared, and maybe pay attention to the road instead of your cellphone.
        </p>

        <h6>The long story:</h6>
        <p>
          We crawl <a href="https://keliapu.net/">keliapu.net</a>'s publicly available <a href="https://keliapu.net/data/">data</a>. In total it's around 13 gigabytes of data, which we filter to contain only data points near Kumpula campus and clean up.
          Then we use Finnish Meteorogical Institute's <a href="https://en.ilmatieteenlaitos.fi/open-data">API</a> to fetch historical weather data from Kumpula's weather station. These two combined are used to teach a <a href="https://en.wikipedia.org/wiki/Random_forest">random forest classifier</a> to predict road slipperiness given weather.
        </p>
        <p>
          Finally, this service looks up current weather forecast from FMI and uses that to predict future road condition.
        </p>
      </div>
    </div>
  </div>
)

export default Story
