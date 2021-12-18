import * as React from "react";
import { useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import {sortproducts,getProducts} from "./actions/index";
import { useDispatch } from "react-redux";
import { getProducts, sortProducts } from "./reducerAction";
export default function SelectSortType() {
  const [sorttype, setSorttype] = React.useState("");
  var dispatch = useDispatch();
  const handleChange = (event) => {
    setSorttype(event.target.value);
    dispatch(sortProducts(event.target.value));
    dispatch(getProducts());
  };
  useEffect(() => {}, [sorttype]);
  return (
    <div className="sortUi">
      <div></div>
      <FormControl sx={{ m: 1, minWidth: 300, maxWidth: 300 }}>
        <InputLabel id="demo-simple-select-helper-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={sorttype}
          label="Sortby"
          onChange={handleChange}
        >
          <MenuItem value={"pl"}> Price low to high</MenuItem>
          <MenuItem value={"ph"}>Price high to low</MenuItem>
          <MenuItem value={"rc"}>Recommended</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
