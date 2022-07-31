import { useState } from 'react';
import { TextInput, Group, Button, Stepper, createStyles } from '@mantine/core';

const useStyles = createStyles(theme => ({
    stepLabel: {
        color: theme.colors.tailwind.zinc['300'],
        fontSize: '.9rem'
    },
    stepIcon: {
        backgroundColor: theme.colors.tailwind.cyan['900'],
        color: theme.colors.tailwind.zinc['400'],
        '&[data-completed]': {
            backgroundColor: theme.colors.tailwind.green['500'],
            borderColor: theme.colors.tailwind.zinc['700']
            
        },
        '&[data-progress]': {
            backgroundColor: theme.colors.tailwind.green['700'],
            borderColor: theme.colors.tailwind.zinc['700'],
            color: theme.colors.tailwind.zinc['200']
        }
    },
    separator: {
        backgroundColor: theme.colors.tailwind.cyan['900']
    }
}))

export default function SignupStepper({ inputStyle }) {
    const [stepActive, setStep] = useState(1);
    const nextStep = () => setStep((current) => (current < 4 ? current + 1 : current));
    const prevStep = () => setStep((current) => (current > 0 ? current - 1 : current));
    const { classes } = useStyles();
    return (
        <>
            <Stepper active={stepActive} onStepClick={setStep} breakpoint='sm' p={'lg'}
            classNames={{
                stepLabel: classes.stepLabel,
                stepIcon: classes.stepIcon,
                separator: classes.separator
            }}
            >
                <Stepper.Step label='Sign up'>
                    <TextInput placeholder='Enter a username' type='text' classNames={{ input: inputStyle.input }} />
                    <TextInput placeholder='Enter your email' type='email' classNames={{ input: inputStyle.input }} />
                    <TextInput placeholder='Enter a strong password' type='password' classNames={{ input: inputStyle.input }} />
                    <TextInput placeholder='Confirm password' type='text' classNames={{ input: inputStyle.input }} />
                </Stepper.Step>
                <Stepper.Step label='Verify'>

                </Stepper.Step>
                <Stepper.Step label='Customize'>

                </Stepper.Step>
                <Stepper.Completed>
                    <h1 className='text-center'>Start Schlapping!</h1>
                </Stepper.Completed>

            </Stepper>
            <Group position="center" mt="xl">
                <Button variant="default" onClick={prevStep}>Back</Button>
                <Button onClick={nextStep}>Next step</Button>
            </Group>
        </>
    )
}