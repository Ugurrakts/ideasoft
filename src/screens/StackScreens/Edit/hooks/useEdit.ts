import {
  useGetProductsQuery,
  useUpdateProductMutation,
} from '../../../../services/Product/ProductApi';
import {
  useGetCategoriesQuery,
  useUpdateCategoryMutation,
} from '../../../../services/Category/CategoryApi';

interface Product {
  id: number;
  name: string;
  slug: string;
  sku: string;
  categoryId: number;
}

interface Category {
  id: number;
  name: string;
  slug: string;
  sortOrder: number;
}

export const useEdit = (
  productId?: string,
  categoryId?: string,
  isCategory?: boolean,
) => {
  const {data: products, refetch: refetchProducts} = useGetProductsQuery();
  const {data: categories, refetch: refetchCategories} =
    useGetCategoriesQuery();
  const [updateProduct] = useUpdateProductMutation();
  const [updateCategory] = useUpdateCategoryMutation();

  const item = isCategory
    ? categories?.find(c => c.id === Number(categoryId))
    : products?.find(p => p.id === Number(productId));

  const fields = isCategory
    ? [
        {
          name: 'name',
          label: 'Kategori Adı',
          placeholder: 'Kategori Adı',
          required: true,
        },
        {
          name: 'slug',
          label: 'Slug',
          placeholder: 'kategori-slug',
          required: true,
        },
        {
          name: 'sortOrder',
          label: 'Sıralama',
          placeholder: '0',
          type: 'number',
        },
      ]
    : [
        {
          name: 'name',
          label: 'Ürün Adı',
          placeholder: 'Ürün Adı',
          required: true,
        },
        {name: 'sku', label: 'SKU', placeholder: 'Ürün SKU', required: true},
      ];

  const handleSubmit = async (values: Record<string, any>) => {
    if (isCategory) {
      await updateCategory({
        id: Number(categoryId),
        name: values.name,
        slug: values.slug,
        sortOrder: parseInt(values.sortOrder, 10),
      } as Category).unwrap();
      refetchCategories();
    } else if (productId) {
      await updateProduct({
        id: Number(productId),
        name: values.name,
        slug: values.slug,
        sku: values.sku,
        categoryId: Number(categoryId),
      } as Product).unwrap();
      refetchProducts();
    }
  };

  return {
    item,
    fields,
    handleSubmit,
  };
};
