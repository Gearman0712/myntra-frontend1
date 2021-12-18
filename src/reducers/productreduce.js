import { pData } from "../ProductsData";

const initalState = {
  products: [...pData],
  filteredProducts: [...pData],
  orders: [],
  bagItems: [],
  wishlistItems: [],

  sortBy: "",
  filters: null,
  selectedFilters: {
    genders: [],
    brands: [],
    colors: [],
  },
};
const productService = (state = initalState, action) => {
  switch (action.type) {
    case "Get_Products":
      let arr = [];
      let arr1 = [];

      if (state.filters == null) arr = [...state.filteredProducts];
      else {
        if (state.selectedFilters.genders.length != 0) {
          pData.forEach((e) => {
            state.selectedFilters.genders.forEach((f) => {
              if (e.gender == f) arr.push(e);
            });
          });

          if (state.selectedFilters.brands.length != 0) {
            arr.forEach((e) => {
              state.selectedFilters.brands.forEach((f) => {
                if (e.brand == f) arr1.push(e);
              });
            });
            arr = [...arr1];
            arr1 = [];
            if (state.selectedFilters.colors.length != 0) {
              arr.forEach((e) => {
                state.selectedFilters.colors.forEach((f) => {
                  if (e.color == f) arr1.push(e);
                });
              });
              arr = [...arr1];
              arr1 = [];
            } else {
            }
          } else {
            if (state.selectedFilters.colors.length != 0) {
              arr.forEach((e) => {
                state.selectedFilters.colors.forEach((f) => {
                  if (e.color == f) arr1.push(e);
                });
              });
              arr = [...arr1];
              arr1 = [];
            }
          }
        } else {
          if (state.selectedFilters.brands.length != 0) {
            pData.forEach((e) => {
              state.selectedFilters.brands.forEach((f) => {
                if (e.brand == f) arr.push(e);
              });
            });

            if (state.selectedFilters.colors.length != 0) {
              arr.forEach((e) => {
                state.selectedFilters.colors.forEach((f) => {
                  if (e.color == f) arr1.push(e);
                });
              });
              arr = [...arr1];
              arr1 = [];
            } else {
            }
          } else {
            if (state.selectedFilters.colors.length != 0) {
              pData.forEach((e) => {
                state.selectedFilters.colors.forEach((f) => {
                  if (e.color == f) arr.push(e);
                });
              });
            }
          }
        }
      }

      if (state.sortBy != "") {
        if (state.sortBy != "pl") {
          arr.sort((a, b) => {
            return b.price - a.price;
          });
        } else if (state.sortBy != "ph") {
          arr.sort((a, b) => {
            return a.price - b.price;
          });
        } else {
          return arr.sort((a, b) => {
            return a.brands - b.brands;
          });
        }
      }
      state.filteredProducts = [...arr];
      return state;

    case "Sort_Products":
      state.sortBy = action.payload;
      return state;
    default:
      return state;
  }
};

export default productService;
