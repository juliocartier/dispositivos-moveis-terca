import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Text, FlatList } from "react-native";
import db from "./database";

const DexieExemplo = () => {
    const [ nome, setNome ] = useState('');
    const [ idade, setIdade] = useState('');
    const [ usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        carregaUsuarios();
    }, [])

    const addUsuario = async () => {
        await db.usuarios.add({ nome, idade: parseInt(idade) });
        setNome('');
        setIdade('');
        carregaUsuarios();
    }

    const carregaUsuarios = async () => {
        const todosUsuarios = await db.usuarios.toArray();
        setUsuarios(todosUsuarios);
    }

    return ( <View>
                <TextInput
                    placeholder="Nome"
                    value={nome}
                    onChangeText={setNome}
                    style={{ borderWidth: 1, marginBottom: 10 }}
                />
                <TextInput
                    placeholder="Idade"
                    value={idade}
                    onChangeText={setIdade}
                    style={{ borderWidth: 1, marginBottom: 10 }}
                />

                <Button title="Adicionar Usuarios" onPress={addUsuario}/>

                <FlatList
                    data={usuarios}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Text>{item.nome} - {item.idade} anos</Text>
                    )}
                />
            </View>
    );

}

export default DexieExemplo;