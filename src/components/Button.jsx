import React from 'react'

const Button = ({ buttonText, variant = "primary", icon: Icon }) => {

    const variants = {
        primary: "bg-[#ffc2cc] text-gray-800",
        secondary: "bg-gray-800 text-white",
        danger: "bg-red-500 text-white",
    };

  return (
    <div className="custom-button">
        <a href="" className={`p-3 px-5 rounded-sm font-medium ${variants[variant]}`}>{buttonText}</a>
    </div>
  )
}

export default Button