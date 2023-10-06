import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../features/productsSlice";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/products/",
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => "?highlight=true",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({
                type: "Products" as const,
                id: _id,
              })),
              { type: "Products", id: "LIST" },
            ]
          : [{ type: "Products", id: "LIST" }],
      transformResponse: (res: { data: IProduct[] }) => res.data,
    }),

    getProduct: builder.query<IProduct, string>({
      query: (id) => `${id}`,
      transformResponse: (response: { data: IProduct }) => response.data,
      providesTags: (_result, _error, id) => [{ type: "Products", id }],
    }),

    createProduct: builder.mutation<IProduct, object>({
      query(data) {
        return {
          url: "products",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: [{ type: "Products", id: "LIST" }],
      transformResponse: (response: { data: { product: IProduct } }) =>
        response.data.product,
    }),

    updateProduct: builder.mutation<
      IProduct,
      { _id: string; formData: FormData }
    >({
      query({ _id, formData }) {
        return {
          url: `products/${_id}`,
          method: "PATCH",
          credentials: "include",
          body: formData,
        };
      },
      invalidatesTags: (result, _error, { _id }) =>
        result
          ? [
              { type: "Products", id: _id },
              { type: "Products", id: "LIST" },
            ]
          : [{ type: "Products", id: "LIST" }],
      transformResponse: (response: { data: { product: IProduct } }) =>
        response.data.product,
    }),
    deleteProduct: builder.mutation<null, string>({
      query(id) {
        return {
          url: `products/${id}`,
          method: "DELETE",
          credentials: "include",
        };
      },
      invalidatesTags: [{ type: "Products", id: "LIST" }],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetProductsQuery,
  useGetProductQuery,
  usePrefetch,
} = productApi;
