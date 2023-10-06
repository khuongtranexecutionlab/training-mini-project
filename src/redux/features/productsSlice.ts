import { createSlice } from "@reduxjs/toolkit";
import { productApi } from "../services/products";

const initialState: { data: IProduct[] } = {
  data: [],
};

export const products = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      productApi.endpoints.getProducts.matchFulfilled,
      (state, action) => {
        state.data = action.payload;
      }
    );
  },
});

export default products.reducer;

export type IProduct = {
  _id: string;
  name: string;
  price: number;
  images: string[];
  rating: number;
  category: string;
  isHighLight: boolean;
  slug: string;
  blurHash?: string;
};
