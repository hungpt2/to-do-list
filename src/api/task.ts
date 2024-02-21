import { ITask } from "@/models";
import news from "@/mockData/news.json";
import task from "@/mockData/task.json";

export default {
  getNews: () =>
    new Promise<ITask[]>((resolve) => {
      resolve(news);
    }),

  getTasks: () =>
    new Promise<ITask[]>((resolve) => {
      resolve(task);
    }),
};
