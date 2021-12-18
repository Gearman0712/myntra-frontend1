import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import {
  handleRemoveBagItems,
  handleRemoveWishListItems,
} from "./reducerAction";
export default function Cards(props) {
  const dispatch = useDispatch();
  return (
    <Card sx={{ maxWidth: 300, minWidth: 300 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={props.details.image[0]}
      />
      <CardContent height="200">
        <Typography gutterBottom variant="h5" component="div">
          {props.details.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Brand: {props.details.brand}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Price: {props.details.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            if (props.type == 1) {
              dispatch(handleRemoveBagItems(props.details.id));
            } else if (props.type == 2) {
              dispatch(handleRemoveWishListItems(props.details.id));
            }
          }}
        >
          Remove
        </Button>
        {props.type == 1 ? (
          <Button size="small">{`size = ${props.details.sizeSelect}`}</Button>
        ) : (
          <></>
        )}
      </CardActions>
    </Card>
  );
}
