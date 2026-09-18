import React from 'react'

const Footer = (props) => {
  return (
    <div className="footer mt-30">

        <ul className="flex justify-center gap-x-10">
            <li><a href="">{props.footerOne}</a></li>
            <li><a href="">{props.footerTwo}</a></li>
            <li><a href="">{props.footerThree}</a></li>
        </ul>

        <div className="mt-5 mb-5 border border-y-1 border-green-950"></div>

        <div className="footer-copy text-center mb-5">
            <p>&copy; 2023-2026 <span>SimplyBook.me</span></p>
        </div>

    </div>
  )
}

export default Footer