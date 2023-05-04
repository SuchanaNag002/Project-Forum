import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDCuR50JQY9iHFd-MWr-XtkXq7ZR0h0FUM",
    authDomain: "dashboardproj-81dab.firebaseapp.com",
    projectId: "dashboardproj-81dab",
    storageBucket: "dashboardproj-81dab.appspot.com",
    messagingSenderId: "581508738922",
    appId: "1:581508738922:web:0223e1261fbb1298f37f13",
    measurementId: "G-Y8PZE17EZC"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }