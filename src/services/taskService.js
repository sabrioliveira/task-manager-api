import { db } from "../utils/firebaseauth.js";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";

export const createTask = async (body) => {
  try {
    const docRef = await addDoc(collection(db, "tasks"), body);
    console.log("Tarefa criada com ID: ", docRef.id);
    return { id: docRef.id, ...body };
  } catch (error) {
    console.error("Erro ao tentar 'createTask': ", error);
    throw error;
  }
};

export const getAllTasks = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "tasks"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Erro ao tentar 'getAllTasks': ", error);
    throw error;
  }
};

export const updateTask = async (id, body) => {
  try {
    await updateDoc(doc(db, "tasks", id), body);
    console.log(`Tarefa (id: ${id}) foi atualizada`);

    return { id: id, ...body };
  } catch (error) {
    console.error("Erro ao tentar 'updateTask': ", error);
    throw error;
  }
};

export const deleteTask = async (id) => {
  try {
    await deleteDoc(doc(db, "tasks", id));
    console.log("Tarefa deletada");
  } catch (error) {
    console.error("Erro ao tentar 'deleteTask': ", error);
    throw error;
  }
};

export const getUserTasks = async (userId) => {
  try {
    const tasksQuery = query(
      collection(db, "tasks"),
      where("userID", "==", `/users/${userId}`)
    );
    const querySnapshot = await getDocs(tasksQuery);

    const tasks = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(tasksQuery);

    return tasks;
  } catch (error) {
    console.error("Erro ao buscar tasks do usuário: ", error);
    throw error;
  }
};

/*const testFirestore = async () => {
  try {
    // Teste de escrita
    const docRef = await addDoc(collection(db, "testCollection"), {
      name: "Teste",
      createdAt: new Date(),
    });
    console.log("Documento escrito com ID: ", docRef.id);

    // Teste de leitura
    const querySnapshot = await getDocs(collection(db, "testCollection"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} =>`, doc.data());
    });
  } catch (error) {
    console.error("Erro ao conectar ao Firestore: ", error);
  }
};

testFirestore();*/
