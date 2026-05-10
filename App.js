
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

import HomeScreen from './screens/HomeScreen';
import TasksScreen from './screens/TasksScreen';
import UsersScreen from './screens/UsersScreen';

import { ThemeProvider } from './context/ThemeContext';
import store from './redux/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Accueil" component={HomeScreen} />
            <Stack.Screen name="Taches" component={TasksScreen} />
            <Stack.Screen name="Utilisateurs" component={UsersScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
