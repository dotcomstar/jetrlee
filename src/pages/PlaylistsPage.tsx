import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import usePlaylists from "../hooks/usePlaylists";

export const PlaylistsPage = () => {
  const { data } = usePlaylists();
  return (
    <>
      {data.map((playlist) => (
        <Box key={playlist.title}>
          <Link href={playlist.url} isExternal>
            {playlist.title}
          </Link>
          <Text>{playlist.description}</Text>
        </Box>
      ))}
    </>
  );
};
