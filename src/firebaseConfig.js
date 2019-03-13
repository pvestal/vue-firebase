import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
    apiKey: "AIzaSyBEgZsUW7VW3VF0ze4W2Jbyte5kq3VfhmI",
    authDomain: "this-reg-app.firebaseapp.com",
    databaseURL: "https://this-reg-app.firebaseio.com",
    projectId: "this-reg-app",
    storageBucket: "this-reg-app.appspot.com",
    messagingSenderId: "1278200728"
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}