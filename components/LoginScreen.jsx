export default function LoginScreen({ handleClick }) {
    return (
        <>
            <div className='schalp-login-bg flex justify-center bg-gradient-to-t from-black via-zinc-900  to-zinc-800 text-white w-screen h-screen'>
                <div className='schlap-login-form mx-auto my-auto h-[30rem] w-[40rem] bg-zinc-900 drop-shadow-lg flex flex-col justify-around text-white'>
                    <div className='schlap-login-header mt-5'>
                        <h1 className='text-4xl font-bold text-zinc-100 text-center'>Login to schlap</h1>
                        <p className='text-center text-zinc-400'>Welcome Back!</p>
                    </div>
                    <div className='schlap-login-fg flex flex-col justify-center w-[20rem] mx-auto'>
                        <input className='mb-5 px-5 py-2 rounded bg-zinc-700 focus:outline-0 focus:ring-2 focus:ring-zinc-600 transition-all' type='email' placeholder='User email' required/>
                        <input className='mb-5 px-5 py-2 rounded bg-zinc-700 focus:outline-0 focus:ring-2 focus:ring-zinc-600 transition-all' type='password' placeholder='Password' required/>
                        <button className='bg-black to-zinc-800 py-2 rounded hover:bg-gradient-to-tl hover:from-black hover:via-black hover:to-zinc-800 hover:ring-zinc-600 hover:ring-1 transition-all'>Login</button>
                    </div>
                    <div className='schlap-login-footer'>
                        <p className='text-center text-zinc-100'>
                            Don't have an account? Create one {' '}
                            <button 
                                className='text-zinc-500 hover:text-zinc-600 transition-all cursor-pointer'
                                onClick={() => handleClick()}
                            >
                                here
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}