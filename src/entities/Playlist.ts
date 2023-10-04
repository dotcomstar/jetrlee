export default interface Playlist {
  title: string;
  slug: string;
  url: string;
  description: string;
  genre: string;
  isMostRecent?: boolean;
}
