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
    return false;
  }
};
const filterByWord = (list, word) => {
  if (word === "") return list;
  if (list.length == 0) return list;

  let arr = [];
  arr = list.filter((e) => {
    let str = e.name + "#" + e.brand + "#" + e.color + "#" + e.gender;
    str = str.toLowerCase();
    if (str.includes(word)) return true;
    else return false;
  });

  return arr;
};
export { isItemAdded, isFilterSelected, filterByWord };
