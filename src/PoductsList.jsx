import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import { ProductTile } from "./ProductsTile";

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
    maxHeight: "450px",
    height: "450px",
    cursor: "pointer",
  },
}));

export function ProductsList(props) {
  const filteredProducts = useSelector(
    (state) => state.dashboard.filteredProducts
  );

  useEffect(() => {});

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {filteredProducts ? (
        <Grid container>
          {filteredProducts.map((product, id) => (
            <Grid item key={id} style={{ margin: "0 auto" }}>
              <ProductTile details={product} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid style={{ padding: "100px" }}>Products No products</Grid>
      )}
    </div>
  );
}
