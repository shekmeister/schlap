import SidebarMenu from './SidebarMenu';

export default function Sidebar() {
    return (
        <>
            <div className='schlap-sidebar h-screen w-full md:w-80 lg:w-96 bg-zinc-900'>
                <div className='sidebar-header flex p-3 border-zinc-800 border-b justify-between'>
                    <h1 className='text-5xl md:text-3xl cursor-default'>Chats</h1>
                    <SidebarMenu />
                </div>
            </div>
        </>
    )
}