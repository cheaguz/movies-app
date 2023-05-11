import { TvShow } from "../interfaces/TvShow";
import { Movie } from "../interfaces/Movie";

export const addaptedTv = (tv: TvShow) => {
    const formattedTv = {
      title: tv.name,
      poster_path: tv.poster_path,
      overview: tv.overview,
      release_date: tv.first_air_date,
      id: tv.id,
    };
    return formattedTv;
  };