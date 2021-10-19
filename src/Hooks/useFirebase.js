import { useEffect, useState } from "react";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    updateProfile,
} from "firebase/auth";
import { initializeAuthentication } from "../Firebase/firebase.initialize";

initializeAuthentication();
const googleAuthProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    // start Authentication info....
    const auth = getAuth();
    const [user, setUser] = useState({});

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider);
    };
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, []);

    const googleSignOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                setUser({});
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);

                // An error happened.
            });
    };

    const handleEmailChange = (email) => {
        setEmail(email.target.value);
    };

    const handlePasswordChange = (password) => {
        setPassword(password.target.value);
    };

    const handleUserNameChange = (u) => {
        const myName = u.target.value;
        setName(myName);
        console.log(myName);
    };

    const handleRegistrations = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                verifiedEmail();
                setUserName();
                setError("");
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
        // console.log(email, password);
    };

    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then((res) => {
            console.log(res);
            // Profile updated!
            // ...
        });
    };

    const processLogin = (e) => {
        e.preventDefault();
        handleSignIn(email, password);
        console.log(email, password);
    };

    const handleSignIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const verifiedEmail = () => {
        sendEmailVerification(auth.currentUser).then((res) => {
            console.log(res);
            // Email verification sent!
            // ...
        });
    };

    // end Authentication info....

    // start data info

    const [products, setProduct] = useState([]);
    const [btn, setBtn] = useState([]);
    const [sortItems, setSortItems] = useState([]);

    useEffect(() => {
        fetch("/products.json")
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
            });
    }, []);

    useEffect(() => {
        fetch("/products.json")
            .then((response) => response.json())
            .then((data) => {
                setSortItems(data);
            });
    }, []);

    const handleCart = (p) => {
        console.log(p);
    };

    // end data info
    return {
        processLogin,
        email,
        password,
        handleUserNameChange,
        error,
        handlePasswordChange,
        handleEmailChange,
        handleRegistrations,
        sortItems,
        user,
        signInUsingGoogle,
        googleSignOut,
        btn,
        handleCart,
        products,
    };
};
export default useFirebase;
