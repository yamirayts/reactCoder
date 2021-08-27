
import firebase from "firebase"
import "firebase/firestore"


// Your web app's Firebase configuration

 const firebaseConfig = {
    apiKey: "AIzaSyAsVblGGa2nhF7K-pM5Q-_RLAo1wnMsGFI",
    authDomain: "reactcoderhouserayts.firebaseapp.com",
    projectId: "reactcoderhouserayts",
    storageBucket: "reactcoderhouserayts.appspot.com",
    messagingSenderId: "868881496193",
    appId: "1:868881496193:web:23e750588e283ce9ad3580"
  };
// Initialize Firebase

  const app = firebase.initializeApp(firebaseConfig);

  export function getFirenase(){

      return(app)

  }

  export function getFirestore(){

      return firebase.firestore(app)
      
  }