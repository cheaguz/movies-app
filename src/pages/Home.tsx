import { useState, useEffect } from "react";
import { Movie } from "../interfaces/Movie";
import { TvShow } from "../interfaces/TvShow";
import {
  getAllMovies,
  getPopularMovies,
  getTopRatedMovies,
  getPopularTv,
  getTopRatedTv
} from "../services/MovieServices";
import { NavBar } from "../components/NavBar";
import { Carrousell } from "../components/Carrousell";
import { Banner } from "../components/Banner";

import { Loader } from "../components/Loader";
import { addaptedTv } from "../adapters/addaptedTv";

export const Home = () => {
  const [movie, setMovie] = useState<Movie[]>([]);
  const [movie2, setMovie2] = useState<Movie[]>([]);
  const [movie3, setMovie3] = useState<Movie[]>([]);
  const [tv1, setTv1] = useState<TvShow[]>([]);
  const [tv2, setTv2] = useState<TvShow[]>([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getPopularMovies()
      .then((res) => {
        setMovie(res.data.results);
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getTopRatedMovies()
      .then((res) => {
        setMovie2(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getAllMovies()
      .then((res) => {
        setMovie3(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getPopularTv()
      .then((res) => {
        setTv1(handleTvChange(res.data.results));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getTopRatedTv()
      .then((res) => {
        setTv2(handleTvChange(res.data.results));
      })
      .catch((err) => console.log(err));
  }, []);

  

  const handleTvChange = (data: TvShow[]) => {
    const helper : TvShow[] = [];
    data?.map((t:TvShow) => helper.push(addaptedTv(t)));
    return helper;
  };

  return (
    <div
      style={{ backgroundColor: "#0F171E", color: "rgba(255, 255, 255, 0.87)" }}
    >
      {loader ? (
        <Loader open={loader} />
      ) : (
        <>
          <Banner />
          <Carrousell movie={movie} text="Popular Movies" />
          <Carrousell movie={tv2} text="Top rated tv shows" tv/>
          <Carrousell movie={movie2} text="Top rated" />
          <Carrousell movie={tv1} text="Popular tv shows" tv/>
          <Carrousell movie={movie3} text="Upcoming" />
        </>
      )}
    </div>
  );
};
