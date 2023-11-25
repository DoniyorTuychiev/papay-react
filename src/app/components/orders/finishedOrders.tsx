import { TabPanel } from "@mui/lab";
import { Box, Button, Stack } from "@mui/material";
import React from "react";

const finishedOrders = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

export default function FinishedOrders(props: any) {
  return (
    <TabPanel value={"3"}>
      <Stack>
        {finishedOrders?.map((order) => {
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
                        <p>3</p>
                        <img src="/icons/pause.svg" />
                        <p style={{ marginLeft: "15px" }}>$16.1</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"total_price_box red_solid"}>
                <Box className={"boxTotal"}>
                  <p>mahsulot narxi</p>
                  <p>$16.1</p>
                  <img src="/icons/plus.svg" style={{ marginLeft: "20px" }} />
                  <p>yetkazish xizmati</p>
                  <p>$2.5</p>
                  <img src="/icons/pause.svg" style={{ marginLeft: "20px" }} />
                  <p>jami narx</p>
                  <p>$18.2</p>
                </Box>
                
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}