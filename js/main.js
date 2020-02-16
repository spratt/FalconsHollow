// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCKuWaFK7t6TDgTkrOSdIpL1wc0upuPkrQ",
    authDomain: "pathfinder-e269a.firebaseapp.com",
    databaseURL: "https://pathfinder-e269a.firebaseio.com",
    projectId: "pathfinder-e269a",
    storageBucket: "pathfinder-e269a.appspot.com",
    messagingSenderId: "1064540293429",
    appId: "1:1064540293429:web:d5321554937320c12f247c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var placesRef = db.collection("places");
const outputTitle = document.getElementById("output-title");
const outputDescription = document.getElementById("output-description");

function getPlace(placeName) {
    console.log('getPlace("' + placeName + '")');
    placesRef.doc(placeName).get().then((doc) => {
        if (doc.exists) {
            const data = doc.data();
            console.log("Document data:", data);
            outputTitle.innerHTML = data.title;
            outputDescription.innerHTML = data.description;
        } else {
            console.log("No such document!");
        }
    });
}
