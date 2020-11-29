import axios from 'axios';
import { BASE_URI } from './constants';

const service = axios.create({
  baseURL: BASE_URI,
})

export default service;
