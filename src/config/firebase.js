import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyB7566uoPrAOFqb_ncx8xXeJFUXWQI7OU0",
    authDomain: "whatsapp-webapp.firebaseapp.com",
    databaseURL: "https://whatsapp-webapp.firebaseio.com",
    projectId: "whatsapp-webapp",
    storageBucket: "whatsapp-webapp.appspot.com",
    messagingSenderId: "81462769224",
    appId: "1:81462769224:web:e8cf9e901cdec30e870a7d",
    measurementId: "G-NQKBJMBYV0"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {
    auth,
    provider
}
export default db;