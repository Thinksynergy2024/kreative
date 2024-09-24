import { APP_API_URL } from "@/assets/api-endpoints";
import UseAxios from "@/assets/hooks/use-axios";

export const scanMeasurement = (varietycode) =>{
    const axiosInstance = UseAxios();
    return new Promise((resolve,reject) =>{
        axiosInstance.post(`${APP_API_URL.SCAN_MEASUREMENT}`,{varietycode})
            .then((res) =>{
                resolve(res.data)
            })
            .catch((err) =>{
                reject(err.message)
            })
    })
}

export const addMeasurement = (testid,day,quantity,reason) =>{
    const axiosInstance = UseAxios();
    return new Promise((resolve,reject) =>{
        axiosInstance.post(`${APP_API_URL.ADD_MEASUREMENT}`,testid,day,quantity,reason)
            .then((res) =>{
                resolve(res.data)
            })
            .catch((err) =>{
                reject(err.message)
            })
    })
}
