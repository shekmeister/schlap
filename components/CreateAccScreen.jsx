import { createStyles, Transition} from '@mantine/core';
import { useEffect, useRef, useState } from 'react';
import SignupStepper from './SignupStepper';



export default function CreateAccScreen({ handleClick, inputStyle }) {
    const { classes } = inputStyle();
    return (
        <>
            <div className='schlap-createacc flex justify-center bg-gradient-to-t from-black via-zinc-900  to-zinc-800 text-white w-screen h-screen'>
                <div className='schlap-create-acc-form transition ease-in-out delay-400 opacity-1 mx-auto my-auto h-screen sm:h-[90vh] w-screen sm:w-[38rem] md:w-[45rem] lg:w-[60rem] sm:bg-zinc-900 drop-shadow-lg flex flex-col justify-around rounded text-white'
                >
                    <div className='createacc-header text-center'>
                        <h1 className='font-bold text-4xl'>Create an account</h1>
                        <p className='text-zinc-400'>insert catchy tagline about privacy</p>
                    </div>
                    <SignupStepper inputStyle={classes}/>
                    <div className='createacc-footer'>
                        <p className='text-center text-zinc-100'>
                            {"Already have an account? Login "}
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