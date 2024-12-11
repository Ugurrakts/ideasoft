import {Alert} from 'react-native';
import {
  useAddCategoryMutation,
  useGetCategoriesQuery,
} from '../../../../services/Category/CategoryApi';

type FormField = {
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
  type?: 'text' | 'number';
};

export const useAddCategory = () => {
  const [addCategory] = useAddCategoryMutation();
  const {refetch: refetchCategories} = useGetCategoriesQuery();

  const fields: FormField[] = [
    {
      name: 'name',
      label: 'Kategori Adı',
      placeholder: 'Kategori adını giriniz',
      required: true,
      type: 'text',
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
  ];

  const handleSubmit = async (values: Record<string, string>) => {
    try {
      await addCategory({
        name: values.name,
        slug: values.slug,
        sortOrder: values.sortOrder ? parseInt(values.sortOrder, 10) : 0,
        status: 1,
      }).unwrap();

      refetchCategories();

      Alert.alert('Başarılı', 'Kategori başarıyla eklendi.');

      return true;
    } catch (err) {
      Alert.alert('Hata', 'Kategori eklenirken bir hata oluştu.');
      return false;
    }
  };

  return {
    fields,
    handleSubmit,
  };
};
