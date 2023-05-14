import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getActorInfo } from "../services/MovieServices";
const IMAGE_PATH = import.meta.env.VITE_IMG_PATH;
import { Loader } from "../components/Loader";
import { validateText } from '../utils/validateText'

import { SimpleGrid,Box , Image , useMediaQuery, Text  } from "@chakra-ui/react";

export const Actors = () => {
  const navigate = useNavigate();
  const [actor, setActor] = useState <Actors>({});
  const { actorID } = useParams();
  const [loader, setLoader] = useState(true);
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

interface Actors{
  name:string
  birthday:string
  deathday:string
  known_for_department:string
  place_of_birth:string
  biography:string
  profile_path:string
  gender : number 
  homepage : string
  also_known_as: Array<string> 
}

  useEffect(() => {
    getActorInfo(actorID)
      .then((res) => {
        console.log(res)
        setActor(res.data);
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const validateGender = (G : number) => {
      if(G===0){
        return 'woman'
      }else {
        return 'man'
      }
  };

  

  return (
    <Box bg={'#0F171E'} color={'#fff'}>
      {loader ? (
        <Loader open={loader} />
      ) : (
        <SimpleGrid columns={ isLargerThan800? 2 : 1}>
          <Box textAlign={'center'} alignItems={'center'} > 
        {/*   <button onClick={() => navigate(-1)}>{"<"}</button> */}
          <Text> Nombre : {validateText(actor?.name) }</Text>
          <Text>Genero : {validateGender (actor?.gender) }</Text>
          <Text> Fecha de nacimiento : {actor?.birthday} </Text>
          <Text>Fecha de muerte : {actor?.deathday}</Text>
          <Text>Profesion : {validateText( actor?.known_for_department )}</Text>
          <Text>Lugar de nacimiento : {actor?.place_of_birth}</Text>
          <Text>Web : {validateText(actor?.homepage)} </Text>
          <Text >Biografia</Text>
          <Text>{validateText(actor?.biography)}</Text>
          </Box>

          <Box >
          <Image  src={`${IMAGE_PATH}${actor?.profile_path}`} />
          </Box>
        </SimpleGrid>
      )}
    </Box>
  );
};
