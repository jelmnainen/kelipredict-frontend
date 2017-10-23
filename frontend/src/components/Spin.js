import React from 'react'
import { RingLoader, PropagateLoader } from 'react-spinners';

const Spin = ({ visible }) => {
  return (
      <PropagateLoader
        color={'#ac9484'}
        size={15}
        loading={visible}
      />
  )
}

export default Spin
