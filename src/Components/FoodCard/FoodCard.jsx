import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useCart from "../../hook/useCart/useCart";

const FoodCard = ({ Img, title, description, price, item }) => {
    // console.log(item)
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [, refetch] = useCart()
    // console.log(user)

    const handleAddToCart = (item) => {
        if (user && user.email) {
            const cartItem = { menuId: item._id, Img, title, description, price, email: user?.email }
            // console.log('clicked', item)
            fetch("https://white-castle-restaurant-api.onrender.com/carts", {
                method: "POST",
                body: JSON.stringify(cartItem),
                // Adding headers to the request 
                headers: {
                    "Content-type": "application/json"
                }
            })
                // Converting to JSON
                .then(response => response.json())
                // Displaying results to console 
                .then(data => {
                    refetch();
                    toast.success('Successfully added one item!', data);
                }
                );
        }
        else {
            Swal.fire({
                title: "Login Please",
                text: "Login and Add product",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "login"
            }).then((result) => {
                //to navigate if not login in and to redirect the page location agter the event hiting whrere it suppose to go
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }

            });

        }
    }


    return (
        <div className="card bg-base-100 w-80 md:w-96 shadow-xl mt-4 md:mt-0 mx-auto">
            <img
                src={Img}
                alt="Shoes"
                style={{ borderRadius: '15px' }}
                className="h-[250px] md:h-[250px] object-cover p-2" />
            {price &&
                <p
                    className="absolute right-5 top-5  rounded-sm bg-[#111827] font-semibold text-white px-3 py-1"
                >${price}</p>
            }
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart(item)}
                        className="hover:bg-[#1F2937] text-[#BB8506] bg-[#E8E8E8] px-6 py-4 border-b-4 border-[#BB8506] rounded-md ">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;