import PropTypes from "prop-types";
import "./HomeButton.css";

const HomeButton = ({ text }) => {
    return (
        <button className="home-button">
            {text}
        </button>
    );
};

HomeButton.propTypes = {
    text: PropTypes.string.isRequired,
};

export default HomeButton;
