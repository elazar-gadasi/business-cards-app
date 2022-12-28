import { CardMedia } from "@mui/material";
import React from "react";
import imageType from "../../models/types/image";

const CardHead = ({ image }) => {
  const { url, alt } = image;
  return <CardMedia component="img" height="194" image={url} alt={alt} />;
};
CardHead.prototype = {
  image: imageType.isRequired,
};
export default CardHead;
