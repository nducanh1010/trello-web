import apiClient from "./axios";

export const fetchBoardDetailApi = async (boardId) => {
  const request = await apiClient.get(`/v1/boards/${boardId}`);
  return request;
};
export const createNewColumnApi = async (newColData) => {
  const request = await apiClient.post(`/v1/columns`, newColData);
  return request;
};
export const createNewCardApi = async (newCardData) => {
  const request = await apiClient.post(`/v1/cards`, newCardData);
  return request;
};
export const updateBoardDetailsApi = async (boardId, updateData) => {
  const request = await apiClient.put(`/v1/boards/${boardId}`, updateData);
  return request;
};
export const updateColumnDetailsApi = async (columnId, updateData) => {
  const request = await apiClient.put(`/v1/columns/${columnId}`, updateData);
  return request;
};
