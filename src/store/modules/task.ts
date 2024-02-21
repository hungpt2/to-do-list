import * as types from "@/store/mutation-types";
import { ITask, ITaskStore } from "@/models";
import Task from "@/api/task";

const state: ITaskStore = {
  tasks: [],
  news: [],
  count: {},
};

const getters = {
  news: (state: ITaskStore) => state.news,
  tasks: (state: ITaskStore) => state.tasks,
  count: (state: ITaskStore) => state.count,
};

const mutations = {
  [types.SET_NEWS](state: ITaskStore, data: ITask[]) {
    state.news = data;
  },
  [types.SET_TASKS](state: ITaskStore, data: ITask[]) {
    state.tasks = data;
  },
  [types.SET_TYPE_TASKS](state: ITaskStore) {
    const count: any = {};
    state.tasks.forEach((el) => {
      if (!count[el.status]) {
        count[el.status] = 1;
      } else {
        count[el.status] += 1;
      }
    });
    state.count = count;
  },
  [types.UPDATE_TASK](state: ITaskStore, data: ITask) {
    const tmp = [...state.tasks];
    const idx = tmp.findIndex((el) => el.id === data.id);
    if (idx > -1) {
      tmp[idx] = data;
    }
    state.tasks = [...tmp];
  },
  [types.REMOVE_TASK](state: ITaskStore, data: ITask) {
    const tmp = [...state.tasks];
    const idx = tmp.findIndex((el) => el.id === data.id);
    if (idx > -1) {
      tmp.splice(idx, 1);
    }
    state.tasks = [...tmp];
  },
  [types.ADD_TASK](state: ITaskStore, data: ITask) {
    state.tasks.unshift(data);
  },
};

const actions = {
  getNews: ({ commit }: any) =>
    new Promise((resolve) => {
      Task.getNews().then((data: ITask[]) => {
        commit(types.SET_NEWS, data);
        resolve(true);
      });
    }),

  getTasks: ({ commit }: any) =>
    new Promise((resolve) => {
      Task.getTasks().then((data: ITask[]) => {
        commit(types.SET_TASKS, data);
        commit(types.SET_TYPE_TASKS);
        resolve(true);
      });
    }),
  updateTask({ commit }: any, data: ITask) {
    commit(types.UPDATE_TASK, data);
    commit(types.SET_TYPE_TASKS);
  },
  removeTask({ commit }: any, data: ITask) {
    commit(types.REMOVE_TASK, data);
    commit(types.SET_TYPE_TASKS);
  },
  addTask({ commit }: any, data: ITask) {
    commit(types.ADD_TASK, data);
    commit(types.SET_TYPE_TASKS);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
