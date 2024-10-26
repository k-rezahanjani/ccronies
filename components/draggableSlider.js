// components/DraggableSlider.js
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import CardLogo from './CardLogo';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Scrollbar } from 'swiper/modules';


const DraggableSlider = ({ logos }) => {
    return (
        <Swiper
            modules={[Autoplay, Navigation, Scrollbar]}
            spaceBetween={5}
            slidesPerView={5}
            pagination={{ clickable: false }}
            scrollbar={{ draggable: true }}
            grabCursor={true}
            loop={true}
            autoplay={{
                delay: 1500,
                disableOnInteraction: false
            }}
        >
            {logos.map((logo, index) => (
                <SwiperSlide key={index}>
                    <CardLogo
                        image={logo.image}
                        name={logo.name}
                        title={logo.title}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default DraggableSlider;
