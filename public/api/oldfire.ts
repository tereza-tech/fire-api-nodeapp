import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs/*, addDoc*/ } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDivZcmal9FLOGI3WfhN7OLvyvvnzCLK78",
    authDomain: "tereza-api-app.firebaseapp.com",
    projectId: "tereza-api-app",
    storageBucket: "tereza-api-app.appspot.com",
    messagingSenderId: "552538685765",
    appId: "1:552538685765:web:28897308ae92e6b80f3e2c",
    measurementId: "G-GYD9RVQVSP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/*exports.addUser = () =>
  fb.auth().createUserWithEmailAndPassword(email, password);*/

export async function GetCities() {
  const citiesCol = collection(db, 'games-history');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  console.log(cityList);
}

/*async function SaveGame() {
    try {
      await addDoc(collection(db, "games-history"), {
        endByUser: true,
        endTime: Date.now(),
        gameId: 2,
        points: 45,
        startTime: Date.now(),
        userId: 1,
      });
    } catch (error) {
      console.error("Error writing the game to Firebase Database", error);
    }
  }*/
