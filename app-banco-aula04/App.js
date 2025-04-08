import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import AsyncStorageExample from './components/AsyncStorageExample';

export default function App() {
  return ( <ScrollView>
              <AsyncStorageExample/>
            </ScrollView>
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
