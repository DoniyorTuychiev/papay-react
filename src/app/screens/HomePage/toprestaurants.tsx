import { Box, Container } from '@mui/material';
import {Stack} from "@mui/system";
import React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { CssVarsProvider } from '@mui/joy/styles';
import IconButton from '@mui/joy/IconButton';
import CardOverflow from '@mui/joy/CardOverflow';
import {Favorite} from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';



export function TopRestaurants(){
    return (
        <div className='top_restaurant_frame'>
            <Container>
                <Stack 
                flexDirection={'column'} 
                alignItems={'center'} 
                sx={{mt: '45px'}}>
                    <Box className='category_title'>TOP Restaurants</Box>
                    <Stack sx={{mt:"43px"}} flexDirection={'row'} m={'16px'}>
                        <CssVarsProvider> {/*Bu priovider materila UI ni ichida material/joy ui  ni ishlatish imcon beradi */}   
                             {/**Birinchi Card started */}
                             <Card 
                            sx={{ 
                                minHeight: 430, 
                                minwidth: 375, 
                                mr:'35px', 
                                cursor: 'pointer'
                                }}>
                                <CardCover>
                                    <img
                                    src="/restaurant/belgorama.jpg"
                                    loading="lazy"
                                    alt=""
                                    />
                                </CardCover>
                                <CardCover
                                    sx={{
                                    background:
                                        'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                                    }}
                                />
                                <CardContent sx={{ justifyContent: 'flex-end' }}>
                                    <Typography level="title-lg" textColor="#fff">
                                    Texas De Brazil
                                    </Typography>
                                    <Typography
                                    startDecorator={<LocationOnRoundedIcon />}
                                    textColor="neutral.300"
                                    >
                                        Tashkent, Yunus Abad 4-1
                                    </Typography>
                                </CardContent>
                                    {/*material ui dagi CardOverflow rasm ostida likes comments uchunjoy ajratadi */}
                                <CardOverflow 
                                sx={{
                                    display:'flex',
                                    gap: 1.5,
                                    py: 1.5,
                                    px: 'var(--Card-padding',
                                    borderTop: '1px solid'
                                }}>
                                    <IconButton
                                    aria-label='Like minimal photography'
                                    size='md'
                                    variant='solid'
                                    color='neutral'
                                    sx={{
                                        position: 'absolute',
                                        zIndex: 2,
                                        borderRadius: '50%',
                                        right:'1rem',
                                        bottom: 45,
                                        transform: 'translateY(50%)',
                                        color: 'rgb(0,0,0,.4)'
                                    }}>
                                        <Favorite style={{fill:'white'}} />
                                    </IconButton>

                                    <Typography 
                                        // level="body3" bu yerda ishlaadi soreman
                                        sx={{
                                            fontWeight: 'md',
                                            color: 'neutral.300',
                                            alignItems:'center',
                                            display:'flex',
                                        }}
                                    >
                                       100{" "}
                                       <VisibilityIcon sx={{fontSize: 20, marginLeft: '5px'}}/>
                                    </Typography>
                                    <Box sx={{width: 2, bgcolor:'divider'}} />
                                    <Typography 
                                        sx={{
                                            fontWeight: 'md',
                                            color: 'neutral.300',
                                            alignItems:'center',
                                            display:'flex',
                                        }}
                                    >
                                       <div>50</div>
                                       <Favorite sx={{fontSize: 20, marginLeft: '5px'}}/>
                                    </Typography>
                                </CardOverflow>
                            </Card>
                            {/**Birinchi Card fineshed */}
                            {/**Ikkinchi Card started */}
                            <Card 
                            sx={{ 
                                minHeight: 430, 
                                minwidth: 375, 
                                mr:'35px', 
                                cursor: 'pointer'
                                }}>
                                <CardCover>
                                    <img
                                    src="/restaurant/burak.webp"
                                    loading="lazy"
                                    alt=""
                                    />
                                </CardCover>
                                <CardCover
                                    sx={{
                                    background:
                                        'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                                    }}
                                />
                                <CardContent sx={{ justifyContent: 'flex-end' }}>
                                    <Typography level="title-lg" textColor="#fff">
                                    Texas De Brazil
                                    </Typography>
                                    <Typography
                                    startDecorator={<LocationOnRoundedIcon />}
                                    textColor="neutral.300"
                                    >
                                        Tashkent, Yunus Abad 4-1
                                    </Typography>
                                </CardContent>
                                    {/*material ui dagi CardOverflow rasm ostida likes comments uchunjoy ajratadi */}
                                <CardOverflow 
                                sx={{
                                    display:'flex',
                                    gap: 1.5,
                                    py: 1.5,
                                    px: 'var(--Card-padding',
                                    borderTop: '1px solid'
                                }}>
                                    <IconButton
                                    aria-label='Like minimal photography'
                                    size='md'
                                    variant='solid'
                                    color='neutral'
                                    sx={{
                                        position: 'absolute',
                                        zIndex: 2,
                                        borderRadius: '50%',
                                        right:'1rem',
                                        bottom: 45,
                                        transform: 'translateY(50%)',
                                        color: 'rgb(0,0,0,.4)'
                                    }}>
                                        <Favorite style={{fill:'white'}} />
                                    </IconButton>

                                    <Typography 
                                        // level="body3"
                                        sx={{
                                            fontWeight: 'md',
                                            color: 'neutral.300',
                                            alignItems:'center',
                                            display:'flex',
                                        }}
                                    >
                                       100{" "}
                                       <VisibilityIcon sx={{fontSize: 20, marginLeft: '5px'}}/>
                                    </Typography>
                                    <Box sx={{width: 2, bgcolor:'divider'}} />
                                    <Typography 
                                        sx={{
                                            fontWeight: 'md',
                                            color: 'neutral.300',
                                            alignItems:'center',
                                            display:'flex',
                                        }}
                                    >
                                       <div>50</div>
                                       <Favorite sx={{fontSize: 20, marginLeft: '5px'}}/>
                                    </Typography>
                                </CardOverflow>
                            </Card>
                            {/**Ikkinchi Card fineshed */}
                            {/**Uchinchi Card started */}
                            <Card 
                            sx={{ 
                                minHeight: 430, 
                                minwidth: 375, 
                                mr:'35px', 
                                cursor: 'pointer'
                                }}>
                                <CardCover>
                                    <img
                                    src="/restaurant/italian_restaurant.jpg"
                                    loading="lazy"
                                    alt=""
                                    />
                                </CardCover>
                                <CardCover
                                    sx={{
                                    background:
                                        'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                                    }}
                                />
                                <CardContent sx={{ justifyContent: 'flex-end' }}>
                                    <Typography level="title-lg" textColor="#fff">
                                    Itallian Pizzeria 
                                    </Typography>
                                    <Typography
                                    startDecorator={<LocationOnRoundedIcon />}
                                    textColor="neutral.300"
                                    >
                                        Millano, Barbaro-meto 4-145
                                    </Typography>
                                </CardContent>
                                    {/*material ui dagi CardOverflow rasm ostida likes comments uchunjoy ajratadi */}
                                <CardOverflow 
                                sx={{
                                    display:'flex',
                                    gap: 1.5,
                                    py: 1.5,
                                    px: 'var(--Card-padding',
                                    borderTop: '1px solid'
                                }}>
                                    <IconButton
                                    aria-label='Like minimal photography'
                                    size='md'
                                    variant='solid'
                                    color='neutral'
                                    sx={{
                                        position: 'absolute',
                                        zIndex: 2,
                                        borderRadius: '50%',
                                        right:'1rem',
                                        bottom: 45,
                                        transform: 'translateY(50%)',
                                        color: 'rgb(0,0,0,.4)'
                                    }}>
                                        <Favorite style={{fill:'white'}} />
                                    </IconButton>

                                    <Typography 
                                        // level="body3"
                                        sx={{
                                            fontWeight: 'md',
                                            color: 'neutral.300',
                                            alignItems:'center',
                                            display:'flex',
                                        }}
                                    >
                                       100{" "}
                                       <VisibilityIcon sx={{fontSize: 20, marginLeft: '5px'}}/>
                                    </Typography>
                                    <Box sx={{width: 2, bgcolor:'divider'}} />
                                    <Typography 
                                        sx={{
                                            fontWeight: 'md',
                                            color: 'neutral.300',
                                            alignItems:'center',
                                            display:'flex',
                                        }}
                                    >
                                       <div>50</div>
                                       <Favorite sx={{fontSize: 20, marginLeft: '5px'}}/>
                                    </Typography>
                                </CardOverflow>
                            </Card>
                            {/**Uchinchi Card fineshed */}
                            {/**Tortinchi Card started */}
                            <Card 
                            sx={{ 
                                minHeight: 430, 
                                minwidth: 375, 
                                mr:'35px', 
                                cursor: 'pointer'
                                }}>
                                <CardCover>
                                    <img
                                    src="/restaurant/basribaba.jpg"
                                    loading="lazy"
                                    alt=""
                                    />
                                </CardCover>
                                <CardCover
                                    sx={{
                                    background:
                                        'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                                    }}
                                />
                                <CardContent sx={{ justifyContent: 'flex-end' }}>
                                    <Typography level="title-lg" textColor="#fff">
                                    Basri Baba
                                    </Typography>
                                    <Typography
                                    startDecorator={<LocationOnRoundedIcon />}
                                    textColor="neutral.300"
                                    >
                                        Tashkent , Haddimich 789-5
                                    </Typography>
                                </CardContent>
                                    {/*material ui dagi CardOverflow rasm ostida likes comments uchunjoy ajratadi */}
                                <CardOverflow 
                                sx={{
                                    display:'flex',
                                    gap: 1.5,
                                    py: 1.5,
                                    px: 'var(--Card-padding',
                                    borderTop: '1px solid'
                                }}>
                                    <IconButton
                                    aria-label='Like minimal photography'
                                    size='md'
                                    variant='solid'
                                    color='neutral'
                                    sx={{
                                        position: 'absolute',
                                        zIndex: 2,
                                        borderRadius: '50%',
                                        right:'1rem',
                                        bottom: 45,
                                        transform: 'translateY(50%)',
                                        color: 'rgb(0,0,0,.4)'
                                    }}>
                                        <Favorite style={{fill:'white'}} />
                                    </IconButton>

                                    <Typography 
                                        // level="body3"
                                        sx={{
                                            fontWeight: 'md',
                                            color: 'neutral.300',
                                            alignItems:'center',
                                            display:'flex',
                                        }}
                                    >
                                       100{" "}
                                       <VisibilityIcon sx={{fontSize: 20, marginLeft: '5px'}}/>
                                    </Typography>
                                    <Box sx={{width: 2, bgcolor:'divider'}} />
                                    <Typography 
                                        sx={{
                                            fontWeight: 'md',
                                            color: 'neutral.300',
                                            alignItems:'center',
                                            display:'flex',
                                        }}
                                    >
                                       <div>50</div>
                                       <Favorite sx={{fontSize: 20, marginLeft: '5px'}}/>
                                    </Typography>
                                </CardOverflow>
                            </Card>
                            {/**Tortinchi Card fineshed */}
                        </CssVarsProvider>
                    </Stack>
                </Stack>
            </Container>
        </div>
    );
}