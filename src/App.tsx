import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import { Home,MovieDetails,Movies,Series,SeriesDetails,Actors,Busqueda,Categories, SeasonsDetails } from "./pages";


function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/Movies' element={<Movies />}  />
          <Route path='/Series' element={<Series />}  />
          <Route path='//MovieDetails/:movieID' element={<MovieDetails />}  />
          <Route path='/seasons/:tvID/:season' element={<SeasonsDetails />}  />
          <Route path='/SeriesDetails/:serieID' element={<SeriesDetails />}  />
          <Route path='/actor/:actorID' element={<Actors />}  />
          <Route path='/resultados/:type/:name' element={<Busqueda />}  />
          <Route path='/categories' element={<Categories />}  />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
