import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: "netflix-559ee.firebaseapp.com",
    projectId: "netflix-559ee",
    storageBucket: "netflix-559ee.appspot.com",
    messagingSenderId: "776242341228",
    appId: "1:776242341228:web:3ccd1ab324b817f7e2bf49",
    measurementId: "G-FG2MKG2YNZ"
  };

  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);
  export default storage;