import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyBfnuslNom5b9xoFOjl1SqHP3n68extWwY",
    authDomain: "booksanta-d9792.firebaseapp.com",
    databaseURL: "https://book-santa.firebaseio.com",
    projectId: "booksanta-d9792",
    storageBucket: "booksanta-d9792.appspot.com",
    messagingSenderId: "800889462058",
    appId: "1:800889462058:web:a95671136e0f185fc49253"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
