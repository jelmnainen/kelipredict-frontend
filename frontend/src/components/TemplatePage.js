import React, { Component } from 'react'

export default class TemplatePage extends Component {

  componentWillMount() {
    this.props.fetchContent()
  }

  render() {
    const { content } = this.props
    return (
      <div>
        {content}
      </div>
    )
  }
}
