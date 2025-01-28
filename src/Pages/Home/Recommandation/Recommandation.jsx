// import React from 'react';

import FoodCard from "../../../Components/FoodCard/FoodCard";
import SectionStyle from "../../../Components/SectionStyle/SectionStyle";
import cartImage1 from "../../../assets/assets/home/slide1.jpg"
import cartImage2 from "../../../assets/assets/home/slide2.jpg"
import cartImage3 from "../../../assets/assets/home/slide3.jpg"
const Recommandation = () => {
    return (
        <section className="mb-10">
            <SectionStyle
                subHeading={"Should Try"}
                heading={"CHEF RECOMMENDS"}
            >
            </SectionStyle>
            <div className="md:grid grid-cols-3  ">

                <FoodCard Img={cartImage1} description={"Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."} title={"Caeser Salad"}></FoodCard>
                <FoodCard Img={cartImage2} description={"Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."} title={"Pizza "}></FoodCard>
                <FoodCard Img={cartImage3} description={"Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."} title={"Caeser Salad"}></FoodCard>

            </div>
        </section >
    );
};

export default Recommandation;