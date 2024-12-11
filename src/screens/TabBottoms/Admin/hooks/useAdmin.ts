import {useCallback} from 'react';
import {Alert} from 'react-native';
import {
  useGetProductsQuery,
  useDeleteProductMutation,
} from '../../../../services/Product/ProductApi';
import {
  useGetCategoriesQuery,
  useDeleteCategoryMutation,
} from '../../../../services/Category/CategoryApi';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  AddCategory: undefined;
  EditCategory: {categoryId: number; isCategory: boolean};
  EditProduct: {productId: number; isCategory: boolean};
  Category: undefined;
  Admin: {mode?: 'category'};
};

export type AdminScreenProps = {
  navigation: StackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'Admin'>;
};

export const useAdmin = (
  navigation: StackNavigationProp<RootStackParamList>,
  route: RouteProp<RootStackParamList, 'Admin'>,
) => {
  const isCategoryMode = route.params?.mode === 'category';

  const {
    data: products,
    error: productsError,
    isLoading: productsLoading,
    refetch: refetchProducts,
  } = useGetProductsQuery();
  const {
    data: categories,
    error: categoriesError,
    isLoading: categoriesLoading,
    refetch: refetchCategories,
  } = useGetCategoriesQuery();

  const [deleteProduct] = useDeleteProductMutation();
  const [deleteCategory] = useDeleteCategoryMutation();

  const data = isCategoryMode ? categories : products;
  const isLoading = isCategoryMode ? categoriesLoading : productsLoading;
  const error = isCategoryMode ? categoriesError : productsError;

  const handleDelete = useCallback(
    (id: number) => {
      Alert.alert(
        isCategoryMode ? 'Kategoriyi Sil' : 'Ürünü Sil',
        isCategoryMode
          ? 'Bu kategoriyi silmek istediğinize emin misiniz?'
          : 'Bu ürünü silmek istediğinize emin misiniz?',
        [
          {text: 'İptal', style: 'cancel'},
          {
            text: 'Sil',
            style: 'destructive',
            onPress: async () => {
              try {
                if (isCategoryMode) {
                  await deleteCategory(id).unwrap();
                  refetchCategories();
                } else {
                  await deleteProduct(id).unwrap();
                  refetchProducts();
                }
                Alert.alert(
                  'Başarılı',
                  isCategoryMode ? 'Kategori silindi.' : 'Ürün silindi.',
                );
              } catch (err) {
                Alert.alert(
                  'Hata',
                  isCategoryMode
                    ? 'Kategori silinirken bir hata oluştu.'
                    : 'Ürün silinirken bir hata oluştu.',
                );
              }
            },
          },
        ],
        {cancelable: true},
      );
    },
    [
      isCategoryMode,
      deleteCategory,
      deleteProduct,
      refetchCategories,
      refetchProducts,
    ],
  );

  const handleEdit = useCallback(
    (id: number) => {
      if (isCategoryMode) {
        // @ts-ignore
        navigation.navigate('EditScreen', {
          categoryId: id,
          isCategory: true,
        });
      } else {
        // @ts-ignore
        navigation.navigate('EditScreen', {
          productId: id,
          isCategory: false,
        });
      }
    },
    [navigation, isCategoryMode],
  );

  return {
    data,
    isLoading,
    error,
    handleDelete,
    handleEdit,
    isCategoryMode,
  };
};
