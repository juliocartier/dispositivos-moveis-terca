import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/views/LoginScreen';

import { Provider } from 'react-redux';
import CounterScreen from './src/views/CounterScreen';
import { store } from './src/redux/store';

import CountScreen from './src/views/CountScreen';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator()

export default function App() {
    return <CountScreen/>
  //   return ( <Provider store={store}>
  //             <CounterScreen/>
  //           </Provider>
  // );
  // return ( <NavigationContainer>
  //             <Stack.Navigator initialRouteName='LoginScreen'>
  //               <Stack.Screen name='LoginScreen' component={LoginScreen}/>
  //             </Stack.Navigator>
  //         </NavigationContainer> 
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
