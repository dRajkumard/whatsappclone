import React, { useState,useEffect } from 'react'
import './SidebarChat.css';
import {Avatar} from '@mui/material'


export const SidebarChat = ({id,name,addNewChat}) => {
    const [seed,setSeed] = useState('');
    useEffect(() => {
            setSeed(Math.floor(Math.random() *5000))
    },[]);
    const createChat =() => {
        const roomName = prompt ('Please enter name for chat')
        if(roomName){
          //do some clever  database stuff....

        }
    }
  return !addNewChat ? (
    <div className='sidebarChat'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className='sidebarChat__info'>
        <h1>{name}</h1>
        <p>last message</p>
        </div>
       
    </div>
  ): (
    <div onclick={createChat} className="sidebarChat">
    <h2>Add new Chat</h2>
    </div>

  )
}
