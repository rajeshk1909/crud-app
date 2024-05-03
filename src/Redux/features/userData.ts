import { createSlice } from "@reduxjs/toolkit";

export interface userDataTypes {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    password:string,
}

export interface userDataState {
    userData: userDataTypes[]
    currentUserData:userDataTypes[]
}

export interface userDataRootState {
    userData: userDataState
    currentUserData:userDataState
}

const currentUser = localStorage.getItem("currentUserData")
const newCurrentUser :userDataTypes[] = currentUser !== null ? JSON.parse(currentUser) : []

const data = localStorage.getItem("userData")
const newData: userDataTypes[] = data !== null ? JSON.parse(data) : []

const initialState: userDataState = {
    userData: newData,
    currentUserData:newCurrentUser,
}

const userData = createSlice({
    name: "userData",
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload
        },
        setCurrentUserData: (state, action) => {
            state.currentUserData = action.payload
        }
    }
})

export const { setUserData, setCurrentUserData } = userData.actions

export default userData.reducer