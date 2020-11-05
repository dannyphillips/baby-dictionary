import "@firebase/app";
import firebase from "@firebase/app";
import "@firebase/firestore";

var config = {
  apiKey: "AIzaSyDQFNuSna8jIFnhwnz5gdHuWlWKwB3mrBA",
  authDomain: "baby-dictionary.firebaseapp.com",
  databaseURL: "https://baby-dictionary.firebaseio.com",
  projectId: "baby-dictionary",
  storageBucket: "baby-dictionary.appspot.com",
  messagingSenderId: "573982405003"
};
firebase.initializeApp(config);
export default firebase;