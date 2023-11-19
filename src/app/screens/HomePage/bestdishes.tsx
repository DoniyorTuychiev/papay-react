import { MonetizationOn } from '@mui/icons-material';
import { Box, Container, Stack } from '@mui/material';
import React from 'react';

export function BestDishes(){
    return (
        <div className='best_dishes_frame'>
            <Container>
                <Stack flexDirection={'column'} alignItems={'center'}>
                    <Box className='category_title'>Trentdagi Ovqatlar</Box>
                    <Stack sx={{mt:'43px'}} flexDirection={'row'}>

                        {/* Birinchiinchi dish started */}
                        <Box className='dish_box'>
                            <Stack 
                                className='dish_img' 
                                sx={{
                                    backgroundImage: `url( 
                                        "https://hips.hearstapps.com/hmg-prod/images/delish-220210-tofu-lettuce-wraps-002-ab-web-1646079640.jpg?crop=0.601xw:0.901xh;0.250xw,0.0240xh&resize=640:*"                                
                                    )`,
                                }}
                            >
                                <div className={'dish_sale'}>Normal size</div>
                                <div className={"view_btn"}>
                                    Batavsil Korish
                                    <img 
                                        src={"/icons/arrow_right.svg"}
                                        style={{ marginLeft: '9px'}} 
                                    />
                                </div>
                            </Stack>
                            <Stack className={'dish_desc'}>
                                <span className={'dish_title_text'}>Grechka Maya</span>
                                <span className={'dish_desc_text'}>
                                    <MonetizationOn />
                                    11
                                </span>

                            </Stack>
                        </Box>
                        {/* Birinchinchi dish fineshed */}
                        {/* Ikkinchi dish started */}
                        <Box className='dish_box'>
                            <Stack 
                                className='dish_img' 
                                sx={{
                                    backgroundImage: `url( 
                                        "https://media.cnn.com/api/v1/images/stellar/prod/190205150343-kitfo.jpg?q=w_1600,h_900,x_0,y_0,c_fill/h_618"                                
                                    )`,
                                }}
                            >
                                <div className={'dish_sale'}>Small size</div>
                                <div className={"view_btn"}>
                                    Batavsil Korish
                                    <img 
                                        src={"/icons/arrow_right.svg"}
                                        style={{ marginLeft: '9px'}} 
                                    />
                                </div>
                            </Stack>
                            <Stack className={'dish_desc'}>
                                <span className={'dish_title_text'}>Japan Sakinava</span>
                                <span className={'dish_desc_text'}>
                                    <MonetizationOn />
                                    6.5
                                </span>

                            </Stack>
                        </Box>
                        {/* Ikkinchi dish fineshed */}
                        {/* Uchinchi dish started */}
                        <Box className='dish_box'>
                            <Stack 
                                className='dish_img' 
                                sx={{
                                    backgroundImage: `url( 
                                        "https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza.jpg"
                                    )`,
                                }}
                            >
                                <div className={'dish_sale'}>Large size</div>
                                <div className={"view_btn"}>
                                    Batavsil Korish
                                    <img 
                                        src={"/icons/arrow_right.svg"}
                                        style={{ marginLeft: '9px'}} 
                                    />
                                </div>
                            </Stack>
                            <Stack className={'dish_desc'}>
                                <span className={'dish_title_text'}>Italian Pizza</span>
                                <span className={'dish_desc_text'}>
                                    <MonetizationOn />
                                    15
                                </span>

                            </Stack>
                        </Box>
                        {/* Uchinchi dish fineshed */}
                        {/* Tortinchi dish started */}
                        <Box className='dish_box'>
                            <Stack 
                                className='dish_img' 
                                sx={{
                                    backgroundImage: `url(
                                        "https://img.veenaworld.com/wp-content/uploads/2022/10/Famous-Foods-of-Mysore-%E2%80%93-Dishes-You-Should-Try-on-Your-Next-Vacation.jpg"
                                    )`,
                                }}
                            >
                                <div className={'dish_sale'}>Normal size</div>
                                <div className={"view_btn"}>
                                    Batavsil Korish
                                    <img 
                                        src={"/icons/arrow_right.svg"}
                                        style={{ marginLeft: '9px'}} 
                                    />
                                </div>
                            </Stack>
                            <Stack className={'dish_desc'}>
                                <span className={'dish_title_text'}>Lavash</span>
                                <span className={'dish_desc_text'}>
                                    <MonetizationOn />
                                    7.9
                                </span>
                            </Stack>
                        </Box>
                        {/* Tortinchi dish fineshed */}
                    </Stack>
                </Stack>
            </Container>
        </div>
    );
}