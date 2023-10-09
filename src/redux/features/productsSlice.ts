import { createSlice } from '@reduxjs/toolkit';
import { productApi } from '../services/products';

const initialState: { data: IProduct[] } = {
  data: []
};

export const products = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      productApi.endpoints.getProducts.matchFulfilled,
      (state, action) => {
        state.data = action.payload;
      }
    );
    builder.addMatcher(
      productApi.endpoints.deleteProduct.matchFulfilled,
      (state, action) => {
        state.data = state.data.filter(i => i._id !== action.payload);
      }
    );
  }
});

export default products.reducer;

export type IProduct = {
  _id?: string;
  product_name: string;
  description: string;
  price: number;
  image_url: string;
  blurHash?: string;
};
