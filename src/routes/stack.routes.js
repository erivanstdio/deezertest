import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MySongs from '../views/MySongs';
import Favourites from '../views/Favourites';
import Loading from '../views/Loading';

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Favourites"
        component={Favourites}
      />
      <Stack.Screen 
        name="MySongs" 
        component={MySongs} 
      />
      <Stack.Screen
        name="Loading"
        component={Loading}
      />
    </Stack.Navigator>
  );
  }

export default AppRoutes;