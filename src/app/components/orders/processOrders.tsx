import { TabPanel } from "@mui/lab";
import { Box, Button, Stack } from "@mui/material";
import React from "react";

const processOrders = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

export default function ProcessOrders(props: any) {
  return (
    <TabPanel value={"2"}>
      <Stack>
        {processOrders?.map((order) => {
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
                        <p>$7</p>
                        <img src="/icons/close.svg" alt="" />
                        <p>3</p>
                        <img src="/icons/pause.svg" />
                        <p style={{ marginLeft: "15px" }}>$16.3</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"total_price_box blue_solid"}>
                <Box className={"boxTotal"}>
                  <p>mahsulot narxi</p>
                  <p>$16.2</p>
                  <img src="/icons/plus.svg" style={{ marginLeft: "20px" }} />
                  <p>yetkazish xizmati</p>
                  <p>$2.5</p>
                  <img src="/icons/pause.svg" style={{ marginLeft: "20px" }} />
                  <p>jami narx</p>
                  <p>$18.7</p>
                </Box>
                
                <div className="data_compl">23-01-14 08:15</div>

                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    borderRadius: "10px",
                  }}
                >
                  Yakunlash
                </Button>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}