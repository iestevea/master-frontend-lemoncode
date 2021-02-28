import { PuppyApi } from "./puppies.api-model";
import { mockPuppiesList } from "./puppies.mock-data";

export const getPuppies = async (): Promise<PuppyApi[]> => {
  return [...mockPuppiesList];
};