import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootRoutes} from './routes';
import {RootStackParamList} from './types';
import Main from '@/screens/Main';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name={RootRoutes.Main} component={Main} />
    </RootStack.Navigator>
  );
};
