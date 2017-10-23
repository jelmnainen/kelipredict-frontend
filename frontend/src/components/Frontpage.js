import React from 'react'
import { Link } from 'react-router-dom'

import Messages from './Messages'
import ForecastDisplay from './ForecastDisplay'

class Frontpage extends React.Component {
  componentDidMount() {
    this.props.fetchContent()
  }

  render() {
    return(
      <div className="row">
        <div className="col-sm-12">
          <Messages messages={this.props.messages} />
          <div className="row justify-content-center">
            <div className="col-sm-12">
              <p className="explanation-text">
                No more slipping on Kumpula campus roads while concentrating on your phone! I will predict the road condition for you.
                <span className="prediction-good"> Teal</span> means you're good to go,
                <span className="prediction-average"> beige</span> that the roads might be slippery and
                <span className="prediction-bad"> red</span> that you should really take care. I also provide the predicted surface temperature in degrees celcius.
              </p>
            </div>
          </div>
          <ForecastDisplay forecast={this.props.forecast} />
          <div className="row frontpage-links">
            <div className="col-sm-12">
              <Link to='/story'>
                What is this and how does it work
              </Link>
            </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Frontpage
