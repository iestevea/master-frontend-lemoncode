import { KittyApi } from "./kitties.api-model";
import { mockKittiesList } from "./kitties.mock-data";

export const getKitties = async (): Promise<KittyApi[]> => {
  return [...mockKittiesList];
};