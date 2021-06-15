import firebase from 'firebase'




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDU10Q0q6xdppttPgZthu2jYb0uoq5ly6s",
    authDomain: "challenge-39a29.firebaseapp.com",
    projectId: "challenge-39a29",
    storageBucket: "challenge-39a29.appspot.com",
    messagingSenderId: "839499562767",
    appId: "1:839499562767:web:4f22f3b4354c84bfa4487a",
    measurementId: "G-32S4XNR75V"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore()
  const auth=firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider)
  
  
    

  
  
 


  export {db,auth};