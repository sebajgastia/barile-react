import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDmqkqtmNYef-tSr2NWy6WDnv9BIrm2Awo",
  authDomain: "barile-react-app.firebaseapp.com",
  projectId: "barile-react-app",
  storageBucket: "barile-react-app.appspot.com",
  messagingSenderId: "1031256439153",
  appId: "1:1031256439153:web:c169ccaf5b6a7c7628ded0"
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app)