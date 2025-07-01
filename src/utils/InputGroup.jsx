import React from 'react'

function InputGroup({ name, label, type, required,className,validationMessage, handle, value }) {
    // console.log("value", value);
    const aspan_style = {
        fontSize: "10px",
    fontWeight: 400,
    }
    return (
        <div className={`group ${className}`}>
            <input type={type} name={name} value={value} placeholder=" " required={required} onChange={handle} />
            <label htmlFor={name}>{label}</label>
            {validationMessage && <span style={aspan_style} className="error-message">{validationMessage}</span>}
        </div>
    )
}

export default InputGroup