import React from 'react'

const TemplatePage = ({ content, fetchContent }) => {
  fetchContent()
  return (
    <div>
      {content}
    </div>
  )
}

export default TemplatePage
