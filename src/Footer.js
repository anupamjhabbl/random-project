import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer>
            <div className="footer-background">
                <div className="footer1">
                    <div className="logo-background">
                        <img src="./images/hotelamricafooter.png.png" alt=""/>
                    </div>
                    <div className="footer1_cont">
                        <p><i className="fa fa-map-marker" aria-hidden="true"></i>123, Main Street,NY 456789</p>
                        <p> <i className="fa fa-mobile" aria-hidden="true"></i>+1234567890</p>
                        <p> <i className="fa fa-envelope" aria-hidden="true"></i>free@psdfreebles.com</p>
                    </div>
                </div>
                <div className="footer2">
                        <a href="HOME">HOME</a>
                        <a href="PORTFOLIO">PORTFOLIO</a>
                        <a href="CONTACT">CONTACT</a> 
                        <a href="ABOUT">ABOUT US </a>
                        <a href="BLOG">BLOG</a>
                        <a href="FORMS">FORMS</a>
                        <a href="PARTNERSHIP">PARTNERSHIP</a>
                </div>
                <div className="footer3">
                    <p>we are in social network</p>
                    <p><i className="fa fa-address-book" aria-hidden="true"></i></p>
                </div>
            </div>
            <h2 className="footer-cont">Copyright 2017 PSDfreebles.com All Right Reserved</h2>
        </footer>
    </div>
  )
}

export default Footer