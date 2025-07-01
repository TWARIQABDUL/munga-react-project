import React from 'react'

export  function usernameValidator (name) {
    if (name.length < 3) {
        return { valid: false, className: "error", message: "Username must be at least 3 characters long"};
    }
    if (name.length > 20) {
        return {valid: false,  className: "error", message: "Username must be less than 20 characters long"};
    }
    if (!/^[a-zA-Z0-9]+$/.test(name)) {
        return {valid: false, className: "error", message: "Username can only contain letters and numbers"};
    }
    return {valid: true, className: "success"};
}
export function emailValidator(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { valid: false, className: "error", message: "Invalid email format" };
    }
    return { valid: true, className: "success" };
}

export function passwordValidator(password) {
    if (password.length < 6) {
        return { valid: false, className: "error", message: "Password must be at least 6 characters long" };
    }
    if (!/[A-Z]/.test(password)) {
        return { valid: false, className: "error", message: "Password must contain at least one uppercase letter" };
    }
    if (!/[a-z]/.test(password)) {
        return { valid: false, className: "error", message: "Password must contain at least one lowercase letter" };
    }
    if (!/[0-9]/.test(password)) {
        return { valid: false, className: "error", message: "Password must contain at least one number" };
    }
    return { valid: true, className: "success" };
}