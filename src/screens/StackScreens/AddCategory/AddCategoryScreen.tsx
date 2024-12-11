import React from 'react';
import GenericFormScreen from '../../../components/GenericFormScreen';
import {useAddCategory} from './hooks/useAddCategory';

const AddCategoryScreen = () => {
  const {fields, handleSubmit} = useAddCategory();

  const onSubmit = async (values: Record<string, string>) => {
    await handleSubmit(values);
  };

  return (
    <GenericFormScreen
      fields={fields}
      onSubmit={onSubmit}
      title="Kategori Ekle"
    />
  );
};

export default AddCategoryScreen;
