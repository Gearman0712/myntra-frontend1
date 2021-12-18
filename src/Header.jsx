import { useEffect, useRef, useState } from "react";
import {
  NavLink,
  useNavigate,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {
  AppBar,
  Badge,
  ClickAwayListener,
  Grid,
  Hidden,
  InputBase,
  makeStyles,
  Popover,
} from "@material-ui/core";
import ProfileIcon from "@material-ui/icons/PersonOutlineOutlined";
import FavIcon from "@material-ui/icons/FavoriteBorderOutlined";
import BagIcon from "@material-ui/icons/LocalMallOutlined";
import SearchIcon from "@material-ui/icons/Search";
import * as React from "react";
import Box from "@mui/material/Box";
import Cards from "./Cards";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import logo from "./myntraLogo.jpg";
import { useSelector, useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// import { ProfileInfoCard } from "../../components";
// import { useLogin, useProduct } from "../../context";

// import {
//   getAllProducts,
//   getItemsFromCart,
//   getItemsFromWishList,
// } from "../../apis/productService";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",

    boxShadow: "0 4px 12px 0 #0000000d",
    // lineHeight: "80px",
    width: "100%",
    padding: "20px 0px 0px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },

  catInfoLogo: {
    marginLeft: "25px",
    display: "flex",
    // alignItems: "center",
    fontWeight: "500",
    fontSize: "14px",
    color: "#282c3f",
    lineHeight: "40px",
    textTransform: "uppercase",
  },
  catContainer: {
    padding: "0 12px 0 12px",
    textDecoration: "none",
    color: "#282c3f",
    cursor: "pointer",
  },
  catContainerMen: {
    "&:hover ": {
      borderBottom: "4px solid #ee5f73",
    },
  },
  catContainerWomen: {
    "&:hover ": {
      borderBottom: "4px solid #fb56c1",
    },
  },
  catContainerKids: {
    "&:hover ": {
      borderBottom: "4px solid #f26a10",
    },
  },
  catContainerHome: {
    "&:hover ": {
      borderBottom: "4px solid #f2c210",
    },
  },
  catContainerBeauty: {
    "&:hover ": {
      borderBottom: "4px solid #0db7af",
    },
  },
  userInfo: {
    display: "flex",
    marginRight: "20px",
    lineHeight: "30px",
    fontWeight: "400",
    fontSize: "14px",
    textTransform: "capitalize",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 12px 0 17px",
    cursor: "pointer",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 12px 0 17px",
    cursor: "pointer",
    "&:hover ": {
      borderBottom: "4px solid #ee5f73",
    },
    height: "50px",
  },

  inputRoot: {
    color: "inherit",
    width: "400px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + 18px)`,
    width: "100%",
  },
  search: {
    position: "relative",
    borderRadius: "8px",

    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
    color: "#696e79",
    backgroundColor: "#f5f5f6",
    "&:hover": {
      color: "#696e79",
      backgroundColor: "#f5f5f6",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
  },
}));

export function Header() {
  const classes = useStyles();
  //   const history = useNavigate();
  //   const path = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [modalType, setModalType] = useState(0);
  const [open1, setOpen1] = React.useState(false);
  const handleOpen = () => setOpen1(true);
  const handleClose = () => setOpen1(false);

  //   const { userState } = useLogin();
  //   const searchQuery = useRef();

  //   const { productsState, productsDispatch } = useProduct();
  const [searchText, setSearchText] = useState("");
  const mystate = useSelector((state) => state.dashboard);
  const handleOpenBag = () => {
    setModalType(1);

    handleOpen();
    console.log("Bag");
  };
  const handleOpenWishList = () => {
    setModalType(2);
    handleOpen();
  };

  useEffect(() => {}, [modalType]);
  const open = Boolean(anchorEl);
  //   const handleProfileMenuOpen = e => {
  //     setAnchorEl(e.currentTarget);
  //   };
  //   const handleProfileMenuClose = e => {
  //     // setTimeout(() => {
  //     setAnchorEl(null);
  //     // }, 500);
  //   };

  //   const isLogin = useRouteMatch("/login")?.isExact;
  //   const loadDetails = () => {
  //     // get wishlist if logged in
  //     if (userState.token) {
  //       getItemsFromWishList().then(res =>
  //         productsDispatch({
  //           type: "SET_WISHLIST_ITEMS",
  //           payload: res?.data?.data?.products,
  //         })
  //       );
  //       getItemsFromCart().then(res =>
  //         productsDispatch({
  //           type: "SET_CART_ITEMS",
  //           payload: res.data?.data?.products,
  //         })
  //       );
  //     }

  //     if (path.pathname === "/shop/women") {
  //       setSection("women");
  //     } else if (path.pathname === "/shop/men") {
  //       setSection("men");
  //     } else if (path.pathname === "/shop/kids") {
  //       setSection("kids");
  //     } else if (path.pathname === "/login") {
  //       setSection("login");
  //     } else if (path.pathname === "/signup") {
  //       setSection("signup");
  //     }
  //   };
  //   useEffect(
  //     () => {
  //       loadDetails();
  //     },
  //     // eslint-disable-next-line
  //     [path]
  //   );
  return (
    <div className="headermain">
      <AppBar className={classes.root} color={"#fff"}>
        <Grid container className={classes.header}>
          <Grid className={classes.catInfoLogo}>
            <Stack direction="row" spacing={2}>
              <img src={logo} alt="app-logo" height="40px" width="40px" />
              <Button color="inherit">Men</Button>
              <Button color="inherit">Women</Button>
              <Button color="inherit">Kids</Button>
              <Button color="inherit">Beauty</Button>
              <Button color="inherit">Homes</Button>
            </Stack>
          </Grid>

          {
            <Grid>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  marginRight: "4px",
                }}
              >
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search for products, brands and more"
                    //   inputRef={searchQuery}
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{
                      "aria-label": "Search",
                    }}
                    onKeyPress={() => {
                      // setSearchText(searchQuery.current.value);
                      // getAllProducts({
                      //   sections: section, //requestParams.section,
                      //   search: searchText,
                      // }).then(function (res) {
                      //   productsDispatch({
                      //     type: "SET_PRODUCTS",
                      //     payload: res.data.data,
                      //   });
                      // });
                    }}
                  />
                </div>
              </span>
            </Grid>
          }

          <Grid className={classes.userInfo}>
            {/* {!(section === "signup" || section === "login") && (*/}
            <div
              className={classes.profileContainer}
              //   onMouseEnter={handleProfileMenuOpen}
              //   // onBlur={e => handleProfileMenuClose()}
              //   // onMouseLeave={handleProfileMenuClose}
              //   onClick={handleProfileMenuOpen}
              aria-owns={open ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
            >
              <ProfileIcon htmlColor="#5d5b5b" />

              <span>profile</span>
            </div>

            <div
              className={classes.container}
              onClick={() => handleOpenWishList()}
            >
              <Badge
                badgeContent={
                  mystate.wishlistItems.length != 0
                    ? mystate.wishlistItems.length
                    : null
                }
                color="secondary"
                //  style={{ backgroundColor: "red" }}
              >
                <FavIcon htmlColor="#5d5b5b" />
              </Badge>
              <span>wishlist</span>
            </div>
            <div className={classes.container} onClick={() => handleOpenBag()}>
              <Badge
                badgeContent={
                  mystate.bag.length != 0 ? mystate.bag.length : null
                }
                color="secondary"
              >
                <BagIcon htmlColor="#5d5b5b" />
              </Badge>
              <span>bag</span>
            </div>
          </Grid>
        </Grid>

        {/* <ClickAwayListener onClickAway={handleProfileMenuClose}>
         <Popover
          id="mouse-over-popover"
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 56,
            horizontal: "center",
          }}
          disableRestoreFocus
          onClose={handleProfileMenuClose}
        >
         <ProfileInfoCard /> 
        </Popover> 
      </ClickAwayListener> */}
      </AppBar>
      <div>
        <Modal
          open={open1}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {modalType === 1 ? (
              <>
                {" "}
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  className="cntr"
                >
                  Bag
                </Typography>
                <div className="modalCustomUi">
                  {mystate.bag.length !== 0 ? (
                    <Grid container>
                      {mystate.bag.map((product, id) => (
                        <Grid item key={id} style={{ margin: "0 auto" }}>
                          <Cards details={product} type={modalType} />
                        </Grid>
                      ))}
                    </Grid>
                  ) : (
                    <Grid style={{ padding: "100px" }}>
                      Products No products
                    </Grid>
                  )}
                </div>
              </>
            ) : (
              <>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  className="cntr"
                >
                  WhisList
                </Typography>
                <div className="modalCustomUi">
                  {mystate.wishlistItems.length !== 0 ? (
                    <Grid container>
                      {mystate.wishlistItems.map((product, id) => (
                        <Grid item key={id} style={{ margin: "0 auto" }}>
                          <Cards details={product} type={modalType} />
                        </Grid>
                      ))}
                    </Grid>
                  ) : (
                    <Grid style={{ padding: "100px" }}>
                      Products No products
                    </Grid>
                  )}
                </div>
              </>
            )}
          </Box>
        </Modal>
      </div>
    </div>
  );
}
