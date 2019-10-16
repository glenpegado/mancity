import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyCO7blZNnFtfI0rJTMR3v8QpOfh-_X6FYE",
    authDomain: "m-city-82e21.firebaseapp.com",
    databaseURL: "https://m-city-82e21.firebaseio.com",
    projectId: "m-city-82e21",
    storageBucket: "m-city-82e21.appspot.com",
    messagingSenderId: "828200091779",
    appId: "1:828200091779:web:f23891735b1f7622805bb6",
    measurementId: "G-REHCHJGK35"
  };

  firebase.initializeApp(config);
  firebase.analytics(); 

  const firebaseDB = firebase.database();

  firebaseDB.ref('matches').once('value')
    .then((snapshot) => {
        console.log(snapshot)
    })
