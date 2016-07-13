export const TEMPLATE_SUCCESS = 'TEMPLATE_SUCCESS';

export const fetchTemplateContent = () => ({
  type: TEMPLATE_SUCCESS,
  payload: {
    content: 'This is a message from an action creator!',
  }
})
