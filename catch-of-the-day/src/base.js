import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCS7FrfM0GXk3gE_UdhF_BtXL_Lu78W5dk",
    authDomain: "catch-of-the-day-chrisyeem.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-chrisyeem-default-rtdb.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//This is a named export
export { firebaseApp };

//This is a default export
export default base;