import React, { useState } from "react";
import { View, TextInput, Button, Alert, Text } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

function RegistroScreen({ navigation }){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleRegistro = () => {
        createUserWithEmailAndPassword(auth, email, senha)
        .then(() => {
            Alert.alert('Sucesso', 'Conta Criada com sucesso');
            navigation.navigate('Login');
        })
        .catch(error => {
            Alert.alert('Erro', error.message);
        })
    }

    return (<View style={{padding: 20}}>
        <Text>Cadastro</Text>
        <TextInput placeholder="E-mail" onChangeText={setEmail} value={email}/>
        <TextInput placeholder="Senha" secureTextEntry onChangeText={setSenha} value={senha}/>
        <Button title="Cadastrar" onPress={handleRegistro}/>
    </View>
    );
}

export default RegistroScreen;