// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDARrvw76wcijFWJXwJGQPRIm666F2Bw1c",
  authDomain: "fb-clone-5ed48.firebaseapp.com",
  databaseURL: "https://fb-clone-5ed48.firebaseio.com",
  projectId: "fb-clone-5ed48",
  storageBucket: "fb-clone-5ed48.appspot.com",
  messagingSenderId: "30341869879",
  appId: "1:30341869879:web:89368e26fb4516d0f36ab2",
  measurementId: "G-6GR9YSBPGZ"
};
  const firebaseApp = firebase.initializeApp ( firebaseConfig );
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export {auth, provider};
  export default db;

