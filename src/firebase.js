// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAGW1MV7Bnj2GYN6xXV3ejaHDWsSrq21Cg",
  authDomain: "netflix-clone-8b1a3.firebaseapp.com",
  projectId: "netflix-clone-8b1a3",
  storageBucket: "netflix-clone-8b1a3.appspot.com",
  messagingSenderId: "288482991356",
  appId: "1:288482991356:web:25cdd8b24446a0699dcb79"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export {auth};
  export default db; 