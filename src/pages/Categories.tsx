import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getCategories,
  getTvCategories,
  getByCategories,
} from "../services/MovieServices";
import {
  SimpleGrid,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
} from "@chakra-ui/react";
import styled from "styled-components";

interface Categories {
  id: number;
  name: string;
}

export const Categories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Categories[]>();
  const [tvCategories, setTvCategories] = useState<Categories[]>();
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    getCategories()
      .then((res) => setCategories(res.data.genres))
      .catch((err) => console.log(err));

    getTvCategories()
      .then((res) => setTvCategories(res.data.genres))
      .catch((err) => console.log(err));
  }, []);

  const handleCategories = (id: number, tv?:boolean ) => {
    if(tv){
      navigate(`/resultados/tv-categories/${id}`)
    }else {
      navigate(`/resultados/movie-categories/${id}`)
    }
  };

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            transition="all 0.2s"
            color="white"
            border={"none"}
            bg={"#1B252F"}
            fontFamily={"'Noto Sans', sans-serif'"}
            _hover={{ bg: "#1B252F", color: " #91919D" }}
          >
            Categorias
          </MenuButton>
          <MenuList bg={"#1B252F"} border="none">
           {/*  <SimpleGrid columns={2}> */}
              <MenuGroup title="Peliculas">
                <SimpleGrid columns={4}>
                  {categories?.map((cat) => (
                    <MenuItem _hover={{ color: " #91919D" }} bg={"#1B252F"} onClick={()=>handleCategories(cat.id)}>
                      {cat.name}
                    </MenuItem>
                  ))}
                </SimpleGrid>
              </MenuGroup>
              <MenuGroup title="Series">
                <SimpleGrid columns={4}>
                  {tvCategories?.map((t) => (
                    <MenuItem _hover={{ color: " #91919D" }} bg={"#1B252F"} onClick={()=>handleCategories(t.id,true)}>
                      {t.name}
                    </MenuItem>
                  ))}
                </SimpleGrid>
              </MenuGroup>
            {/* </SimpleGrid> */}
          </MenuList>
        </>
      )}
    </Menu>
  );
};
