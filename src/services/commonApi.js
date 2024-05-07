import axios from "axios"


export const commonApi = async (httpRequest, url, reqBody,reqHeader) => {
     const reqConfig = {
        method: httpRequest,
        url: url,
        data: reqBody,
        headers: reqHeader?reqHeader:{"Content-Type": "application/json"}/* since we have two type of data -
    reuest with uploaded content and reqest without uploaded content */
        //if there is any uploaded content headers = multipart/homedata
        //if no then header content will be application/json
    }


    return await axios(reqConfig).then((result) => {
        return result
    }).catch((err) => {
        return err
    })
}