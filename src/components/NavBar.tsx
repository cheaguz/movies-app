import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai'

import styled from 'styled-components'
import { Categories } from '../pages'

import { 
  Input,
   Button,
   Box ,
   Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
useMediaQuery } from '@chakra-ui/react'

export const NavBar = () => {
  const navigate = useNavigate();
  const [value , setValue] = useState<string>('');
  const [language , setLanguage] = useState('ES')
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

  const handleChange = (e:any) => {
    setValue(
      e.target.value
    )
  };

  const handleSubmit = (e:any) => {
    e.preventDefault()
    navigate(`/resultados/all/${value}`)
    setValue('')
    console.log(value)
  }
  
  const handleChangeLanguage = () => {
    if(language === 'ES') {
      setLanguage('EN')
    }else {
      setLanguage('ES')
    }
    
  }


  return (
  <Header>
   
    <Box display={'flex'} p={2} alignItems={'center'} ml={'1%'}>
          {isLargerThan800? 
          <>
        <img src={'/vite.svg'} />
        <h1 style={{marginRight:'5%',fontFamily :"'Noto Sans', sans-serif"}}>ViteMovies</h1>

            <ListContainer>
                <Li onClick={()=>navigate('/')}>Inicio</Li>
                <Li onClick={()=>navigate('/Series')}>Series</Li>
                <Li onClick={()=>navigate('/Movies')}> Peliculas</Li>
                <Categories /> 
            </ListContainer>
            </>
          :
          <Menu >
            <MenuButton as={Button} leftIcon={<AiOutlineMenu />}  variant='link'/>
             
            <MenuList bg={'#0F171E'}>
              <MenuItem bg={'#0F171E'}><Li onClick={()=>navigate('/')}>Inicio</Li></MenuItem>
              <MenuItem bg={'#0F171E'}><Li onClick={()=>navigate('/Series')}>Series</Li></MenuItem>
              <MenuItem bg={'#0F171E'}><Li onClick={()=>navigate('/Movies')}> Peliculas</Li></MenuItem>
              <Categories />
             
            </MenuList>
        </Menu>
        }
        </Box>

        
          <ContainerInput  >
            <Button onClick={handleSubmit} size='sm' variant='outline'>
              <Icon>< AiOutlineSearch /></Icon>
              </Button>
              <form onSubmit={handleSubmit}>
            <Input size='sm'
              type='text'
              placeholder='Buscar...'
              onChange={handleChange}
              value={value}
              
            />
            </form>
            {/* <Span onClick={handleChangeLanguage} >{language}</Span> */}
          </ContainerInput>
          
        
  </Header>
  )
}




const ContainerInput = styled.div`
display : flex;
justify-content : center;
align-items : center;
margin-right : 2%;

`;

const Icon = styled.i`
color : #fff;
&:hover{
  color : #1B252F;
}
`;

const Wrappers = styled.div`
display : flex;
margin-left : 1%;
align-items : center;
`;

const Header = styled.header`
display : flex;
justify-content : space-between;
font-size : 17px;
align-items : center;
background-color : #1B252F;
width: 100%;
color : rgba(255, 255, 255, 0.87);
`;

const ListContainer = styled.ul`
list-style : none;
display : flex;
gap : 20px ;
align-items : center;
`;

const Li = styled.li`
cursor : pointer;
font-family : 'Noto Sans', sans-serif;
&:hover {
  color : #91919D;
}
`;

const Span = styled.p`
cursor : pointer;
&:hover {
  color : #91919D;
}
`;