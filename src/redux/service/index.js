import { APP_API_URL } from "@/assets/api-endpoints";
import UseAxios from "@/assets/hooks/use-axios";

export const scanMeasurement = (evaluationnumber) => {
  const axiosInstance = UseAxios();
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(`${APP_API_URL.SCAN_MEASUREMENT}`, { evaluationnumber })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.message);
      });
  });
};

export const addMeasurement = (testid, day, quantity, reason) => {
  const axiosInstance = UseAxios();
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(`${APP_API_URL.ADD_MEASUREMENT}`, testid, day, quantity, reason)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.message);
      });
  });
};

export const fetchTests = (recordtype) => {
  const axiosInstance = UseAxios();
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(`${APP_API_URL.FETCH_TESTS}`, { recordtype })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.message);
      });
  });
};

export const updateTest = (
  dateofshipment,
  dateonvasegermany,
  damagedonarrival,
  cutstageonarrival,
  cutstageatendoftest,
  daysevenpresentation,
  budheight,
  reasonforenteringtest,
  testid
) => {
  const axiosInstance = UseAxios();
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(`${APP_API_URL.UPDATE_TEST}`, 
        dateofshipment,
        dateonvasegermany,
        damagedonarrival,
        cutstageonarrival,
        cutstageatendoftest,
        daysevenpresentation,
        budheight,
        reasonforenteringtest,
        testid,
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.message);
      });
  });
};
