import React, { useState } from "react";
const IMAGE_PATH = import.meta.env.VITE_IMG_PATH;
import { useNavigate } from "react-router-dom";
import { StyledCard, StyledText, StyledP, StyledTitle } from "./Styled";

import { CardInterface } from "../interfaces/CardInterface";
import styled from "styled-components";
import { limitString } from "../utils/limitString";
import { imgError } from "../utils/imgError";

import { Axios } from "axios";
import { getSeason } from "../services/MovieServices";

export const Card = ({
  poster_path,
  title,
  overview,
  release_date,
  id,
  tvShow,
  season,
  season_number
}: CardInterface) => {
  const navigate = useNavigate();
  const [display, setDisplay] = useState("none");

  return (
    <StyledCard
      onClick={() => {
       if(tvShow) {
        navigate(`/SeriesDetails/${id}`, { replace: true });
       }
       else if(season){
        navigate(`/seasons/${id}/${season_number}`)
        console.log('id',id,'season_number',season_number)
      
  
       }
       else {
        navigate(`/movieDetails/${id}`, { replace: true });
        window.scrollTo(0, 0);
       }
        
      }}
    >
      <img src={`${IMAGE_PATH}${poster_path}`} style={styles.img} onError={imgError}/>
      <FloatText >
        <StyledTitle>

           { limitString(20,title).string } 
          </StyledTitle>
       
        <StyledText>
          { limitString(140,overview).string }           
        </StyledText>
        <StyledP> {release_date} </StyledP>
        
      </FloatText>
    </StyledCard>
  );
};

const styles = {
  img: {
    height: "400px",
    width : '350px'
  },
};

const FloatText = styled.div`
color : white;

`;
