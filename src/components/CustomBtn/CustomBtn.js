import React from 'react';

import './CustomBtn.scss';

const CustomBtn = ({ children, isGoogleSignIn, ...otherProps}) => {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-btn`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomBtn;
