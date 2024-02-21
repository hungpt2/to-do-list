import * as types from "@/store/mutation-types";
import { IUser, IUserStore } from "@/models";
import User from "@/api/user";

const state: IUserStore = {
  name: "",
};

const getters = {
  username: (state: IUserStore) => state.name,
};

const mutations = {
  [types.SET_USER_NAME](state: IUserStore, data: string) {
    state.name = data;
  },
};

const actions = {
  getUserInfo: ({ commit }: any) =>
    new Promise((resolve) => {
      User.getUserInfo().then((data: IUser) => {
        commit(types.SET_USER_NAME, data.name);
        resolve(true);
      });
    }),
};

export default {
  state,
  getters,
  mutations,
  actions,
};
