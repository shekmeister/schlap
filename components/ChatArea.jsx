import { ScrollArea } from "@mantine/core";
import ChatInput from './ChatInput';
import ChatHeader from './ChatHeader';

export default function ChatArea() {
    return (
        <div className='schlap-chat-area hidden md:flex md:flex-col md:flex-1 bg-black w-full md:w-2/3 cursor-default'>
            <ChatHeader />
            <ScrollArea
                scrollbarSize={12}
                className='bg-black h-96 flex-1 bg-black'
            >
            </ScrollArea>
            <ChatInput />
        </div>
    )
}