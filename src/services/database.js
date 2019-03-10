import store from '@/store';
import firebase from 'firebase';


var config = {
    apiKey: "AIzaSyDeVkqwOutsFttc0quhvbnLMp8vP_ZFhw8",
    authDomain: "this-auth.firebaseapp.com",
    databaseURL: "https://this-auth.firebaseio.com",
    projectId: "this-auth",
    storageBucket: "this-auth.appspot.com",
    messagingSenderId: "242372664859"
};

const database = firebase.initializeApp(config);

database.signUp = async(email, password) => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);

        store.commit('SET_CURRENT_USER', firebase.auth().currentUser);

        return true;
    }
    catch (error) {
        return error;
    }
};

database.signIn = async(email, password) => {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);

        store.commit('SET_CURRENT_USER', firebase.auth().currentUser);

        return true;

    }
    catch (error) {
        return error;
    }
};

database.signOut = async() => {
    try {
        await firebase.auth().signOut();

        store.commit('SET_CURRENT_USER', null);

        return true;
    }
    catch (error) {
        return error;
    }
};

export default database;
