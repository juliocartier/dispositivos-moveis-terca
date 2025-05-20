import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ConexaoRemota from './components/ConexaoRemotaScreen';
import RegistroScreen from './components/RegistroScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()


export default function App() {
  return (<NavigationContainer>
            <Stack.Navigator initialRouteName='ConexaoRemota'>
              <Stack.Screen name="ConexaoRemota" component={ConexaoRemota}/>
              <Stack.Screen name="Registro" component={RegistroScreen}/>
            </Stack.Navigator>
          </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
