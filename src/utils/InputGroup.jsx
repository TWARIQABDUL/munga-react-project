import React from 'react'

function InputGroup({ name, label, type, required, handle, value }) {
    // console.log("value", value);
    
    return (
        <div className="group">
            <input type={type} name={name} value={value} placeholder=" " required={required} onChange={handle} />
            <label htmlFor={name}>{label}</label>
            <div className="span ">
                &#x1F648;
            </div>
            <div className="span">
                &#x1F648;
            </div>
            <div className="span">
                &#x1F971;
            </div>
        </div>
    )
}

export default InputGroup