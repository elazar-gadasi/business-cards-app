import { CardContent, CardHeader, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import cardType from "../../models/types/card";

const CardBody = ({ card }) => {
  const { title, subheader, phone, address, cardNumber } = card;
  const { city, street, houseNumber } = address;
  return (
    <CardContent>
      <CardHeader title={title} subheader={subheader} sx={{ p: 0, mb: 1 }} />
      <Divider />
      <Box mt={1}>
        <Typography variant="body2" color="text.secondary">
          <Typography variant="subtitle1" component="strong">
            Phone:{" "}
          </Typography>
          {phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Address: </strong> {city} {street} {houseNumber}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Card Number: </strong> {cardNumber}
        </Typography>
      </Box>
    </CardContent>
  );
};

CardBody.prototype = {
  card: cardType.isRequired,
};
export default CardBody;
