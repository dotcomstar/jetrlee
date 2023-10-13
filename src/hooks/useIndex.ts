import Sluggable from "../entities/Sluggable";
import useData from "./useData";

const useIndex = <T extends Sluggable>(rawData: T[], slug: string) => {
  const data = useData(rawData);
  const index = data.data.findIndex((d) => d.slug === slug);
  return index;
};

export default useIndex;
