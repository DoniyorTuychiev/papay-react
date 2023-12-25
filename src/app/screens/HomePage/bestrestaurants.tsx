import { Call, Favorite } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Card,
  AspectRatio,
  CardOverflow,
  IconButton,
  Typography,
  Link,
} from "@mui/joy";
import { CssVarsProvider } from "@mui/joy/styles";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { Box, Button, Container, Stack } from "@mui/material";
import React from "react";
import { createSelector } from "@reduxjs/toolkit";
import { retrieveBestRestaurants } from "./selector";
import { useSelector } from "react-redux";
import { Restaurant } from "../../types/user";
import { serverApi } from "../../../lib/config";

/****************************
 *      REDUX Selector      *
 ****************************/
const bestRestaurantRetriever = createSelector(
  retrieveBestRestaurants,
  (bestRestaurants) => ({
    bestRestaurants,
  })
);

export function BestRestaurants() {
  /** INITIALIZATION   */
  const { bestRestaurants } = useSelector(bestRestaurantRetriever);

  return (
    <div className="best_restaurant_frame">
      <img
        src={"/icons/line_group.svg"}
        style={{ position: "absolute", left: "6%", transform: "rotate(90deg)" }}
      />
      <Container sx={{ paddingTop: "153px" }}>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className="category_title">Zo'r Restaurantlar</Box>
          <Stack sx={{ mt: "43px" }} flexDirection={"row"}>
            {bestRestaurants.map((ele: Restaurant) => {
              const image_path = `${serverApi}/${ele.mb_image}`;
              return (
                <CssVarsProvider>
                  <Card
                    variant="outlined"
                    sx={{ minHeight: 483, minWidth: 320, mr: "35px" }}
                  >
                    <CardOverflow>
                      <AspectRatio ratio="1">
                        <img src={image_path} alt="" />
                      </AspectRatio>
                      <IconButton
                        aria-label="Like minimal photography"
                        size="md"
                        variant="solid"
                        color="neutral"
                        sx={{
                          position: "absolute",
                          zIndex: 2,
                          borderRadius: "50%",
                          right: "1rem",
                          bottom: 45,
                          transform: "translateY(50%)",
                          color: "rgb(0,0,0,.4)",
                        }}
                      >
                        <Favorite style={{ fill: "white" }} />
                      </IconButton>
                    </CardOverflow>
                    <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                      {ele.mb_nick} restaurant
                    </Typography>
                    <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                      <Link
                        href=""
                        startDecorator={<LocationOnRoundedIcon />}
                        textColor="neutral.700"
                      >
                        {ele.mb_address}
                      </Link>
                    </Typography>
                    <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                      <Link
                        href=""
                        startDecorator={<Call />}
                        textColor="neutral.700"
                      >
                        {ele.mb_phone}
                      </Link>
                    </Typography>
                    <CardOverflow
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 1.5,
                        py: 1.5,
                        px: "var(--Card-padding)",
                        borderTop: "1px solid rgb(107, 105, 103)",
                      }}
                    >
                      <Typography
                        level="body-sm" //bu yerda ishlmadi soreman
                        sx={{
                          display: "flex",
                          fontWeight: "md",
                          color: "neutral.300",
                          alignItems: "center",
                        }}
                      >
                        {ele.mb_views}
                        <VisibilityIcon
                          sx={{ fontSize: 20, marginLeft: "5px" }}
                        />
                      </Typography>
                      <Box sx={{ width: 2, bgcolor: "divider" }} />
                      <Typography
                        sx={{
                          fontWeight: "md",
                          color: "neutral.300",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <div>{ele.mb_likes}</div>
                        <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                      </Typography>
                    </CardOverflow>
                  </Card>
                </CssVarsProvider>
              );
            })}
          </Stack>
          <Stack
            flexDirection={"row"}
            justifyContent={"flex-end"}
            style={{ width: "100%", marginTop: "16px" }}
          >
            <Button style={{ background: "#1976d2", color: "#ffffff" }}>
              Barchasini Korish
            </Button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
