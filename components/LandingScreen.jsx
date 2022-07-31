import { useState } from 'react';
import { createStyles } from '@mantine/core';
import LoginScreen from './LoginScreen';
import CreateAccScreen from './CreateAccScreen';

const useStyles = createStyles(theme => ({
    input: {
        backgroundColor: theme.colors.tailwind.zinc['700'],
        color: theme.colors.tailwind.zinc['100'],
        padding: '1.25rem',
        outline: 'none',
        border: 'transparent 2px solid',
        fontSize: '1rem',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDuration: '150ms',
        '&:focus': {
            outlineColor: theme.colors.tailwind.zinc['200'],
            outlineWidth: '1rem',
            border: `${theme.colors.tailwind.zinc['600']} 2px solid`
        }
    }
}))

export default function LogInForm() {
    const [formState, setForm] = useState(true);
    const toSignUp = () => {
        setForm(
            prevState => !prevState
        );
    }
    
    return(
        <>
            {
                (formState)
                    ?<LoginScreen handleClick={toSignUp} inputStyle={useStyles}/>
                    :<CreateAccScreen handleClick={toSignUp} inputStyle={useStyles}/>
            }
        </>
    )
}
