import React, { useState, useEffect } from "react";
import { View, TextInput, Button, FlatList, Text } from "react-native";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";

function ProdutoScreen() {

    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [produtos, setProdutos] = useState([]);
    const [editarId, setEditarId] = useState(null);

    const listarProdutos = async () =>  {
        const buscar_todos_os_produtos = await getDocs(collection(db, 'produtos'));
        const lista_de_produtos = buscar_todos_os_produtos.docs.map(doc => ({id: doc.id, ...doc.data()}));
        setProdutos(lista_de_produtos);
    }

    useEffect(() => {
        listarProdutos();
    }, []);

    const salvarProdutos = async () => {
        if (editarId){
            await updateDoc(doc(db, 'produtos', editarId), {nome, preco: Number(preco)});
            setEditarId(null);
        } else {
            await addDoc(collection(db, 'produtos'), {nome, preco: Number(preco) });
        }
        setNome('');
        setPreco('');
        listarProdutos();
    }

    const editarProduto = (produto) => {
        setNome(produto.nome);
        setPreco(produto.preco.toString());
        setEditarId(produto.id);
    }

    const deletarProduto = async (id) => {
        await deleteDoc(doc(db, 'produtos', id));
        listarProdutos();
    }


    return (<View style={{padding: 20}}>
            <TextInput 
            placeholder="Nome do Produto"
            value={nome}
            onChangeText={setNome} 
            style={{ borderBottomWidth: 1 }}/>

            <TextInput 
            placeholder="Preco"
            value={preco}
            keyboardType="numeric"
            onChangeText={setPreco}
            style={{ borderBottomWidth: 1, marginBottom: 10 }}/>

            <Button title={editarId ? "Atualizar": "Adicionar"} onPress={salvarProdutos}/>

            <FlatList
                data={produtos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{marginVertical: 10}}>
                        <Text> {item.nome} - R$ {item.preco}</Text>
                        <Button title="Editar" onPress={() => editarProduto(item)}/>
                        <Button title="Deletar" onPress={() => deletarProduto(item.id)} color="red"/>
                    </View>
                )}
            />

            </View>
    );

}

export default ProdutoScreen;