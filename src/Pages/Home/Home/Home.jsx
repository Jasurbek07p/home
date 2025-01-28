
import CallUs from "../../../Components/CallUs/CallUs";
import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import Menu from "../Menu/Menu";
import ParallaxMenu from "../ParallaxMenu/ParallaxMenu";
import Recommandation from "../Recommandation/Recommandation";
import SwiperOrder from "../SwiperOrder/SwiperOrder";
import Testimonial from "../Testimonial/Testimonial";
import HelmetTitle from "../../../Components/HelmetTitle/HelmetTitle";

const Home = () => {
    return (
        <div>
            <HelmetTitle title={""}></HelmetTitle>
            <Banner></Banner>
            <SwiperOrder></SwiperOrder>
            <BistroBoss></BistroBoss>
            <Menu></Menu>
            <CallUs></CallUs>
            <Recommandation></Recommandation>
            <ParallaxMenu></ParallaxMenu>
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;