import { connect } from 'react-redux'

import Frontpage from '../components/Frontpage'
import { fetchTemplateContent } from '../ducks/frontpageDuck'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    content: state.frontpage.content
  }

}

const mapDispatchToProps = (dispatch) => ({
  fetchContent() {
    dispatch(fetchTemplateContent())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Frontpage)
