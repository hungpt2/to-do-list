export interface IUserStore {
  name: string;
}

export interface ITaskStore {
  tasks: ITask[];
  news: ITask[];
  count: any;
}

export interface ITask {
  id: string | number;
  title: string;
  description: string;
  thumbnail: string | null;
  status: ETaskState | string;
}

export interface IUser {
  name: string;
}

export enum ETaskState {
  NEW = 'NEW',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}