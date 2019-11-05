import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCJMS3a7JcNnGNpb8RuC-QVW-4XfXFV9JU',
  authDomain: 'reaction-db.firebaseapp.com',
  databaseURL: 'https://reaction-db.firebaseio.com',
  projectId: 'reaction-db',
  storageBucket: 'reaction-db.appspot.com',
  messagingSenderId: '722357860587',
  appId: '1:722357860587:web:ab96dd5602b192e694a6ae',
  measurementId: 'G-VZMJZFGSPV'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
