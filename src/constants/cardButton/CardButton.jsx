import PropTypes from "prop-types";
import "./CardButton.css";

const CardButton = ({ children }) => {
    return (
        <button className="card-button">
            {children}
        </button>
    );
};

CardButton.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CardButton;
