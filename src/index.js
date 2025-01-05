import db from "./utils/firebaseauth.js";
import { collection, addDoc, getDocs } from "firebase/firestore";

const testFirestore = async () => {
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

testFirestore();
