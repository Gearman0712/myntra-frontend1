import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import { ProductTile } from "./ProductsTile";
// import { useProduct } from "../../context";
import { pData } from "./ProductsData";
import { useSelector, useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "10px",
  },
  sliderContainer: {
    // marginTop: "20px",
    marginBottom: "15px",
  },
  imageSlider: {
    // width: "100%",
    // maxWidth: "200px",
    maxHeight: "450px",
    height: "450px",
    cursor: "pointer",
  },
}));

export function ProductsList(props) {
  //   const { productsState } = useProduct();
  const filteredProducts = useSelector(
    (state) => state.dashboard.filteredProducts
  );
  //  const {prList , setPrList} =usestate(myState.filteredProducts);
  console.log(filteredProducts);
  console.log("filteredProducts");
  useEffect(() => {
    console.log("hifdsg");
  });
  useEffect(() => {
    console.log("er");
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {filteredProducts ? (
        <Grid container>
          {filteredProducts.map((product, id) => (
            <Grid item key={id} style={{ margin: "0 auto" }}>
              <ProductTile
                details={product}

                //    play={play}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid style={{ padding: "100px" }}>Products No products</Grid>
      )}
    </div>
  );
}
