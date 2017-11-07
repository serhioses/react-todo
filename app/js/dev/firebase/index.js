import firebase from 'firebase';

var config, firebaseRef;
console.log(process.env);
try {
    config = {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DATABASE_URL,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID
    };

    firebase.initializeApp(config);
} catch (err) {}

firebaseRef = firebase.database().ref();

export {firebaseRef};
export default firebase;