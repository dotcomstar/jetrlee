import Playlist from "../entities/Playlist";

const playlists: Playlist[] = [
  {
    title: "Jet's Jam",
    url: "https://open.spotify.com/playlist/6WlXWNfWVq8oipr2jJsqsi?si=1a4d756caba44fd2",
    description: "No bad songs. Mostly rock and pop",
    genre: "mixed",
    slug: "jetsjam",
  },
  {
    title: "Jet's 2024",
    url: "https://open.spotify.com/playlist/7Dkx62U9VcCz0S7vDsbZby?si=d1782408b38b4756",
    description: "Yearly playlist for 2024",
    genre: "mixed",
    isMostRecent: true,
    slug: "jets2024",
  },
  {
    title: "Jet's Electroswing",
    url: "https://open.spotify.com/playlist/4Qm2zEie1DcCVQW589g5ha?si=f53737947adf447d",
    description: "Great tunes for dancing or coding",
    genre: "electroswing",
    slug: "jetselectroswing",
  },
  {
    title: "94.7 Fresh FM",
    url: "https://open.spotify.com/playlist/57D3z0K9TIiwGd9832RA3d?si=47d3fb8cc5584e3c",
    description:
      "Late 2000s to Early 2010s pop, based off a radio station with the same name",
    genre: "pop",
    slug: "947freshfm",
  },
];

export default playlists;
