import { RiMore2Fill } from 'react-icons/ri'

export default function Sidebar() {
    return (
        <>
            <div className='schlap-sidebar h-screen w-full md:w-80 lg:w-96 bg-zinc-900'>
                <div className='sidebar-header flex p-3 border-zinc-800 border-b justify-between'>
                    <h1 className='text-5xl md:text-3xl cursor-default'>Chats</h1>
                    <button className='text-3xl md:text-2xl'><RiMore2Fill /></button>
                </div>
            </div>
        </>
    )
}