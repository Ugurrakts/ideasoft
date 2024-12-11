import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';
interface FormField {
  name: string;
  label: string;
  placeholder: string;
  type?: 'text' | 'number';
  required?: boolean;
}

interface GenericFormScreenProps {
  title: string;
  fields: FormField[];
  initialValues?: Record<string, any>;
  onSubmit: (values: Record<string, any>) => Promise<void>;
  isEdit?: boolean;
}

const GenericFormScreen: React.FC<GenericFormScreenProps> = ({
  fields,
  initialValues = {},
  onSubmit,
  isEdit = false,
}) => {
  const navigation = useNavigation();
  const [values, setValues] = useState<Record<string, any>>(initialValues);

  const handleChange = (name: string, value: string) => {
    setValues(prev => ({...prev, [name]: value}));
  };

  const handleSubmit = async () => {
    // Zorunlu alan kontrolü
    const missingFields = fields
      .filter(field => field.required && !values[field.name])
      .map(field => field.label);

    if (missingFields.length > 0) {
      Alert.alert('Hata', `${missingFields.join(', ')} alanları zorunludur.`);
      return;
    }

    try {
      await onSubmit(values);
      Alert.alert('Başarılı', `${isEdit ? 'Güncelleme' : 'Ekleme'} başarılı.`, [
        {
          text: 'Tamam',
          onPress: () => navigation.goBack(),
        },
      ]);
    } catch (err) {
      Alert.alert('Hata', `İşlem sırasında bir hata oluştu.`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {fields.map(field => (
        <View key={field.name}>
          <Text style={styles.label}>{field.label}</Text>
          <TextInput
            style={styles.input}
            value={values[field.name]?.toString() || ''}
            onChangeText={value => handleChange(field.name, value)}
            placeholder={field.placeholder}
            keyboardType={field.type === 'number' ? 'numeric' : 'default'}
          />
        </View>
      ))}
      <Button title={isEdit ? 'Güncelle' : 'Ekle'} onPress={handleSubmit} />
    </ScrollView>
  );
};

export default GenericFormScreen;
