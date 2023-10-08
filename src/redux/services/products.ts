import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../features/productsSlice';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://product-mgn.onrender.com/'
  }),
  tagTypes: ['Products'],
  endpoints: builder => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => 'products',
      providesTags: result =>
        result
          ? [
              ...result.map(({ _id }) => ({
                type: 'Products' as const,
                id: _id
              })),
              { type: 'Products', id: 'LIST' }
            ]
          : [{ type: 'Products', id: 'LIST' }],
      transformResponse: (res: { data: IProduct[] }) => res.data
    }),

    getProduct: builder.query<IProduct, string>({
      query: id => `product/${id}`,
      transformResponse: (response: { data: IProduct }) => response.data,
      providesTags: (_result, _error, id) => [{ type: 'Products', id }]
    }),

    createProduct: builder.mutation<IProduct, object>({
      query(data) {
        return {
          url: 'product',
          method: 'POST',
          body: data
        };
      },
      invalidatesTags: [{ type: 'Products', id: 'LIST' }]
    }),

    updateProduct: builder.mutation<
      IProduct,
      { _id: string; formData: FormData }
    >({
      query({ _id, formData }) {
        return {
          url: `products/${_id}`,
          method: 'PATCH',
          credentials: 'include',
          body: formData
        };
      },
      invalidatesTags: (result, _error, { _id }) =>
        result
          ? [
              { type: 'Products', id: _id },
              { type: 'Products', id: 'LIST' }
            ]
          : [{ type: 'Products', id: 'LIST' }],
      transformResponse: (response: { data: { product: IProduct } }) =>
        response.data.product
    }),
    deleteProduct: builder.mutation<string, string>({
      query(id) {
        return {
          url: `product/${id}`,
          method: 'DELETE'
          // credentials: 'include'
        };
      },
      transformResponse: (res: { data: string }, _, arg) => {
        return arg;
      }
      // invalidatesTags: [{ type: 'Products', id: 'LIST' }]
    })
  })
});

export const {
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetProductsQuery,
  useGetProductQuery,
  usePrefetch
} = productApi;
