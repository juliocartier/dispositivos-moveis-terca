import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

function LoginScreen({ navigation }) {

 return (
   <View style={{ padding: 20 }}>
     <Text>Login</Text>
     <Button title="Cadastrar-se" onPress={() => navigation.navigate('Register')} />
   </View>
 );
}
export default LoginScreen;

