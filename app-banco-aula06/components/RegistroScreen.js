import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Alert, Text } from 'react-native';
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { ActivityIndicator } from "react-native-web";
import { Picker } from "@react-native-picker/picker";

function RegistroScreen({ navigation }){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [estados, setEstado] = useState([]);
    const [estadoSelecionado, setEstadoSelecionado] = useState('');
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {

        async function carregarEstado () {
            try {
                const resposta = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
                const dados = await resposta.json();
                setEstado(dados);
                setCarregando(false);

            } catch(erro) {
                console.log("Erro: Nao foi possivel carregar os estados");
                setCarregando(false);
            }
        }

        carregarEstado();
    }, []);


    const handleRegistro = async () => {
        try {

            if (!estadoSelecionado) {
                console.log("Atençã, selecione um estado.");
                return;
            }

            const registro_usuario = await createUserWithEmailAndPassword(auth, email, senha);
            id_usuario = registro_usuario.user;
            await sendEmailVerification(id_usuario);
            Alert.alert('Sucesso', 'Conta Criada com sucesso');
            navigation.navigate('Login');
        }catch(error) {
            Alert.alert('Erro', error.message);
        }
    }

    return (<View style={{padding: 20}}>
        <Text>Cadastro</Text>
        <TextInput placeholder="E-mail" onChangeText={setEmail} value={email}/>
        <TextInput placeholder="Senha" secureTextEntry onChangeText={setSenha} value={senha}/>

        <Text style={{ marginTop: 15 }}> Estado: </Text>

        {carregando ? (
            <ActivityIndicator size="large" color="#0000ff"/>
        ) : (
            <Picker selectedValue={estadoSelecionado}
            onValueChange={(itemValue) => setEstadoSelecionado(itemValue)}
            >
                <Picker.Item label="Selecione um estado" value=""/>
                {estados.map((estado) => (
                    <Picker.Item key={estado.id} label={estado.nome} value={estado.sigla}/>
                ))}
            </Picker>
        )}

        <Button title="Cadastrar" onPress={handleRegistro}/>
    </View>
    );
}

export default RegistroScreen;