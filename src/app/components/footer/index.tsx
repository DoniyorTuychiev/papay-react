import { Box, Container, Stack } from '@mui/material';
import React, { useState } from 'react';

export function Footer() {
    return (
        <div className='footer_config'>
            <Container>
                <Stack className='main_footer_container'>
                    <Stack flexDirection={"row"} style={{height:"242px"}}>
                        <Stack className='info' flexDirection={"column"}>
                            <Box>
                                <img src={"/papay_footer.svg"} />
                            </Box>
                            <Box className='main_text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor Sed ut perspiciatis unde omnis iste 
                            </Box>
                            <Stack className='contact_links'>
                                <Box><img src={"/icons/facebook.svg"} /></Box>
                                <Box><img src={"/icons/twiter.svg"} /></Box>
                                <Box><img src={"/icons/instagram.svg"} /></Box>
                                <Box><img src={"/icons/youtobe.svg"} /></Box>
                            </Stack>
                        </Stack>
                        <Stack className='parts'>
                            <Box className='part_subject'>Bo'limlar</Box>
                            <Box className='divider'></Box>
                            <Box className='targets'>Bosh Saxifa Oshxonalar Jamiyat Yordam</Box>
                        </Stack>
                        <Stack className='find_us'>
                            <Box className='find'>Bizni top</Box>
                            <Box className='divider'></Box>
                            <Stack className='details' sx={{mt: '19.36px'}}>
                                <Box className='detail_first'>L.</Box>
                                <Box className='detail_second'>Uzbekistan</Box>
                            </Stack>
                            <Stack className='details' sx={{mt: '42px'}}>
                                <Box className='detail_first'>P.</Box>
                                <Box className='detail_second'>+998-99 2-56 25 62</Box>
                            </Stack>
                            <Stack className='details' sx={{mt: '9px'}}>
                                <Box className='detail_first'>E.</Box>
                                <Box className='detail_second'>papay@gmail.com</Box>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Box className="liner"></Box>
                    <Box className="copyrights">
                        Copyrights 2023, All right
                    </Box>
                </Stack>
            </Container>
        </div>
    );
}