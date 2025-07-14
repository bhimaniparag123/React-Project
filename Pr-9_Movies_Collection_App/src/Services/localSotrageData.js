// This file must be in src/Services/
export const getStorageData = () => {
  return JSON.parse(localStorage.getItem("Movies")) || [];
};

export const setStorageData = (data) => {
  localStorage.setItem("Movies", JSON.stringify(data));
};
