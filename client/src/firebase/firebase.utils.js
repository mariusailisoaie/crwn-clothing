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

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
}

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${ userAuth.uid }`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('Error creating user: ', error);
    }
  }

  return userRef;
}

export const addCollectionsAndDocuments = async (collectionKey, collections) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  collections.forEach(collection => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, collection);
  });

  return await batch.commit();
}

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    }
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;

    return accumulator;
  }, {});
}

export default firebase;
