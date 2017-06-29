import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAOv5QzQMJ3qVtBvXmU_2oIxarxSvs-OQA",
    authDomain: "react-todo-app-5ddd5.firebaseapp.com",
    databaseURL: "https://react-todo-app-5ddd5.firebaseio.com",
    projectId: "react-todo-app-5ddd5",
    storageBucket: "react-todo-app-5ddd5.appspot.com",
    messagingSenderId: "937386371458"
},
    firebaseRef,
    notesRef, newNoteRef;


firebase.initializeApp(config);
firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'React Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: 'Serg',
        age: 24
    }
});

notesRef = firebaseRef.child('notes');

notesRef.on('child_added', (snapshot) => {
    console.log('child_added', snapshot.key, snapshot.val());
});

notesRef.on('child_changed', (snapshot) => {
    console.log('child_changed', snapshot.key, snapshot.val());
});

notesRef.on('child_removed', (snapshot) => {
    console.log('child_removed', snapshot.key, snapshot.val());
});

notesRef.push({
    text: 'Walk the dog'
});
notesRef.push({
    text: 'Feed the cat'
});
notesRef.push({
    text: 'Go for a walk'
});
