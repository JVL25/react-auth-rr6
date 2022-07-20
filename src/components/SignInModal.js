import React, {useContext, useRef, useState} from "react";
import {UserContext} from "../context/UserContext";
import {useNavigate} from "react-router-dom";

export default function SignInModal() {

    const {modalState, toggleModals, signIn} = useContext(UserContext);

    const inputs = useRef([]);

    const [validation, setValidation] = useState('');

    const formRef = useRef([]);

    const navigate = useNavigate();

    const addInputs = el => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el);
        }
    }

    const handleForm = async event => {
        event.preventDefault();

        try {

            const cred = await signIn(
                inputs.current[0].value,
                inputs.current[1].value
            )

            formRef.current.reset();
            setValidation('');
            navigate('/private/private-home/')
        } catch (error) {
            setValidation("Incorrect data verify them and retry")
        }
    }

    const closeModal = () => {
        setValidation('');
        toggleModals("close");
    }

    return (
        <>
            {modalState.signInModal && (
                <div className="position-fixed top-0 vw-100 vh-100">
                    <div
                        onClick={closeModal}
                        className="w-100 h-100 bg-dark bg-opacity-75"
                    />
                    <div
                        className="position-absolute top-50 start-50 translate-middle"
                        style={{minWidth: "400px"}}
                    >
                        <div className="modal-dialog" style={{backgroundColor: 'white'}}>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Sign up</h5>
                                    <button
                                        className="btn-close"
                                        onClick={closeModal}
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <form
                                        className="sign-up-form"
                                        onSubmit={handleForm}
                                        ref={formRef}
                                    >
                                        <div className={'mb-3'}>
                                            <label
                                                htmlFor="signInEmail"
                                                className="form-label"
                                            >
                                                Email address
                                            </label>
                                            <input
                                                name="email"
                                                type="email"
                                                className="form-control"
                                                id="signInEmail"
                                                ref={addInputs}
                                                required
                                            />
                                        </div>
                                        <div className={'mb-3'}>
                                            <label
                                                htmlFor="signInPwd"
                                                className="form-label"
                                            >
                                                Password
                                            </label>
                                            <input
                                                name="pwd"
                                                type="password"
                                                className="form-control"
                                                id="signInPwd"
                                                ref={addInputs}
                                                required
                                            />
                                            <p
                                                className='text-danger mt-1'
                                            >
                                                {validation}
                                            </p>
                                        </div>
                                        <button
                                            className="btn btn-primary"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
