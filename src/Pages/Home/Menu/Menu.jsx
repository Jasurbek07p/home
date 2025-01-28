import { useState } from "react";
import SectionStyle from "../../../Components/SectionStyle/SectionStyle";
import MenuCard from "./MenuCard";
import useMenu from "../../../hook/useMenu/useMenu";
import ViewMoreBtn from "../../../Components/ViewMoreBtn/ViewMoreBtn";

const Menu = () => {
    const [items, loading] = useMenu() //used custom hook to load menu data
    const [showAll, setShowAll] = useState(false)
    if (loading) {
        return <div className="h-[200px] flex justify-center items-center">
            <div>
                <span className="loading loading-infinity loading-lg"></span>
                <p>Loading......</p>
            </div>
        </div>
    }
    const foods = showAll ? items : items.slice(0, 6);
    return (
        <section className="mb-10">
            <SectionStyle
                heading={"FROM OUR MENU"}
                subHeading={"Check it out"}
            >
            </SectionStyle>

            <div className="md:grid grid-cols-2 gap-8  pt-10 border border-gray-200 rounded-md px-5 py-5">
                {
                    foods.map(food =>
                        <MenuCard key={food._id} food={food}></MenuCard>
                    )
                }
            </div>
            <ViewMoreBtn showAll={showAll} setShowAll={setShowAll}></ViewMoreBtn>
        </section>
    );
};

export default Menu;