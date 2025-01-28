// Import necessary components
import SectionStyle from "../../../Components/SectionStyle/SectionStyle";
import StarRatings from "react-star-ratings";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useState, useEffect } from 'react';

const Testimonial = () => {
    const [slideHeight, setSlideHeight] = useState(7); // Default height for larger screens

    useEffect(() => {
        const updateSlideHeight = () => {
            if (window.innerWidth < 768) {
                setSlideHeight(18); // Example height for small screens
            } else {
                setSlideHeight(7); // Example height for larger screens
            }
        };

        updateSlideHeight(); // Set initial height
        window.addEventListener('resize', updateSlideHeight); // Update on window resize

        return () => {
            window.removeEventListener('resize', updateSlideHeight); // Clean up listener
        };
    }, []);

    return (
        <section>
            <SectionStyle
                heading={"TESTIMONIALS"}
                subHeading={"What Our Clients Say"}
            >
            </SectionStyle>
            <div className="text-center mb-4">
                <StarRatings
                    rating={4}
                    starDimension="30px"
                    starSpacing="5px"
                    starRatedColor="#CD9003"
                />
            </div>
            <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className=" w-10 md:w-20" viewBox="0 0 100 100" fill="none">
                    <path d="M34.615 46.1542L21.1533 46.1542C19.5506 46.1542 18.1881 45.5935 17.0662 44.4716C15.9449 43.3497 15.3835 41.9876 15.3835 40.3845V38.4623C15.3835 34.2152 16.8862 30.5897 19.8914 27.5846C22.8963 24.5805 26.5225 23.0778 30.7691 23.0778H34.615C35.6565 23.0778 36.5576 22.697 37.3191 21.9361C38.0803 21.1747 38.4608 20.2736 38.4608 19.2319V11.5389C38.4608 10.4974 38.0801 9.59543 37.3191 8.83408C36.5578 8.07379 35.6567 7.69238 34.615 7.69238L30.7691 7.69238C26.602 7.69238 22.6265 8.50446 18.84 10.1263C15.0539 11.7492 11.7791 13.9429 9.01428 16.7077C6.2497 19.4712 4.0566 22.7462 2.43393 26.5328C0.811258 30.3188 -0.000183105 34.2954 -0.000183105 38.4621L-0.000183105 80.7688C-0.000183105 83.9756 1.1211 86.6985 3.36472 88.9429C5.60854 91.1861 8.33355 92.3076 11.5385 92.3076H34.6164C37.8212 92.3076 40.5453 91.1861 42.7894 88.9429C45.0326 86.6985 46.1545 83.9756 46.1545 80.7688V57.6929C46.1545 54.4867 45.0326 51.7638 42.7879 49.5191C40.5449 47.2762 37.8197 46.1542 34.615 46.1542Z" fill="#151515" />
                    <path d="M96.6366 49.5191C94.3936 47.2762 91.6692 46.1542 88.4637 46.1542L75.0022 46.1542C73.4004 46.1542 72.0366 45.5935 70.9166 44.4716C69.7942 43.3497 69.2339 41.9876 69.2339 40.3845V38.4623C69.2339 34.2152 70.7366 30.5897 73.7403 27.5846C76.7442 24.5805 80.3701 23.0778 84.6189 23.0778H88.4639C89.5056 23.0778 90.4074 22.697 91.1683 21.9361C91.9288 21.1747 92.3108 20.2736 92.3108 19.2319V11.5389C92.3108 10.4974 91.929 9.59543 91.1683 8.83408C90.4076 8.07379 89.5058 7.69238 88.4639 7.69238L84.6189 7.69238C80.4495 7.69238 76.4748 8.50446 72.6872 10.1263C68.9018 11.7492 65.628 13.9429 62.8632 16.7077C60.0984 19.4712 57.9043 22.7462 56.2822 26.5328C54.66 30.3188 53.8475 34.2954 53.8475 38.4621V80.7688C53.8475 83.9756 54.9698 86.6985 57.2128 88.9429C59.456 91.1861 62.1804 92.3076 65.3857 92.3076H88.4624C91.668 92.3076 94.3921 91.1861 96.6351 88.9429C98.8798 86.6985 99.9998 83.9756 99.9998 80.7688V57.6929C100 54.4865 98.8798 51.7638 96.6366 49.5191Z" fill="#151515" />
                </svg>
            </div>
            <CarouselProvider
                className="my-6"
                naturalSlideWidth={70}
                naturalSlideHeight={slideHeight}
                totalSlides={3}
            >
                <Slider>
                    <Slide className="space-y-2 text-center px-5" index={0}>
                        <p className="text-sm md:text-xl text-[#444]">Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <h2 className="text-[#CD9003] text-xl md:text-3xl">JANE DOE</h2>
                    </Slide>

                    <Slide className="space-y-2 text-center px-5" index={1}>
                        <p className="text-sm md:text-xl text-[#444]">Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <h2 className="text-[#CD9003] text-xl md:text-3xl">JANE DOE</h2>
                    </Slide>

                    <Slide className="space-y-2 text-center px-5" index={2}>
                        <p className="text-sm md:text-xl text-[#444]">Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <h2 className="text-[#CD9003] text-xl md:text-3xl">JANE DOE</h2>
                    </Slide>
                </Slider>
                <div className="text-center md:text-start">
                    <ButtonBack className="text-white bg-slate-500 px-4 py-2 rounded-lg me-2">Back</ButtonBack>
                    <ButtonNext className="text-white bg-slate-500 px-4 py-2 rounded-lg">Next</ButtonNext>
                </div>
            </CarouselProvider>
        </section>
    );
};

export default Testimonial;
