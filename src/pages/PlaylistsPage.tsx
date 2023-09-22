import { Heading, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import playlists from "../data/playlists";
import Playlist from "../entities/Playlist";

export const PlaylistsPage = () => {
  const { data } = useData<Playlist>(playlists);
  return (
    <>
      {data.map((playlist) => (
        <LinkBox
          key={playlist.title}
          borderWidth="1px"
          rounded="md"
          maxW="sm"
          m="5"
          bgColor="green"
        >
          <Heading size="md" mt="2" mx="2">
            <LinkOverlay
              href={playlist.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {playlist.title}
            </LinkOverlay>
          </Heading>
          <Text mb="2" mx="2">
            {playlist.description}
          </Text>
        </LinkBox>
      ))}
    </>
  );
};
