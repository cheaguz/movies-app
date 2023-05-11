import React from 'react'
import { BsStar, BsStarFill } from 'react-icons/bs';
import { Box } from '@chakra-ui/react';

export const RenderStars = ({votes}:{votes:number}) => {
    const total = [1,2,3,4,5,6,7,8,9,10]

    const HandleRenderStars = () =>(
            <>
            {total.map((t:number) => (
                <>
                    {votes <= t && 
                        <BsStar  key={t}/>
                    }
                    {
                        votes > t &&
                        <BsStarFill style={{color:'#FFC300'}} key={t}/>
                    }
                </>
            ))}
            </>
        )


  return (
    <Box display={'flex'} textAlign="center">
      <HandleRenderStars />
    </Box>
  )
}
