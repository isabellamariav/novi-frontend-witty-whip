import PropTypes from 'prop-types';
import './CardButton.css';

function CardButton({ onClick, isActive, children }) {
    return (
        <button onClick={onClick} className={`active btn btn-block ${isActive ? 'selected' : ''}`}>
            {children}
        </button>
    );
}

CardButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};

export default CardButton;
