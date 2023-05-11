import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getActorInfo } from "../services/MovieServices";
const IMAGE_PATH = import.meta.env.VITE_IMG_PATH;
import { Loader } from "../components/Loader";
import { validateText } from '../utils/validateText'

import { SimpleGrid } from "@chakra-ui/react";

export const Actors = () => {
  const navigate = useNavigate();
  const [actor, setActor] = useState <Actors>({});
  const { actorID } = useParams();
  const [loader, setLoader] = useState(true);

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
      if(G===1){
        return 'woman'
      }else {
        return 'man'
      }
  };

  

  return (
    <div>
      {loader ? (
        <Loader open={loader} />
      ) : (
        <SimpleGrid columns={2}>
          <div>
          <button onClick={() => navigate(-1)}>{"<"}</button>
          <p> nombre : {validateText(actor?.name) }</p>
          <p>Genero : {validateGender (actor?.gender) }</p>
          <p> Fecha de nacimiento : {actor?.birthday} </p>
          <p>Fecha de muerte : {actor?.deathday}</p>
          <p>profesion : {validateText( actor?.known_for_department )}</p>
          <p>Lugar de nacimiento : {actor?.place_of_birth}</p>
          <p>Web : {validateText(actor?.homepage)} </p>
          <h1 style={{textAlign:'center'}}>Biografia</h1>
          <p>{validateText(actor?.biography)}</p>
          </div>

          <div>
          <img src={`${IMAGE_PATH}${actor?.profile_path}`} 
            height={300}
          />
          </div>
        </SimpleGrid>
      )}
    </div>
  );
};
