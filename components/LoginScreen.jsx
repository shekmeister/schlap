import { createStyles, TextInput } from '@mantine/core';

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

export default function LoginScreen({ handleClick }) {
    const { classes } = useStyles(); 
    return (
        <>
            <div className='schalp-login-bg flex justify-center bg-gradient-to-t from-black via-zinc-900  to-zinc-800 text-white w-screen h-screen'>
                <div className='schlap-login-form mx-auto my-auto h-[30rem] w-[40rem] bg-zinc-900 drop-shadow-lg flex flex-col justify-around text-white'>
                    <div className='schlap-login-header mt-5'>
                        <h1 className='text-4xl font-bold text-zinc-100 text-center'>Login to schlap</h1>
                        <p className='text-center text-zinc-400'>Welcome Back!</p>
                    </div>
                    <div className='schlap-login-fg flex flex-col justify-center w-[20rem] mx-auto'>
                        <TextInput 
                            type='email' 
                            placeholder='User email' 
                            error={undefined} 
                            required
                            classNames={{
                                input: classes.input,
                            }}
                            className='mb-4'
                        />
                        <TextInput 
                            type='password' 
                            placeholder='Password' 
                            error={undefined} 
                            required
                            classNames={{
                                input: classes.input,
                            }}
                            className='my-4 mb-6'
                        />
                        <button 
                            className='bg-black to-zinc-800 py-2 text-zinc-200 rounded hover:bg-gradient-to-tl hover:from-black hover:via-black hover:to-zinc-800 hover:ring-zinc-600 hover:ring-1 transition-all'
                            type='submit'
                        >
                            Login
                        </button>
                    </div>
                    <div className='schlap-login-footer'>
                        <p className='text-center text-zinc-100'>
                            {"Don't have an account? Create one "}
                            <button 
                                className='text-zinc-500 hover:text-zinc-600 transition-all cursor-pointer'
                                onClick={() => handleClick()}
                            >
                                here.
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}