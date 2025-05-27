import { UserModel } from "../models/UserModels";
import * as SecureStore from 'expo-secure-store';

export const login = async (username, password) => {
    if (UserModel.username === username && UserModel.password === password) {
        await SecureStore.setItemAsync('token', 'token_123');
        console.log('login com sucesso');
        return true;
    } else {
        console.log("Crendencias Invalidas");
        return false;
    }
};

export const logout = async() => {
    await SecureStore.deleteItemAsync('token');
    console.log("Saiu do app");
}