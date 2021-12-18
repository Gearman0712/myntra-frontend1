import { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { AppBar, Badge, Grid, InputBase, makeStyles } from "@material-ui/core";
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
import { handleSearchWordChange, getProducts } from "./reducerAction";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
  const [anchorEl, setAnchorEl] = useState(null);
  const [modalType, setModalType] = useState(0);
  const [open1, setOpen1] = React.useState(false);
  const handleOpen = () => setOpen1(true);
  const handleClose = () => setOpen1(false);

  const dispatch = useDispatch();
  const searchQuery = useRef();
  const [searchText, setSearchText] = useState("");
  const mystate = useSelector((state) => state.dashboard);
  const handleOpenBag = () => {
    setModalType(1);

    handleOpen();
  };
  const handleOpenWishList = () => {
    setModalType(2);
    handleOpen();
  };
  const handleChange = (e) => {
    setSearchText(e.target.value);

    dispatch(handleSearchWordChange(e.target.value));
    dispatch(getProducts());
  };
  useEffect(() => {}, [modalType, searchText]);

  const open = Boolean(anchorEl);

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
                  {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
                  <InputBase
                    placeholder="Search for products, brands and more"
                    value={searchText}
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{
                      "aria-label": "Search",
                    }}
                    onChange={handleChange}
                  />
                </div>
              </span>
            </Grid>
          }

          <Grid className={classes.userInfo}>
            <div
              className={classes.profileContainer}
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
                  variant="h2"
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
                  variant="h2"
                  component="h2"
                  className="cntr"
                >
                  WishList
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
