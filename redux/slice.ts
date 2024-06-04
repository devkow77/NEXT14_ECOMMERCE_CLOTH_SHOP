import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    quantity: 0,
    size: "",
    stripeApi: "",
  },
  reducers: {
    setQuantity: (state, action) => {
      return { ...state, quantity: action.payload as number };
    },
    setSize: (state, action) => {
      return { ...state, size: action.payload as string };
    },
    setStripeApi: (state, action) => {
      return { ...state, stripeApi: action.payload as string };
    },
  },
});

export const { setSize, setQuantity, setStripeApi } = productSlice.actions;

export default productSlice.reducer;
