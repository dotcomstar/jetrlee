import Sluggable from "../entities/Sluggable";
import useData from "./useData";

const useDataPoint = <T extends Sluggable>(rawData: T[], slug: string) => {
  const data = useData(rawData);
  const dataPoint = data.data.find((d) => d.slug === slug);
  return dataPoint;
};

export default useDataPoint;
