import { auth } from "../utils/firebaseauth.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { db } from "../utils/firebaseauth.js";
import { doc, setDoc } from "firebase/firestore";

export const createUser = async (body) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      body.email,
      body.password
    );
    const user = userCredential.user;
    const userData = {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
    };
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, userData);

    console.log("Usuário criado");
    return { id: userRef.id, ...userData };
  } catch (error) {
    console.error("Erro ao tentar 'createUser': ", error);
    throw error;
  }
};

export const userLogin = async (body) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      body.email,
      body.password
    );

    const user = userCredential.user;
    console.log(user.uid);

    console.log(`Sessão de usuário ${body.email} iniciada`);
    return;
  } catch (error) {
    console.error("Erro ao tentar 'userLogin': ", error);
    throw error;
  }
};
