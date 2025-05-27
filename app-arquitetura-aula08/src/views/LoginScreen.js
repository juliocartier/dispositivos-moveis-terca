import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { login, logout } from "../controllers/AuthController";


function LoginScreen() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return ( <View style={styles.container}>
                <TextInput
                    placeholder="Usuario"
                    onChangeText={setUsername}
                    value={username}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Senha"
                    secureTextEntry
                    onChangeText={setPassword}
                    value={password}
                    style={styles.input}
                />
                <Button title="Login" onPress={() => login(username, password)}/>
                <View/>
                <Button title="logout" onPress={logout}/>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20, 
        marginTop: 50
    },
    input: {
        height: 40,
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
        borderRadius: 5,
    }
})

export default LoginScreen;