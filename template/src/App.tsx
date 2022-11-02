import React from 'react';
import {RootStackNavigator} from './navigation/RootStack/RootStackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './utils/navigation';
import {Provider} from 'react-redux';
import store from './store';
import {StatusBar} from 'react-native';

const AppContainer = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar barStyle="dark-content" />
        <App />
      </NavigationContainer>
    </Provider>
  );
};

const App = () => {
  return <RootStackNavigator />;
};

export default AppContainer;
