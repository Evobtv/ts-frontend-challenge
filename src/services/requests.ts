import { RequestBuilder } from '../interfaces/request';
import endpoint from './endpoint';

export const BASE_URL_API =
  'https://front.evob.dev.marcomapa.com/front_challenge';

export function info(): RequestBuilder {
  return {
    url: `${BASE_URL_API}/${endpoint.info}`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': '*'
      }
    }
  };
}

export function login(formData: FormData): RequestBuilder {
  return {
    url: `${BASE_URL_API}/${endpoint.login}`,
    options: {
      method: 'POST',
      body: formData
    }
  };
}
