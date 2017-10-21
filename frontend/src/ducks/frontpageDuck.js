import R from 'ramda'

export const TEMPLATE_SUCCESS = 'TEMPLATE_SUCCESS'

export const fetchTemplateContent = () => ({
  type: TEMPLATE_SUCCESS,
  payload: {
    content: 'This is a message from an action creator!',
  }
})

const defaultState = {
  content: '',
}

const frontpageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TEMPLATE_SUCCESS:
      return R.assoc('content', action.payload.content, state)
    default:
      return state
  }
}

export default frontpageReducer
