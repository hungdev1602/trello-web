import axios from "axios";
import { API_ROOT } from "~/utils/constans";

// Boards
export const fetchBoardDetailsAPI = async (boardId) => {
  const response = await axios.get(`${API_ROOT}/v1/boards/${boardId}`);
  // Axios trả về qua property của nó là data
  return response.data;
};

// Columns
export const createNewColumnAPI = async (newColumnData) => {
  const response = await axios.post(`${API_ROOT}/v1/columns`, newColumnData);
  // Axios trả về qua property của nó là data
  return response.data;
};

// Cards
export const createNewCardAPI = async (newCardData) => {
  const response = await axios.post(`${API_ROOT}/v1/cards`, newCardData);
  // Axios trả về qua property của nó là data
  return response.data;
};
