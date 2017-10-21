import React from 'react'

class Frontpage extends React.Component {
  componentDidMount() {
    this.props.fetchContent()
  }
  render() {
    return(
      <div className="row">
        <div className="col-sm-12">
          <div className="row">
            <dvi className="col-sm-12">
              {this.props.content}
            </dvi>
          </div>
        </div>
      </div>
    )
  }
}

export default Frontpage
