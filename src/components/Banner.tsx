import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { banners } from "../assets/Banners";
import { BannerInterface } from "../interfaces/BannerInterface";

import styled from "styled-components";

import ReactPlayer from "react-player";

import { useMediaQuery } from "@chakra-ui/react";
export const Banner = () => {

  
  const [visible, setVisible] = useState(true);
  const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)')
  return (
    <>
      <Carousel showStatus={false} showThumbs={false} autoPlay infiniteLoop>
        {banners.map((b: BannerInterface) => (
          <div
            onMouseEnter={() => setVisible(isLargerThan1200? false : true)}
            onMouseLeave={() => setVisible(true)}
          >
            { visible?  (
              <StyledDiv key={b.id}>
                <img src={b.banner} />
              </StyledDiv>
            ) : (
              <GridDiv onMouseLeave={() => setVisible(true)}>
                <div>
                  <h1>{b.name}</h1>
                  <p>{b.description}</p>
                  <StyledButton>Ver mas</StyledButton>
                </div>

                <div key={b.id}>
                  <ReactPlayer
                  key={b.id+5}
                    url={b.video}
                    
                    onEnded={() => setVisible(true)}
                    height="265px"
                    playsinline
                  />
                </div>
              </GridDiv>
            )}
          </div>
        ))}
      </Carousel>
    </>
  );
};

const StyledDiv = styled.div`
  transition: all 0.5s ease-in-out;
  
`;

const GridDiv = styled.div`
  transition: all 0.5s ease-in-out;
  display: flex;
  justify-content: space-between;
  font-family : 'Noto Sans', sans-serif;
  align-items : center;


`;

const StyledButton = styled.button`
  background-color: #0F79AF;
  border-radius: 2px;
  color: #fff;
  width: 100px;
  height: 40px;
  border: none;
  font-size: 17px;
  &:hover {
    background-color : #1399de;
  }
`;
