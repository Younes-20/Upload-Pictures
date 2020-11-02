
import * as firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAJmpQMwERH-6awZh1Jb93QL4UYTHhon-k",
    authDomain: "instgram-lite-8a032.firebaseapp.com",
    databaseURL: "https://instgram-lite-8a032.firebaseio.com",
    projectId: "instgram-lite-8a032",
    storageBucket: "instgram-lite-8a032.appspot.com",
    messagingSenderId: "144566709401",
    appId: "1:144566709401:web:23d0f5a14962d34d581c08"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
// at which the document was created
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };