import { Paper, createStyles, Button } from "@mantine/core";
import { RiSendPlane2Line } from 'react-icons/ri';

export default function ChatInput() {
    return (
        <>
            <Paper className='bg-zinc-800 h-16 flex justify-around w-full shrink-0 flex-initial items-center' radius={0}>
                <input className='schlap-chat-input p-3 text-white rounded bg-zinc-900 flex-initial w-96 focus:outline-0 focus:ring-1 focus:ring-zinc-600 transition-all'  type='text' placeholder='Type a message' />
                <button className='text-zinc-200 bg-black text-bold p-3 pr-6 pl-6 rounded transition text-2xl'><RiSendPlane2Line /></button>
            </Paper>
        </>
    )
}