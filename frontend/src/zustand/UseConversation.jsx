import { create } from "zustand";

const useconversation = create((set) => ({
  selectedConversation: null,
  setselectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));
export default useconversation;
