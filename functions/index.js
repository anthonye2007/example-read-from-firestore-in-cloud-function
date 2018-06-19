const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.store = functions.https.onRequest((request, response) => {
    const db = admin.firestore();
    var list = [];
    db.collection('orders').get().then((snapshot) => {
        snapshot.forEach((doc) => {
           console.log(doc.id, ' => ', doc.data());
           list.push(doc.id);
        });
        response.send(list);
    });
});
