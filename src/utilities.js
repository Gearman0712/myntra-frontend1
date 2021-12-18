const isItemAdded = (list, id) => {
  if (list) {
    return list.find((item) => {
      return item.id === id;
    });
  }
  return false;
};
const isFilterSelected = (list, id) => {
  if (list) {
    return list.find((item) => {
      return item === id;
    });
  } else {
    console.log(false);
    return false;
  }
};
export { isItemAdded, isFilterSelected };
