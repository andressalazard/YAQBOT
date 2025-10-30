import { deleteData, fetchData, patchData } from "../api/apiClient";
import { User } from "../features/auth/types";
import { UpdatedUser } from "../models/dataModel";

const USER_ENDPOINT = "users";

const getPublicUsers = async () => {
  return fetchData(USER_ENDPOINT);
};

const getUserById = async (userid: string): Promise<User> => {
  return fetchData(`${USER_ENDPOINT}/${userid}`);
};

const getUserByUsername = async (username: string): Promise<User> => {
  return fetchData(`${USER_ENDPOINT}/username/${username}`);
};

const getUserByEmail = async (email: string): Promise<User> => {
  return fetchData(`${USER_ENDPOINT}/email/${email}`);
};

const updateUser = async (
  userid: string,
  updatedUser: UpdatedUser | undefined = {}
) => {
  return patchData(`${USER_ENDPOINT}/${userid}`, updatedUser);
};

const deleteUser = async (userid: string) => {
  return deleteData(`${USER_ENDPOINT}/${userid}`);
};

export {
  getPublicUsers,
  getUserById,
  getUserByEmail,
  getUserByUsername,
  updateUser,
  deleteUser,
};
