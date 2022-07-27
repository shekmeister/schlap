import { Paper, Avatar } from '@mantine/core';

export default function ChatPreview() {
    return (
        <>
            <Paper className='flex cursor-pointer bg-zinc-900 p-4 pt-0 md:p-3 md:pt-0 text-white items-center' radius={0}>
                <Avatar 
                    src='https://i.pinimg.com/originals/0a/bb/e5/0abbe546e479edc1eb62f5a8ccd66328.jpg'
                    alt='pfp.jpg'
                    radius='xl'
                    size='lg'
                />
                <div className='chat-prev-content flex-1 flex justify-between ml-4  border-zinc-800 border-b pb-3'>
                    <div className='mesg-content'>
                        <h1 className='text-lg font-bold'>Username</h1>
                        <p className='truncate-auto text-zinc-400'>Message content</p>
                    </div>
                    <a className='text-zinc-600 font-light'>4:55</a>
                </div>
            </Paper>
        </>
    )
}