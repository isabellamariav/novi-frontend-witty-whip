import PropTypes from 'prop-types';
import './SideCard.css';

const SideCard = ({ children }) => {
    return (
        <div className="side-card">
            <div className="navbar-margin"></div>
            {children}
        </div>
    );
};

SideCard.propTypes = {
    children: PropTypes.node.isRequired
};

export default SideCard;
