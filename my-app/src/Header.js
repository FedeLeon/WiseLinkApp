import React from 'react'
//IMPORTS MATERIAL UI
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import './Header.css'
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';


function Header() {
  
  return (
    <div className='header'>

      <Link to="/user">
        <IconButton>
          <PersonIcon className='header__icon' fontSize='small'/>
          MENU DE USUARIO
        </IconButton>
      </Link>

      <Link to="/">
        <img src='https://media-exp1.licdn.com/dms/image/C4D0BAQEtd6Oj3mCgZw/company-logo_200_200/0/1642014392748?e=2147483647&v=beta&t=3bmdMj0SDWpM0zT1Z5KBErtvSqe0lnV3h2tA5w-uKFc'
          alt='logo'
          className='header__logo' />
          HOME
      </Link>

      <Link to="/chats">
        <IconButton >
          <ForumIcon className='header__icon' fontSize='large' />
        </IconButton>
      </Link>

    </div>
  )
}

export default Header