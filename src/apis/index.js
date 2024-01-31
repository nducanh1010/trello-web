import apiClient from "./axios";

export const fetchBoardDetailApi = async (boardId) => {
  const request = await apiClient.get(`/v1/boards/${boardId}`);
  return request;
};
