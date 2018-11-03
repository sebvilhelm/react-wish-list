import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCnj9hZLDbBJzyQl90vVV7o1xan71eoCjk',
  authDomain: 'wish-list-728f8.firebaseapp.com',
  databaseURL: 'https://wish-list-728f8.firebaseio.com',
  projectId: 'wish-list-728f8',
  storageBucket: 'wish-list-728f8.appspot.com',
  messagingSenderId: '903682279625',
}
const app = firebase.initializeApp(config)
const db = firebase.database()
const auth = firebase.auth()

export default app
export { db, auth }
