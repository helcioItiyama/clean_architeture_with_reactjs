/* eslint-disable class-methods-use-this */
import { HttpPostParams } from '@/data/protocols/http';
import axios from 'axios';

export default class AxiosHttpClient {
  async post(params: HttpPostParams<any>): Promise<void> {
    await axios.post(params.url);
  }
}
