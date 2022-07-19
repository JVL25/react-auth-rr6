import React from "react";
import {Link} from 'react-router-dom';

export default function Navbar() {
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
                >
                    Sign up
                </button>
                <button
                    className='btn btn-info ms-2'
                >
                    Sign in
                </button>
                <button
                    className='btn btn-danger ms-2'
                >
                    Log out
                </button>
            </div>
        </nav>
    )
}
