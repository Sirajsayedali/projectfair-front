import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Row, Col } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import lock from '../assets/lock.jpg'
import { allProjectApi } from '../services/allApi'

function Project() {

  const [istoken, setIsToken] = useState(false)
  const [allProject, setAllProject]= useState([])
  const [searchKey, setSearchKey]= useState("")

  const getAllProject = async()=>{
    if(sessionStorage.getItem('token')){
      const token = sessionStorage.getItem('token')
      const reqHeader = {
       "Content-Type":"application/json",
       "Authorization":`Bearer ${token}`
      }
      const result = await allProjectApi(searchKey,reqHeader)
      /* console.log(result); */
      if(result.status==200){
        setAllProject(result.data)
      }
      else{
        console.log(result.response.data);
      }
    }
  }

/* console.log(allProject); */
/* console.log(searchKey); */

  useEffect(()=>{
  getAllProject()
  },[searchKey])

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      setIsToken(true)
    }
  }, [])

  return (
    <>
      <Header />
      <h2 className='mt-5 mb-3 text-center '>all project</h2>
      {istoken?
        <div className=' d-flex justify-content-center align-items-center flex-column w-100'>
        <div className='row w-100'>
          <div className='col-md-4'></div>
          <div className='col-md-4 d-flex justify-content-center align-items-center p-4'>
            <input onChange={(e)=>setSearchKey(e.target.value)} type="text" className='form-control w-50 mt-4 mb-5' placeholder='search using technology' /> <FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginLeft: '-35px', marginTop: '-20px', color: 'grey' }} /></div>
          <div className='col-md-4'></div>
        </div>

        <Row className='container-fluid mb-5'>
          {allProject?.length>0?
          allProject?.map(item=>(<Col sm={12} md={6} lg={4} >
             <ProjectCard pro={item} /> 
          </Col>
          ))
          :
          <p>no projects</p>
            }
        </Row>
      </div>
          :
      //{/* when not login see below */}
      <div className='flex-column d-flex justify-content-center align-items-center w-100 mb-5 mt-5' >
        <img src={lock} alt="" style={{ width: '200px' }} />
        <h3 className='text-danger'>please <span className='text-success'>login</span> to see more projects</h3>
      </div>}

    </>
  )
}

export default Project
