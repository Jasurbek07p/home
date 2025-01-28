// import React from 'react';
import menuImg1 from '../../assets/assets/menu/banner3.jpg'
import pizzaImg from '../../assets/assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/assets/menu/salad-bg.jpg'
import soupImg from '../../assets/assets/menu/soup-bg.jpg'
import dessertImg from '../../assets/assets/menu/dessert-bg.jpeg'
import Cover from "../../Shared/Cover/Cover";
import SectionStyle from "../../Components/SectionStyle/SectionStyle";
import useMenu from '../../hook/useMenu/useMenu'
import MenuCategory from './MenuCategory'
import HelmetTitle from '../../Components/HelmetTitle/HelmetTitle'
// import { useLoaderData } from 'react-router-dom'
// import { useEffect } from 'react'

const OurMenu = () => {
    const [menu] = useMenu()
    const soupItems = menu?.filter(item => item.category === "soup")
    const saladItems = menu?.filter(item => item.category === "salad")
    const pizzaItems = menu?.filter(item => item.category === "pizza")
    const dessertItems = menu?.filter(item => item.category === "dessert")
    // console.log('pizza', pizzaItems,'dessert', dessertItems)

    // useEffect(() => {
    //     fetch("https://white-castle-restaurant-api.vercel.app/menu")
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])
    return (
        <div>
            <HelmetTitle title={"Menu"}></HelmetTitle>

            {/* our menu section */}
            <Cover Img={menuImg1} heading={"OUR MENU"} description={"Would you like to try a dish?"}></Cover>

            {/* offer section */}
            <SectionStyle heading={"TODAY'S OFFER"} subHeading={"Don't miss"}></SectionStyle>

            {/* DESSERTS section*/}
            <MenuCategory
                foodItems={dessertItems} Img={dessertImg} heading={"DESSERTS"} description={"Would you like to try a dish?"} section={true}>
            </MenuCategory>

            {/* PIZZA section*/}
            <MenuCategory
                foodItems={pizzaItems} Img={pizzaImg} heading={"PIZZA"} description={"Would you like to try a dish?"} section={true}>
            </MenuCategory>

            {/* SALADS section*/}
            <MenuCategory
                foodItems={saladItems} Img={saladImg} heading={"SALADS"} description={"Would you like to try a dish?"} section={true}>
            </MenuCategory>

            {/* SOUPS section*/}
            <MenuCategory
                foodItems={soupItems} Img={soupImg} heading={"SOUPS"} description={"Would you like to try a dish?"} section={true}>
            </MenuCategory>

        </div>
    );
};

export default OurMenu;