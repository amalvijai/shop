import { createSlice } from "@reduxjs/toolkit";

const whishlistSlice =createSlice({
    name:"whishlist",
    initialState:[],
    reducers:{
        addToWhishList:(state,action)=>{
            state.push
            (action.payload)

        },
        removeFromWishlist:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
    }
    }
})
export const {addToWhishList,removeFromWishlist}=whishlistSlice.actions
export default  whishlistSlice .reducer;
