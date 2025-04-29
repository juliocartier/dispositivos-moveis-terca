import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

function LoginScreen({ navigation }) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try{
      const usuario_credencias = await signInWithEmailAndPassword( auth, email, senha );
      const usuario = usuario_credencias.user;
      navigation.navigate('Home', {email: usuario.email, uid: usuario.uid})
    } catch (error){
      console.log(error.message);
      if (error.message === 'Firebase: Error (auth/invalid-credential).'){
        console.log("Erro: Senha Incorreta. Tente Novamente");
      } else if (error.message === 'auth/user-not-found') {
        console.log("Erro: Usuario não encontrado.");
      } else if (error.message === 'auth/invalid-email') {
        console.log("Erro: Email invalido");
      } else {
        console.log("Erro: outro tipo de erro", error.message);
      }
    }
  }
  

 return (
   <View style={{ padding: 20 }}>
     <Text>Login</Text>
     <TextInput placeholder='E-mail' onChangeText={setEmail} value={ email }/>
     <TextInput placeholder='Senha' secureTextEntry onChangeText={setSenha} value={ senha }/>
     <Button title='Entrar' onPress={handleLogin}/>
     <Button title="Cadastrar-se" onPress={() => navigation.navigate('Register')} />
   </View>
 );
}
export default LoginScreen;

