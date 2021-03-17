import axios from "axios";
import { apiBaseUrl } from '../config';

export const getSurveys = async () => {
  try {
    const getQuestionsReq = {
      method: "GET",
      url: `${apiBaseUrl}/surveys`,
    };
    const results = await axios(getQuestionsReq);
    return results.data;
    return {}
  } catch (err) {
    console.log(`Error on getQuestions: ${err}`);
  }
};
