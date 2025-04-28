import { defineStore, acceptHMRUpdate } from 'pinia';

export const useMatchStore = defineStore('match', {
  state: () => ({
    'match': null,
  }),

  getters: {
  },

  actions: {

  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMatchStore, import.meta.hot));
}