import { defineStore, acceptHMRUpdate } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'John Doe',
    age: 25,
    email: '8iMlG@example.com',
    elo: 1550,
    wins: 2,
    losses: 1,
    draws: 0
  }),
  getters: {
    getWinPercentage: (state) => state.wins / (state.wins + state.losses),
  },
  actions: {},
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}