import React, { useState } from 'react'

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import './Footer.scss'

const Footer = () => {
    const [formdata, setFormData] = useState({name: '', email: '', message: ''});
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const {name, email, message} = formdata;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formdata, [name]: value});
    }

    const handleSubmit = () => {
        setLoading(true);
        
        const contact = {
            _type: 'contact',
            name: name,
            email: email,
            message: message,
        }

        client.create(contact).then(() => {
            setLoading(false);
            setIsFormSubmitted(true)
        })
    }

    return(
        <>
            <h2 className='head-text'>Take a coffee & chat with me</h2>

            <div className='app__footer-cards'>
                <div className='app__footer-card'>
                    <img src={images.email} alt="email" />
                    <a href="mailto:hello@micael.com" className='p-text'>sahni.anand5.7@gmail.com</a>
                </div>
                <div className='app__footer-card'>
                    <img src={images.mobile} alt="mobile" />
                    <a href="tel: +91 8968116780" className='p-text'>+91 8968116780</a>
                </div>
            </div>

        {!isFormSubmitted ? 
            <div className='app__footer-form app__flex'>
                <div className='app__flex'>
                    <input className='p-text' type="text" placeholder='Your Name' name='name' value={name} onChange={handleChangeInput}/>
                </div>
                <div className='app__flex'>
                    <input className='p-text' type="email" placeholder='Your Email' name='email' value={email} onChange={handleChangeInput}/>
                </div>
                <div>
                    <textarea className='p-text' placeholder='Your Message' value={message} name="message" onChange={handleChangeInput} />
                </div>
                <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message' }</button>
            </div>
            : <div>
                <h3 className='head-text'>Thank You for getting in touch</h3>
            </div>
            }       
        </>
    )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg')