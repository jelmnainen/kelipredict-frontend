import { connect } from 'react-redux'
import R from 'ramda'

import TemplatePage from '../components/TemplatePage'
import { fetchTemplateContent } from '../actions/templateActions'

const mapStateToProps = (state) => {
  return {
    content: R.path(['template', 'content'], state)
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchContent() {
    dispatch(fetchTemplateContent())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(TemplatePage);
