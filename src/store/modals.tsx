import { Models } from "@rematch/core";
import { modalStore } from "./Modal/modalStore";

export interface RootModel extends Models<RootModel> {
  modalStore: typeof modalStore;
}

export const models: RootModel = {
  modalStore,
};
