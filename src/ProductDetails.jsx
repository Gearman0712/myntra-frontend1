import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FilledFavoriteIcon from "@material-ui/icons/Favorite";
import ArrowForwardIcon from "@material-ui/icons/ArrowForwardIos";
import StarIcon from "@material-ui/icons/StarOutlined";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import ArrowForwardedIcon from "@material-ui/icons/ArrowForward";

import { isItemAdded } from "./utilities";

import { ActionButton } from "./ActionButton";

import { handleAddToWishlist, handleAddToBag } from "./reducerAction";

import { SnackBar } from "./SnackBar";

import { Loader } from "./Loader";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "20px 28px",
  },
  imgContainer: {
    border: "1px solid #f5f5f6",

    height: "400px",
    minHeight: "400px",
    maxHeight: "400px",
    overflow: "hidden",
  },
  imgGrid: {
    width: "100%",
    height: "100%",
    transition: "transform .2s",
    cursor: "zoom-in",
    "&:hover": {
      transform: `scale(1.1)`,
    },
  },

  productBasic: {
    borderBottom: "1px solid #d4d5d9",
    marginBottom: "12px",
  },
  productBrand: {
    fontWeight: 500,
    fontSize: "24px",
  },
  productName: {
    fontWeight: 400,
    fontSize: "20px",
    color: "#535665",
  },

  ratingContainer: {
    border: "1px solid #eaeaec",
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    padding: "0px 8px",
    fontWeight: 500,
    fontSize: "16px",
    color: "#282c3f",
    cursor: "pointer",
    height: "25px",
    margin: "10px 0px",
    "&:hover": {
      border: "1px solid black",
    },
  },
  ratings: {
    color: "#535766",
    fontWeight: 400,
  },
  seperator: {
    color: "#d4d5d9",
    marginLeft: "4px",
  },

  priceContainer: { marginBottom: "15px" },
  offerPrice: {
    fontWeight: 500,
    fontSize: "24px",
    color: "#282c3f",
    marginRight: "12px",
  },
  mrpPrice: {
    fontSize: "20px",
    opacity: 0.8,
    color: "#696e79",
    marginRight: "12px",
  },
  offerLabel: {
    fontWeight: 500,
    fontSize: "20px",
    color: "#ff905a",
  },
  taxLabel: {
    color: "#03a685",
    fontSize: "14px",
    fontWeight: 500,
  },
  sizeDetails: { marginBottom: "20px" },
  selectSizeLabel: {
    fontSize: "16px",
    fontWeight: 500,
    marginRight: "20px",
    textTransform: "uppercase",
  },
  sizeChartLabel: {
    fontWeight: 500,
    fontSize: "16px",
    color: "#ff3e6c",
    textTransform: "uppercase",
    display: "inline-flex",
    alignItems: "center",
  },

  sizesContainer: {
    marginTop: "10px",
    display: "inline-flex",
    position: "relative",
  },
  sizeAction: {
    width: "50px",
    minWidth: "50px",
    maxWidth: "50px",
    height: "50px",
    minHeight: "50px",
    maxHeight: "50px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px 10px 0px 0px",
    cursor: "pointer",
    border: "1px solid #bfc0c6",
    "&:hover": {
      backgroundColor: "#fff",
      border: "1px solid #ff3e6c",
    },
  },
  strikeButton: {
    position: "absolute",
    width: "100%",
    height: "1px",
    top: "50%",
    transform: "rotate(-45deg)",
    backgroundColor: "#d5d6d9",
  },
  sizeActionLabel: {
    fontWeight: 500,
    fontSize: "14px",
  },

  returnExchangeContainer: {
    fontWeight: 500,
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
  },

  oneSizeContainer: {
    margin: "10px 10px 10px 0px",
    color: "#ff3e6c",
    border: "1px solid #ff3f6c",
    borderRadius: "20px",
    width: "fit-content",
    padding: "14px 16px",
    fontWeight: 500,
  },
  actionContainer: {},
  otherDetails: {
    marginTop: "20px",
    borderTop: "1px solid #d4d5d9",
    padding: "10px 0px",
  },
  ProductDetails: {
    display: "Flex",
  },
  detailsContainer: {
    // borderTop: "1px solid #d4d5d9",
    marginTop: "15px",
  },
  productDetailsLabel: {
    marginRight: "18px",
    fontSize: "18px",
    fontWeight: "500",
    textTransform: "uppercase",
  },
}));

export function ProductDetails(params) {
  const classes = useStyles();
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const myState = useSelector((state) => state.dashboard);

  const [product, setProduct] = useState(null);
  const [sizeSelected, changeSizeSelected] = useState("");
  const dispatch = useDispatch();

  const selectedProduct = useParams();

  const getThisProduct = () => {
    myState.products.forEach((e) => {
      if (e.id == selectedProduct.productId) {
        setProduct(e);
      }
    });
  };
  const handleClick = (size) => {
    changeSizeSelected(size);
  };
  useEffect(() => {}, [sizeSelected]);
  useEffect(() => {
    getThisProduct();
  }, []);

  return (
    <div>
      <Box className={classes.container}>
        {product ? (
          <>
            {/* <Breadcrumbs item={product?.name} /> */}
            {message && message.type && <SnackBar message={message} />}
            <div style={{ display: "flex", padding: "8px 18px 0px 1px" }}>
              <div style={{ width: "60%" }}>
                <Grid container>
                  {product.image.map((pic, id) => {
                    return (
                      <Grid
                        item
                        key={id}
                        xs={12}
                        sm={6}
                        md={6}
                        lg={6}
                        xl={6}
                        // style={{ padding: "0px 0px 10px 10px" }}
                      >
                        <div className={classes.imgContainer}>
                          <img
                            className={classes.imgGrid}
                            src={pic}
                            alt="product_img"
                          />
                        </div>
                      </Grid>
                    );
                  })}
                </Grid>
              </div>{" "}
              <div style={{ width: "40%", paddingLeft: "20px" }}>
                <div className={classes.productBasic}>
                  <div className={classes.productBrand}>{product?.brand}</div>
                  <div className={classes.productName}>{product?.name}</div>
                  pricing
                  <div className={classes.priceContainer}>
                    <span className={classes.offerPrice}>
                      {"Rs. "} {product.price}
                    </span>

                    <strike className={classes.mrpPrice}>
                      {"Rs. "}
                      {2009}
                    </strike>

                    <div>
                      <span className={classes.taxLabel}>
                        inclusive of all taxes
                      </span>
                    </div>
                  </div>
                  {/* sizing */}
                  {product.sizes && product.sizes.length > 0 ? (
                    <div className={classes.sizeDetails}>
                      <div>
                        <span className={classes.selectSizeLabel}>
                          Select Size
                        </span>
                        <span className={classes.sizeChartLabel}>
                          size chart <ArrowForwardIcon fontSize="small" />
                        </span>
                      </div>
                      <div className={classes.sizesContainer}>
                        {product.sizes.map((size) => (
                          <Button
                            className={`${classes.sizeAction}`}
                            disabled={false}
                            onClick={() => {
                              handleClick(size);
                            }}
                          >
                            <div className={classes.sizeActionLabel}>
                              {size}
                            </div>
                          </Button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className={classes.oneSizeContainer}>Onesize</div>
                  )}
                  {/* action area  */}
                  <div className={classes.actionContainer}>
                    {!isItemAdded(myState.bag, product.id) ? (
                      <ActionButton
                        kind="PRIMARY"
                        label="add to bag"
                        style={{ paddingLeft: "45px", paddingRight: "45px" }}
                        startIcon={<LocalMallIcon fontSize="small" />}
                        handleClick={() => {
                          if (sizeSelected != "") {
                            let temp = JSON.parse(JSON.stringify(product));
                            temp["sizeSelect"] = sizeSelected;

                            dispatch(handleAddToBag(temp));
                          } else {
                            setMessage({
                              message: "First Select A Size",
                              type: "error",
                            });
                            setTimeout(() => {
                              setMessage({});
                            }, [500]);
                          }
                        }}
                      />
                    ) : (
                      <ActionButton
                        kind="PRIMARY"
                        endIcon={<ArrowForwardedIcon />}
                        style={{ paddingLeft: "30px", paddingRight: "50px" }}
                        label="go to bag"
                        handleClick={() => {}}
                      />
                    )}

                    {!isItemAdded(myState.wishlistItems, product.id) ? (
                      <ActionButton
                        kind="SECONDARY"
                        label="wishlist"
                        startIcon={<FavoriteBorderIcon />}
                        handleClick={() => {
                          dispatch(handleAddToWishlist(product));
                        }}
                      />
                    ) : (
                      <ActionButton
                        kind="SECONDARY_FILLED"
                        label="wishlisted"
                        startIcon={<FilledFavoriteIcon htmlColor="#ff3e6c" />}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <Loader />
        )}
      </Box>
    </div>
  );
}
