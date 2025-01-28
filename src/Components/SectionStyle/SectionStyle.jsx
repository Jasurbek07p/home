
const SectionStyle = ({ subHeading, heading }) => {
    return (
        <div>
            <div className="w-1/2 md:w-1/3	text-center mx-auto my-4 md:my-10">
                <p className="text-[#D99904] italic text-xs  md:text-xl pb-2">---{subHeading}---</p>
                <p className="uppercase text-2xl md:text-4xl text-[#151515] border-y-4 py-2 ">{heading}</p>
            </div>
        </div>
    );
};

export default SectionStyle;