import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import bulb from '../assets/titleimage1.jpg'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'
import { HomeProjectApi } from '../services/allApi'

function Home() {
  const [islogin,setIsLogin]= useState(false)
 const [project, setProject]=useState([])

  useEffect(()=>{
  if(sessionStorage.getItem("token")){
    setIsLogin(true)
  }
  },[])

  const gethomeProject = async()=>{
    const result = await HomeProjectApi()
       setProject(result.data)
  } 
  console.log(project);

useEffect(()=>{
  gethomeProject()
},[])

  return (
    <>
      <div style={{ width: '100%', height: '100vh', backgroundColor: 'olivedrab' }} >
        <div className="container-fluid rounded">
          <Row className='align-items-center p-5 text-light'>
            <Col sm={12} md={6}>
              <h1> <FontAwesomeIcon icon={faStackOverflow} shake className='me-2' /> Project Fair</h1>
              <p className='mt-3 fs-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique earum debitis cum nesciunt esse explicabo soluta dist?</p>

              {islogin? <Link to={'/dashboard'} ><button className='btn btn-warning mt-3'>Manage project <FontAwesomeIcon icon={faArrowRight} /></button></Link> 
               :
             <Link to={'/login'} ><button className='btn btn-warning mt-3'>Get Started <FontAwesomeIcon icon={faArrowRight} /></button></Link> }
             
            </Col>
            <Col sm={12} md={6}>
              <img src={bulb} alt="" className='w-50' style={{ marginTop: '100px', marginLeft: '100px' }} />

            </Col>
          </Row>
        </div>

      </div>

      <div className='mt-5 '>
        <h1 className='text-center'>Explore Our Projects</h1>

        <marquee scrollAmount={50}>
          <div className='d-flex mt-5'>
           { project?.length>0? 
           <div className='row'>
          {project.map ((item)=>(<div className='col-md-4'> < ProjectCard pro={item} /></div>)) }
           
            </div>:null
            }
            
          </div>
        </marquee>
        <div className='text-center mb-5'>
          <Link to={'/project'}>see more project</Link>
        </div>


      </div>


    </>
  )
}

export default Home