import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB_90wf6oRlBEjWBaYLkpEMwfvwL03jbyo",
  authDomain: "photogallery-2b987.firebaseapp.com",
  databaseURL: "https://photogallery-2b987.firebaseio.com",
  projectId: "photogallery-2b987",
  storageBucket: "photogallery-2b987.appspot.com",
  messagingSenderId: "212582104191",
  appId: "1:212582104191:web:6021fb0a2cc809e0c6534a",
  measurementId: "G-1057LWQ5CK",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
