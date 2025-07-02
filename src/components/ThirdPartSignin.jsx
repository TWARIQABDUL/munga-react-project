import React from 'react'

function ThirdPartSignin({ provider }) {
    return (
        <button>
            <img src={`assets/${provider}.svg`} alt={`${provider} Icon`} />
            <span>Sign in with {provider}</span>
        </button>
    )
}

export default ThirdPartSignin