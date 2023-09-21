import {
  LinkBox,
  Box,
  Link,
  Text,
  Heading,
  LinkOverlay,
} from "@chakra-ui/react";
import usePlaylists from "../hooks/usePlaylists";

export const PlaylistsPage = () => {
  const { data } = usePlaylists();
  return (
    <>
      {data.map((playlist) => (
        <LinkBox
          key={playlist.title}
          borderWidth="1px"
          rounded="md"
          maxW="sm"
          p="5"
        >
          <Heading size="md" my="2">
            <LinkOverlay
              href={playlist.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {playlist.title}
            </LinkOverlay>
          </Heading>
          <Text>{playlist.description}</Text>
        </LinkBox>
      ))}
    </>
  );
};
