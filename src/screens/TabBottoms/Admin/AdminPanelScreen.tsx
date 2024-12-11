import React from 'react';
import {View, Text, FlatList, Button, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {useAdmin, AdminScreenProps} from './hooks/useAdmin';
import {Category} from '../../../services/Category/types';
import {Product} from '../../../services/Product/types';
import {AdminListItem} from './components/AdminListItem/AdminListItem';

type ListItem = Category | Product;

const HomeScreen: React.FC<AdminScreenProps> = ({navigation, route}) => {
  const {data, isLoading, error, handleDelete, handleEdit, isCategoryMode} =
    useAdmin(navigation, route);

  const handleEditWrapper = (id: string | number) => {
    handleEdit(Number(id));
  };

  const handleDeleteWrapper = (id: string | number) => {
    handleDelete(Number(id));
  };

  if (isLoading) {
    return <Text style={styles.centerText}>Yükleniyor...</Text>;
  }
  if (error) {
    return (
      <Text style={styles.centerText}>
        {isCategoryMode ? 'Kategoriler' : 'Ürünler'} alınırken bir hata oluştu.
      </Text>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerButtons}>
        {isCategoryMode ? (
          <Button
            title="Yeni Kategori Ekle"
            onPress={() => navigation.navigate('AddCategory')}
            color="#4CAF50"
          />
        ) : (
          <TouchableOpacity
            style={styles.categoriesButton}
            onPress={() => navigation.navigate('Category')}>
            <Text style={styles.categoriesButtonText}>Kategoriler</Text>
          </TouchableOpacity>
        )}
      </View>
      <FlatList<ListItem>
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <AdminListItem
            item={item}
            isCategoryMode={isCategoryMode}
            onEdit={handleEditWrapper}
            onDelete={handleDeleteWrapper}
          />
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default HomeScreen;
