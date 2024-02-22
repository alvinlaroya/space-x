import { defineStore } from 'pinia'

interface State {
    favourites: Favourite[]
  }

export const useFavourite = defineStore('favourite', {
    state: (): State => ({
        favourites: []
    }),
    getters: {
        favourites: (state) => state.favourites
    },
    actions: {
        addToFavourite(payload: Favourite) {
            this.favourites.push(payload)
        },
        clearAllFavourites() {
            this.favourites = []
        }
    },
})

interface Favourite {
    name: string
}
