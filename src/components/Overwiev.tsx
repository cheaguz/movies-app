import React from 'react'
import styled from 'styled-components';
import { StyledTitle,StyledText,StyledP } from './Styled';

import { Box, SimpleGrid } from '@chakra-ui/react';
import { validateText } from '../utils/validateText';
import { imgError } from '../utils/imgError';
import { BsStar, BsStarFill } from 'react-icons/bs';
const IMAGE_PATH = import.meta.env.VITE_IMG_PATH;


import { RenderStars } from './RenderStars';


interface Genres{
    id : number;
    name : string;
  }

export const Overwiev = ({title,overview,genres,release_date,runtime,vote_count,vote_average,backdrop_path}:{
    title : string,
    overview:string,
    genres : Genres[],
    release_date : string,
    runtime : string,
    vote_count : number,
    vote_average : number,
    backdrop_path : string,
   
}) => {

  return (
    <Box boxShadow={'dark-lg'} w={'100%'} alignItems={'center'} p={'1%'} display={'flex'} color={'rgba(255, 255, 255, 0.87)'} bg={'#0f171e'}>
      <SimpleGrid columns={2} alignContent={'center'} alignItems={'center'} textAlign="center">
    <div>
      <StyledTitle>{validateText(title)}</StyledTitle>
      <StyledText>{validateText(overview)}</StyledText>

      <Box mt={'2%'}>
        {genres?.map((gen: Genres) => (
          <StyledText key={gen.id}>
            {" "}
            <Chip> {gen.name} </Chip>{" "}
          </StyledText>
        ))}
      </Box>
      
      <StyledP>Fecha de estreno : {release_date}</StyledP>
      <StyledP> Duracion : {runtime} minutos </StyledP>
      <StyledP>Cantidad de votos {vote_count}</StyledP>
      <Box textAlign="center" display={'flex'} justifyContent={'center'}>

      <RenderStars 
        votes={vote_average}
      />
      
        <StyledText> {vote_average} </StyledText>
      </Box>
    </div>

    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <img
        src={`${IMAGE_PATH}${backdrop_path}`}
        onError={imgError}
      />
    </Box>
   </SimpleGrid>
  </Box>
  )
}

const Chip = styled.div`
  background-color: #494949;
  display: inline-block;
  border-radius: 3%;
  padding: 0.5%;
`;