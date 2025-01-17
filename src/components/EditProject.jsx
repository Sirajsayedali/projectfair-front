import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BASE_URL } from '../services/baseUrl';
import { editUserProject } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editProjectResponseContext } from '../context/ContextShare';


function EditProject({ project }) {

    const{setEditProjectResponse}=useContext (editProjectResponseContext)
    /*  console.log(project); */
    //state to hold the details of the project taken from backend
    const [projectDetails, setProjectDetails] = useState({
        id: project._id,
        title: project.title,
        language: project.language,
        github: project.github,
        website: project.website,
        overview: project.overview,
        projectImage: "",
    });

    const [preview, setPreview] = useState("");

    useEffect(() => {
        projectDetails.projectImage &&
            setPreview(URL.createObjectURL(projectDetails.projectImage)) //to convert the file/picture to url

    }, [projectDetails.projectImage]);


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose1 = () => {
        setProjectDetails({
            id: project._id,
            title: project.title,
            language: project.language,
            github: project.github,
            website: project.website,
            overview: project.overview,
            projectImage: "",
        })
        setPreview("")
    }

    const handleEdit = async (e) => {
        e.preventDefault()
        const { id, title, language, github, website, overview, projectImage } = projectDetails
      /*   console.log(id, title, language, github, website, overview, projectImage); */

        if (!id || !title || !language || !github || !website || !overview ) {
            alert('please fill the form completely')
        }
        else {
            //request body - has to pass via formData has to create object and use APPend to add data
            //if your request contains uploaded content, then the body have to be sent in the format of formdata
            //step 1 create an object for form data class
            const reqBody = new FormData()
            //to add data to the body - use append() method - can add only 1 item at a time
            reqBody.append("title", title)
            reqBody.append("language", language)
            reqBody.append("github", github)
            reqBody.append("website", website)
            reqBody.append("overview", overview)
            preview ? reqBody.append("projectImage", projectImage) : reqBody.append("projectImage", project.projectImage)

            const token = sessionStorage.getItem("token")
            if (preview) {
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
             const result =   await editUserProject(id,reqBody,reqHeader)
             console.log(result);
             if(result.status==200){
                toast.success('project updated successfully')
                handleClose()
                setEditProjectResponse(result.data)
             }

            }
            else {//no upload
                const reqHeader = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
                const result =   await editUserProject(id,reqBody,reqHeader)
                console.log(result);
                if(result.status==200){
                   toast.success('project updated successfully')
                   handleClose()
                   setEditProjectResponse(result.data)
            }
        }
    }
    }

    return (
        <>
            <div>
                <button onClick={handleShow} className='btn'><FontAwesomeIcon icon={faPenToSquare} className='text-info' /></button>
            </div>
            <Modal show={show} onHide={handleClose} size='lg' centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="img">
                                <input onChange={(e) => setProjectDetails({ ...projectDetails, projectImage: e.target.files[0] })} type="file" id='img' style={{ display: 'none' }} />
                                <img src={preview ? preview : `${BASE_URL}/uploads/${project.projectImage}`} alt="" className='w-100' />
                            </label>
                        </div>
                        <div className="col-md-6">
                            <div className='mt-3 mb-3'>
                                <input type="text" placeholder='project title' className='form-control' value={projectDetails.title} onChange={(e) => setProjectDetails({ ...projectDetails, title: e.target.value })} />
                            </div>
                            <div className='mt-3 mb-3'>
                                <input type="text" placeholder='Language' className='form-control' value={projectDetails.language} onChange={(e) => setProjectDetails({ ...projectDetails, language: e.target.value })} />
                            </div>
                            <div className='mt-3 mb-3'>
                                <input type="text" placeholder='Github Link' className='form-control' value={projectDetails.github} onChange={(e) => setProjectDetails({ ...projectDetails, github: e.target.value })} />
                            </div>
                            <div className='mt-3 mb-3'>
                                <input type="text" placeholder='Website Link' className='form-control' value={projectDetails.website} onChange={(e) => setProjectDetails({ ...projectDetails, website: e.target.value })} />
                            </div>
                            <div className='mt-3 mb-3'>
                                <textarea cols="40" row="5" type="text" placeholder='Overview' className='form-control' value={projectDetails.overview} onChange={(e) => setProjectDetails({ ...projectDetails, overview: e.target.value })}></textarea>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleClose1}>
                        Cancel
                    </Button>
                    <Button variant="success" onClick={handleEdit}>
                        Edit
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer theme='colored' position='top-center' autoClose={2000} />
        </>
    )
}

export default EditProject