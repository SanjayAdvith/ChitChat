import React, { useState } from 'react'
import './join.css'
import { Link } from 'react-router-dom'

let user;
const Join = () => {
    const [name, setName] = useState('')
    const sendUser = () => {
        //user = document.getElementById('joinInput').value
        user = name
    }
    return (
        <div className='joinPage'>
            <div className='joinContainer'>
                <h2>ChitChat</h2>
                <input onChange={(e) => setName(e.target.value)} type='text' id='joinInput' placeholder='Enter Your Name' />
                <Link onClick={(e) => !name ? e.preventDefault() : null} to='chat'>
                    <button onClick={sendUser} id='joinbtn'>Join</button>
                </Link>
            </div>
        </div>
    )
}

export default Join
export { user }