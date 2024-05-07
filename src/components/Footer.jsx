import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackOverflow, faFacebook, faInstagram, faLinkedin, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
Link


function Footer() {
    return (

        <>
            <div className='row p-5 text-light' style={{ backgroundColor: 'olive' }}>
                <div className="col-md-4">
                    <h3><FontAwesomeIcon icon={faStackOverflow} shake className='me-2' />Project Fair</h3>
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ex incidunt esse iste placeat molestias sequi et eum. Possimus, pariatur. Saepe quia enim architecto accusantium delectus officia itaque pariatur ducimus?</p>
                </div>
                 <div className="col-md-1">
                    </div> 
                <div className="col-md-2  ">
                    <h3>Links</h3>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }} >  <h6 className='mt-3'  >Home</h6></Link>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}><h6>Login</h6></Link>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>  <h6>Register</h6></Link>

                </div>
                <div className="col-md-2">
                    <h3>Guides</h3>
                    <h6 className='mt-'>React</h6>
                    <h6>React Bootstrap</h6>
                    <h6>Bootswatch</h6>
                </div>
                <div className="col-md-2">
                    <h3> Contact Us</h3>
                    <div className='d-flex mt-4'>
                        <input className='form-control' type="text" placeholder='enter email id' />
                        <button className='btn btn-warning ms-2'>Subscribe</button>
                    </div>
                    <div className='d-flex justify-content-between mt-4'>
                        <FontAwesomeIcon icon={faInstagram} beat size='2xl' />
                        <FontAwesomeIcon icon={faSquareXTwitter} beat size='2xl' />
                        <FontAwesomeIcon icon={faLinkedin} beat size='2xl' />
                        <FontAwesomeIcon icon={faFacebook} beat size='2xl' />
                    </div>
                </div>


            </div>
        </>

    )
}

export default Footer