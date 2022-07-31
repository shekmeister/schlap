import { createStyles, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function LoginScreen({ handleClick, inputStyle }) {
    const { classes } = inputStyle(); 
    const loginForm = useForm({
        initialValues: {
            logEmail: '',
            logPass: '',
        },
        initialErrors: {
            logEmail: undefined,
            logPass: undefined
        }
    })
    return (
        <>
            <div className='schalp-login-bg flex justify-center bg-gradient-to-t from-black via-zinc-900  to-zinc-800 text-white w-screen h-screen'>
                <div className='schlap-login-form mx-auto my-auto h-[30rem] w-[40rem] bg-zinc-900 drop-shadow-lg flex flex-col justify-around rounded text-white'>
                    <div className='schlap-login-header mt-5'>
                        <h1 className='text-4xl font-bold text-zinc-100 text-center'>Login to schlap</h1>
                        <p className='text-center text-zinc-400'>Welcome Back!</p>
                    </div>
                    <form>
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
                            {...loginForm.getInputProps('logEmail')}
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
                            {...loginForm.getInputProps('logPass')}
                        />
                        <button 
                            className='bg-black to-zinc-800 py-2 text-zinc-200 rounded hover:bg-gradient-to-tl hover:from-black hover:via-black hover:to-zinc-800 hover:ring-zinc-600 hover:ring-1 transition-all'
                            type='submit'
                        >
                            Login
                        </button>
                        </div>
                    </form>
                    
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