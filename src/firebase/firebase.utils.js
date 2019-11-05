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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
