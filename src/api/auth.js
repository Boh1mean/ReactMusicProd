import axios from "axios";
const API_URL = "http://localhost:3001/api/auth"; // URL бэкенда

export const register = async (email, name, password, passwordConfirmation) => {
  try {
    const response = await axios.post(API_URL, {
      user: {
        email: email,        
        name: name,
        password: password,
        password_confirmation: passwordConfirmation
      }
    });

    console.log("Регистрация успешна:", response.data);
    return response.data;
  } catch (error) {
    console.error("Ошибка регистрации:", error.response?.data || error.message);
    throw error;
  }
};


// Вход в аккаунт
export const login = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:3001/api/auth/sign_in", {
            email: email,
            password: password
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Ошибка Авторизации:", error.response?.data || error.message);
    throw error;
  }
};
