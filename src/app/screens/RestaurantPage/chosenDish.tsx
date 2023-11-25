import React, { useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import Marginer from "../../components/marginer";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper";
import Checkbox from "@mui/material/Checkbox";

const chosen_list = Array.from(Array(5).keys());
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export function ChosenDish() {
    return (
      <div className="chosen_dish_page">
        <Container className="dish_container">
          <Stack className="chosen_dish_slider">
            <Swiper
              className="dish_swiper"
              loop={true}
              spaceBetween={10}
              navigation={true}
              modules={[FreeMode, Navigation, Thumbs]}
            >
              {chosen_list.map((ele) => {
                const image_path = `/others/sabzi_qovurma.jpg`;
                return (
                  <SwiperSlide>
                    <img
                      src={image_path}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {chosen_list.map((ele) => {
                const image_path = `/dishes/donar.jpg`;
                return (
                  <SwiperSlide style={{
                    // height: "190px",
                    display: "flex",
                    background: "#0b0e11"
                  }}
                  >
                    <img src={image_path} width={'160px'} height={'120px'}
                    style={{marginTop:'20px', borderRadius:'5px'}}/>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Stack>
  
          <Stack className="chosen_dish_info_container">
            <Box className={"chosen_dish_info_box"}>
              <strong className="dish_txt">Shirin Breakfastga marxamat</strong>
              <span className="resto_name">Burak</span>
              <Box className={"rating_box"}>
                <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
                <div className="evaluation_box">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "20px",
                    }}
                  >
                    <Checkbox
                      {...label}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite style={{ color: "red" }} />}
                      checked={true}
                    />
  
                    <span>77 ta</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <RemoveRedEyeIcon sx={{ mr: "10px" }} />
                    <span>1000 ta</span>
                  </div>
                </div>
              </Box>
              <p className="dish_desc_info">Bunaqasi faqat bizda </p>
              <Marginer
                direction="horizontal"
                height="1"
                width="100%"
                bg="#000000"
              />
              <div className="dish_price_box">
                <span>Narx:</span>
                <span>$2.3</span>
              </div>
              <div className="button_box">
                  <Button variant="contained">Savatga qo'shish</Button>
              </div>
            </Box>
          </Stack>
        </Container>
      </div>
    );
  }