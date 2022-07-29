import { Avatar } from '@mantine/core';
import { BsChevronLeft } from 'react-icons/bs';
import { RiCheckboxBlankCircleFill, RiPushpinLine } from 'react-icons/ri';
import { FiMoreVertical } from 'react-icons/fi';

export default function ChatHeader() {
   return (
        <div className='chat-area-header h-16 flex items-center p-2 pl-3 bg-zinc-800'>
                <button className='block md:hidden'><BsChevronLeft /></button>
                <Avatar 
                    src='https://i.pinimg.com/originals/0a/bb/e5/0abbe546e479edc1eb62f5a8ccd66328.jpg' 
                    alt='pfp.jpg'
                    radius='xl'
                    size={50}
                />
                <div className='chat-area-header-card flex items-center justify-between'>
                    <div className='chat-area-card-inf ml-4'>
                        <h1 className='text-xl font-bold'>Username</h1>
                        <span className='text-xs flex items-center'>
                            <RiCheckboxBlankCircleFill className='mr-1' /> 
                        <a>Online</a> 
                        </span>
                    </div>
                </div>
                <div className='chat-area-header-util text-xl fixed right-0 mr-5'>
                    <button className='mr-3 ml-3'><RiPushpinLine /></button>
                    <button className='mr-3 ml-3'><FiMoreVertical /></button>
                </div>
         </div>)
}