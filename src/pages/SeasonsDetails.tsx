import React,{ useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSeason } from '../services/MovieServices';
const IMAGE_PATH = import.meta.env.VITE_IMG_PATH;
import { SimpleGrid, Box, Image,Card,Stack,CardBody,Heading,Text,CardFooter } from '@chakra-ui/react';
import { Loader } from '../components/Loader';


interface Data{
  id:string
  still_path:string
  episode_number:number
  overview:string
  runtime:number
  vote_average:number
  name : string
}

export const SeasonsDetails = () => {
    const {tvID , season} = useParams()
    const [data , setData ] = useState<Data[]>([{
      id:'',
      still_path:'',
      episode_number:0,
      overview:'',
      runtime:0,
      vote_average:0,
      name : '',
    }])
    const [loader , setLoader] = useState(true)

    

    useEffect(()=>{
        setLoader(true)
        getSeason(tvID,season)
        .then(res=> {
            setData(res.data.episodes)
            setLoader(false)
        })
        .catch(err => console.log(err))
    },[tvID])

  return (
    <SimpleGrid  bg={'#0F171E'}>
        {loader? 
        <Loader open={loader}/>
        :
        <>
        {data?.map( d => (
            <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            key={d.id}
            bg={'#0F171E'}
            color={'rgba(255, 255, 255, 0.87)'}
          >
            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '200px' }}
              src={`${IMAGE_PATH}${d.still_path}`}
              alt='poster season'
            />
          
            <Stack>
              <CardBody>
                <Heading size='md'>{d.episode_number}-{d.name}</Heading>
          
                <Text py='2'>
                  {d.overview}
                </Text>
              </CardBody>
          
              <CardFooter>
                {/* <Button variant='solid' colorScheme='blue'>
                  Buy Latte
                </Button> */}
                <Text>Duracion : {d.runtime} minutos -</Text>
                <Text> Puntaje : {d.vote_average} </Text>
              </CardFooter>
            </Stack>
          </Card>

          
        ))}
        
        </>    
    }

    </SimpleGrid>
  )
}
