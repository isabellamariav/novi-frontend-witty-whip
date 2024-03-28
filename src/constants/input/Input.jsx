import PropTypes from 'prop-types';
import { useState } from 'react';
import './Input.css';

const Input = ({ label, placeholder, errorMessage }) => {
    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
        setFocused(true);
    };

    const handleBlur = () => {
        setFocused(false);
    };

    return (
        <div className={`text-input ${focused ? 'focused' : ''}`}>
            <label className="label">{label}</label>
            <input
                type="text"
                placeholder={placeholder}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    errorMessage: PropTypes.string,
};

export default Input;
