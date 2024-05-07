import React, { createContext, useState } from 'react'



//context to add add project
export const addProjectResponseContext = createContext()

export const editProjectResponseContext = createContext()

export const logoutResponseContext = createContext()

function ContextShare({children}) {
//children is a predefined props used to share data between components.
    const[addProjectResponse,setAddProjectResponse]= useState({})

     const [editProjectResponse,setEditProjectResponse]= useState({})

     const [AuthorToken, setAuthorToken]= useState(true)

  return (
    <>
    <addProjectResponseContext.Provider value={{addProjectResponse, setAddProjectResponse}}>
        <editProjectResponseContext.Provider value={{editProjectResponse,setEditProjectResponse}}>
         <logoutResponseContext.Provider value={{AuthorToken, setAuthorToken}}>
        {children}
        </logoutResponseContext.Provider>
        </editProjectResponseContext.Provider>
    </addProjectResponseContext.Provider>
    
    </>
  )
}

export default ContextShare