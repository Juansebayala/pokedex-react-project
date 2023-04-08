export const setToLocalStorage = (key, value) => {
  if (key && value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  } else {
    throw new error(`localStorage setItem needs a key and a value`);
  }
};

export const getFromLocalStorage = (key) => {
  const Item = JSON.parse(window.localStorage.getItem(key));
  if (Item) {
    return Item;
  } else {
    throw new error(`${key} not found`);
  }
};
