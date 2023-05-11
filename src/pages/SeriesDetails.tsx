import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTvById } from "../services/MovieServices";
const IMAGE_PATH = import.meta.env.VITE_IMG_PATH;
import { imgError } from "../utils/imgError";
import { Loader } from "../components/Loader";
import { Overwiev } from "../components/Overwiev";
import Glider from "react-glider";
import { Card } from "../components/Card";


import { TvShow } from '../interfaces/TvShow'
import { Companies } from "../components/Companies";

export const SeriesDetails = () => {
  const { serieID } = useParams();
  const [tv, setTv] = useState<TvShow[]>([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    getTvById(serieID)
      .then((res) => {
        setTv(res.data);
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }, [serieID]);

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
          title={tv?.name}
          overview={tv?.overview}
          backdrop_path = {tv?.backdrop_path}
          genres={tv?.genres}
          release_date={tv?.first_air_date}
          runtime={tv?.episode_run_time}
          vote_count={0}
          vote_average={0}

        />

          <Companies 
          production_companies={tv?.networks}
          />
<Glider draggable slidesToShow={5} slidesToScroll={3}>
              {tv?.seasons?.map( s => (
                <Card
                  key={s.id}
                  poster_path={s.poster_path}
                  title={s.name}
                  overview={s.overview}
                  release_date={s.air_date}
                  id={tv?.id}
                  season
                  season_number={s.season_number}
                />
              ))}
            </Glider>

        </>
      )}
    </div>
  );
};
