import { createSlice } from "@reduxjs/toolkit"




export const cartSlice= createSlice({
    name:"cart",
    initialState:{cart:[],
        wishList:[]
    },
    reducers:{
        add:(state,action)=>{
            state.cart.push(action.payload);
        },
        remove: (state,action)=>{
          state.cart= state.cart.filter((item)=>item.id !== action.payload)
        },
        addWishList:(state,action)=>{
            const review = state.wishList.some((item)=>item.id === action.payload) 
            if(!review){
                state.wishList.push(action.payload)
            }
        },
        removeWishList:(state,action)=>{
            state.wishList = state.wishList.filter((item) => item.id !== action.payload);
        }

    }
})

export const {add,remove,removeWishList,addWishList} = cartSlice.actions;
export default cartSlice.reducer