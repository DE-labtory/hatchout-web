import axios from 'axios';

export class Response {

  public static handleError(error: Error) {
    return Promise.reject(error);
  }
}
