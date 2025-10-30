import commonAPI from "./commonAPI";
import { serverURL } from "./serverURL";

// POST request to add a new profile
export const addProfileAPI = async (profileData) => {
  // axios.post(URL, body)
  return await commonAPI('POST', `${serverURL}/profiles`, profileData);
};

//  GET all profiles
export const getProfilesAPI = async () => {
  return await commonAPI('GET', `${serverURL}/profiles`);
};

// UPDATE the profile data
export const updateProfileAPI = async (id, data) =>{
  return await commonAPI('PUT', `${serverURL}/profiles/${id}`, data)
};

// Get weight logs
export const getWeightLogsAPI = async () => {
  return await commonAPI("GET", `${serverURL}/weightLogs`, "");
};

// POST request to add a new weight log
export const addWeightLogAPI = async (log) => {
  return await commonAPI("POST", `${serverURL}/weightLogs`, log);
};

// Get Calorie  Logs
export const getCalorieLogsAPI = async () => {
  return await commonAPI("GET", `${serverURL}/calorieLogs`, "");
};

// POST request to add a new Calorie  log
export const addCalorieLogAPI = async (log) => {
  return await commonAPI("POST", `${serverURL}/calorieLogs`, log);
};

// Get Fat Logs
export const getFatLogsAPI = async () => {
  return await commonAPI("GET", `${serverURL}/fatLogs`, "");
};

// POST request to add a new Fat log
export const addFatLogAPI = async (log) =>{
  return await commonAPI("POST",`${serverURL}/fatLogs`,log)
}

// Get Protein Logs
export const getProteinLogsAPI = async () =>{
  return await commonAPI("GET", `${serverURL}/proteinLogs`, "");
};
// POST request to add a new Protein log
export const addProteinLogAPI = async (data) =>{
  return await commonAPI("POST", `${serverURL}/proteinLogs`, data);
};

//GET Diet Logs
export const getDietLogsAPI = async () => {
  return await commonAPI("GET", `${serverURL}/dietLogs`);
};

//POST request to add a new Diet log
export const addDietLogAPI = async (logData) => {
  return await commonAPI("POST", `${serverURL}/dietLogs`, logData);
};

//DELETE a Diet log
export const deleteDietLogAPI = async (id) => {
  return await commonAPI("DELETE", `${serverURL}/dietLogs/${id}`);
};
