import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Hero = () => {
    return (
        <>
            <Swiper modules={[Navigation, Pagination, Scrollbar,Autoplay]}
                    // navigation
                    pagination={{clickable:true}}
                    scrollbar={{ draggable: true }}
                    autoplay={{
                        delay:2500,
                        pauseOnMouseEnter:true,
                        disableOnInteraction:false

                    }}
                    >

                <SwiperSlide>
                    <img 
                    className='w-[100%] h-[60vh]'
                    src='https://ebz-static.s3.ap-south-1.amazonaws.com/easebuzz-static/upi-credit-cards-v1.png'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                    className='w-[100%] h-[60vh]'
                    src='https://acouriertracking.com/wp-content/uploads/2025/06/courier-tracking-1.webp'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                    className='w-[100%] h-[60vh]'
                    src='https://www.saffiretech.com/wp-content/uploads/2024/12/features-image-optimized.png'/>
                </SwiperSlide>
                
            </Swiper>
        </>

    )
}

export default Hero