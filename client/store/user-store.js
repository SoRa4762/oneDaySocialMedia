import { create } from "zustand";

const useUserStore = create(() => ({
  user: [], //initial state
  setUserData: () => {}, //add functions that does stuff with the initial state here
}));
