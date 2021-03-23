export const setToLS = (key: string, value: any) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLS = (key:string) : (any | null) => {
  const value = window.localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }
  return null;
};
