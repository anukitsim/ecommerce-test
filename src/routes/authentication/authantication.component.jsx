import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
  
} from "../../utils/firebase/firebase.utils";

import SignUp from "../../components/sign-up-form/sign-up-form.component";
import SignIn from "../../components/sign-in-form/sign-in-form.component";

const Authantication = () => {
 

  return (
    <div>
      <h1>Sing In Page</h1>
      <SignIn />
      <SignUp />
      
    </div>
  );
};

export default Authantication;
