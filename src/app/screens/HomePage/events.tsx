import { Box, Container, Stack } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination} from 'swiper';
SwiperCore.use([Autoplay, Navigation, Pagination]);

export function Events() {
    const events_list = [
        {
            title:'Boyin Foodega marxamat',
            desc: 'Yangicha usluda va yangicha Tam va Yangicha his',
            author: 'Abdurahmon Mufid',
            data: '2022/02/12',
            location: 'Toshkent, Nurafshon kocha',
            img:'/restaurant/osh.jpg',
        },
        {
            title:'Katta chegirma endi Bellissimoda',
            desc: 'Faqat 25~31-iyul kunlari antiqa pitsa yegani tashrif buyuring!',
            author: 'BelissimoUz',
            data: '2022/07/17',
            location: 'Toshkent, Chilonzor kocha',
            img:'/restaurant/uygurlagmon.jpg',
        },
        {
            title:'Hali his qilmagan hisni his qilmoqchimisiz?',
            desc: 'Merhaba prinikedi orqali 50% chegirmaga ega boling!',
            author: 'Chiken House',
            data: '2022/09/22',
            location: 'Toshkent, Yunus Abad kocha',
            img:'/restaurant/boyinfood.jpg',
        },
        {
            title:'Yangicha yondashuv endi Uzbekistanda',
            desc: 'Uzbekistandagi eng yirik ulgurji bozor',
            author: 'Food City',
            data: '2022/06/04',
            location: 'Toshkent, Qoyliq mavzesi',
            img:'/restaurant/shashlik.jpg',
        },
    ];
    return (
        <div className='events_frame'>
            <Container sx={{overflow: 'hidden'}}>
                <Stack className={'events_main'}>
                    <Box className={'events_text'}>
                    <span className={'category_title'}>Hodisalar</span>
                    </Box>
                    <Box className={'prev_next_frame'}>
                        <img 
                          src={'/icons/arrow_right.svg'}
                          className={'swiper-button-prev'}
                          style={{transform:'rotate(-180deg)'}} 
                        />
                        <div className={'dot_frame_pagination swiper-pagination'}></div>
                        <img 
                          src={'/icons/arrow_right.svg'}
                          className={'swiper-button-next'}
                        />
                    </Box>
                    <Swiper 
                      className={'events_info swiper-wrapper'}
                      slidesPerView={'auto'}
                      centeredSlides={true}
                      spaceBetween={30}
                      navigation={{
                          nextEl:'.swiper-button-next',
                          prevEl:'.swiper-button-prev',
                      }}
                      pagination={{
                          el:'.swiper-pagination',
                          clickable: true,
                      }}
                      autoplay={{
                        delay:2000, /**delay: 2000; da har ikki sekundda rasmla almaship turadi */
                        disableOnInteraction: true, /** true bolsa cursor borganda slide toxtaydi */
                      }}
                      >
                      {events_list.map((value, number) => {
                        return(
                            <SwiperSlide className= 'events_info_frame'> 
                                <div className="events_img">
                                    <img src={value.img} className='events_img'/>
                                </div>
                                <Box className={'events_desc'}>
                                    <Box className={'events_bott'}>
                                        <Box className={'bott_left'}>
                                            <div className="event_title_speaker">
                                                <strong>{value.title}</strong>
                                                <div className="event_organizator">
                                                    <img 
                                                       src={'/icons/speaker.png'}
                                                       style={{width:'20px', marginRight:'10px', height: '24px'}}
                                                       />
                                                       <p className='spec_text_author'>{value.author}</p>
                                                </div>
                                            </div>
                                            <p 
                                             className={'text_desc'}
                                             style={{ marginTop:'10px'}}
                                            >
                                                {""}
                                                {value.desc}{""}
                                            </p>

                                            <div 
                                            className="bott_info"
                                            style={{marginTop: '10px'}}
                                            >
                                                <div className="bott_info_main">
                                                    <img src={'/icons/calendar.png'}
                                                    style={{marginRight:'10px', width:'24px', height:'24px'}}
                                                    />
                                                    {value.data}
                                                </div>
                                                <div className="bott_info_main">
                                                    <img src={'/icons/location.png'}
                                                    style={{marginRight:'10px', width:'24px', height:'24px'}}
                                                    />
                                                    {value.location}
                                                </div>
                                            </div>
                                        </Box>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        );
                      })}  

                    </Swiper>
                </Stack>
            </Container>
        </div>
    );
}