import {Link} from 'react-router-dom';
import React, {useContext} from "react";
import {UserContext} from "../context/UserContext";
import {signOut} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {auth} from "../firebase-config";


export default function Navbar() {

    const {modalState, toggleModals} = useContext(UserContext);

    const navigate = useNavigate();

    const logOut = async () => {
        try {
            await signOut(auth);
            navigate('/')
        }catch (e) {
            alert('Error with your disconnection please check if the error is about your connection and retry');
        }
    }

    return(
        <nav className='navbar navbar-light bg-light px-4'>
            <Link
                to='/'
                className='navbar-brand'
            >
                Home
            </Link>

            <div>
                <button
                    className='btn btn-primary'
                    onClick={() => toggleModals("signUp")}
                >
                    Sign up
                </button>
                <button
                    className='btn btn-info ms-2'
                    onClick={() => toggleModals("signIn")}
                >
                    Sign in
                </button>
                <button
                    className='btn btn-danger ms-2'
                    onClick={logOut}
                >
                    Log out
                </button>
            </div>
        </nav>
    )
}
