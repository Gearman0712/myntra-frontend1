import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Header } from "./Header";
import { Loader } from "./Loader";
import { ProductsList } from "./PoductsList";
import SelectSortType from "./Sortby";
// import { ProductsList, Header, Footer, ShopNow } from "../../components";
// import { useProduct } from "../../context";
import { Filters } from "./Filter";
// import { Loader } from "../Common";
import { useTheme } from "@material-ui/styles";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, setAllOriginalFilters } from "./reducerAction";
const useStyles = makeStyles((theme) => ({
  sliderContainer: {
    // marginTop: "20px",
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
  //   const history = useHistory();
  //   const path = useLocation();
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

      {loading ? (
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
      )}
    </>
  );
}
