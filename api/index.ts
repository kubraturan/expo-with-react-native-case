import { getMethod } from './axios';
import { ICategoryResponse, IQuestionResponse } from '../constants/types';

export async function getCategories(): Promise<ICategoryResponse> {
  const response = await getMethod<ICategoryResponse>('/getCategories');

  return response.data;
}

export async function getQuestions() {
  return await getMethod<IQuestionResponse>('/getQuestions');
}
