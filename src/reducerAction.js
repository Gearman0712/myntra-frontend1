import { createSlice } from "@reduxjs/toolkit";
import { filterByWord } from "./utilities";
import { pData } from "./ProductsData";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    products: [...pData],
    filteredProducts: [...pData],
    orders: [],
    bagItems: [],
    wishlistItems: [],
    bag: [],
    searchWord: "",
    sortBy: "",
    filters: null,
    allFilters: {
      genders: [],
      brands: [],
      colors: [],
    },
    selectedFilters: {
      genders: [],
      brands: [],
      colors: [],
    },
  },
  reducers: {
    setFilteredProducts: (state, action) => {
      state.filteredProducts = [...action.payload];
    },
    setSort: (state, action) => {
      state.sortBy = action.payload;
    },
    originalFiltersUpdate: (state, action) => {
      state.allFilters = action.payload;
    },
    filtersUpdate: (state, action) => {
      state.selectedFilters = action.payload;
    },
    filtersYesOrNo: (state, action) => {
      state.filters = action.payload;
    },
    eaddToWishList: (state, action) => {
      state.wishlistItems.push(action.payload);
    },
    addToBag: (state, action) => {
      state.bag.push(action.payload);
    },
    removeBagItems: (state, action) => {
      state.bag = action.payload;
    },
    removeWishListItems: (state, action) => {
      state.wishlistItems = action.payload;
    },
    searchWordChange: (state, action) => {
      state.searchWord = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  eaddToWishList,
  setFilteredProducts,
  setSort,
  originalFiltersUpdate,
  filtersUpdate,
  filtersYesOrNo,
  addToBag,
  removeBagItems,
  removeWishListItems,
  searchWordChange,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;

export const getProducts = () => {
  return (dispatch, getState) => {
    const state = getState((state) => state.dashboard);
    const myState = state.dashboard;

    let arr = [];
    let arr1 = [];

    if (myState.filters == null) arr = [...pData];
    else {
      if (myState.selectedFilters.genders.length != 0) {
        pData.forEach((e) => {
          myState.selectedFilters.genders.forEach((f) => {
            if (e.gender == f) arr.push(e);
          });
        });

        if (myState.selectedFilters.brands.length != 0) {
          arr.forEach((e) => {
            myState.selectedFilters.brands.forEach((f) => {
              if (e.brand == f) arr1.push(e);
            });
          });
          arr = [...arr1];
          arr1 = [];
          if (myState.selectedFilters.colors.length != 0) {
            arr.forEach((e) => {
              myState.selectedFilters.colors.forEach((f) => {
                if (e.color == f) arr1.push(e);
              });
            });
            arr = [...arr1];
            arr1 = [];
          } else {
          }
        } else {
          if (myState.selectedFilters.colors.length != 0) {
            arr.forEach((e) => {
              myState.selectedFilters.colors.forEach((f) => {
                if (e.color == f) arr1.push(e);
              });
            });
            arr = [...arr1];
            arr1 = [];
          }
        }
      } else {
        if (myState.selectedFilters.brands.length != 0) {
          pData.forEach((e) => {
            myState.selectedFilters.brands.forEach((f) => {
              if (e.brand == f) arr.push(e);
            });
          });

          if (myState.selectedFilters.colors.length != 0) {
            arr.forEach((e) => {
              myState.selectedFilters.colors.forEach((f) => {
                if (e.color == f) arr1.push(e);
              });
            });
            arr = [...arr1];
            arr1 = [];
          } else {
          }
        } else {
          if (myState.selectedFilters.colors.length != 0) {
            pData.forEach((e) => {
              myState.selectedFilters.colors.forEach((f) => {
                if (e.color == f) arr.push(e);
              });
            });
          }
        }
      }
    }

    if (myState.sortBy != "") {
      if (myState.sortBy != "pl") {
        arr.sort((a, b) => {
          return b.price - a.price;
        });
      } else if (myState.sortBy != "ph") {
        arr.sort((a, b) => {
          return a.price - b.price;
        });
      } else {
        return arr.sort((a, b) => {
          return a.brands - b.brands;
        });
      }
    }

    if (myState.searchWord != "") {
      arr = filterByWord(arr, myState.searchWord);
    }

    dispatch(setFilteredProducts(arr));
  };
};
export const sortProducts = (val) => {
  return (dispatch) => {
    dispatch(setSort(val));
  };
};
export const setAllOriginalFilters = () => {
  return (dispatch, getState) => {
    const state = getState((state) => state.dashboard);
    const myState = state.dashboard;
    let arrGen = [];
    let arrBrands = [];
    let arrColors = [];
    myState.products.forEach((e) => {
      arrGen.push(e.gender);
      arrBrands.push(e.brand);
      arrColors.push(e.color);
    });

    arrGen = [...new Set(arrGen)];
    arrBrands = [...new Set(arrBrands)];
    arrColors = [...new Set(arrColors)];

    let obj = {
      genders: arrGen,
      brands: arrBrands,
      colors: arrColors,
    };

    dispatch(originalFiltersUpdate(obj));
  };
};
export const setAllFilters = (obj) => {
  return (dispatch) => {
    dispatch(filtersUpdate(obj));
    if (
      obj.genders.length == 0 &&
      obj.brands.length == 0 &&
      obj.colors.length == 0
    ) {
      dispatch(filtersYesOrNo(null));
    } else {
      dispatch(filtersYesOrNo(1));
    }
  };
};
export const handleAddToWishlist = (obj) => {
  return (dispatch, getState) => {
    dispatch(eaddToWishList(obj));
  };
};
export const handleAddToBag = (obj) => {
  return (dispatch, getState) => {
    dispatch(addToBag(obj));
  };
};

export const handleRemoveBagItems = (objId) => {
  return (dispatch, getState) => {
    const state = getState((state) => state.dashboard);
    const myState = state.dashboard;
    if (myState.bag.length > 0) {
      let arr = [...myState.bag];
      let arr1 = arr.filter((e) => {
        return e.id != objId;
      });
      dispatch(removeBagItems(arr1));
    }
  };
};
export const handleRemoveWishListItems = (objId) => {
  return (dispatch, getState) => {
    const state = getState((state) => state.dashboard);
    const myState = state.dashboard;
    if (myState.wishlistItems.length > 0) {
      let arr = [...myState.wishlistItems];
      let arr1 = arr.filter((e) => {
        return e.id != objId;
      });
      dispatch(removeWishListItems(arr1));
    }
  };
};

export const handleSearchWordChange = (objWord) => {
  return (dispatch, getState) => {
    objWord = objWord.toLowerCase();

    dispatch(searchWordChange(objWord));
  };
};
