import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { logoutResponseContext } from '../context/ContextShare';

function Header() {
  const {AuthorToken, setAuthorToken}= useContext(logoutResponseContext)
  const navigate = useNavigate()
  const handleLogout = ()=>{
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    setAuthorToken(false)
    navigate('/')

  }
  return (
    <Navbar style={{backgroundColor:'olivedrab'}} /* className="bg-body-tertiary" */  >
    <Container>
      <Link to={'/'} style={{textDecoration:'none'}}>
      <Navbar.Brand href="#home" className='text-light fs-3 w-100 '>
       <FontAwesomeIcon icon={faStackOverflow} beatFade/>{' '}
        Project Fair
      </Navbar.Brand>
      
      </Link>
      <div>
        <button onClick={handleLogout} className='btn btn-warning ms-auto'>logout <FontAwesomeIcon icon={faPowerOff} beatFade/> </button>
      </div>
    </Container>
  </Navbar>
    
  )
}

export default Header