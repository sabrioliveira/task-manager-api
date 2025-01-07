import { auth } from "../utils/firebaseauth.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const createUser = async (body) => {
  try {
    const userRef = await createUserWithEmailAndPassword(
      auth,
      body.email,
      body.password
    );
    console.log("Usuário criado");
    return userRef;
  } catch (error) {
    console.error("Erro ao tentar 'createUser': ", error);
    throw error;
  }
};

export const signUser = async (body) => {
  try {
    const userRef = await signInWithEmailAndPassword(
      auth,
      body.email,
      body.password
    );
    console.log(`Sessão de usuário ${body.email} iniciada`);

    return userRef;
  } catch (error) {
    console.error("Erro ao tentar 'signUser': ", error);
    throw error;
  }
};
