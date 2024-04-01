import PropTypes from 'prop-types';
import './SideCard.css';

const SideCard = ({ children }) => {
    return (
        <aside className="side-card">
            <div className="navbar-margin"></div>
            {children}
        </aside>
    );
};

SideCard.propTypes = {
    children: PropTypes.node.isRequired
};

export default SideCard;
