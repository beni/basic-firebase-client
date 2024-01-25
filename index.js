import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import firebaseConfig from "./firebaseConfig.json" assert { type: "json" };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

await signInWithEmailAndPassword(auth, "<user>", "<password>");

const db = getFirestore(app);
const queryResult = query(collection(db, "collection"));
//const queryResult = query(collection(db, "collection"), where("attribute", "==", true));
const snapshot = await getDocs(queryResult);
console.log("Document count:", snapshot.size);

snapshot.docs.forEach((doc) => {
  console.log(doc.data());
});

await signOut(auth);
