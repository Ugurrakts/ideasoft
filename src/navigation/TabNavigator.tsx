import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AdminPanelScreen from '../screens/TabBottoms/Admin/AdminPanelScreen';
import HomeScreen from '../screens/TabBottoms/Home/HomeScreen';

export type TabParamList = {
  Admin: undefined;
  Home: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Admin"
        component={AdminPanelScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
