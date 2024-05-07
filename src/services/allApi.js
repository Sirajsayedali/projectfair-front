import { BASE_URL } from "./baseUrl"
import { commonApi } from "./commonApi"


//request to register a user
export const registerApi = async(reqBody)=>{
  return await commonApi('POST',`${BASE_URL}/user/register`, reqBody, "")
}

//reques to login 
export const loginApi = async(reqBody)=>{
  return await commonApi('POST', `${BASE_URL}/user/login`, reqBody,"")
}

//request to addd project (on modal add button)
export const addProjectApi = async(reqBody, reqHeader)=>{
  return await commonApi("POST", `${BASE_URL}/add-project`, reqBody, reqHeader)  //reqHeader used coz files uploaded from computer

}

//request to get home project (on home screen page 3 project screenshot marquee scroll)
export const HomeProjectApi= async()=>{
  return await commonApi('GET',`${BASE_URL}/home-project`,"","")
}
// request to get all project   
   // query parameter = path?key=value
     // https://www.google.com/search?q=india 
 export const allProjectApi = async(searchKey,reqHeader)=>{
  return await commonApi('GET',`${BASE_URL}/all-project?search=${searchKey}`,"",reqHeader)
 }

 //request to get user projects on dashboard 
 export const userProjectApi = async(reqHeader)=>{
  return await commonApi('GET',`${BASE_URL}/user/all-project`,"",reqHeader)
 }

 //request to delete user uploaded project from my project
 export const deleteUserProjectApi = async(id,reqHeader)=>{
  return await commonApi('DELETE',`${BASE_URL}/user-project/delete/${id}`,{}, reqHeader)
 }

 //request to edit the user project

 export const editUserProject = async(projectId,reqBody,reqHeader)=>{
    return await commonApi('PUT',`${BASE_URL}/project/edit/${projectId}`,reqBody,reqHeader)
 }

 //request to update userprofile
 export const updateProfileApi = async(reqBody,reqHeader)=>{
  return await commonApi('PUT',`${BASE_URL}/profile-update`,reqBody,reqHeader)
 }