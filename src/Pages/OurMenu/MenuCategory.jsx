import { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import MenuCard from "../Home/Menu/MenuCard";
import ViewMoreBtn from "../../Components/ViewMoreBtn/ViewMoreBtn";
import { Link } from "react-router-dom";

const MenuCategory = ({ foodItems, Img, heading, description, section }) => {
    const [showAll, setShowAll] = useState(false)
    const foods = showAll ? foodItems : foodItems.slice(0, 6);
    const route = heading.toLowerCase();
    return (
        <div className="mb-10">
            <Cover Img={Img} heading={heading} description={description} section={section} ></Cover>
            <div className="md:grid grid-cols-2 gap-8  pt-16 border border-gray-200 rounded-md px-5 py-5 ">
                {
                    foods.map(food =>
                        <MenuCard key={food._id} food={food}></MenuCard>
                    )
                }
            </div>
            <div className="flex justify-center items-center gap-5">
                <ViewMoreBtn showAll={showAll} setShowAll={setShowAll}></ViewMoreBtn>
                <Link to={`/shop/${route}`}>
                    <button
                        className="px-8 py-4 hover:bg-slate-400 mt-4 "
                        style={{
                            borderRadius: "8px",
                            borderBottom: "3px solid #1F2937",
                            fontSize: '20px',
                            color: ' #1F2937',
                            fontWeight: '500'
                        }}>Order Now</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;