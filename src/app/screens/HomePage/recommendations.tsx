import { Avatar, Box, Container, Stack } from '@mui/material';
import React from 'react';

export function Recommendations(){
    return (
        <div className='top_article_frame'>
            <Container maxWidth='lg'
                sx={{mb:'50px', mt:'60'}}
                style={{position:  'relative'}}
            >
                <Stack
                    flexDirection={'column'}
                    alignItems={'center'}
                    sx={{mt:'45px'}}
                >
                    <Box className= {'category_title'}>Tavsiya qilingan Maqolalar</Box>
                    <Stack className='article_container_light'>
                    <Stack className='article_main'>
                        <Stack className='article_container'>
                            <Box className='article_category'>Kop korilganlar</Box>
                            <Stack className='article_box'>
                                <Box 
                                className='article_img'
                                sx={{
                                    backgroundImage:"url(/dishes/lamb.jpg)" 
                                }}
                                ></Box>
                                <Box className= 'article_info'>
                                    <Box className = 'article_main_info'>
                                        <div className="article_author">
                                            <Avatar alt='Author_photo'
                                              src="/auth/default_user.svg"
                                              sx={{ width: "35px", height: "35px" }}
                                            />
                                            <span className="author_username">Jonibek</span>
                                        </div>
                                        <span className="article_title">
                                          Ozgacha uslub
                                        </span>
                                        <span className="article_desc"></span>
                                    </Box>
                                </Box>
                            </Stack>
                            <Stack className="article_box">
                                <Box 
                                    className='article_img'
                                    sx={{
                                        backgroundImage:"url(/dishes/kebab.jpg)" 
                                    }}
                                ></Box>
                                <Box className={"article_info"}>
                                  <Box className={"article_main_info"}>
                                    <div className="article_author">
                                      <Avatar
                                        alt="Author_photo"
                                        src="/auth/default_user.svg"
                                        sx={{ width: "35px", height: "35px" }}
                                      />
                                      <span className="author_username">Jahongir</span>
                                    </div>
                                    <span className="article_title">
                                      shirin taomlar vaqti
                                    </span>
                                    <span className="article_desc">Donar kuni</span>
                                  </Box>
                                </Box>
                            </Stack>
                            <Box className={"article_category"}>Ko'p yoqtirilgan</Box>
                            <Stack className="article_box">
                                <Box
                                  className={"article_img"}
                                  sx={{ backgroundImage: "url(/dishes/donar.jpg)" }}
                                ></Box>
                                <Box className={"article_info"}>
                                  <Box className={"article_main_info"}>
                                    <div className="article_author">
                                      <Avatar
                                        alt="Author_photo"
                                        src="/auth/default_user.svg"
                                        sx={{ width: "35px", height: "35px" }}
                                      />
                                      <span className="author_username">Sherzot</span>
                                    </div>
                                    <span className="article_title">
                                      Kebab yeymiz
                                    </span>
                                    <span className="article_desc">judayam zor</span>
                                  </Box>
                                </Box>
                            </Stack>
                            <Stack className="article_box">
                                <Box
                                  className={"article_img"}
                                  sx={{ backgroundImage: "url(/dishes/kebab.jpg)" }}
                                ></Box>
                                <Box className={"article_info"}>
                                  <Box className={"article_main_info"}>
                                    <div className="article_author">
                                      <Avatar
                                        alt="Author_photo"
                                        src="/auth/default_user.svg"
                                        sx={{ width: "35px", height: "35px" }}
                                      />
                                      <span className="author_username">Jonny</span>
                                    </div>
                                    <span className="article_title">
                                    mazali
                                    </span>
                                    <span className="article_desc">arzon narxda</span>
                                  </Box>
                                </Box>
                            </Stack>
                            </Stack>
                            <Stack className="article_container_right">
                            <Stack className="article_container">
                                <Box className={"article_category"}>Mashhurlar</Box>
                                <Box className={"article_news"}>
                                  <h1 style={{color: "orange"}}>TViewer</h1>
                                </Box>
                                <Box className={"article_news"}>
                                  <h1 style={{color: "orange"}}>TViewer</h1>
                                </Box>
                            </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </div>
    );
}