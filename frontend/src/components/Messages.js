import React from 'react'

const Message = ({message}) => (
  <div className="message">
    {message}
  </div>
)

const Messages = (props) => {
  const MessageElems = props.messages.map((message) => <Message message={message} />)
  return (
    <div className="row">
      <div className="col-sm-12">
        { MessageElems }
      </div>
    </div>
  )
}

export default Messages
