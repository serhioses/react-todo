import firebase from 'firebase';

var config, firebaseRef;

try {
    config = {
        apiKey: "AIzaSyAOv5QzQMJ3qVtBvXmU_2oIxarxSvs-OQA",
        authDomain: "react-todo-app-5ddd5.firebaseapp.com",
        databaseURL: "https://react-todo-app-5ddd5.firebaseio.com",
        projectId: "react-todo-app-5ddd5",
        storageBucket: "react-todo-app-5ddd5.appspot.com",
        messagingSenderId: "937386371458"
    };

    firebase.initializeApp(config);
} catch (err) {}

firebaseRef = firebase.database().ref();

export {firebaseRef};
export default firebase;