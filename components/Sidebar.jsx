import SidebarMenu from './SidebarMenu';
import { ScrollArea } from '@mantine/core';
import ChatPreview from './ChatPreview';

export default function Sidebar() {
    return (
        <>
            <div className='schlap-sidebar flex flex-col  h-screen w-full md:w-80 lg:w-96 bg-zinc-900'>
                <div className='sidebar-header flex p-3 pt-0 border-zinc-600 border-b justify-between mb-3'>
                    <h1 className='text-5xl md:text-3xl cursor-default'>Chats</h1>
                    <SidebarMenu />
                </div>
                <ScrollArea style={{ height: '100%' }} scrollbarSize={10}>
                    <ChatPreview />
                    <ChatPreview />
                    <ChatPreview />
                    <ChatPreview />
                    <ChatPreview />
                    <ChatPreview />
                    <ChatPreview />
                    <ChatPreview />
                    <ChatPreview />
                    <ChatPreview />
                    <ChatPreview />
                    <ChatPreview />
                    <ChatPreview />
                    <ChatPreview />
                </ScrollArea>
            </div>
        </>
    )
}