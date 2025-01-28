import { FaArrowLeft } from "react-icons/fa";

// 
const Gobackbtn = () => {
    const goback = () => {
        history.back();
    }
    return (
        <div>
            <div onClick={() => goback()} className=' border inline-block p-2 hover:bg-base-200'>
                <div className='flex  items-center space-x-2'>
                    <FaArrowLeft />
                    <p>Back</p>
                </div>
            </div>
        </div>
    );
};

export default Gobackbtn;