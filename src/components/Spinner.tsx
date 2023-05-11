import React from 'react'
import { Triangle } from  'react-loader-spinner'


export const Spinner = () => {
  return (
    <Triangle
        height="80"
        width="80"
        color="#269FE7"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        visible={true}
/>
  )
}


