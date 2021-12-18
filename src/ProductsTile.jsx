import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FilledFavoriteIcon from "@material-ui/icons/Favorite";
import { isItemAdded } from "./utilities";
import { Slider } from "./Slider";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { handleAddToWishlist } from "./reducerAction";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "210px",
    height: "450px",
    position: "relative",
    margin: "0px 10px 30px",
    boxSizing: "border-box",

    "&:hover": {
      cursor: "pointer",
      webkitBoxShadow: "0 0 5px 2px #dcd7d7",
      mozBoxShadow: "0 0 5px 2px #dcd7d7",
      boxShadow: "0 0 5px 2px #dcd7d7",
    },
    "& .tagContainer": {
      background: "#ff3f6ccc",
      display: "inline-block",
      position: "absolute",
      top: "16px",
      left: 0,
      textTransform: "uppercase",
      color: "#fff",
      fontSize: "10px",
      fontWeight: "500",
      zIndex: 1,
      padding: "0 4px",
      lineHeight: "16px",
      "&::after": {
        content: `""`,
        position: "absolute",
        borderColor: "#ff3f6c80 transparent #ff3f6c80 #ff3f6ccc",
        borderStyle: "solid",
        borderWidth: "8px",
        left: "100%",
        width: 0,
        height: 0,
        top: 0,
      },
    },

    "& .wishlistContainer": {
      backgroundColor: "#fff",
      padding: "2px 0px 2px 0px",
      width: "100%",
      position: "absolute",
      zIndex: "2",
      top: "318px",
      left: "0",
      opacity: 0,
      display: "inline-flex",
      justifyContent: "center",
    },
    "&:hover .wishlistContainer": {
      opacity: 1,
      // transition: "opacity .5s linear",
    },

    "& .brandName": {
      fontWeight: "500",
    },
    "& .productName": {
      textTransform: "capitalize",
    },
    "&:hover .brandName": {
      opacity: 0,
    },
    "&:hover .productName": {
      opacity: 0,
    },

    "& .productRatingContainer": {
      position: "absolute",
      height: "18px",
      top: "260px",
      backgroundColor: "#ffffffcc",
      padding: "0 0 0 4px",
      borderRadius: "2px",
      marginLeft: "10px",
      fontWeight: "500",
      fontSize: "12px",
      display: "flex",
      alignItems: "center",
    },
    "& .productRatingCount": {
      paddingRight: "4px",
      display: "flex",
      marginLeft: "4px",
    },
    "& .seperator": {
      fontSize: "10px",
      margin: "-.5px 6px 0 -2px",
    },
    "& .productInfo": {
      marginTop: "13px",
      padding: "0px 10px",
    },
    "& .productSizes": {
      display: "none",
      color: "#535665",
      fontWeight: 400,
      fontSize: "14px",
    },
    "&:hover .productSizes": {
      display: "block",
    },
    "& .sizes": {
      color: "#a9abb3",
    },
    "& .discountedPrice": {
      color: "#282c3f",
      fontWeight: "500",
      fontSize: "14px",
    },
    "& .price": {
      color: "#7e818c",
      marginLeft: "5px",
      fontWeight: "400",
      fontSize: "12px",
    },
    "& .offer": {
      color: "#ff905a",
      marginLeft: "5px",
      fontWeight: "400",
      fontSize: "12px",
    },
  },
  pictureContainer: {
    width: "100%",
  },
  picture: {
    position: "relative",
    width: "210px",
    height: "280px",
  },
  imageSlider: {
    // width: "100%",
    // maxWidth: "200px",
    width: "210px",
    height: "280px",
    cursor: "pointer",
  },

  wishlist: {
    fontWeight: 500,
    textAlign: "center",
    width: "80%",
    padding: "8px 12px",
    color: "#282c3f",
    border: "1px solid #d4d5d9",
    display: "flex",
    justifyContent: "center",
    textTransform: "uppercase",
    "&:hover": {
      border: "1px solid #000000",
      // color: "red",
    },
  },
  wishlisted: {
    fontWeight: 500,
    textAlign: "center",
    width: "80%",
    padding: "8px 12px",
    color: "#fff",
    backgroundColor: "#535766",
    border: "1px solid #d4d5d9",
    display: "flex",
    justifyContent: "center",
    textTransform: "uppercase",
    "&:hover": {
      border: "1px solid #535766",
      // color: "red",
    },
  },
}));

export function ProductTile(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const { details } = props;
  const dispatch = useDispatch();
  const [play, setPlay] = useState(false);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const mystate = useSelector((state) => state.dashboard);

  return (
    <div
      className={classes.root}
      onMouseEnter={() => setPlay(true)}
      onMouseLeave={() => setPlay(false)}
    >
      <div
        className={classes.pictureContainer}
        onClick={() => {
          navigate(`/${details.id}`);
        }}
      >
        <Slider
          className={classes.imageSlider}
          sliderItems={details?.image.map(function (img) {
            return { src: img };
          })}
          sliderType="fade"
          sliderAutoPlay={play} //{true}
          sliderStopOnHover={false}
          slideNavigatorsHide={true}
          sliderIndicators
          sliderActiveIndicator={{
            color: "#ff3e6c",
          }}
        />
      </div>

      {!isItemAdded(mystate.wishlistItems, details.id) ? (
        <div
          className="wishlistContainer"
          onClick={() => {
            dispatch(handleAddToWishlist(details));
          }}
        >
          <span className={classes.wishlist}>
            <FavoriteBorderIcon />
            wishlist
          </span>
        </div>
      ) : (
        <div className="wishlistContainer">
          <span className={classes.wishlisted}>
            <FilledFavoriteIcon htmlColor="#ff3e6c" />
            wishlisted
          </span>
        </div>
      )}

      <div className="productInfo">
        <div className="brandName">{details.brand.toUpperCase()}</div>
        <div className="productName">{details.name}</div>
        <div className="productName">Price : Rs {details.price}</div>
      </div>
    </div>
  );
}
