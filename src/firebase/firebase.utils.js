import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBVKGWvggtcbWyMXE4URqsx__W1ZfcMVpQ",
    authDomain: "crwn-db-24d15.firebaseapp.com",
    projectId: "crwn-db-24d15",
    storageBucket: "crwn-db-24d15.appspot.com",
    messagingSenderId: "511460910726",
    appId: "1:511460910726:web:43a66dd4abe6c178f6d307",
    measurementId: "G-6BLESE4981"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef =  firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if(!snapshot.exists) {
      const createdAt = new Date();
      const {displayName, email} = userAuth;
      try{
        await userRef.set(
          {
            displayName,
            email,
            createdAt,
            ...additionalData
          }
        );
      } catch(error) {
        console.log('error creating user', error.message);
      }
    } 

    return userRef;
    
  };


  export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc(obj.title);
      batch.set(newDocRef, obj);
    });

    return await batch.commit();
  };

  export const convertCollectionsSnapshotToMap = (collections) =>{
    const transformedCollection = collections.docs.map(doc => {
      const {title,items} = doc.data();
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      };
    });
    // console.log(transformedCollection);
    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {})
  }


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;