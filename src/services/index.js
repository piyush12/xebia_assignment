import {get} from 'axios';

const API_URL = "https://swapi.co/api";

export const fetchData = () => new Promise((resolve, reject) => 
    get(`${API_URL}/people`).then(response => 
        resolve(response.data)
    ).catch(error => reject(error))
)

export const fetchPlanets= () => new Promise((resolve, reject) => 
    get(`${API_URL}/planets`).then(response => 
        resolve(response.data)
    ).catch(error => reject(error))
)