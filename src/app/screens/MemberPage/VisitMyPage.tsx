import React, { ChangeEvent, useEffect, useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import SettingsIcon from "@mui/icons-material/Settings";
import { MemberPosts } from "./memberPosts";
import { MemberFollowers } from "./memberFollowers";
import { MemberFollowing } from "./memberFollowing";
import { MySettings } from "./mySettings";
// OTHERS
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


export function VisitMyPage() {
    /**INITILIALIZATIONS */
    const [value, setValue] = React.useState('1');

    /** HANDLERS */
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div className={"my_page"}>
          <Container className="main_container">
            <Stack className={"my_page_frame"}>
              <TabContext value={value}>
                <Stack className={"my_page_left"}>
                  <Box className={'main_box'}>
                    <TabPanel value={"1"}>
                      <Box className={"menu_name"}>
                        Mening Maqolalarim
                      </Box>
                      <Box className={"menu_content"}>
                        <MemberPosts/>
                        <Stack
                          sx={{ my: "40px" }}
                          direction="row"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Box className={"bottom_box"}>
                            <Pagination
                              count={3}
                              page={1}
                              renderItem={(item) => (
                                <PaginationItem
                                  components={{
                                    previous: ArrowBackIcon,
                                    next: ArrowForwardIcon,
                                  }}
                                  {...item}
                                  color={"secondary"}
                                />
                              )}
                            />
                          </Box>
                        </Stack>
                      </Box>
                    </TabPanel>
                              
                    <TabPanel value={"2"}>
                      <Box className={"menu_name"}>
                        Followers
                      </Box>
                      <Box className={"menu_content"}>
                        <MemberFollowers actions_enabled={true} />
                      </Box>
                    </TabPanel>
                    <TabPanel value={"3"}>
                      <Box className={"menu_name"}>Following</Box>
                      <Box className={"menu_content"}>
                        <MemberFollowing actions_enabled={true} />
                      </Box>
                    </TabPanel>
                    <TabPanel value={"4"}>
                      <Box className={"menu_name"}>Maqola Yozish</Box>
                      <Box className={"write_content"}></Box>
                    </TabPanel>
                    <TabPanel value={"5"}>
                      <Box className={"menu_name"}>Tanlangan Maqola</Box>
                      <Box className={"menu_content"}></Box>
                    </TabPanel>
                    <TabPanel value={"6"}>
                      <Box className={"menu_name"}>Ma'lumotlarni O'zgartirish</Box>
                      <Box className={"menu_content"}>
                        <MySettings />
                        </Box>
                    </TabPanel>
                  </Box>
                </Stack>
    
                <Stack className={"my_page_right"}>
                  <Box className={"order_info_box"}>
                    <a onClick={() => setValue("6")} className={"settings_btn"}>
                      <SettingsIcon />
                    </a>
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"center"}
                    >
                      <div className={"order_user_img"}>
                        <img
                          src='/icons/default_user.svg'
                          className={"order_user_avatar"}
                        />
                        <div className={"order_user_icon_box"}>
                          <img
                            src={"/auth/default_user.svg"}/>
                        </div>
                      </div>
                      <span className={"order_user_name"}>Mirzabek Kholmedov</span>
                      <span className={"order_user_prof"}>USER</span>
                    </Box>
                    <Box className={"user_media_box"}>
                      <FacebookIcon />
                      <InstagramIcon />
                      <TelegramIcon />
                      <YouTubeIcon />
                    </Box>
                    <Box className={"user_media_box"}>
                      <p className={"follows"}>Followers: 3</p>
                      <p className={"follows"}>Followings: 78</p>
                    </Box>
                    <p className={"user_desc"}> "qushimcha malumot kiritilmagan"</p>
                    <Box
                      display={"flex"}
                      justifyContent={"flex-end"}
                      sx={{ mt: "10px" }}
                    >
                      <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                      >
                        <Tab
                          style={{ flexDirection: "column" }}
                          value={"4"}
                          component={() => (
                            <Button
                              variant={"contained"}
                              onClick={() => setValue("4")}
                            >
                              Maqola Yozish
                            </Button>
                          )}
                        />
                      </TabList>
                    </Box>
                  </Box>
    
                  <Box className={"my_page_menu"}>
                    <TabList
                      onChange={handleChange}
                      aria-label="Vertical tabs example"
                    >
                      <Tab
                        style={{ flexDirection: "column" }}
                        value={"1"}
                        component={() => (
                          <div className={`menu_box`} onClick={() => setValue("1")}>
                            <img src={"/icons/writing_pen.svg"} />
                            <span>Maqolalarim</span>
                          </div>
                        )}
                      />
                      <Tab
                        style={{ flexDirection: "column" }}
                        value={"2"}
                        component={() => (
                          <div className={`menu_box`} onClick={() => setValue("2")}>
                            <img src={"/icons/followers_group.svg"} />
                            <span>Followers</span>
                          </div>
                        )}
                      />
                      <Tab
                        style={{ flexDirection: "column" }}
                        value={"3"}
                        component={() => (
                          <div className={`menu_box`} onClick={() => setValue("3")}>
                            <img src={"/icons/default_user_blue.svg"} />
                            <span>Following</span>
                          </div>
                        )}
                      />
                    </TabList>
                  </Box>
                </Stack>
              </TabContext>
            </Stack>
          </Container>
        </div>
    );
}

export default VisitMyPage;