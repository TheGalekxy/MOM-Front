import axios from "axios";
const apiBaseUrl = "3000";

export const getResults = () => async () => {
  try {
    const getResultsReq = {
      method: "get",
      url: `${apiBaseUrl}/results`,
    };

    return await axios(getResultsReq);
  } catch (err) {
    console.log(`Error on getResults: ${err}`);
  }
};
