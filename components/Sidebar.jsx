import SidebarMenu from './SidebarMenu';
import { ScrollArea } from '@mantine/core';
import ChatPreview from './ChatPreview';

export default function Sidebar() {
    return (
        <>
            <div className='schlap-sidebar flex flex-col h-screen w-full md:w-80 lg:w-96 bg-zinc-900 border-zinc-700 border-r'>
                <div className='sidebar-header flex items-center p-4 bg-zinc-800 border-zinc-600 h-16 border-b justify-between mb-3'>
                    <h1 className='text-5xl md:text-3xl cursor-default'>Chats</h1>
                    <SidebarMenu />
                </div>
                <ScrollArea style={{ height: '100%' }} scrollbarSize={10}>
                    <ChatPreview />
                </ScrollArea>
            </div>
        </>
    )
}