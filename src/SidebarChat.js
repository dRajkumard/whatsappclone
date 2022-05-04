import React, { useState,useEffect } from 'react'
import './SidebarChat.css';
import {Avatar} from '@mui/material'
export const SidebarChat = () => {
    const [seed,setSeed] = useState('');
    useEffect(() => {
            setSeed(Math.floor(Math.random() *5000))
    },[])
  return (
    <div className='sidebarChat'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className='sidebarChat__info'>
        <h1>haet</h1>
        <p>last message</p>
        </div>
       
    </div>
  )
}
