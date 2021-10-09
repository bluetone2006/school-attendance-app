import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB8ru56L9vrn0g8v7-6mQKdl5pPnR56GNs",
  authDomain: "school-attendance-bda90.firebaseapp.com",
  databaseURL: "https://school-attendance-bda90-default-rtdb.firebaseio.com",
  projectId: "school-attendance-bda90",
  storageBucket: "school-attendance-bda90.appspot.com",
  messagingSenderId: "979655636018",
  appId: "1:979655636018:web:c6a5f1d1947e829cdcf82b"
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();
