import { createSlice } from "@reduxjs/toolkit"

const initState = {
    popular : [],
    newGames : [],
    upcoming : [],
}

export const gamesSlice = createSlice({
    name: 'games',
    initState,
    reducers: {
        fetchGames : () => {
        }
    }
})

export const { fetchGames } = gamesSlice.actions;
export default gamesSlice.reducers;