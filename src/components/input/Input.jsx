import PropTypes from 'prop-types';
import './Input.css';

function Input({ label, type, name, placeholder, onChange }) {
    return (
        <div className="form-control">
            <label className="input-label">{label}</label>
            <input className="input-field" onChange={onChange} type={type} name={name} placeholder={placeholder} />
        </div>
    );
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Input;
