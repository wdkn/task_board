import { useState } from 'react';
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    createUserWithEmailAndPassword(auth, email.value, password.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password);
    };
    const handleChangeEmail = (event) => {
        setEmail(event.currentTarget.value);
    };
    const handleChangePassword = (event) => {
        setPassword(event.currentTarget.value);
    };

    return (
        <div>
            <h1>���[�U�o�^</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>���[���A�h���X</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="email"
                        onChange={(event) => handleChangeEmail(event)}
                    />
                </div>
                <div>
                    <label>�p�X���[�h</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="password"
                        onChange={(event) => handleChangePassword(event)}
                    />
                </div>
                <div>
                    <button>�o�^</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;