import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { add, list, remove, update } from "../../api/category";
export const getCategorys = createAsyncThunk(
    "category/getCategory",
    async ()=>{
        const { data } =await list();
        return data
    }

)
export const addCategorys = createAsyncThunk(
    "category/addCategory",
    async (product)=>{
        const { data } =await add(product);
        return data
    }

)
export const removeCategorys = createAsyncThunk(
    "category/removeCategory",
    async (id)=>{
        const { data } =await remove(id);
        return data
    }

)

export const updateCategorys = createAsyncThunk(
    "category/updateCategory",
    async (id)=>{
        const { data } =await update(id);
        return data
    }

)
 const getCategory = createSlice({
     name : "category",
     initialState :{
         value : []
     },

     extraReducers: (builder) =>{
         builder.addCase(getCategorys.fulfilled,(state,action)=>{
             state.value = action.payload
         })
         builder.addCase(addCategorys.fulfilled,(state,action)=>{
            state.value.push(action.payload)
        })
        builder.addCase(removeCategorys.fulfilled,(state,action)=>{
            state.value = state.value.filter(item => item.id !== action.meta.arg)
        })
        builder.addCase(updateCategorys.fulfilled,(state,action)=>{
            state.value.push(action.payload)
        })
         
     }
     
     
 })
export default getCategory.reducer