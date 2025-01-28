// import React from 'react';

const MenuCard = ({ food }) => {
    const { image, recipe, name, price } = food;
    return (
        <div>
            <div className="flex gap-6 items-center mt-2 md:mt-0" >
                <img
                    style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: "0px 200px 200px 200px",
                        background: " #D9D9D9",
                    }}
                    src={image} alt="" />
                <div className="space-y-2">
                    <p
                        style={{
                            fontFamily: 'Cinzel'
                        }}
                        className="text-xl text-[#151515} ">
                        {name}------------------
                    </p>
                    <p className="text-[#737373]">{recipe}</p>
                </div>
                <p className="text-[#BB8506] ">${price}</p>
            </div>
        </div>
    );
};

export default MenuCard;