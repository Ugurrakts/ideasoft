import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../../styles';
import {AdminListItemProps} from './types';
export const AdminListItem: React.FC<AdminListItemProps> = ({
  item,
  isCategoryMode,
  onDelete,
  onEdit,
}) => (
  <View style={styles.itemContainer}>
    <View style={styles.itemDetails}>
      <Text style={styles.itemName}>{item.name}</Text>
      {isCategoryMode ? (
        <>
          <Text>Slug: {item.slug}</Text>
          <Text>Sıralama: {item.sortOrder}</Text>
        </>
      ) : (
        <>
          <Text>SKU: {item.sku}</Text>
          <Text>Stok: {item.stockAmount}</Text>
          <Text>
            Fiyat: {item.price1} {item.currency?.abbr}
          </Text>
        </>
      )}
    </View>
    <View style={styles.itemButtons}>
      <Button title="Düzenle" onPress={() => onEdit(item.id)} />
      <Button title="Sil" color="red" onPress={() => onDelete(item.id)} />
    </View>
  </View>
);
