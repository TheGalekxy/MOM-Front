import axios from "axios";
import { apiBaseUrl } from '../config';

export const getUsers = () => async () => {
  try {
    const getUsersReq = {
      method: "GET",
      url: `${apiBaseUrl}/users`,
    };

    return await axios(getUsersReq);
  } catch (err) {
    console.log(`Error on getUsers: ${err}`);
  }
};

export const getPersonByID = async (personID) => {
  try {
    const getUserByIdReq = {
      method: "GET",
      url: `${apiBaseUrl}/persons/${personID}`,
    };

    const result = await axios(getUserByIdReq);
    return result.data;
  } catch (err) {
    console.log(`Error on getUserById: ${err}`);
  }
};

export const createUser = async (userObject) => {
  try {
    const createUserReq = {
      method: "POST",
      url: `${apiBaseUrl}/persons`,
      data: {
        firstname: userObject.firstname,
        email: userObject.email,
        age: userObject.age,
        postpartum_period: userObject.postpartum_period,
        first_child: userObject.first_child,
        province: userObject.province,
        ethnicity: userObject.ethnicity,
        marital_status: userObject.marital_status,
        education: userObject.education,
        therapy_type: userObject.therapy_type,
        site_found: userObject.site_found,
      },
    };
    const response = await axios(createUserReq);
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(`Error on createUser: ${err}`);
  }
};

export const updateUserById = async (userId, userObject) => async () => {
  try {
    const updateUserByIdReq = {
      method: "PUT",
      url: `${apiBaseUrl}/users/:userId`,
      params: {
        person_id: userId,
      },
      body: {
        firstname: userObject.firstname,
        email: userObject.email,
        age: userObject.age,
        postpartum_period: userObject.postpartum_period,
        first_child: userObject.first_child,
        province: userObject.province,
        ethnicity: userObject.ethnicity,
        marital_status: userObject.marital_status,
        education: userObject.education,
        therapy_type: userObject.therapy_type,
        site_found: userObject.site_found,
      },
    };

    return await axios(updateUserByIdReq);
  } catch (err) {
    console.log(`Error on updateUser: ${err}`);
  }
};

export const deleteUser = (userId) => async () => {
  try {
    const deleteUserReq = {
      method: "DELETE",
      url: `${apiBaseUrl}/users/:userId`,
      params: { person_id: userId },
    };

    return await axios(deleteUserReq);
  } catch (err) {
    console.log(`Error on deleteUser: ${err}`);
  }
};
