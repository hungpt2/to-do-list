

import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
import users from "./modules/users";

import task from "./modules/task";

export const store = createStore({
  plugins: [new VuexPersistence().plugin],
  modules: {
    users,
    task,
  },
});
