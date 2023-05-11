import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "glider-js/glider.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const IMAGE_PATH = import.meta.env.VITE_IMG_PATH;
import {
  getComments,
  getImagesById,
  getMovieById,
  getMovieCredits,
  getSimilarMovies,
  getVideo,
} from "../services/MovieServices";

import Glider from "react-glider";
import { Carousel } from "react-responsive-carousel";
import ReactPlayer from "react-player";
import { SimpleGrid,Container,Box,} from "@chakra-ui/react";

import { Movie } from "../interfaces/Movie";
import { CommentsInterface } from "../interfaces/CommentsInterface";

import { Loader } from "../components/Loader";
import { Card } from "../components/Card";
import { Comments } from "../components/Comments";
import { Companies } from "../components/Companies";
import { Credits } from "../components/Credits";
import { Overwiev } from "../components/Overwiev";

export const MovieDetails = () => {
  const { movieID } = useParams();
  const [images, setImages] = useState<Images[]>([]);
  const [credits, setCredits] = useState<Credits[]>([]);
  const [movie, setMovie] = useState<Movie[]>([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [videos, setVideos] = useState<Videos[]>([]);
  const [loader, setLoader] = useState(true);
  const [comments, setComments] = useState<CommentsInterface[]>([]);

  interface Credits {
    profile_path: string;
    id: number;
    name: string;
    character: string;
  }
  interface Images {
    file_path: string;
    id: number;
  }

  interface Videos {
    id : number;
    key:string;
  }

  interface Genres{
    id : number;
    name : string;
  }

  useEffect(() => {
    setLoader(true);
    getMovieById(movieID)
      .then((res) => {
        setMovie(res.data);
        setLoader(false);
      })
      .catch((err) => console.log(err));

    getImagesById(movieID)
      .then((res) => setImages(res.data.backdrops))
      .catch((err) => console.log(err));

    getMovieCredits(movieID)
      .then((res) => setCredits(res.data.cast))
      .catch((err) => console.log(err));

    getSimilarMovies(movieID)
      .then((res) => setSimilarMovies(res.data.results))
      .catch((err) => console.log(err));

    getVideo(movieID)
      .then((res) => setVideos(res.data.results))
      .catch((err) => console.log(err));

    getComments(movieID)
      .then((res) => setComments(res.data.results))
      .catch((err) => console.log(err));
  }, [movieID]);

  const Styles = {
    div: {
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      color: "rgba(255, 255, 255, 0.87)",
      backgroundColor: "#0F171E",
    },
  };

  

  return (
    <div style={Styles.div}>
      {loader ? (
        <Loader open={loader} />
      ) : (
        <>
        <Overwiev 
          title={movie?.title}
          overview={movie?.overview}
          genres={movie?.genres}
          release_date={movie?.release_date}
          runtime={movie?.runtime}
          vote_count={movie?.vote_count}
          vote_average={movie?.vote_average}
          backdrop_path={movie?.backdrop_path}
        />

              <Companies 
                production_companies={movie?.production_companies}
              />
 
          <Box p={'2%'}>
            <Carousel>
              {videos?.map((vid) => (
                <ReactPlayer
                  width="100%"
                  url={`https://www.youtube.com/embed/${vid.key}`}
                  key={vid.id}
                  playsinline
                />
              ))}
            </Carousel>
          </Box>

          <h1>Imagenes</h1>

          <Glider draggable slidesToShow={2} slidesToScroll={1} hasDots>
            {images?.map((im: Images, index: number) => (
              <img key={index} src={`${IMAGE_PATH}${im.file_path}`} />
            ))}
          </Glider>

                                      {/* cast */}
          <h1>CAST</h1>

          <Box display={'flex'} justifyContent={'center'} >   

          <SimpleGrid columns={3} gap={5} alignContent={'center'} >
            {credits?.map((cred: Credits) => (
              <Credits 
                id={cred.id}
                profile_path={cred.profile_path}
                name={cred.name}
                character={cred.character}
              />
            ))}
          </SimpleGrid >
          </Box>
            

          <Container mt={3} mb={3} maxW='4xl'>
            {comments?.map((c) => ( 
                <Comments  
                name={c.author_details.name} 
                avatar_path={c.author_details.avatar_path}
                username = {c.author_details.username }
                rating={c.author_details.rating}
                content={c.content}
                />
            ))}
          </Container>

          <h1>Similar movies</h1>

          <div>
            <Glider draggable slidesToShow={5} slidesToScroll={3}>
              {similarMovies?.map((m: Movie) => (
                <Card
                  key={m.id}
                  poster_path={m.poster_path}
                  title={m.title}
                  overview={m.overview}
                  release_date={m.release_date}
                  id={m.id}
                />
              ))}
            </Glider>
          </div>
        </>
      )}
    </div>
  );
};