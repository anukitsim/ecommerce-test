import { initializeApp } from 'firebase/app';
import { 
     getAuth,
     signInWithPopup, 
     signInWithRedirect,
     GoogleAuthProvider 
} from 'firebase/auth'
 


const firebaseConfig = {
    apiKey: "AIzaSyCc8C-j2lWn3ud-VKJOM12owGBVCdSP76E",
    authDomain: "ecommerce-test-2d676.firebaseapp.com",
    projectId: "ecommerce-test-2d676",
    storageBucket: "ecommerce-test-2d676.appspot.com",
    messagingSenderId: "854053924198",
    appId: "1:854053924198:web:d43e1fdbee4a44a4972ca7"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: 'select_account'
  })

  export const auth = getAuth();

  export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

 
  