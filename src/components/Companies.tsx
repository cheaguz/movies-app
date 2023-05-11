import React from 'react'
import { Box } from '@chakra-ui/react';

interface Companies{
    id:number;
    name:string;
}

export const Companies = ( {production_companies}:{production_companies:Companies[]} ) => {
  return (
    <Box display={'flex'} justifyContent={'center'} p={'2%'}>
            {production_companies?.map((pc) => (
                <p style={{fontSize:'12px',fontFamily:"'Noto Sans', sans-serif"}} key={pc.id} > 
                  | {pc.name} 
                </p>           
            ))}
          </Box>
  )
}
