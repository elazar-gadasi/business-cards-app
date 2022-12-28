import { Grid, Typography } from "@mui/material";
import React from "react";
import Card from "./card/Card";

const Cards = () => {
  const cards = [
    {
      _id: "639221ec70962dd4df2b709b",
      title: "Business Name",
      subtitle: "Business Headline",
      description: "some desc",
      phone: "0500000000",
      email: "admin@gmail.com",
      web: "https://www.hackampus.com",
      image: {
        url: "https://www.istoreil.co.il/media/wysiwyg/2022/main/apple-watch-series-8/series-8_large.png",
        alt: "Wowww this is Apple Watch",
        _id: "639221ec70962dd4df2b709c",
      },
      address: {
        state: "israel",
        country: "israel",
        city: "Tel Aviv",
        street: "STREET",
        houseNumber: 1,
        zip: 123456,
        _id: "639221ec70962dd4df2b709d",
      },
      bizNumber: 6480165,
      createdAt: "2022-12-08T17:42:04.379Z",
      user_id: "638503e4caa1f3d9dbbcf7bc",
      likes: ["639221ec70962dd4df2b70a3"],
      __v: 0,
    },
    {
      _id: "639221ec70962dd4df2b70",
      title: "Business Name",
      subtitle: "Business Headline",
      description: "some desc",
      phone: "0500000000",
      email: "admin@gmail.com",
      web: "https://www.hackampus.com",
      image: {
        url: "https://www.istoreil.co.il/media/wysiwyg/2022/main/apple-watch-series-8/series-8_large.png",
        alt: "Wowww this is Apple Watch",
        _id: "639221ec70962dd4df2b709c",
      },
      address: {
        state: "israel",
        country: "israel",
        city: "Tel Aviv",
        street: "STREET",
        houseNumber: 1,
        zip: 123456,
        _id: "639221ec70962dd4df2b709d",
      },
      bizNumber: 6480165,
      createdAt: "2022-12-08T17:42:04.379Z",
      user_id: "638503e4caa1f3d9dbbcf7bc",
      likes: ["639221ec70962dd4df2b70a3"],
      __v: 0,
    },
    {
      _id: "639221ec70962dd4df2b709",
      title: "Business Name",
      subtitle: "Business Headline",
      description: "some desc",
      phone: "0500000000",
      email: "admin@gmail.com",
      web: "https://www.hackampus.com",
      image: {
        url: "https://www.istoreil.co.il/media/wysiwyg/2022/main/apple-watch-series-8/series-8_large.png",
        alt: "Wowww this is Apple Watch",
        _id: "639221ec70962dd4df2b709c",
      },
      address: {
        state: "israel",
        country: "israel",
        city: "Tel Aviv",
        street: "STREET",
        houseNumber: 1,
        zip: 123456,
        _id: "639221ec70962dd4df2b709d",
      },
      bizNumber: 6480165,
      createdAt: "2022-12-08T17:42:04.379Z",
      user_id: "638503e4caa1f3d9dbbcf7bc",
      likes: ["639221ec70962dd4df2b70a3"],
      __v: 0,
    },
  ];
  const handelDeleteCard = (cardId) => console.log(cardId);
  const handelLikeCard = (cardId) => console.log(cardId);

  if (!cards.length)
    return <Typography>Oops.. it semss ther no card business</Typography>;
  return (
    <Grid container spacing={2} pb={2}>
      {cards.map((card) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={card._id}>
          <Card
            card={card}
            handelDeleteCard={handelDeleteCard}
            handelLikeCard={handelLikeCard}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
