export const getListStart = () => ({
  type: "GET_LIST_START",
});

export const getListSuccess = (lists) => ({
  type: "GET_LIST_SUCCESS",
  payload: lists,
});

export const getListFailure = () => ({
  type: "GET_LIST_FAILURE",
});

export const createListStart = () => ({
  type: "CREATE_LIST_START",
});

export const createListSuccess = (List) => ({
  type: "CREATE_LIST_SUCCESS",
  payload: List,
});

export const createListFailure = () => ({
  type: "CREATE_LIST_FAILURE",
});

export const updateListStart = () => ({
  type: "UPDATE_LIST_START",
});

export const updateListSuccess = (List) => ({
  type: "UPDATE_LIST_SUCCESS",
  payload: List,
});

export const updateListFailure = () => ({
  type: "UPDATE_LIST_FAILURE",
});

export const deleteListStart = () => ({
  type: "DELETE_LIST_START",
});

export const deleteListSuccess = (id) => ({
  type: "DELETE_LIST_SUCCESS",
  payload: id,
});

export const deleteListFailure = () => ({
  type: "DELETE_LIST_FAILURE",
});