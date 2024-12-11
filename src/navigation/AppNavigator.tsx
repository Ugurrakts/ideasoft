import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddCategoryScreen from "../screens/StackScreens/AddCategory/AddCategoryScreen";
import EditScreen from "../screens/StackScreens/Edit/EditScreen";
import TabNavigator from "./TabNavigator";
import AdminPanel from "../screens/TabBottoms/Admin/AdminPanelScreen";

export type RootStackParamList = {
  Main: undefined;
  EditProduct: {
    productId?: number;
    categoryId?: number;
    isCategory?: boolean;
  };
  AddCategory: undefined;
  Category: undefined;
  EditScreen: {
    productId?: number;
    categoryId?: number;
    isCategory?: boolean;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Products"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditScreen"
          component={EditScreen}
          options={({ route }) => ({
            title: route.params?.isCategory
              ? "Kategoriyi Düzenle"
              : "Ürünü Düzenle",
          })}
        />

        <Stack.Screen
          name="Category"
          component={AdminPanel}
          initialParams={{ mode: "category" }}
        />
        <Stack.Screen
          name="AddCategory"
          component={AddCategoryScreen}
          options={{ title: "Yeni Kategori Ekle" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
