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
                    className="w-full h-[60vh]"
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
                    className='w-full h-full object-cover object-center'
                    src='https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=2070&auto=format&fit=crop'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                    className='w-full h-full object-cover object-center'
                    src='https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                    className='w-full h-full object-cover object-center'
                    src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop'/>
                </SwiperSlide>
                
            </Swiper>
        </>

    )
}

export default Hero