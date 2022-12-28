import React from "react";
import MuiCard from "@mui/material/Card";
import { CardActionArea } from "@mui/material";

import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import cardType from "../../models/types/card";

const Card = ({ card, handelLikeCard, handelDeleteCard }) => {
  return (
    <MuiCard sx={{ minWidth: 280 }}>
      <CardActionArea>
        <CardHead image={card.image} />

        <CardBody card={card} />
      </CardActionArea>

      <CardActionBar
        cardId={card._id}
        handelLikeCard={handelLikeCard}
        handelDeleteCard={handelDeleteCard}
      />
    </MuiCard>
  );
};
Card.prototype = {
  card: cardType.isRequired,
};

export default Card;
