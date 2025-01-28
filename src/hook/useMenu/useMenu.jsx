import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setItem] = useState([])
    console.log(menu)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://white-castle-restaurant-api.onrender.com/menu")
            .then(res => res.json())
            .then(data => {
                setItem(data);
                setLoading(false);
            }
            )
    }, [])
    return [menu, loading];
};

export default useMenu;