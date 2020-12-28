import { auth } from '../services/firebase'

export function signup(email, password) {
    return auth().createUserWithEmailAndPassword(email, password)
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        }
    );
}

export function signin(email, password) {
    return auth().signInWithEmailAndPassword(email, password)
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        }
    );
}

/*

Here, we’re creating an instance of the GoogleAuthProvider. Then, we’re calling signInWithPopup with the provider as a parameter. When this method is called, a pop up will appear and take the user through the Google sign in flow before redirecting them back to the app. You’ve likely experienced it yourself at some point in time.

*/

export function signInWithGoogle() {
    const provider = new auth.GoogleAuthProvider();
    return auth().signInWithPopup(provider);
}

export function signInWithGithub() {
    const provider = new auth.GithubAuthProvider();
    return auth().signInWithPopup(provider);
}

export function logout() {
    return auth().signOut();
}