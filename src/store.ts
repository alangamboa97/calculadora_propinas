import { create } from "zustand";

//create devuelve un hook
export const useUserStore = create(
  //devuelve un objeto que representa la informacion almecenada
  (set) => ({
    username: "",
    email: "",
    setUsername: (username: string) =>
      set(() => ({
        username: username,
      })),
  })
);
