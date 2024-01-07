import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://dummy-api-jtg6bessta-ey.a.run.app',
  timeout: 10000,
});

export async function getMethod<T>(methodName: string) {
  const response = await instance.get<T>(methodName, { method: 'get' });

  return response;
}
