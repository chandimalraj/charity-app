import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA2i6X_kRRaeJVN-GGjGoz0b-PS2cyvF1g",
  authDomain: "charity-app-249f2.firebaseapp.com",
  projectId: "charity-app-249f2",
  storageBucket: "charity-app-249f2.appspot.com",
  messagingSenderId: "512292507936",
  appId: "1:512292507936:web:dde910f2f1d707b468c745",
  measurementId: "G-P6VL726N9H"
    
  }

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export {firebase};



  


