import axios from "axios";
// import { BASE_URL, APIKEY } from "../constants/constants";

export const APIcall = async (hero) => {
  let data = [];
  try {
    const res = await axios.get(
      process.env.REACT_APP_API_URL +
        process.env.REACT_APP_API_KEY +
        "/search/" +
        hero
    );
    data = res.data.results;
  } catch (error) {
    console.log(error);
    return error;
  }

  return data;
};

export const postToken = async (baseUrlPost, values) => {
  let res;
  try {
    res = await axios.post(baseUrlPost, values);
  } catch (error) {
    console.log(error);
  }
  return res;
};
