import React from 'react'
import { ContactData } from '../../data/contact'
import ContactForm from './contact-form'
import ContactInfoItem from './contact-info-item'
import './contact.css'

const ContactSection = () => {

    const data = ContactData;

    return (
        <div className='ContactSectionStyle'>
            <div className="container">
                <h2 className='contact-title'>get in touch</h2>
                <div className="contactSection__wrapper">
                    <div className="left">
                        <ContactInfoItem icon={<i className="fi fi-rr-phone-call"></i>} text={data[0].phone} />
                        <ContactInfoItem icon={<i className="fi fi-rr-envelope"></i>} text={data[0].email}  />
                        <ContactInfoItem icon={<i className="fi fi-rr-home"></i>} text={data[0].address}  />
                    </div>
                    <div className="right">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection