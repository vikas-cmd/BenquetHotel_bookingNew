import React from 'react';
import './headerTop.css'

const HeaderTop = () => {
    return <>
        <div className='Header_Top'>

            <div className='social_media_icon'>
                <img src='./Assest/Facebook.png'></img>
                <img src='./Assest/Twitter.png'></img>
                <img src='./Assest/Google-plus.png'></img>
                <img src='./Assest/Instagram.png'></img>





            </div>
            <div className='nav_tabs'>
                <div className='nav_tabs-tab'>
                    <img src='./Assest/Login.png'></img>
                    <div className='tab'>Login</div>


                </div>
                <div className='border'></div>
                <div className='nav_tabs-tab'>
                    <img src='./Assest/Register.png'></img>
                    <div className='tab'>Register Now</div>


                </div>
                <div className='border'></div>
                <div className='nav_tabs-tab'>
                    <img src='./Assest/Become-Member.png'></img>
                    <div className='tab'>Become Member</div>


                </div>
            </div>

        </div>
    </>;
}

export default HeaderTop;