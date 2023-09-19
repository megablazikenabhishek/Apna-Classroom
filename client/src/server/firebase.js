import firebase from "firebase";
import secret from "../secret";
const config = {
  databaseURL: secret.DATABASE_URL,
  apiKey: secret.API_KEY,
};

firebase.initializeApp(config);

export const db = firebase;

var firepadRef = firebase.database().ref();

export const userName = localStorage.getItem("name")
  ? localStorage.getItem("name")
  : "Guest";
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  if (window.location.pathname.includes("room")) {
    window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
  }
}

export default firepadRef;
