import { IUser } from "@/models";

export default {
  getUserInfo: () => new Promise<IUser>((resolve, reject) => {
    resolve({
      name: 'Tony Stark'
    })
  }),
};
