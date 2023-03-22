import { signInWithGooglePopUp } from "../../utils/firebase/firebase.utils";

const SingIn = () => {

const logGoogleUser = async () => {
    const response = await signInWithGooglePopUp();
    console.log(response)
}
    return (
        <div>
            <h1>Sing In Page</h1>
            <button onClick={logGoogleUser}>Sign In With Google Popup</button>
        </div>
    )
}

export default SingIn;