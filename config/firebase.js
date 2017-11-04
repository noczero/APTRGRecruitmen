var admin = require("firebase-admin");

var serviceAccount = require("./aptrgrecruitment.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://aptrgrecruitment.firebaseio.com"
});

module.exports = admin; //buat direuse tinggal require('./config/firebase.js');