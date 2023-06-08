import React from 'react';
import {FaFacebook,FaTwitter,FaYoutube,FaLinkedin} from 'react-icons/fa';
import {SiGooglepodcasts} from 'react-icons/si';
import Image from 'next-image';

const Navbar = () => {
    return (
        <div className='bg-slate-50 fixed top-0 w-[100%] z-10'>
            <div className='container mx-auto flex justify-between items-center py-2'>
                <div className='text-[20px] font-mono overline'>
                    <a href='/'>Home</a> 
                </div>
                <div className='image'>
                    <Image src='https://image-cdn.essentiallysports.com/wp-content/uploads/es_horizontal-1.png' alt='Logo'/>
                </div>
                <div className='social-media flex gap-4 items-center'>
                    <a href='https://www.facebook.com/essentiallysports'><FaFacebook/></a>
                    <a href='https://twitter.com/es_sportsnews/'><FaTwitter/></a>
                    <a href='https://www.youtube.com/channel/UCEj2bvKodN2-rM1nB64OBeA'><FaYoutube/></a>
                    <a href='https://www.linkedin.com/company/essentially-sports/'><FaLinkedin/></a>
                    <a href='https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy83MTRmYzk1Yy9wb2RjYXN0L3Jzcw?sa=X&ved=0CAIQ9sEGahcKEwjAmc_I5-fzAhUAAAAAHQAAAAAQXQ'><SiGooglepodcasts/></a>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar;