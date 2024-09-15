import React from 'react';

import './styles.scss'

const loader = () => {
    return (
        <div className="spinner-container">
            <div className="spinner"></div>
        </div>
    );
};

export default loader;