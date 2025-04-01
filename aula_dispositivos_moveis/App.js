import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

export default function App() {

  const [texto, setTexto] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.textoPrincipal}>
        Open up App.js to start working on your app!
      </Text>
      <Text style={styles.texto}>
        Hellooooooo World, Pessoalllll!
        </Text>
      <Button color="#841584" title='Salve-me'
        onPress={() => alert("Botao Pressionado")}
      />
      <Image
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        style={{width: 50, height: 50}}
      />
      <Image
        source={{uri: 'https://upload.wikimedia.org/wikipedia/pt/a/aa/Bart_Simpson_200px.png'}}
        style={styles.imagemBart}
      />
      <TextInput
        placeholder='Digite o seu texto'
        onChangeText={novoTexto => setTexto(novoTexto)}
        value={texto}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#633289e6'
  },
  textoPrincipal:{
    color: "#000"
  },
  botao:{
    backgroundColor: "#ff0000",
    color: "#000"
  },
  imagemBart: {
    width: 100,
    height: 250
  },
});
