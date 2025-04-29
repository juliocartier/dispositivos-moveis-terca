import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './components/LoginScreen';
import RegistroScreen from './components/RegistroScreen';

const Stack = createNativeStackNavigator();

export default function App() {
 return (    <NavigationContainer>
               <Stack.Navigator initialRouteName="Login">
                 <Stack.Screen name="Login" component={LoginScreen} />
                 <Stack.Screen name="Register" component={RegistroScreen} />
               </Stack.Navigator>
             </NavigationContainer>
 );
}
