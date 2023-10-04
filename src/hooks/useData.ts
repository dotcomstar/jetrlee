import Sluggable from "../entities/Sluggable";

const useData = <T extends Sluggable>(rawData: T[]) => ({
  data: rawData,
});

export default useData;
