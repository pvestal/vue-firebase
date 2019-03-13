import store from '@/store';
import firebase from 'firebase';


var config = {
    apiKey: "AIzaSyBEgZsUW7VW3VF0ze4W2Jbyte5kq3VfhmI",
    authDomain: "this-reg-app.firebaseapp.com",
    databaseURL: "https://this-reg-app.firebaseio.com",
    projectId: "this-reg-app",
    storageBucket: "this-reg-app.appspot.com",
    messagingSenderId: "1278200728"
};

const database = firebase.initializeApp(config);
const fs = firebase.firestore();

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

database.googleLogin = async() => {
    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope("https://www.googleapis.com/auth/userinfo.email");
        provider.addScope("https://www.googleapis.com/auth/userinfo.profile");
        await firebase.auth().signInWithPopup(provider)
        .then(result => {
            let user = result.user;
            store.commit('SET_CURRENT_USER', user);
            console.log("Got google user", user.displayName);
            })
        .catch(error => {
            console.log(error);
        });
        return true;
    } catch (error) {
        return error;
    }
};

database.userRegistration = async(context, payload) => {
    let userRef = fs.collection('users');
    let params = {
        uid: context.state.user.uid,
        displayName: payload.displayName,
        email: payload.email,
        stamp: firebase.firestore.Timestamp.now()
    };
    userRef.doc(context.state.user.uid).set(params)
    context.commit('ADD_TO_FIREBASE', )
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
