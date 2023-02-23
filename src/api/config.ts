import { AxiosRequestConfig } from 'axios';

const baseURL = `http://localhost:3333`;

const multiForm: AxiosRequestConfig = {
  headers: { 'Content-Type': 'multipart/formdata' },
};

export { multiForm, baseURL };
