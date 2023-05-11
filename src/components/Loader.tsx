import React, {useState} from 'react'
import { Spinner } from './Spinner' 
import styled from 'styled-components'

export const Loader = ( {open}:{open:boolean} ) => {

  return (
    <>
    { open && 
      <BackDrop>
        <Spinner />
      </BackDrop>
    }
    </>
    
  )
}


const BackDrop = styled.div`
position: fixed;
left: 0px;
top: 0px;
width: 100%;
height: 100%;
z-index: 9999;
opacity: .4;
background-color : black;
display: flex;
justify-content : center;
align-content  : center;
align-items : center;
`;