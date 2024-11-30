import { AuthResponse } from "@/interface/Sign";
import { create } from "zustand";
import { persist } from "zustand/middleware";
interface SignStore {
  sign?: AuthResponse;
  setSign: (sign: AuthResponse) => void;
}

const useSignStore = create(
  persist<SignStore>(
    (set) => ({
      sign: undefined,
      setSign: (sign) => set({ sign }),
    }),
    {
      name: "signStorage",
    }
  )
);
export default useSignStore;
