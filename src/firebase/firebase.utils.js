import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBhjd1whSfBkOCh16RzZsMdPYHlE6V4v2U',
  authDomain: 'crwn-db-6bda1.firebaseapp.com',
  databaseURL: 'https://crwn-db-6bda1.firebaseio.com',
  projectId: 'crwn-db-6bda1',
  storageBucket: 'crwn-db-6bda1.appspot.com',
  messagingSenderId: '506386178828',
  appId: '1:506386178828:web:15ac324a2488e4dbb51f29',
  measurementId: 'G-TRN9PYZ7DP'
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;