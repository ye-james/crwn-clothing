import React from 'react'

import '../css/CustomButton.styles.scss'

const CustomBottom = ({ children, isGoogleSignIn, ...otherProps}) => {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps} >
            {children}
        </button>   
    )
}

export default CustomBottom;