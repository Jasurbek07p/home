
const Cover = ({ Img, heading, description, section = false }) => {
    const imageUrl = Img || 'https://via.placeholder.com/800x400';  // Fallback URL

    return (
        <div
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}

            className={`hero bg-base-200 h-[250px] ${section ? 'md:h-[400px]' : 'md:h-[500px]'}`}
        >
            <div className="hero-content text-center">
                <div
                    style={{
                        fontFamily: 'Cinzel',
                        backgroundColor: 'rgba(21, 21, 21, 0.60)',
                    }}
                    className="px-[100px] py-[25px] md:px-[250px] md:py-[70px] text-white"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-[70px] font-bold">
                        {heading}
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl">
                        {description}
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Cover;
