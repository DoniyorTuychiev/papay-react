import { TabPanel } from "@mui/lab";
import { Box, Button, Stack } from "@mui/material";
import React from "react";

const pausedOrders = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

export default function PausedOrders(props: any) {
  return (
    <TabPanel value={"1"}>
      <Stack>
        {pausedOrders?.map((order) => {
          return (
            <Box className={"order_main_box"}>
              <Box className={"order_box_scroll"}>
                {order.map((item) => {
                  const image_path = `/dishes/kebab.jpg`;
                  return (
                    <Box className={"ordersName_price"}>
                      <img src={image_path} className="orderDishImg" />
                      <p className="titleDish">Qovurdoq</p>
                      <Box className={"priceBox"}>
                        <p>$8.1</p>
                        <img src="/icons/close.svg" alt="" />
                        <p>2</p>
                        <img src="/icons/pause.svg" />
                        <p style={{ marginLeft: "15px" }}>$16.2</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"total_price_box black_solid"}>
                <Box className={"boxTotal"}>
                  <p>mahsulot narxi</p>
                  <p>$16.2</p>
                  <img src="/icons/plus.svg" style={{ marginLeft: "20px" }} />
                  <p>yetkazibberish xizmati</p>
                  <p>$2.5</p>
                  <img src="/icons/pause.svg" style={{ marginLeft: "20px" }} />
                  <p>jami narx</p>
                  <p>$16.2</p>
                </Box>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{
                    borderRadius: "10px",
                  }}
                >
                  Bekor qilish
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    borderRadius: "10px",
                  }}
                >
                  To'lov qilish
                </Button>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}