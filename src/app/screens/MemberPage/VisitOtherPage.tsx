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
import TViewer from "../../components/tuiEditor/TViewer";


export function VisitOtherPage(props: any) {
    //INITIALIZIATION
    const [value, setValue] = useState("1")

    // HANDLERS
    const handleChange = (event: React.SyntheticEvent, newvalue:string) => {
        setValue(newvalue)
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
                                      Maqolalar
                                    </Box>
                                    <Box className={"menu_content"}>
                                        <MemberPosts/>
                                    </Box>
                                </TabPanel>
                                              
                                <TabPanel value={"2"}>
                                  <Box className={"menu_name"}>
                                    Followers
                                  </Box>
                                  <Box className={"menu_content"}>
                                    <MemberFollowers actions_enabled={false} />
                                  </Box>
                                </TabPanel>
                                <TabPanel value={"3"}>
                                  <Box className={"menu_name"}>Following</Box>
                                  <Box className={"menu_content"}>
                                    <MemberFollowing actions_enabled={false} />
                                  </Box>
                                </TabPanel>
                                <TabPanel value={"4"}>
                                  <Box className={"menu_name"}>Tanlangan Maqola</Box>
                                  <Box className={"menu_content"}>
                                    <TViewer text={`<h3>Hello</h3>`}/>
                                  </Box>
                                </TabPanel>
                            </Box>
                        </Stack>
                                        
                        <Stack className={"my_page_right"}>
                            <Box className={"order_info_box"}>
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
                                  <span className={"order_user_name"}>Ruslan Chagayev</span>
                                  <span className={"order_user_prof"}>User</span>
                                </Box>
                                <Box className={"user_media_box"}>
                                  <FacebookIcon />
                                  <InstagramIcon />
                                  <TelegramIcon />
                                  <YouTubeIcon />
                                </Box>
                                <Box className={"user_media_box"}>
                                  <p className={"follows"}>Followers: 49</p>
                                  <p className={"follows"}>Followings: 15</p>
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
                                  >{true ? (
                                      <Tab
                                        style={{ flexDirection: "column" }}
                                        value={"4"}
                                        component={() => ( //component={(e) bolishi kerak edi lekin qoysam ishlamadi
                                          <Button
                                            variant={"contained"}
                                            style={{backgroundColor:'rgb(252, 93, 72)'}}
                                          >
                                            Bekor Qilish
                                          </Button>
                                        )}
                                      />
                                  ) : (
                                    <Tab
                                        style={{ flexDirection: "column" }}
                                        value={"4"}
                                        component={() => (  //component={(e) bolishi kerak edi lekin qoysam
                                          <Button
                                            variant={"contained"}
                                            style={{backgroundColor:'rgb(112, 236, 168)'}}
                                          >
                                            Follow qilish
                                          </Button>
                                        )}
                                      />
                                  )}
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
                                    component={() => (  //component={(e) bolishi kerak edi lekin qoysam
                                      <div 
                                        className={`menu_box`} 
                                        onClick={() => setValue("1")}
                                        >
                                            <img src={"/icons/writing_pen.svg"} />
                                            <span>Maqolalari</span>
                                      </div>
                                    )}
                                  />
                                  <Tab
                                    style={{ flexDirection: "column" }}
                                    value={"2"}
                                    component={() => (
                                      <div className={`menu_box ${value}`} onClick={() =>
                                        setValue("2")}
                                      >
                                        <img src={"/icons/followers_group.svg"} />
                                        <span>Followers</span>
                                      </div>
                                    )}
                                  />
                                  <Tab
                                    style={{ flexDirection: "column" }}
                                    value={"3"}
                                    component={() => (
                                      <div className={`menu_box ${value}`} onClick={() => 
                                        setValue("3")}
                                      >
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