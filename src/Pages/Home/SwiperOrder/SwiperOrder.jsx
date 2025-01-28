// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './SwiperOrder.css'
// import required modules
import { Pagination } from 'swiper/modules';
import SectionStyle from '../../../Components/SectionStyle/SectionStyle';

import swiperSlide1 from "../../../assets/assets/home/slide1.jpg"
import swiperSlide2 from "../../../assets/assets/home/slide2.jpg"
import swiperSlide3 from "../../../assets/assets/home/slide3.jpg"
import swiperSlide4 from "../../../assets/assets/home/slide4.jpg"
import swiperSlide5 from "../../../assets/assets/home/slide5.jpg"
const SwiperOrder = () => {
    return (
        <div className='mb-10'>
            <SectionStyle
                heading={"ORDER ONLINE"}
                subHeading={"From 11:00am to 10:00pm"}
            ></SectionStyle>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <img src={swiperSlide1} alt="" />
                    <p className='swiper-text'>Salads</p>
                </SwiperSlide>
                <SwiperSlide >
                    <img src={swiperSlide2} alt="" />
                    <p className='swiper-text'>Pizza</p>
                </SwiperSlide>
                <SwiperSlide >
                    <img src={swiperSlide3} alt="" />
                    <p className='swiper-text'>Soup</p>
                </SwiperSlide>
                <SwiperSlide >
                    <img src={swiperSlide4} alt="" />
                    <p className='swiper-text'>dessert</p>
                </SwiperSlide>
                <SwiperSlide >
                    <img src={swiperSlide5} alt="" />
                    <h4 className='swiper-text'>Salad</h4>
                </SwiperSlide>



            </Swiper>
        </div>
    );
};

export default SwiperOrder;