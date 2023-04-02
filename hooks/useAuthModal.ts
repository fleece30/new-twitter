import { create } from "zustand";

interface AuthModalStore {
  isOpen: boolean;
  setOpen: () => void;
  setClose: () => void;
}

const useAuthModal = create<AuthModalStore>((set) => ({
  isOpen: false,
  setOpen: () => set({ isOpen: true }),
  setClose: () => set({ isOpen: false }),
}));

export default useAuthModal;
