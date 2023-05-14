import Glider from "react-glider";
import "glider-js/glider.min.css";
import { Movie } from "../interfaces/Movie";
import { Card } from "../components/Card";
import { Text, useMediaQuery } from "@chakra-ui/react";

export const Carrousell = ({
  movie,
  text,
  tv,
}: {
  movie: Movie[];
  text: string;
  tv?: boolean;
}) => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
  return (
        <>
          <div
            style={{ marginLeft: "2%", fontFamily: "'Noto Sans', sans-serif" }}
            className="App"
          >
            <Text fontSize={20}>{text}</Text>
            <Glider
              draggable
              hasArrows={isLargerThan800?true : false}
              responsive={[
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 5,
                    
                  },
                },
              ]}
              slidesToShow={2}
              slidesToScroll={3}
            >
              {movie.map((m: Movie) => (
                <Card
                  key={m.id}
                  poster_path={m.poster_path}
                  title={m.title}
                  overview={m.overview}
                  release_date={m.release_date}
                  id={m.id}
                  tvShow={tv}
                />
              ))}
            </Glider>
          </div>
        </>
  );
};
