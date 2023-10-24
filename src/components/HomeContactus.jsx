import React from 'react'
import '../assets/styles/Homecontactus.css';
import map_path from "../assets/images/maps.jpg";
const HomeContactus = () => {
    return (
        <div className='homecontactus'>
            <h2 className='homecontactus-head section-heading'>
                <span className='heading'>Contact us!</span>
            </h2>
            <div className='map-contact-wraper'>
                <div className='map-column column'>
                    <div className='icon-warper'>
                        <i class="bi bi-geo-alt"></i>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                    </div>
                    <div className='icon-warper'>
                        <i class="bi bi-envelope"></i>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                    </div>
                    <img  src={map_path} className='map-img' />
                </div>
                <div className='form-column column'>
                    <form className='contact-form'>
                        <input type='text' placeholder='NAME' />
                        <input type="email" placeholder='EMAIL' />
                        <textarea placeholder='MESSAGE' rows="4" cols="50"></textarea>
                        <button>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HomeContactus