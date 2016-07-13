import React, { Component, PropTypes } from 'react';

export default class TemplatePage extends Component {

  componentWillMount() {
    this.props.fetchContent()
  }

  render() {
    const { content } = this.props
    return (
      <div>
        <h1>Hi there!</h1>
        {this.props.content}
      </div>
    );
  }
}

TemplatePage.propTypes = {
  content: PropTypes.string.isRequired,
  fetchContent: PropTypes.func.isRequired
};
