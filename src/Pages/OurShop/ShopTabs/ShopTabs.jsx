import FoodCard from "../../../Components/FoodCard/FoodCard";
import lookingForImg from "../../../assets/assets/looking-around-searching.gif"
const ShopTabs = ({ items }) => {

    return (
        <div>
            {items ?
                <div className="md:grid grid-cols-3 gap-4">
                    {
                        items.map(item =>
                            <FoodCard
                                key={item._id} item={item} food={item} Img={item.image} price={item.price} title={item.name} description={item.recipe}
                            >
                            </FoodCard>
                        )
                    }
                </div>
                :
                <div className=" flex justify-center items-center">
                    <img className="object-contain" src={lookingForImg} alt="" />
                </div>
            }
        </div>
    );
};

export default ShopTabs;