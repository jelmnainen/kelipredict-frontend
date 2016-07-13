import R from 'ramda'

import { TEMPLATE_SUCCESS } from '../actions/templateActions'

const defaultState = {
  content: '',
}

const templateReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TEMPLATE_SUCCESS:
      return R.assoc('content', action.payload.content, state)
    default:
      return state;
  }
}

export default templateReducer
