import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBvf1xU_uTzSh-o0qB8dIXcq8adRgnX2Ek",
    authDomain: "cha-tea-cup.firebaseapp.com",
    databaseURL: "https://cha-tea-cup.firebaseio.com",
    projectId: "cha-tea-cup",
    storageBucket: "cha-tea-cup.appspot.com",
    messagingSenderId: "360140140305",
    appId: "1:360140140305:web:182618765feb9f6de126b0"
  };

  export default firebase.initializeApp(firebaseConfig);