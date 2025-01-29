import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../../assets/assets/home/01.jpg'
import slider2 from '../../../assets/assets/home/02.jpg'
import slider4 from '../../../assets/assets/home/04.jpg'


const Banner = () => {
    return (
        <Carousel className="relative ">
            <div>
                <img src={slider1} />
            </div>
            <div>
                <img src={slider2} />
            </div>
           
            <div>
                <img src={slider4} />
            </div>
           

        </Carousel>
    );
};

export default Banner;