import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addProduct, listProduct, removeProduct, updateProduct } from "../../api/product";
export const listProducts = createAsyncThunk(
    "product/listProduct",
    async () => {
        const { data } = await listProduct();
        return data
    }
)
export const addProducts = createAsyncThunk(
    "product/addProducts",
    async (product) => {
        const { data } = await addProduct(product);
        return data
    }
)
export const removeProducts = createAsyncThunk(
    "product/removeProduct",
    async (id)=>{
        const { data } =await removeProduct(id);
        return data
    }

)
export const updateProducts = createAsyncThunk(
    "product/updateProduct",
    async (id)=>{
        const { data } =await updateProduct(id);
        return data
    }

)
const productSlice = createSlice({
    name: "product",
    initialState: {
        value: []
    },
  
    extraReducers: (builder) => {
        builder.addCase(listProducts.fulfilled, (state, actions) => {
           state.value = actions.payload
        })
        builder.addCase(addProducts.fulfilled, (state, action) => {
            state.value.push(action.payload)
         })
         builder.addCase(removeProducts.fulfilled,(state,action)=>{
            state.value = state.value.filter(item => item.id !== action.meta.arg)
        })
        builder.addCase(updateProducts.fulfilled,(state,action)=>{
            state.value = state.value.push(action.payload)
        })
    }


});

export default productSlice.reducer;
