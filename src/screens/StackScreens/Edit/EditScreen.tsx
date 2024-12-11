import React from 'react';
import {RouteProp} from '@react-navigation/native';
import GenericFormScreen from '../../../components/GenericFormScreen';
import {useEdit} from './hooks/useEdit';

type EditScreenParams = {
  productId?: string;
  categoryId?: string;
  isCategory: boolean;
};

type Props = {
  route: RouteProp<{Edit: EditScreenParams}, 'Edit'>;
};

const EditScreen: React.FC<Props> = ({route}) => {
  const {productId, categoryId, isCategory} = route.params;
  const {item, fields, handleSubmit} = useEdit(
    productId,
    categoryId,
    isCategory,
  );

  return (
    <GenericFormScreen
      title={isCategory ? 'Kategori Düzenle' : 'Ürün Düzenle'}
      fields={fields.map(field => ({
        ...field,
        type:
          field.type === 'number' || field.type === 'text'
            ? field.type
            : undefined,
      }))}
      initialValues={item}
      onSubmit={handleSubmit}
      isEdit
    />
  );
};

export default EditScreen;
