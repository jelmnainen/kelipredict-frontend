import React, { Component } from 'react'

export default class TemplatePage extends Component {

  componentWillMount() {
    this.props.fetchContent()
  }

  render() {
    const { content } = this.props
    return (
      <div>
        <h1>Hi there!</h1>
        {content}
      </div>
    )
  }
}
