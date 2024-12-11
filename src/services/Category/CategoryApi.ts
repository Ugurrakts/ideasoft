import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQueryWithAuth} from '../../congif/apiConfig';
import {Category} from './types';

export const CategoryApi = createApi({
  reducerPath: 'CategoryApi',
  baseQuery: baseQueryWithAuth,
  endpoints: builder => ({
    getCategories: builder.query<Category[], void>({
      query: () => '/categories',
    }),
    addCategory: builder.mutation<Category, Partial<Category>>({
      query: newCategory => ({
        url: '/categories',
        method: 'POST',
        body: newCategory,
      }),
    }),
    updateCategory: builder.mutation<
      Category,
      Partial<Category> & Pick<Category, 'id'>
    >({
      query: ({id, ...rest}) => ({
        url: `/categories/${id}`,
        method: 'PUT',
        body: rest,
      }),
    }),
    deleteCategory: builder.mutation<{success: boolean}, number>({
      query: id => ({
        url: `/categories/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = CategoryApi;
