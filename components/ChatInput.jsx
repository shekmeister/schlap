import { Paper, Input, createStyles, Button } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    wrapper: {
        backgroundColor: theme.colors.tailwind.zinc['900'],
        borderRadius: '5px',
    },
    input: {
        backgroundColor: theme.colors.tailwind.zinc['900'],
        color: theme.colors.tailwind.zinc['300'],
        border: '0',
        padding: '24px 16px',
        fontSize: '18px',
        borderRadius: '5px'
    }
}));

export default function ChatInput() {
    const { classes } = useStyles();
    return (
        <>
            <Paper className='bg-zinc-800 h-16 fixed bottom-0 flex flex-1 w-3/4 items-center pl-6' radius={0}>
                <Input 
                    maxLength={200}
                    placeholder='Type something'
                    minLength={200}
                    classNames={{
                        wrapper: classes.wrapper,
                        input: classes.input,
                    }}
                    className='flex-1'
                />
                <Button>Send</Button>
            </Paper>
        </>
    )
}