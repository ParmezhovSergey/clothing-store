import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import photo from './img/web.png'

const ProductCard = (props) => {
  return (
    <Grid item xs="6" sm="4" md="3">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="300"  src={photo} alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h8" component="div">
              {props.display_name}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              price {props.initial_price} ETH
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              available: {props.quantity}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ProductCard;
