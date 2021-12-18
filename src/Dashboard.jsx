import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Header } from "./Header";
import { Loader } from "./Loader";
import { ProductsList } from "./PoductsList";
import SelectSortType from "./Sortby";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductDetails } from "./ProductDetails";
import { Filters } from "./Filter";
import { useTheme } from "@material-ui/styles";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, setAllOriginalFilters } from "./reducerAction";
const useStyles = makeStyles((theme) => ({
  sliderContainer: {
    marginBottom: "15px",
  },
  imageSlider: {
    height: "450px",
    cursor: "pointer",
  },
}));

export function Dashboard(params) {
  const myState = useSelector((state) => state.productService);
  const classes = useStyles();

  const dispatch = useDispatch();
  const [showSlider, setShowSlider] = useState(true);

  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(setAllOriginalFilters());
  }, []);
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              loading ? (
                <Loader />
              ) : (
                <div>
                  <Grid container style={{ paddingTop: "20px" }}>
                    <Grid
                      item
                      md={3}
                      lg={3}
                      xl={3}
                      display={{ xs: "none", sm: "none" }}
                    >
                      <Filters />
                    </Grid>

                    <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
                      <SelectSortType />
                      <ProductsList />
                    </Grid>
                  </Grid>
                  <Grid></Grid>
                </div>
              )
            }
            exact
          />

          <Route path="/:productId" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
