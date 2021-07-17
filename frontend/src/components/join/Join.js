import React from 'react'
import './join.css'
import { Link } from 'react-router-dom'

let user;
const Join = () => {


    return (
        <div className='joinPage'>
            <div className='joinContainer'>
                <h2>ChitChat</h2>
                <input type='text' id='joinInput' placeholder='Enter Your Name' />
                <Link to='chat'>
                    <button id='joinbtn'>Join</button>
                </Link>
            </div>
        </div>
    )
}

export default Join
