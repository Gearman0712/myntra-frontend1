import { useState } from "react";
// import { useHistory, useLocation } from "react-router-dom";

import { Grid, ListItem, makeStyles, Typography } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
// import { useProduct } from "../../context";
// import { getAllProducts } from "../../apis/productService";
import { useSelector, useDispatch } from "react-redux";
import { isFilterSelected, isItemAdded } from "./utilities";
import { setAllFilters, getProducts } from "./reducerAction";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "250px",
    maxWidth: "250px",
    minWidth: "250px",
    margin: "10px 0px",

    position: "sticky",
    top: "10px",
    bottom: "auto",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  filterHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #edebef",
    paddingBottom: "15px",
    paddingLeft: "25px",
  },
  filters: {
    fontSize: "16px",
    fontWeight: 600,
    textTransform: "uppercase",
  },
  clearAll: {
    textTransform: "uppercase",
    color: "#ff3f6c",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: 500,
  },
  filter: {
    paddingTop: "10px",
    borderBottom: "1px solid #edebef",
  },
  filterLabel: {
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: "14px",
    color: "#282c3f",
    paddingLeft: "12px",
  },
  filterContainer: { paddingLeft: "15px", borderRight: "1px solid #edebef" },
  listStyle: {
    listStyle: "none",
  },
  checkbox: {
    padding: "0px",
  },
  element: {
    textTransform: "capitalize",
  },
}));

export function Filters() {
  const myState = useSelector((state) => state.dashboard);
  console.log(myState.selectedFilters.genders);
  console.log("tata");
  var dispatch = useDispatch();
  const classes = useStyles();
  // const history = useHistory();
  // const path = useLocation();
  // const { productsState, productsDispatch } = useProduct();

  const setFiletrs = (label, value, isChecked) => {
    let arrGen = [...myState.selectedFilters.genders];
    // let arrCat = productsState?.selectedFilters?.categories
    //   ? productsState?.selectedFilters?.categories
    //   : [];
    let arrBrands = [...myState.selectedFilters.brands];
    // let arrBrands = productsState?.selectedFilters?.brands
    //   ? productsState?.selectedFilters?.brands
    //   : [];
    let arrColors = [...myState.selectedFilters.colors];
    // let arrColors = productsState?.selectedFilters?.colors
    //   ? productsState?.selectedFilters?.colors
    //   : [];

    if (label === "genders") {
      if (isChecked) {
        arrGen.push(value);
      } else {
        const index = arrGen.indexOf(value);
        arrGen.splice(index, 1);
      }
    }
    if (label === "brands") {
      if (isChecked) {
        arrBrands.push(value);
      } else {
        const index = arrBrands.indexOf(value);
        arrBrands.splice(index, 1);
      }
    }
    if (label === "colors") {
      if (isChecked) {
        arrColors.push(value);
      } else {
        const index = arrColors.indexOf(value);
        arrColors.splice(index, 1);
      }
    }
    let obj = {
      genders: arrGen,
      brands: arrBrands,
      colors: arrColors,
    };
    dispatch(setAllFilters(obj));
    dispatch(getProducts());
  };
  const clearFilters = () => {
    let obj = {
      genders: [],
      brands: [],
      colors: [],
    };
    dispatch(setAllFilters(obj));
    dispatch(getProducts());
  };
  return (
    <div className={classes.root}>
      <Grid className={classes.filterHeader}>
        <span className={classes.filters}>filters</span>
        <span
          className={classes.clearAll}
          onClick={() => {
            clearFilters();
          }}
        >
          clear all
        </span>
      </Grid>
      <Grid className={classes.filterContainer}>
        {myState.allFilters.genders && (
          <Grid className={classes.filter}>
            <span className={classes.filterLabel}>genders</span>
            {myState.allFilters.genders.map((ele, id) => (
              <li className={classes.listStyle}>
                <Checkbox
                  checked={
                    isFilterSelected(myState.selectedFilters.genders, ele) ===
                    undefined
                      ? false
                      : isFilterSelected(myState.selectedFilters.genders, ele)
                  }
                  inputProps={{ padding: "0px", margin: "0px" }}
                  onChange={(e) => {
                    setFiletrs("genders", ele, e.currentTarget.checked);
                  }}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
                <span className={classes.element}>{ele}</span>
              </li>
            ))}
          </Grid>
        )}

        {myState.allFilters.brands && (
          <Grid className={classes.filter}>
            <span className={classes.filterLabel}>brand</span>
            {myState.allFilters.brands.map((ele, id) => (
              <li className={classes.listStyle}>
                <Checkbox
                  checked={
                    isFilterSelected(myState.selectedFilters.brands, ele) ===
                    undefined
                      ? false
                      : isFilterSelected(myState.selectedFilters.brands, ele)
                  }
                  onChange={(e) => {
                    setFiletrs("brands", ele, e.currentTarget.checked);
                  }}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
                <span className={classes.element}>{ele}</span>
              </li>
            ))}
          </Grid>
        )}
        {myState.allFilters.colors && (
          <Grid className={classes.filter}>
            <span className={classes.filterLabel}>Color</span>
            {myState.allFilters.colors.map((ele, id) => (
              <li className={classes.listStyle}>
                <Checkbox
                  checked={
                    isFilterSelected(myState.selectedFilters.colors, ele) ===
                    undefined
                      ? false
                      : isFilterSelected(myState.selectedFilters.colors, ele)
                  }
                  onChange={(e) => {
                    setFiletrs("colors", ele, e.currentTarget.checked);
                  }}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
                <span className={classes.element}>{ele}</span>
              </li>
            ))}
          </Grid>
        )}
      </Grid>
    </div>
  );
}
