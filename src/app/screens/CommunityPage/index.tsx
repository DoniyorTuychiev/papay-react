import React, { useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import Tab from "@mui/material/Tab";
import "../../css/community.css";
import Pagination from "@mui/material/Pagination";
import { TargetArticles } from "./targetArticles";
import { CommunityChats } from "./communityChats";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// const targetBoArticles = [1, 2, 3, 4, 5]; {/*1- birinchi qism*/}

export function CommunityPage(props: any) {
    /**INITIALIZATIONS */
    const [value, setValue] = React.useState('1');
    
    /** HANDLERS **/
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    const handlePaginationChange = (event: any, newValue: number) => {
        console.log(value);
    };
    return(
        <div className={"community_page"}>
            <div className={"community_frame"}>
                <Container sx={{ mt: "50px", mb: "50px" }}>
                  <Stack flexDirection={"row"} justifyContent={"space-between"}>
                    <CommunityChats />
                    <Stack
                      className={"community_all_frame"}
                      inputMode={"text"}
                      style={{ border: "1px solid #fff" }}
                    >
                      <TabContext value={value}>
                        <Box className={"article_tabs"}>
                            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                                <TabList  //bu qism tablitsalarni ozgartirishda yordam beradi va tablet boarticles methodini quyidagicha yozilishi mumkin 1- qism 2- qismdagidek
                                 onChange={handleChange}
                                 aria-label="lab API tabs example"
                                 style= {{borderColor: 'blue'}}
                                >
                                    <Tab label="Barcha Maqolalar" value={'1'} />
                                    <Tab label="Mashxurlar" value={'2'} />
                                    <Tab label="Oshxonaga baho" value={'3'} />
                                    <Tab label="Hikoyalar" value={'4'} />
                                </TabList>
                            </Box>
                        </Box>

                        <Box className={"article_main"}>
                          <TabPanel value={"1"}> {/**TabPanel value= {'1'} sahifa ochilganda bydefault {1} raqamiga ega Barcha Maqolalar sectioni ochiladi.  */}
                            <TargetArticles
                              targetBoArticles={[1,2,3]}/> {/*2- birinchi qism*/}
                          </TabPanel>
                          <TabPanel value={"2"}>
                            <TargetArticles
                              targetBoArticles={[1,2,3,4,5]} />
                          </TabPanel>
                          <TabPanel value={"3"}>
                            <TargetArticles
                              targetBoArticles={[1]} />
                          </TabPanel>
                          <TabPanel value={"4"}>
                            <TargetArticles
                              targetBoArticles={[1,2]}/>
                          </TabPanel>
                        </Box>

                        <Box className={"article_bott"}>
                          <Pagination
                            count={5}
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
                            onChange={handlePaginationChange}
                          />
                        </Box>
                      </TabContext>
                    </Stack>
                  </Stack>
                </Container>
            </div>
        </div>  
    );
}
