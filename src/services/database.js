import store from '@/store';
import firebase from 'firebase';


var config = {
    apiKey: "API",
    authDomain: "DOMAIN.firebaseapp.com",
    databaseURL: "https://DOMAIN.firebaseio.com",
    projectId: "PROJECTID",
    storageBucket: "DOMAIN.appspot.com",
    messagingSenderId: "ID"
};

const database = firebase.initializeApp(config);

database.signUp = async(email, password) => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);

        store.commit('setCurrentUser', firebase.auth().currentUser);

        return true;
    }
    catch (error) {
        return error;
    }
};

database.signIn = async(email, password) => {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);

        store.commit('setCurrentUser', firebase.auth().currentUser);

        return true;

    }
    catch (error) {
        return error;
    }
};

database.signOut = async() => {
    try {
        await firebase.auth().signOut();

        store.commit('setCurrentUser', null);

        return true;
    }
    catch (error) {
        return error;
    }
};

export default database;
