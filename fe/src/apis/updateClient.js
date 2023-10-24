
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3080",
  headers: {
    "Content-type": "application/json"
  }
});

export default apiClient;


import apiClient from '../../../../common/utils/apiClient';

export const login = async (email, password) => {
  return await apiClient.get(`/login?email=${email}&password=${password}`);
}

export const signup = async (user) => {
  return await apiClient.post('/signup', user, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

import { signup } from '../service/authService'
async function handleSignup(email, password) {
    await signup(email, password);
}


await apiClient.post('/signup', user, {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*'
    }
});