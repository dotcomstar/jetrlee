import { Box, Heading, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import playlists from "../data/playlists";
import Playlist from "../entities/Playlist";

export const PlaylistsPage = () => {
  const { data } = useData<Playlist>(playlists);
  return (
    <Box
      justifyContent={"center"}
      alignItems={"center"}
      display={"grid"}
      my={5}
    >
      {data.map((playlist) => (
        <LinkBox
          key={playlist.title}
          rounded="lg"
          maxW="sm"
          m="2"
          color="#1DB954"
          border={"2px"}
          // textColor={"#191414"}
          bgColor="blackAlpha.800"
          // textColor={"#FFFFFF"}
        >
          <Heading size="md" mt="2" mx="2">
            <LinkOverlay href={playlist.url} target="_blank" rel="noopener">
              {playlist.title}
            </LinkOverlay>
          </Heading>
          <Text mb="2" mx="2">
            {playlist.description}
          </Text>
        </LinkBox>
      ))}
    </Box>
  );
};
