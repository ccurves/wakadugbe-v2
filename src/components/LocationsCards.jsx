import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { locations } from "../data/data";
import CarouselCard from "./CarouselCard";

const LocationsCards = () => {
  const [loading, setLoading] = React.useState(true);
  const [cards] = React.useState(locations);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(false);
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);
  if (!cards.length) {
    return null;
  }
  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {cards.map((location) => {
          return (
            <Grid key={location.id} item xs={12} sm={6} md={4} lg={3}>
              <CarouselCard location={location} loading={loading} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default LocationsCards;
