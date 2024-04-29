import { createModel } from "@rematch/core";
import { RootModel } from "../modals";

export const modalStore = createModel<RootModel>()({
  state: {
    modalFrist: false,
    modalForYear: false,
    typeMOdal: false,
    modalSecond: false,
  },
  reducers: {
    setFirstModal: (state, payload: boolean) => {
      return {
        ...state,
        modalFrist: payload,
      };
    },
    setSecondModal: (state, payload: boolean) => {
      return {
        ...state,
        modalSecond: payload,
      };
    },
    setTypeModal: (state, payload: boolean) => {
      return {
        ...state,
        typeMOdal: payload,
      };
    },
    setYear: (state, payload: boolean) => {
      return {
        ...state,
        modalForYear: payload,
      };
    },
  },
});
