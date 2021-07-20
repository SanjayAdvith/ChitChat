import React, { useEffect } from 'react'
import { user } from '../join/Join'
import socketio from 'socket.io-client'
import './chat.css'
import sendpic from '../../images/tt.jpg'

const ENDPOINT = 'http://localhost:5000/'

const Chat = () => {

    useEffect(() => {
        const socket = socketio(ENDPOINT, { transports: ['websocket'] })

        socket.on('connect', () => {
            // alert('connected')
        })

        socket.emit('join', { user })

        socket.on('welcome', (data) => {
            console.log(data.user, data.message);
        })

        socket.on('userjoin', (data) => {
            console.log(data.user, data.message);
        })
        socket.on('leave', (data) => {
            console.log(data.user, data.message);
        })

        return () => {
            socket.emit('disconnect')
            socket.off()
        }


    }, [])


    return (
        <div className='chatPage'>
            <div className='chatContainer'>
                <div className='header'>ChitChat</div>
                <div className='chatBox'></div>
                <div className='inputBox'>

                    <input type='text' id='chatInput' placeholder='Type a message here...' />
                    <button className='chatbtn' ><img src={sendpic} alt='linking error' /></button>
                </div>
            </div>
        </div>
    )
}

export default Chat
