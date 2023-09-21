import playlists from "../data/playlists";

export interface Playlist {
  title: string;
  url: string;
  description: string;
  genre: string;
  isMostRecent?: boolean;
}

const usePlaylists = () => ({
  data: playlists,
});

export default usePlaylists;
