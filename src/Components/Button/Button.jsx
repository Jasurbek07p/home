// import React from 'react';

const Button = ({ buttonText, buttonColor, borderColor, backgroundColor = "#fff", backgroundOpacity = "FF", hoverBackgroundColor = "#1F2937" }) => {
    // Generate background color with opacity
    const backgroundColorWithOpacity = `${backgroundColor}${backgroundOpacity}`;
    // const hoverBackgroundColorWithOpacity = `${hoverBackgroundColor}${hoverBackgroundOpacity}`;

    return (
        <div>
            <button
                className="px-3 md:px-6 py-2 md:py-4 rounded-md border-b-4 transition-colors duration-300 text-sm md:text-xl mt-2"
                style={{
                    color: buttonColor,
                    borderColor: borderColor,
                    backgroundColor: backgroundColorWithOpacity,
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = hoverBackgroundColor}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = backgroundColorWithOpacity}
            >
                {buttonText}
            </button>
        </div>
    );
};

export default Button;
