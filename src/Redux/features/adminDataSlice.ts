import { createSlice } from "@reduxjs/toolkit";

export interface adminDataTypes {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    isSuperAdmin: boolean,
}

export interface adminDataState {
    adminData:adminDataTypes[]
}

export interface adminDataRootState {
    adminData:adminDataState
}

const data = localStorage.getItem("adminData")

const newData :adminDataTypes[] = data !== null ? JSON.parse(data) : []

const initialState :adminDataState = {
    adminData:newData
}

const adminDataSlice = createSlice({
    name: "adminData",
    initialState,
    reducers: {
        setAdminData: (state, action) => {
            state.adminData = action.payload
        }
    }
})

export const {setAdminData} = adminDataSlice.actions

export default adminDataSlice.reducer