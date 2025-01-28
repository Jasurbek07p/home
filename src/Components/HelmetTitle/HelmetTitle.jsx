import { Helmet } from "react-helmet-async";

const HelmetTitle = ({ title }) => {
    return (
        <Helmet>
            {title ?
                <title> White Castle | {title}</title>
                :
                <title>White Castle</title>
            }
        </Helmet>
    );
};

export default HelmetTitle;