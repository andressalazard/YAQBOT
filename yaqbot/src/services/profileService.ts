import { fetchData, patchData, postData } from '../api/apiClient';
import { NewProfile, Profile, UpdatedProfile } from '../models/dataModel';

const PROFILE_ENDPOINT = 'profile';

const getProfile = async (userid: string): Promise<Profile> => {
  return fetchData(`${PROFILE_ENDPOINT}/${userid}`);
};

const createProfile = async (userid: string, data: NewProfile | undefined = {}) => {
  return postData(`${PROFILE_ENDPOINT}/${userid}`, data);
};

const updateProfile = async (userid: string, data: UpdatedProfile | undefined = {}) => {
  return patchData(`${PROFILE_ENDPOINT}/${userid}`, data);
};

const updateAvatar = async (userid: string, file: File) => {
  return patchData(`${PROFILE_ENDPOINT}/photo/${userid}`, file);
};

export { getProfile, createProfile, updateProfile, updateAvatar };
