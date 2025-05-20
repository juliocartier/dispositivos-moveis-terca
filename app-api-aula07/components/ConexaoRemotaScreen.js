import React, {useEffect,  useState} from "react";
import { View, Text, FlatList, Button, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { atualizarUsuario, deletarUsuario } from "../services/usuarios";

const ConexaoRemota = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [edicoes, setEdicoes] = useState({});
    const navigation = useNavigation();

    const carregarUsuarios = () => {
        fetch('http://127.0.0.1:5009/listar_usuarios')
            .then(res => res.json())
            .then(data => {
                console.log("Usuario a ser mostrado", data);
                setUsuarios(data);
                const inicial = {};
                data.forEach(user => {
                    inicial[user.id] = user.email;
                });
                setEdicoes(inicial)
            })
            .catch(error => console.error("erro ao buscar os dados da api", error));
    }

    useEffect(() => {
        carregarUsuarios()
    }, []);

    const handleAtualizar = (id) => {
        const email = edicoes[id];
        if(!email){
            console.log("Erro: Por favor, preencha o e-mail para atualizar");
            return;
        }

        atualizarUsuario(id, email)
        .then(() => {
            console.log("Usuario, atualizado com sucesso");
            carregarUsuarios();
        })
        .catch(() => console.error("Erro, ao atualizar o usuario"));
    };

    const atualizarEdicao = (id, valor) => {
        setEdicoes(prev => ({
            ...prev,
            [id]: valor
        }));
    };

    const handleDeletar = (id) => {

        deletarUsuario(id)
        .then(() => {
            console.log("Usuario, deletado com sucesso");
            carregarUsuarios();
        })
        .catch(() => console.error("Erro, ao deletar o usuario"));
    };

    return (
        <View style={{ padding: 16 }}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}> Lista de Usuarios</Text>
            <FlatList
                data={usuarios}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ marginBottom: 15, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 5 }}>
                        <Text>ID: {item.id}</Text>
                        <TextInput
                            placeholder="Editar e-mail"
                            value={edicoes[item.id]}
                            onChangeText={(text) => atualizarEdicao(item.id, text)}
                            style={{backgroundColor: '#fff', padding: 5, marginTop: 5}}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <Button title="Editar" onPress={() => handleAtualizar(item.id)}/>
                            <View style={{width: 10}}/>
                            <Button title="Deletar" color="red" onPress={() => handleDeletar(item.id)}/>
                        </View>
                        {/* <Text style={{marginBottom: 5}}> {item.email}</Text> */}
                    </View>
                )} 
            />

            <View style={{ marginTop: 20 }}>
                <Button title="Registro" onPress={() => navigation.navigate('Registro')}/>
            </View>

        </View>
    )

}

export default ConexaoRemota
