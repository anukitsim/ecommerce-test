import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import './sign-in-form.syles.scss';
import Button from "../button/button.component";

const defaultFormFields = {
  
  email: "",
  password: "",
  
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {  email, password  } = formFields;

  

  const resetFormFileds = () => {
    setFormFields(defaultFormFields);
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
   await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    

    try {
      const response = signInAuthUserWithEmailAndPassword(email, password);
      console.log(response)

      resetFormFileds();
    } catch (error) {
     console.log('error signing in user');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
        <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        

        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            required: true,
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />

        <div className="buttons-contaiener">
        <Button type="submit">Sign in</Button>
        <Button buttonType='google-sign-in' onClick={logGoogleUser}>Google Sign in</Button>
        
        </div>
       
      </form>
    </div>
  );
};

export default SignIn;
