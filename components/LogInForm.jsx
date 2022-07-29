import { useState } from 'react';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';

export default function LogInForm() {
    const [formState, setForm] = useState(true);
    const toSignUp = () => {
        setForm(
            prevState => !prevState
        );
    }
    
    return(
        <>
            {(formState)?<LoginScreen handleClick={toSignUp} />:<SignupScreen />}
        </>
    )
}