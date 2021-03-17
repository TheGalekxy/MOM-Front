import axios from "axios";
import { apiBaseUrl } from '../config';

export const postAnswer = async (personID, optionID) => {
  try {
    const getAnswersReq = {
      method: "POST",
      url: `${apiBaseUrl}/answers`,
      data: {
        "person_id": personID,
        "option_id": optionID,
      }
    };
    const response = await axios(getAnswersReq);
    console.log(response)
    return response.data;
  } catch (err) {
    console.log(`Error on getAnswers: ${err}`);
  }
}

export const getAnswersByPersonID = async (personID)  => {
  try {
    const getAnswersByPersonIDReq = {
      method: "get",
      url: `${apiBaseUrl}/persons/${personID}/answers`,
    };
    const response = await axios(getAnswersByPersonIDReq);
    return response.data;
  } catch (err) {
    console.log(`Error on getAnswers: ${err}`);
  }
};

export const getAnswers = () => async () => {
  try {
    const getAnswersReq = {
      method: "get",
      url: `${apiBaseUrl}/answers`,
    };

    return await axios(getAnswersReq);
  } catch (err) {
    console.log(`Error on getAnswers: ${err}`);
  }
};

export const getAnswersByQuestionId = (questionId) => async () => {
  try {
    const getAnswersByQuestionIdReq = {
      method: "get",
      url: `${apiBaseUrl}/answers/:questionId/answers`,
      params: { question_id: questionId },
    };

    return await axios(getAnswersByQuestionIdReq);
  } catch (err) {
    console.log(`Error on getAnswersByQuestionId: ${err}`);
  }
};

export const getAnswersByAnswerId = (answerId) => async () => {
  try {
    const getAnswersByAnswerIdReq = {
      method: "get",
      url: `${apiBaseUrl}/answers/:answerId/answers`,
      params: { answer_id: answerId },
    };
  } catch (err) {
    console.log(`Error on getAnswersByAnswerId: ${err}`);
  }
};
