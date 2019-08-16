import axios, {AxiosInstance} from 'axios';

export class AxiosFactory {

  public static create(): AxiosInstance {
    return axios.create({
      baseURL: 'http://localhost:3000/',
    });
  }

}
