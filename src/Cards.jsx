import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Cards(props) {
  return (
    <Card sx={{ maxWidth: 300, minWidth: 300 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="120"
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
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small">Remove</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
