import React from "react";
import { Box, Avatar } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const IMAGE_PATH = import.meta.env.VITE_IMG_PATH;


export const Credits = ({
  id,
  profile_path,
  name,
  character,
}: {
  id: number;
  profile_path: string;
  name: string;
  character: string;
}) => {
  const navigate = useNavigate();
  return (
    <Box display={"flex"}>
      <Box justifyContent={"center"} alignContent={"center"}>
        <Avatar
          key={id}
          src={`${IMAGE_PATH}${profile_path}`}
          onClick={() => navigate(`/actor/${id}`)}
          style={{ cursor: "pointer" }}
        />
      </Box>
      <Box>
        <p style={{ fontSize: "15px" }}> {name}</p>
        <p style={{ fontSize: "15px", fontStyle: "italic" }}>{character} </p>
      </Box>
    </Box>
  );
};
