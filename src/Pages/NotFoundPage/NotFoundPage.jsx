
import { Link } from 'react-router-dom';
import runningManGif from '../../assets/assets/animated-man-running.gif'
import HelmetTitle from '../../Components/HelmetTitle/HelmetTitle';
const NotFoundPage = () => {
    const handleGoBack = () => {
        window.history.back(); // Navigate to the previous page
    };

    return (
        <div>
            <HelmetTitle title={"404"}></HelmetTitle>

            <div className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238] relative">
                <div className="relative">
                    <img
                        src={runningManGif}
                        alt="Running Man"
                        className="absolute w-40 h-40 -top-20 left-1/2 transform -translate-x-1/2"
                    />
                    <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
                </div>
                <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
                    Page Not Found
                </div>
                <div className="mt-5 flex space-x-4">
                    <button onClick={handleGoBack}>
                        <span
                            className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
                        >
                            <span
                                className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
                            ></span>

                            <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                                Go Back
                            </span>
                        </span>
                    </button>
                    <button>
                        <Link
                            to="/"
                            className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
                        >
                            <span
                                className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
                            ></span>

                            <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                                Go Home
                            </span>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
