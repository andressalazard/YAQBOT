import { postData, postPassword } from '../api/apiClient';
import { NewLogin, NewUser, PayloadForgotPassword, ValidPayload } from '../models/dataModel';

const AUTH_ENDPOINT = 'auth';

const login = async (data: NewLogin): Promise<ValidPayload> => {
  return postData(`${AUTH_ENDPOINT}/login`, data);
};

const signin = async (data: NewUser): Promise<ValidPayload> => {
  return postData(`${AUTH_ENDPOINT}/register`, data);
};

const forgotPassword = async (email: string): Promise<PayloadForgotPassword> => {
  return postData(`${AUTH_ENDPOINT}/forgot-password`, { email });
};

const verifyResetToken = async (token: string): Promise<any> => {
  return postData(`${AUTH_ENDPOINT}/verify-reset-token`, { token });
}

const resetPassword = async (token: string, newPassword: string): Promise<any> => {
  return postPassword(`${AUTH_ENDPOINT}/reset-password`, token, {newPassword });
}

export { login, signin, forgotPassword, verifyResetToken, resetPassword };
