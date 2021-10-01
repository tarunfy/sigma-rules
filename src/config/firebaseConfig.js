import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFrMxPYJlzCym5uxFfmmHieoIp9TqwGqU",
  authDomain: "sigma-rules.firebaseapp.com",
  projectId: "sigma-rules",
  storageBucket: "sigma-rules.appspot.com",
  messagingSenderId: "932541106027",
  appId: "1:932541106027:web:f938c16da2f1a87b86ee2e",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
export const auth = app.auth();
export const firestore = app.firestore();

export default firebaseConfig;
