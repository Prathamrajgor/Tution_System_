import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


export const studentSlice=createSlice({
    name:"student",
    initialState:{ value:{
        student_id:"",
        firstname:"",
        lastname:"",
        std:"",
        school:"",
        mother:"",
        father:"",
        contact:"",
        joining_date:"",
        fees:""
    }},
    reducers:{
        update:(state,action)=>{
            state.value=action.payload;
        }
    }
});

export const {update}=studentSlice.actions;

export default studentSlice.reducer;
