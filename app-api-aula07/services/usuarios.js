import axios from "axios";

const API_URL = 'http://127.0.0.1:5009';

export const registrarUsuario = async (email, password) => {
    try{
        const response = await axios.post(`${API_URL}/criar`, {
            email,
            password
        });

        console.log("Resposta da api:", response.data);
        return response.data;

    } catch (error){
        console.error('Erro ao registrar: ', error.response?.data || error.message);
        throw error;
    }
}

export const atualizarUsuario = async (userId, email) => {
    try {
        const response = await axios.put(`${API_URL}/atualizar_usuarios/${userId}`, { email });
        console.log("Atualizado com sucesso", response.data);
        return response.data;
    } catch (error) {
        console.error('Erro ao atualizar: ', error.response?.data || error.message);
        throw error;
    }
}

export const deletarUsuario = async (userId) => {
    try {
        const response = await axios.delete(`${API_URL}/deletar_usuario/${userId}`);
        console.log("Deletado com sucesso", response.data);
        return response.data;
    } catch (error) {
        console.error('Erro ao deletar: ', error.response?.data || error.message);
        throw error;
    }
}