import React from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";

import { AiFillStar } from "react-icons/ai";
import {
  flexBetween,
  dFlex,
  carouselDot,
  fixedIcon,
  carouselImage,
  fixedBottom,
} from "../theme/commonStyles";
import "../styles/CarouselCard.css";
import { Checkbox, Skeleton } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const CarouselCard = ({ location, loading }) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const maxSteps = location.locationImages.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step); // handle swipe change
  };
  return (
    <Box
      className="carouselCard"
      sx={{
        flexGrow: 1,
        position: "relative",
      }}
    >
      <Box sx={fixedIcon}>
        <Checkbox
          icon={<FavoriteBorder sx={{ color: "primary.white" }} />}
          checkedIcon={<Favorite sx={{ color: "secondary.light" }} />}
        />
      </Box>

      {location.locationImages.length && (
        <SwipeableViews
          axis={"x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {location.locationImages.map((step, index) => {
            return loading ? (
              <Skeleton
                variant="rectangular"
                width="100%"
                height={200}
                key={index}
              />
            ) : (
              <div key={step.id}>
                <Box
                  component="img"
                  sx={carouselImage}
                  src={step.url}
                  alt={step.id}
                ></Box>
              </div>
            );
          })}
        </SwipeableViews>
      )}

      <Box sx={fixedBottom}>
        <MobileStepper
          sx={{ backgroundColor: "transparent" }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              sx={carouselDot}
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              sx={carouselDot}
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
            </Button>
          }
        />
      </Box>
      {loading ? (
        <Box sx={{ pt: 0.5 }}>
          <Skeleton />
          <Skeleton width="60%" />
          <Skeleton width="60%" />
        </Box>
      ) : (
        <Box sx={flexBetween}>
          <Box sx={{ mt: 2 }}>
            <Typography component="h3" sx={{ fontWeight: "bold" }}>
              {location.location}
            </Typography>
            <Box sx={flexBetween}>
              <Typography component="h4" sx={{ padding: 0 }}>
                <span style={{ textTransform: "none" }}>Posted by</span>{" "}
                <strong style={{ cursor: "pointer" }}>{location.host}</strong>
              </Typography>
            </Box>

            <Typography component="h4" sx={{ padding: 0 }}>
              {" "}
              {location.days}
            </Typography>
            {/* <Typography
              component="h5"
              sx={{ textTransform: "none", padding: 0 }}
            >
              {" "}
              <strong> {location.price}</strong> night
            </Typography> */}
          </Box>
          <Box sx={{ mt: 2 }}>
            <Box sx={dFlex}>
              {location.isNew ? (
                <React.Fragment>
                  <Typography component="h5">New</Typography>
                  <AiFillStar size={18} />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Typography component="h5"> {location.rating}</Typography>
                  <AiFillStar size={18} />
                </React.Fragment>
              )}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CarouselCard;
