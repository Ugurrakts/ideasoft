import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQueryWithAuth} from '../../congif/apiConfig';
import {Product} from './types';

export const ProductApi = createApi({
  reducerPath: 'ProductApi',
  baseQuery: baseQueryWithAuth,
  endpoints: builder => ({
    getProducts: builder.query<Product[], void>({
      query: () => '/products',
    }),
    addProduct: builder.mutation<Product, Partial<Product>>({
      query: newProduct => ({
        url: '/products',
        method: 'POST',
        body: newProduct,
      }),
    }),
    updateProduct: builder.mutation<
      Product,
      Partial<Product> & Pick<Product, 'id'>
    >({
      query: ({id, ...rest}) => ({
        url: `/products/${id}`,
        method: 'PUT',
        body: rest,
      }),
    }),
    deleteProduct: builder.mutation<{success: boolean}, number>({
      query: id => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = ProductApi;
