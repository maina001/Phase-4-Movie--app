import {create} from 'zustand';

const useUserIdStore = create((set) => ({
  user_id: null,
  addData: (newUserId) => set({ user_id: newUserId }),
  removeData: () => set({ user_id: null }),
}));

export default useUserIdStore;
