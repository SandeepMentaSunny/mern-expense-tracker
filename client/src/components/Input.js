import React from 'react';

export const Input = ({ htmlFor, label, type, placeholder, value, onInputChange }) => {
    return(
        <div className="form-control">
            <label htmlFor={htmlFor}>{label}</label>
            <input type={type} placeholder={placeholder} value={value} onChange={(e) => onInputChange(e.target.value)}/>
        </div>
    )
}