import React from "react";
import { View, Text, Button } from "react-native";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";

function HomeScreen({ navigation, route }) {  
    const {email, uid} = route.params;

    const handleLogout = () => {
        signOut(auth).then(() => navigation.navigate('Login'));
    };

    return ( <View style={{ padding: 20 }}>
                <Text>Bem vindo ao nosso aplicativo!</Text>
                <Text>Email: {email}</Text>
                <Text>ID: {uid} </Text>
                <Button title="Sair" onPress={handleLogout}/>
            </View>
    );

}

export default HomeScreen;