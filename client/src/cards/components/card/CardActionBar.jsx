import { Box, CardActions, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import React from "react";

const CardActionBar = ({ cardId, handelLikeCard, handelDeleteCard }) => {
  return (
    <CardActions
      disableSpacing
      sx={{ paddingTop: 0, justifyContent: "space-between" }}
    >
      <Box>
        <IconButton
          aria-label="delete to favorites"
          onClick={() => handelDeleteCard(`Delete card ${cardId}`)}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          aria-label="edit to favorites"
          onClick={() => console.log(`edit card ${cardId}`)}
        >
          <ModeEditIcon />
        </IconButton>
      </Box>

      <Box>
        <IconButton aria-label="call business">
          <CallIcon />
        </IconButton>
        <IconButton
          aria-label="add to favorites"
          onClick={() => handelLikeCard(`Like card ${cardId}`)}
        >
          <FavoriteIcon />
        </IconButton>
      </Box>
    </CardActions>
  );
};

export default CardActionBar;
