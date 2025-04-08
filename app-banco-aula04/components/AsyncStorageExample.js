import React, { useState } from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageExample = () => {
    const [valor, setValor] = useState('');
    const [armazenarValor, setArmazenarValor] = useState('');

    const armazenarDados = async () => {
        try {
            await AsyncStorage.setItem("dado", valor);
        } catch (e) {
            console.error("Falha ao armazenar os dados", e);
        }
    }

    const recuperarDados = async () => {
        try {
            const dado = await AsyncStorage.getItem("dado1");
            if (dado !== null){
                setArmazenarValor(dado)
            }
        } catch (e) {
            console.error("Falha ao buscar os dados", e);
        }
    }

    return (<View>
                <TextInput
                    placeholder='Entre com um valor'
                    value={valor}
                    onChangeText={setValor}
                    style={{ borderWidth: 1, marginBottom: 10}}
                />
                <Button title="Salvar Dado" onPress={armazenarDados}/>
                <Button title="Recuperar Dado" onPress={recuperarDados}/>
                <Text>Valor Salvo: {armazenarValor}</Text>
            </View>
    )
}

export default AsyncStorageExample;