import { MdDeleteForever } from "react-icons/md";
import useCart from "../../../hook/useCart/useCart";
import Swal from "sweetalert2";

const Mycart = () => {
    const [cart, refetch] = useCart()
    let total = cart.reduce((accum, item) => accum + item.price, 0)

    const handleDeleteItem = (id) => {
        //console.log(id)
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${id}`,
                    {
                        method: 'DELETE',
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
                        },
                    }
                )
                    .then(response => response.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                text: "Item Deleted.",
                                icon: "success"
                            })
                        }
                    }
                    ) // Manipulate the data retrieved back, if we want to do something with it
                    .catch(err =>
                        Swal.fire({
                            title: "Error!",
                            text: `${err}`,
                            icon: "error"
                        })
                    ) // Do something with the error

            }
        });
    }
    return (
        <div>
            <div className="flex  items-center text-2xl justify-evenly">
                <p>Items : {cart.length}</p>
                <p>Total price: ${total}</p>
                <button className="bg-[#D1A054] px-5 py-3 rounded-md text-white text-xl">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                ID
                            </th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((item, index) =>
                                <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.Img}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.title}
                                    </td>
                                    <td>${item.price}</td>
                                    <th onClick={() => handleDeleteItem(item._id)} className="text-3xl text-red-500">
                                        <MdDeleteForever />
                                    </th>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Mycart;