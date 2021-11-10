import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})


export const pokiApi = Axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
  timeout: 8000
})

export const bcwApi = Axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/classroom/pokemon",
  timeout: 5000
})
