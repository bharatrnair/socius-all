import apiCall from "./apiCall";



export default (url, file) => apiCall(url,"POST",file,true)