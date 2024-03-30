import React from 'react';
import loaderImage from '../assets/loader.gif';
import './Loader.css';

const Loader = () => {
    return (
        <div className="page-loader">
            <img src={loaderImage} alt="Loading..." className="loader-image" />
        </div>
    );
};

export default Loader;
