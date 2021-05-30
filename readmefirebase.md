1. On se connecte sur le site de firebase, puis on click sur **commencer**, **ajouter un projet**, **continuer**
2. onglet parametre du projet : **configuration**
4. on npm install **firebase** et **firebase--tools**
3. on crée a la racine un fichier **firebase.js**, puis on **colle la config de firebase**
5. dans ce fichier on : 
    -**import firebase from 'firebase'**
    -**const firebaseApp = firebase.initializeApp( {objet de config})**
    -**const db =  firebase.firestore();**
    -**export { db };**
6. dans firebase ( le site) on click sur l'onglet **firestore database** et on ***creer une BDD***
7. dans le fichier home on :
    -**import {db} from firebase**