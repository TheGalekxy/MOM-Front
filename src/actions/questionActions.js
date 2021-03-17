import axios from "axios";
const apiBaseUrl = "3000";

export const getQuestions = () => async () => {
  try {
    const getQuestionsReq = {
      method: "GET",
      url: `${apiBaseUrl}/questions`,
    };

    return await axios(getQuestionsReq);
  } catch (err) {
    console.log(`Error on getQuestions: ${err}`);
  }
};

export const getQuestionByQuestionId = (questionId) => async () => {
  try {
    const getQuestionByQuestionIdReq = {
      method: "GET",
      url: `${apiBaseUrl}/questions/:questionId`,
      params: { question_id: questionId },
    };

    return await axios(getQuestionByQuestionIdReq);
  } catch (err) {
    console.log(`Error on getQuestionsByQuestionId: ${err}`);
  }
};

export const createQuestion = (
  survey_id,
  question_type,
  question
) => async () => {
  try {
    const createQuestionReq = {
      method: "POST",
      url: `${apiBaseUrl}/questions`,
      body: { survey_id, question_type, question },
    };

    return await axios(createQuestionReq);
  } catch (err) {
    console.log(`Error on createQuestion: ${err}`);
  }
};

export const updateQuestion = (
  survey_id,
  question_type,
  question,
  questionId
) => async () => {
  try {
    const updateQuestionReq = {
      method: "PUT",
      url: `${apiBaseUrl}/questions/:questionId`,
      body: { survey_id, question_type, question },
      params: { question_id: questionId },
    };
    return await axios(updateQuestionReq);
  } catch (err) {
    console.log(`Error on updateQuestionReq: ${err}`);
  }
};

export const deleteQuestionById = (questionId) => async () => {
  try {
    const deleteQuestionByIdReq = {
      method: "DELETE",
      url: `${apiBaseUrl}/questions/:questionId`,
      params: { question_id: questionId },
    };

    return await axios(deleteQuestionByIdReq);
  } catch (err) {
    console.log(`Error on deleteQuestionById: ${err}`);
  }
};
