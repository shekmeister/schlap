import { Paper, Tooltip } from "@mantine/core";
import { FiSend } from 'react-icons/fi';
import { TbMoodSmile } from 'react-icons/tb';

export default function ChatInput() {
    return (
        <>
            <Paper className='bg-zinc-800 h-16 flex justify-around w-full shrink-0 flex-initial items-center' radius={0}>
                <input className='schlap-chat-input p-3 text-white rounded bg-zinc-900 flex-initial w-[45rem] focus:outline-0 focus:ring-1 focus:ring-zinc-600 transition-all mr-2 ml-2'  type='text' placeholder='Type a message' />
                <Tooltip label='Emojis' color='black' withArrow>
                    <button className='text-zinc-200 text-bold p-3 pr-3 pl-3 rounded transition text-2xl'><TbMoodSmile /></button>
                </Tooltip>
                <button className='text-zinc-200 text-bold p-3 pr-3 pl-3 rounded transition text-2xl'><FiSend /></button>
            </Paper>
        </>
    )
}