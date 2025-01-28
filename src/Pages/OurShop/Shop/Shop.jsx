import Cover from "../../../Shared/Cover/Cover";
import coverImg1 from '../../../assets/assets/shop/shop.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopTabs from "../ShopTabs/ShopTabs";
import useMenu from "../../../hook/useMenu/useMenu";
import { useState } from "react";
import { useParams } from "react-router-dom";

import HelmetTitle from "../../../Components/HelmetTitle/HelmetTitle";

const Shop = () => {
    const { category } = useParams()
    // console.log(category)
    const foodCategories = ["salad", "pizza", "soups", "desserts", "drinks"]
    const indexOfSelectedCategory = foodCategories.indexOf(category)
    // console.log(indexOfSelectedCategory)
    const [tabIndex, setTabIndex] = useState(indexOfSelectedCategory);

    const [menu, loading] = useMenu()
    if (loading) {
        return <div className=" h-screen w-full flex justify-center items-center ">
            <div>
                <span className="loading loading-infinity loading-lg "></span>
                <p>Loading......</p>
            </div>
        </div>
    }
    const saladItems = menu?.filter(item => item.category === "salad")
    const pizzaItems = menu?.filter(item => item.category === "pizza")
    const soupItems = menu?.filter(item => item.category === "soup")
    const dessertItems = menu?.filter(item => item.category === "dessert")

    // const data = useLoaderData()
    // console.log(data)

    // console.log(tabIndex)
    // console.log(tabIndex)
    return (
        <div>
            <HelmetTitle title={"Shop"}></HelmetTitle>

            <Cover Img={coverImg1} heading={"OUR SHOP"} description={"Would you like to try a dish?"}></Cover>

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soups</Tab>
                    <Tab>desserts</Tab>
                    <Tab>drinks</Tab>
                </TabList>

                <TabPanel>
                    <ShopTabs items={saladItems}></ShopTabs>
                </TabPanel>
                <TabPanel>
                    <ShopTabs items={pizzaItems}></ShopTabs>
                </TabPanel>
                <TabPanel>
                    <ShopTabs items={soupItems}></ShopTabs>
                </TabPanel>
                <TabPanel>
                    <ShopTabs items={dessertItems}></ShopTabs>
                </TabPanel>
                <TabPanel>
                    <ShopTabs ></ShopTabs>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Shop;