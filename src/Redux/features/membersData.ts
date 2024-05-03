import { createSlice } from "@reduxjs/toolkit";

export interface membersDataTypes {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    status: boolean,
    role: string,
    teams:string
}

export interface membersDataState {
    membersData : membersDataTypes[]
}

export interface membersDataRootState {
    membersData:membersDataState
}

const data = localStorage.getItem("membersData")

const newData: membersDataTypes[] = data !== null ? JSON.parse(data) : []

const initialState :membersDataState = {
    membersData : newData
}

const membersData = createSlice({
    name: "membersData",
    initialState,
    reducers: {
        setMemberData: (state, action) => {
            state.membersData = action.payload
        }
    }
})

export const {setMemberData} = membersData.actions

export default membersData.reducer