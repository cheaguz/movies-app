import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  Avatar,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { BsStar, BsStarFill } from "react-icons/bs";
const IMAGE_PATH = import.meta.env.VITE_IMG_PATH;

import { RenderStars } from "./RenderStars";


export const Comments = ({
  name,
  avatar_path,
  username,
  rating,
  content,
}: {
  name: string;
  avatar_path: string;
  username: string;
  rating: number;
  content: string;
}) => {
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Avatar
                size="sm"
                name={name}
                src={`${IMAGE_PATH}${avatar_path}`}
              />
              <p> {username} </p>
             
              <RenderStars 
                votes={rating}
              />

            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={2}>
          <p style={{ fontSize: "14px" }}> {content} </p>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
