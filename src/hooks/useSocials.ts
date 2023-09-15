import socials from "../data/socials";

export interface Social {
  name: string;
  slug: string;
  url: string;
}

const useSocials = () => ({
  data: socials,
});

export default useSocials;
