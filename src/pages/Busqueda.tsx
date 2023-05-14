import React , { useState,useEffect } from 'react'
import { useParams   } from 'react-router-dom'
import { Loader } from '../components/Loader';
import { searchMovies, searchTv,getByCategories,getTvByCategories } from '../services/MovieServices';
import { Card } from '../components/Card';
import styled from 'styled-components';
import { Movie } from '../interfaces/Movie';
import { TvShow } from '../interfaces/TvShow';
import ResponsivePagination from 'react-responsive-pagination';

import { SimpleGrid , GridItem,Container, useMediaQuery } from '@chakra-ui/react'


export const Busqueda = () => {
    

    const {name , type} = useParams()
    const [loader , setLoader] = useState<boolean>(true)
    const [movies , setMovies] = useState<Movie[]>()
    const [tvShows , setTvShows] = useState<TvShow[]>()
    const [pages , setPages] = useState<number>(0)
    const [totalPages , setTotalPages] = useState<number>(0)
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

    useEffect(()=> {
        if(type==='all'){
            searchMovies( name )
            .then(res => {
                setLoader(true)  
                setMovies(res.data.results)
                setPages(res.data.page)
                setTotalPages(res.data.total_pages)
                setLoader(false)
            })
            .catch(err => console.log(err))
    
            searchTv( name )
            .then(res => setTvShows(res.data.results))
            .catch(err => console.log(err))

        }if(type==='movie-categories'){
            setLoader(true)
            getByCategories( name )
            .then(res => {
                setMovies(res.data.results)
                setPages(res.data.page)
                setTotalPages(res.data.total_pages)
                setLoader(false)
            } )
            .catch(err => console.log(err))
        }if(type==='tv-categories'){
            setLoader(true)
            getTvByCategories ( name )
            .then(res => {
                setPages(res.data.page)
                setTotalPages(res.data.total_pages)
                setTvShows(res.data.results)
               setLoader(false)
            })
            .catch(err => console.log(err))
            
            console.log('tv-categories')
        }

    },[name])


    const handlePageChange = (page:number) => {

      if (type === "all") {
        searchMovies( name,page )
        .then(res => {
            setLoader(true)  
            setMovies(res.data.results)
            setPages(res.data.page)
            setTotalPages(res.data.total_pages)
            setLoader(false)
            
        })
        .catch(err => console.log(err))

        searchTv( name , page)
        .then(res => {
            setTvShows(res.data.results)
            
        })
        .catch(err => console.log(err))




      } else if (type === "movie-categories") {
        setLoader(true)
        getByCategories( name , page)
        .then(res => {
            setMovies(res.data.results)
            setPages(res.data.page)
            setTotalPages(res.data.total_pages)
            setLoader(false)
        } )
        .catch(err => console.log(err))


      } else {
        setLoader(true)
        getTvByCategories ( name,page )
        .then(res => {
            setPages(res.data.page)
            setTotalPages(res.data.total_pages)
            setTvShows(res.data.results)
           setLoader(false)
        })
        .catch(err => console.log(err))
      }
    };

    const styles ={
        div : {
            color : 'rgba(255, 255, 255, 0.87)',
            backgroundColor : '#0F171E'
        }
    }

  return (
    <div style={styles.div}>
        {loader? 
        <Loader open={loader} />
        :
        <>
        {type !='tv-categories' && 
        <>
            <h1>Peliculas</h1>
            <SimpleGrid columns={isLargerThan800?3 : 2} spacing={10}>
            {movies?.map( (movie:Movie) => (
               
                    <Card  
                    poster_path={movie.poster_path}
                    title={movie.title}
                    overview={movie.overview}
                    release_date={movie.release_date}
                    id={movie.id}
                    key={movie.id}
                    />
                
            ))}
            </SimpleGrid>
        </>
        
        }
        
            {type!='movie-categories' && 
            <>
                <h1>Series</h1>
            <SimpleGrid  columns={isLargerThan800?3 : 2} spacing={10}>
            {tvShows?.map( (tv:TvShow) => (
            
            <Card  
            poster_path={tv.poster_path}
            title={tv.name}
            overview={tv.overview}
            release_date={tv.first_air_date}
            id={tv.id}
            key={tv.id}
            tvShow={true}
            /> 
        ))}
        </SimpleGrid>

            </>
            }
        
        </>
    }

    <Container mt={'2%'}>
       <ResponsivePagination
            current={pages}
            total={totalPages}
            onPageChange={handlePageChange}
        />
    </Container>
              
    </div>
  )
}



