import React from 'react'
import './Footer.scss'
import { iconEarth } from '../../../utils/icon/index'

const Footer = () => {
    return (
        <div className='footerPublic'>
            <div className='contactForm'>
                <a href="/sendquestion">Question? Contact us</a>
            </div>
            <div className='allLink'>
                <div className='wrapper'>
                    <a href="/">FAQ</a>
                    <a href="/">Account</a>
                    <a href="/">Test Algorithm</a>
                    <a href="/">Investor Relations</a>
                    <a href="/">Contact Us</a>
                    <a href="/">Term of Use</a>
                </div>
            </div>
            <div className='brandLocation'>
                <div className='language'>
                    <div className='icon-earth'><img src={iconEarth} alt="" /></div>
                    <select className="languageAll">
                        <option lang='en' label='English' value="en-EN"></option>
                        <option lang='vi' label='Tiếng Việt' value="cn-CN"></option>
                        <option lang='cn' label='China' value="vi-VN"></option>
                    </select>
                </div>
                <p className='brand'>&copy; 2022 Predict Algorithm Company</p>
            </div>
        </div>
    )
}

export default Footer