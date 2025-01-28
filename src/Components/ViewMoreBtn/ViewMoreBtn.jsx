
const ViewMoreBtn = ({ showAll, setShowAll }) => {


    return (
        <div className="flex justify-center mt-4">
            {showAll ?
                <button
                    onClick={() => { setShowAll(false) }}
                    className="px-8 py-4 hover:bg-slate-400 "
                    style={{
                        borderRadius: "8px",
                        borderBottom: "3px solid #1F2937",
                        fontSize: '20px',
                        color: ' #1F2937',
                        fontWeight: '500'
                    }}
                >Close All</button>
                :
                <button
                    onClick={() => { setShowAll(true) }}
                    className="px-8 py-4 hover:bg-slate-400 "
                    style={{
                        borderRadius: "8px",
                        borderBottom: "3px solid #1F2937",
                        fontSize: '20px',
                        color: ' #1F2937',
                        fontWeight: '500'
                    }}>View All</button>

            }
        </div>
    );
};

export default ViewMoreBtn;