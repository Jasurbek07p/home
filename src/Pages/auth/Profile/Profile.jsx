import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import profileBackgroundImg from '../../../assets/assets/dashboard/image-5.jpg';

const Profile = () => {
    const { user } = useContext(AuthContext);

    // Log the user object for debugging
    console.log(user);
    if (!user) {
        return (
            <div className="pt-20 h-[500px] w-full flex items-center justify-center ">
                <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
                    <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                        </svg>
                    </div>
                    <div className="w-full">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                    </div>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }

    const profilePic = user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
    return (
        <div className="pt-20 ">
            <div
                className="w-full h-[140px] rounded-lg relative "
                style={{ backgroundImage: `url(${profileBackgroundImg})` }}>
                {user &&
                    <div className="relative">
                        {/* Use absolute positioning to move half of the image outside */}
                        <img
                            className=" rounded-full  border-4 absolute transform translate-y-20 left-1/2 -translate-x-1/2 w-[100px]"
                            src={profilePic}
                            alt="User profile"
                        />

                    </div>
                }
            </div>
            <div className="mt-10 text-center">
                <p className="text-xl font-semibold">{user?.displayName}</p>
                <p className="text-blue-800">{user?.email}</p>
            </div>
        </div>
    );
};

export default Profile;
