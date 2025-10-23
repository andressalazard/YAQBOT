import { postData } from '../api/apiClient';
import { NewLogin, NewUser, ValidPayload } from '../models/dataModel';

const AUTH_ENDPOINT = 'auth';

const login = async (data: NewLogin): Promise<ValidPayload> => {
  return postData(`${AUTH_ENDPOINT}/login`, data);
};

const signin = async (data: NewUser): Promise<ValidPayload> => {
  return postData(`${AUTH_ENDPOINT}/register`, data);
};

const forgotPassword = async (email: string): Promise<ValidPayload> => {
  return postData(`${AUTH_ENDPOINT}/forgot-password`, { email });
};

export { login, signin, forgotPassword };
