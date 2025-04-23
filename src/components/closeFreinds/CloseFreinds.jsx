import React from 'react';
import './closeFreinds.css';

const CloseFreinds = ({ user }) => {
  return (
    <li className="sidebarFreind">
        <img src={user.profilePicture}  className='sidebarFreindImg' alt="" />
        <span className="sidebarFreindName">{user.username}</span>
    </li>
  )
}

export default CloseFreinds